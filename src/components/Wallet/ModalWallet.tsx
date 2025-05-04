"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletReadyState } from "@solana/wallet-adapter-base"
import { formatAddress } from "@/lib/utils"
import { X, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

interface WalletModalProps {
  isOpen: boolean
  onClose: () => void
}

export const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const { wallets, select, wallet, connect, publicKey, disconnect, connecting } = useWallet()
  const [isMoreWalletsOpen, setIsMoreWalletsOpen] = useState(false)
  const [recentWallet, setRecentWallet] = useState<string | null>(null)

  // Load recently used wallet from localStorage
  useEffect(() => {
    const recent = localStorage.getItem("recentWallet")
    if (recent) {
      setRecentWallet(recent)
    }
  }, [])

  // Group wallets by their ready state
  const installedWallets = wallets.filter((wallet) => wallet.readyState === WalletReadyState.Installed)

  const notDetectedWallets = wallets.filter((wallet) => wallet.readyState === WalletReadyState.NotDetected)

  const loadableWallets = wallets.filter((wallet) => wallet.readyState === WalletReadyState.Loadable)

  // All available wallets for display
  const allAvailableWallets = [...installedWallets, ...loadableWallets]

  const handleWalletClick = async (walletAdapter: any) => {
    try {
      select(walletAdapter.name)

      // Save to recent wallets
      localStorage.setItem("recentWallet", walletAdapter.name)
      setRecentWallet(walletAdapter.name)

      // If wallet is installed, try to connect
      if (walletAdapter.readyState === WalletReadyState.Installed) {
        await connect()
        onClose()
      }
    } catch (error) {
      console.error("Failed to connect:", error)
    }
  }

  const handleDisconnect = async () => {
    try {
      await disconnect()
      onClose()
    } catch (error) {
      console.error("Failed to disconnect:", error)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#1A1B23] rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <h2 className="text-base font-medium text-white">Connect Wallet</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {publicKey ? (
            // Connected state
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                {wallet?.adapter.icon ? (
                  <Image
                    src={wallet.adapter.icon || "/placeholder.svg"}
                    alt={wallet.adapter.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-sm text-white">
                    {wallet?.adapter.name.slice(0, 2)}
                  </div>
                )}
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
              <p className="text-sm text-gray-400">You need to connect a Solana wallet.</p>

              {/* Recently Used */}
              {recentWallet && allAvailableWallets.some((w) => w.adapter.name === recentWallet) && (
                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-gray-500">Recently used</h3>
                  <div className="grid gap-2">
                    {allAvailableWallets
                      .filter((w) => w.adapter.name === recentWallet)
                      .map((wallet) => (
                        <WalletButton
                          key={wallet.adapter.name}
                          wallet={wallet}
                          onClick={() => handleWalletClick(wallet.adapter)}
                          isConnecting={connecting}
                        />
                      ))}
                  </div>
                </div>
              )}

              {/* More Wallets */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-medium text-gray-500">More wallets</h3>
                  <button
                    onClick={() => setIsMoreWalletsOpen(!isMoreWalletsOpen)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {isMoreWalletsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {isMoreWalletsOpen && (
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {allAvailableWallets.map((wallet) => (
                      <button
                        key={wallet.adapter.name}
                        onClick={() => handleWalletClick(wallet.adapter)}
                        className="flex flex-col items-center justify-center p-4 rounded-lg bg-[#1E2029] hover:bg-[#24273E] transition-colors"
                      >
                        <div className="w-8 h-8 mb-2">
                          {wallet.adapter.icon ? (
                            <Image
                              src={wallet.adapter.icon || "/placeholder.svg"}
                              alt={wallet.adapter.name}
                              width={32}
                              height={32}
                              className="w-full h-full rounded-md"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-700 rounded-md flex items-center justify-center text-xs text-white">
                              {wallet.adapter.name.slice(0, 2)}
                            </div>
                          )}
                        </div>
                        <span className="text-xs font-medium text-white">{wallet.adapter.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* New to Solana */}
              <div className="mt-4 bg-[#1E2029] rounded-lg border border-gray-800/50 overflow-hidden">
                <div className="flex items-start p-4">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8V12"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16H12.01"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-white">New to the Solana ecosystem?</h3>
                    <p className="mt-1 text-xs text-gray-400">
                      Let us show you around. Visit the Learn Center on SolanaFloor to set up your first wallet.
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface WalletButtonProps {
  wallet: any
  onClick: () => void
  isConnecting: boolean
  isNotDetected?: boolean
}

const WalletButton: React.FC<WalletButtonProps> = ({ wallet, onClick, isConnecting, isNotDetected = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={isConnecting}
      className="flex items-center w-full p-3 rounded-lg bg-[#1E2029] hover:bg-[#24273E] transition-colors"
    >
      <div className="flex items-center space-x-3">
        {wallet.adapter.icon ? (
          <Image
            src={wallet.adapter.icon || "/placeholder.svg"}
            alt={wallet.adapter.name}
            width={24}
            height={24}
            className="w-6 h-6 rounded-full"
          />
        ) : (
          <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs text-white">
            {wallet.adapter.name.slice(0, 1)}
          </div>
        )}
        <span className="text-sm font-medium text-white">{wallet.adapter.name}</span>
      </div>
      {isConnecting && wallet.adapter.connecting && (
        <div className="ml-auto w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      )}
    </button>
  )
}

interface WalletOptionProps {
  name: string
  icon: string
  onClick: () => void
}

const WalletOption: React.FC<WalletOptionProps> = ({ name, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-4 rounded-lg bg-[#1E2029] hover:bg-[#24273E] transition-colors"
    >
      <div className="w-8 h-8 mb-2">
        <Image
          src={icon || "/placeholder.svg"}
          alt={name}
          width={32}
          height={32}
          className="w-full h-full rounded-md"
        />
      </div>
      <span className="text-xs font-medium text-white">{name}</span>
    </button>
  )
}
