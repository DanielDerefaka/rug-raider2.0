'use client';

import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletContext } from '@/context/WalletContext';
import { formatAddress } from '@/lib/utils';
import { WalletModal } from './ModalWallet';
import { Wallet, ChevronDown, Loader2 } from 'lucide-react';
import Image from 'next/image';

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
  const { publicKey, wallet, disconnect } = useWallet();
  const { tokens, isLoadingTokens } = useWalletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Use custom modal for 'custom' variant
  if (variant === 'custom') {
    return (
      <>
        {!publicKey ? (
          <button 
            className={`flex items-center space-x-2 px-4 py-2.5 bg-[#1E2029] hover:bg-[#24273E] text-white rounded-lg transition-colors font-medium ${className}`}
            onClick={() => setIsModalOpen(true)}
          >
            <Wallet className="w-4 h-4" />
            <span>Connect Wallet</span>
          </button>
        ) : (
          <button 
            className={`flex items-center space-x-2 px-4 py-2.5 bg-[#1E2029] hover:bg-[#24273E] text-white rounded-lg transition-colors ${className}`}
            onClick={() => setIsModalOpen(true)}
          >
            {wallet?.adapter.icon ? (
              <Image
                src={wallet.adapter.icon || "/placeholder.svg"} 
                alt={wallet.adapter.name || "Wallet"} 
                className="w-5 h-5 rounded-full"
                width={20}
                height={20}
              />
            ) : (
              <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center text-xs text-white">
                {wallet?.adapter.name?.slice(0, 1) || "W"}
              </div>
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
  
  // For minimal variant
  if (variant === 'minimal') {
    // If not connected, show minimal connect button
    if (!publicKey) {
      return (
        <button 
          className={`px-4 py-2 text-sm font-medium text-white bg-[#1E2029] rounded-lg hover:bg-[#24273E] focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
          onClick={() => setIsModalOpen(true)}
        >
          Connect Wallet
        </button>
      );
    }
    
    // If connected, show address and balance (minimal variant)
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {showBalance && (
          <div className="px-3 py-1 text-xs font-medium text-white bg-[#1E2029] rounded-full">
            {isLoadingTokens ? (
              <span className="flex items-center">
                <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                Loading...
              </span>
            ) : (
              `${tokens.length} Tokens`
            )}
          </div>
        )}
        
        <div className="relative group">
          <button 
            className="px-3 py-1 text-sm font-medium text-white bg-[#1E2029] rounded-lg hover:bg-[#24273E] focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center space-x-2"
            onClick={() => setIsModalOpen(true)}
          >
            {wallet?.adapter.icon ? (
              <Image
                src={wallet.adapter.icon || "/placeholder.svg"} 
                alt={wallet.adapter.name || "Wallet"} 
                className="w-4 h-4 rounded-full mr-1"
                width={16}
                height={16}
              />
            ) : null}
            <span>{formatAddress(publicKey.toBase58())}</span>
          </button>
        </div>
        
        <WalletModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    );
  }
  
  // Default variant - fallback to custom since WalletMultiButton isn't imported
  return (
    <>
      {!publicKey ? (
        <button 
          className={`flex items-center justify-center space-x-2 px-5 py-2.5 bg-[#1E2029] hover:bg-[#24273E] text-white rounded-lg transition-colors font-medium ${className}`}
          onClick={() => setIsModalOpen(true)}
        >
          <Wallet className="w-4 h-4 mr-2" />
          <span>Connect Wallet</span>
        </button>
      ) : (
        <div className="flex items-center space-x-2">
          <button 
            className={`flex items-center space-x-2 px-4 py-2.5 bg-[#1E2029] hover:bg-[#24273E] text-white rounded-lg transition-colors ${className}`}
            onClick={() => setIsModalOpen(true)}
          >
            {wallet?.adapter.icon ? (
              <Image
                src={wallet.adapter.icon || "/placeholder.svg"} 
                alt={wallet.adapter.name || "Wallet"} 
                className="w-5 h-5 rounded-full"
                width={20}
                height={20}
              />
            ) : (
              <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center text-xs text-white">
                {wallet?.adapter.name?.slice(0, 1) || "W"}
              </div>
            )}
            <span className="font-medium">{formatAddress(publicKey.toBase58())}</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          
          <button
            onClick={() => disconnect()}
            className="p-2 text-gray-400 hover:text-white bg-[#1E2029] hover:bg-[#24273E] rounded-lg transition-colors"
            title="Disconnect"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
      
      <WalletModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};
