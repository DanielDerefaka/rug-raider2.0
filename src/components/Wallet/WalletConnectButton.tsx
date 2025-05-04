'use client';

import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletContext } from '@/context/WalletContext';
import { formatAddress } from '@/lib/utils';
import { WalletModal } from './ModalWallet';
import { Wallet, ChevronDown } from 'lucide-react';

interface WalletConnectButtonProps {
  className?: string;
  showBalance?: boolean;
  variant?: 'default' | 'minimal' | 'custom';
}

export const WalletConnectButton: React.FC<WalletConnectButtonProps> = ({
  className = '',
  showBalance = false,
  variant = 'custom',
}) => {
  const { publicKey, wallet } = useWallet();
  const { tokens, isLoadingTokens } = useWalletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Use custom modal for 'custom' variant
  if (variant === 'custom') {
    return (
      <>
        {!publicKey ? (
          <button 
            className={`flex items-center space-x-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium ${className}`}
            onClick={() => setIsModalOpen(true)}
          >
            <Wallet className="w-4 h-4" />
            <span>Connect Wallet</span>
          </button>
        ) : (
          <button 
            className={`flex items-center space-x-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors ${className}`}
            onClick={() => setIsModalOpen(true)}
          >
            {wallet?.adapter.icon && (
              <img 
                src={wallet.adapter.icon} 
                alt={wallet.adapter.name} 
                className="w-5 h-5 rounded-full"
              />
            )}
            <span className="font-medium">{formatAddress(publicKey.toBase58())}</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        )}
        
        <WalletModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </>
    );
  }
  
  // Use the built-in WalletMultiButton if using default variant
  if (variant === 'default') {
    return <WalletMultiButton className={className} />;
  }
  
  // If not connected, show minimal connect button
  if (!publicKey) {
    return (
      <button 
        className={`px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
        onClick={() => document.querySelector('.wallet-adapter-button')?.click()}
      >
        Connect Wallet
      </button>
    );
  }
  
  // If connected, show address and balance (minimal variant)
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {showBalance && (
        <div className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
          {isLoadingTokens ? (
            <span className="animate-pulse">Loading...</span>
          ) : (
            `${tokens.length} Tokens`
          )}
        </div>
      )}
      
      <button 
        className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
        onClick={() => document.querySelector('.wallet-adapter-button')?.click()}
      >
        {formatAddress(publicKey.toBase58())}
      </button>
    </div>
  );
};