// 'use client';

// import { useEffect, useState } from 'react';
// import { CivicAuth } from '@civic/auth-web3';

// export default function CivicAuthButton() {
//   const [civic, setCivic] = useState(null);
//   const [walletAddress, setWalletAddress] = useState(null);

//   useEffect(() => {
//     const civicInstance = new CivicAuth({
//       appId: '2d27f3a7-8c99-4f42-a9ad-00894198ebe9',        // replace with your Civic app ID
//       network: 'mainnet-beta'      // or 'devnet' if testing
//     });

//     setCivic(civicInstance);
//   }, []);

//   const handleLogin = async () => {
//     if (!civic) return;
//     try {
//       const result = await civic.login();
//       console.log('Civic login success:', result);
//       setWalletAddress(result.wallet.address);
//     } catch (err) {
//       console.error('Civic login error:', err);
//     }
//   };

//   const handleLogout = async () => {
//     if (!civic) return;
//     try {
//       await civic.logout();
//       setWalletAddress(null);
//     } catch (err) {
//       console.error('Civic logout error:', err);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       {!walletAddress ? (
//         <button 
//           onClick={handleLogin}
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Sign in with Civic
//         </button>
//       ) : (
//         <div className="flex flex-col items-center">
//           <p className="mb-2">Connected Wallet:</p>
//           <p className="mb-4 font-mono">{walletAddress}</p>
//           <button 
//             onClick={handleLogout}
//             className="bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
