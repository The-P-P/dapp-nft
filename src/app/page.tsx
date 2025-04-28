'use client';

import Image from "next/image";
import { useState } from "react";

type NFT = {
  id: string;
  name: string;
  artist: string;
  price: number;
  image: string;
  likes: number;
  isLiked: boolean;
  category: 'art' | 'photography' | 'collectibles';
};

export default function NFTMarketplace() {
  const [nfts, setNfts] = useState<NFT[]>([
    {
      id: '1',
      name: 'Cosmic Dream #42',
      artist: 'DigitalVisionary',
      price: 1.25,
      image: '/nft1.jpg',
      likes: 124,
      isLiked: false,
      category: 'art'
    },
    {
      id: '2',
      name: 'Pixelated Memories',
      artist: 'BlockchainArtist',
      price: 0.89,
      image: '/nft2.jpg',
      likes: 87,
      isLiked: true,
      category: 'photography'
    },
    {
      id: '3',
      name: 'Ethereal Waves',
      artist: 'CryptoCreator',
      price: 2.15,
      image: '/nft3.jpg',
      likes: 156,
      isLiked: false,
      category: 'art'
    },
    {
      id: '4',
      name: 'Digital Relic',
      artist: 'NFTMaster',
      price: 3.49,
      image: '/nft4.jpg',
      likes: 201,
      isLiked: false,
      category: 'collectibles'
    },
  ]);

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleLike = (id: string) => {
    setNfts(nfts.map(nft => 
      nft.id === id ? { 
        ...nft, 
        isLiked: !nft.isLiked,
        likes: nft.isLiked ? nft.likes - 1 : nft.likes + 1
      } : nft
    ));
  };

  const filteredNFTs = activeCategory === 'all' 
    ? nfts 
    : nfts.filter(nft => nft.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="py-8 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="NFT Marketplace" 
              width={40} 
              height={40} 
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              ElegantNFT
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">
              Discover
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">
              Create
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">
              Artists
            </button>
          </nav>
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
            Connect Wallet
          </button>
        </div>
      </header>

      <main className="px-6 sm:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Curated Digital Artworks
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover, collect, and sell extraordinary NFTs from the worlds most creative artists.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All Items
            </button>
            <button 
              onClick={() => setActiveCategory('art')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === 'art' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Art
            </button>
            <button 
              onClick={() => setActiveCategory('photography')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === 'photography' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Photography
            </button>
            <button 
              onClick={() => setActiveCategory('collectibles')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === 'collectibles' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Collectibles
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredNFTs.map((nft) => (
              <div key={nft.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative aspect-square">
                  <Image
                    src={nft.image}
                    alt={nft.name}
                    fill
                    className="object-cover"
                  />
                  <button 
                    onClick={() => toggleLike(nft.id)}
                    className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-900 rounded-full shadow-md hover:scale-110 transition-transform"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill={nft.isLiked ? "#ec4899" : "none"} 
                      stroke={nft.isLiked ? "#ec4899" : "currentColor"} 
                      strokeWidth="2"
                      className="w-6 h-6"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                      {nft.name}
                    </h3>
                    <span className="flex items-center text-gray-500 dark:text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                      {nft.likes}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    by {nft.artist}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      {nft.price} ETH
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 sm:px-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image 
              src="/logo.png" 
              alt="NFT Marketplace" 
              width={32} 
              height={32} 
              className="rounded-full"
            />
            <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              ElegantNFT
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}