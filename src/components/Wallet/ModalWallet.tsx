'use client';

import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletReadyState } from '@solana/wallet-adapter-base';
import { formatAddress } from '@/lib/utils';
import { X, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const { wallets, select, wallet, connect, publicKey, disconnect, connecting } = useWallet();
  const [isMoreWalletsOpen, setIsMoreWalletsOpen] = useState(false);
  const [recentWallet, setRecentWallet] = useState<string | null>(null);

  // Load recently used wallet from localStorage
  useEffect(() => {
    const recent = localStorage.getItem('recentWallet');
    if (recent) {
      setRecentWallet(recent);
    }
  }, []);

  // Group wallets by their ready state
  const installedWallets = wallets.filter(
    wallet => wallet.readyState === WalletReadyState.Installed
  );

  const notDetectedWallets = wallets.filter(
    wallet => wallet.readyState === WalletReadyState.NotDetected
  );

  const loadableWallets = wallets.filter(
    wallet => wallet.readyState === WalletReadyState.Loadable
  );

  // All available wallets for display
  const allAvailableWallets = [...installedWallets, ...loadableWallets];

  const handleWalletClick = async (walletAdapter: any) => {
    try {
      select(walletAdapter.name);
      
      // Save to recent wallets
      localStorage.setItem('recentWallet', walletAdapter.name);
      setRecentWallet(walletAdapter.name);
      
      // If wallet is installed, try to connect
      if (walletAdapter.readyState === WalletReadyState.Installed) {
        await connect();
        onClose();
      }
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
      onClose();
    } catch (error) {
      console.error('Failed to disconnect:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#1E2029] rounded-2xl shadow-xl border border-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-lg font-semibold text-white">
            {publicKey ? 'Connected' : 'Connect Wallet'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {publicKey ? (
            // Connected state
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <img 
                  src={wallet?.adapter.icon} 
                  alt={wallet?.adapter.name} 
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-white">{wallet?.adapter.name}</p>
                  <p className="text-xs text-gray-400">{formatAddress(publicKey.toBase58())}</p>
                </div>
              </div>
              
              <button
                onClick={handleDisconnect}
                className="w-full py-3 px-4 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors"
              >
                Disconnect
              </button>
            </div>
          ) : (
            // Not connected state
            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                You need to connect a Solana wallet.
              </p>

              {/* Recently Used */}
              {recentWallet && allAvailableWallets.some(w => w.adapter.name === recentWallet) && (
                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recently used
                  </h3>
                  {allAvailableWallets
                    .filter(w => w.adapter.name === recentWallet)
                    .map(wallet => (
                      <WalletButton
                        key={wallet.adapter.name}
                        wallet={wallet}
                        onClick={() => handleWalletClick(wallet.adapter)}
                        isConnecting={connecting}
                      />
                    ))
                  }
                </div>
              )}

              {/* More Wallets */}
              <div>
                <button
                  onClick={() => setIsMoreWalletsOpen(!isMoreWalletsOpen)}
                  className="flex items-center justify-between w-full py-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <span>More wallets</span>
                  {isMoreWalletsOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {isMoreWalletsOpen && (
                  <div className="mt-2 space-y-2 max-h-[300px] overflow-y-auto">
                    {/* Installed wallets */}
                    {installedWallets.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-2">
                          Installed
                        </h4>
                        {installedWallets.map(wallet => (
                          <WalletButton
                            key={wallet.adapter.name}
                            wallet={wallet}
                            onClick={() => handleWalletClick(wallet.adapter)}
                            isConnecting={connecting}
                          />
                        ))}
                      </div>
                    )}

                    {/* Loadable wallets */}
                    {loadableWallets.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-2">
                          Available
                        </h4>
                        {loadableWallets.map(wallet => (
                          <WalletButton
                            key={wallet.adapter.name}
                            wallet={wallet}
                            onClick={() => handleWalletClick(wallet.adapter)}
                            isConnecting={connecting}
                          />
                        ))}
                      </div>
                    )}

                    {/* Not detected wallets */}
                    {notDetectedWallets.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-2">
                          Not installed
                        </h4>
                        {notDetectedWallets.map(wallet => (
                          <WalletButton
                            key={wallet.adapter.name}
                            wallet={wallet}
                            onClick={() => window.open(wallet.adapter.url, '_blank')}
                            isConnecting={false}
                            isNotDetected={true}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* New to Solana */}
              <div className="p-4 bg-[#24273E] rounded-lg border border-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <svg 
                      className="w-6 h-6 text-purple-400" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">New to the Solana ecosystem?</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Let us show you around. Visit the Learn Center on SolanaFloor to set up your first wallet.
                    </p>
                    <button 
                      onClick={() => window.open('https://solanafloor.com/learn', '_blank')}
                      className="mt-2 inline-flex items-center space-x-1 text-sm text-purple-400 hover:text-purple-300"
                    >
                      <span>Learn more</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface WalletButtonProps {
  wallet: any;
  onClick: () => void;
  isConnecting: boolean;
  isNotDetected?: boolean;
}

const WalletButton: React.FC<WalletButtonProps> = ({ 
  wallet, 
  onClick, 
  isConnecting,
  isNotDetected = false 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isConnecting}
      className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
        isNotDetected 
          ? 'bg-gray-800/30 hover:bg-gray-800/50' 
          : 'bg-gray-800/50 hover:bg-gray-800/70'
      } ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <div className="flex items-center space-x-3">
        <Image 
          src={wallet.adapter.icon} 
          alt={wallet.adapter.name} 
          className="w-8 h-8 rounded-full"
          height={30}
          width={30}
        />
        <span className="font-medium text-white">{wallet.adapter.name}</span>
      </div>
      {isNotDetected && (
        <ExternalLink className="w-4 h-4 text-gray-400" />
      )}
      {isConnecting && wallet.adapter.connecting && (
        <div className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      )}
    </button>
  );
};