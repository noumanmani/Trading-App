import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";
import { LiaUserCircle } from "react-icons/lia";
import { GoSearch } from "react-icons/go";



const Transaction = () => {

    // Hardcoded list of cryptocurrencies
    const cryptos = [
      { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 46000, marketCap: 850000000, change: -2.4 },
      { id: 2, name: 'Ethereum', symbol: 'ETH', price: 3200, marketCap: 380000000, change: 1.8 },
      { id: 3, name: 'Binance Coin', symbol: 'BNB', price: 400, marketCap: 75000000, change: 0.5 },
      { id: 4, name: 'Cardano', symbol: 'ADA', price: 1.5, marketCap: 48000000, change: -1.2 },
      { id: 5, name: 'Solana', symbol: 'SOL', price: 150, marketCap: 45000000, change: 3.2 },
    ];

  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
        switch (activeTab) {
          case 'Home':
            return <div>Welcome to the Home Page</div>;
          case 'About':
            return <div>About Us</div>;
          case 'Services':
            return <div>Our Services</div>;
          case 'Contact':
            return <div>Contact Us</div>;
          default:
            return <div>Welcome to the Home Page</div>;
        }
      };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="h-screen w-screen flex">
    <div className="flex flex-col gap-3 w-64 h-screen pl-6 cursor-pointer border-r-2">
        <h1 className=' font-bold text-xl mt-5 text-blue-700'>ManiStock</h1>
        <div className="w-36 flex bg-slate-300 rounded-md hover:bg-slate-400 p-1">
            <div className="mt-1">
        <LuLayoutDashboard />
        </div>
        <NavLink to='/' className='ml-4'>Dashboard</NavLink>
        </div>

        <div className="flex hover:bg-slate-400 rounded-md p-1 w-36">
        <div className="mt-1"><HiMiniArrowsRightLeft/></div>
        <NavLink  className='ml-4'>Transation</NavLink> 
         </div>

         <div className="absolute bottom-5 flex hover:bg-slate-400 rounded-md p-1 w-36 ">
        <div className="mt-1"> <MdSupportAgent />   </div>
        <NavLink to='/supports'  className='ml-4'>Supports</NavLink>
        </div>  
        </div>

        <div className="w-screen pl-20 shadow-lg h-screen bg-slate-100"> 
  <div className="flex justify-between">
  <h1 className='text-2xl font-bold'>Transactions</h1>
  <div onClick={toggleMenu} className="text-4xl cursor-pointer mr-20"> <LiaUserCircle />  </div>
  </div>
  {isMenuOpen && (
          <div className="absolute right-8 top-8 mt-2 w-48 bg-white border rounded shadow-lg h-56">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
              Option 2
            </a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
              Option 3
            </a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
              Option 4
            </a>
          </div>
        )}
        <div className='text-end pr-20 mt-4 bg-white'> <button className='bg-blue-500 rounded-lg p-2 text-white'>ExportCsv</button> </div>
        
        
        <div className="container flex bg-white">
       {/* Tab Buttons */}
       <div className="flex space-x-4 mb-4 bg-white">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'Home' ? 'bg-blue-500 text-gray-200' : 'bg-white'}`}
          onClick={() => setActiveTab('Home')}
        >
          All 
        </button>
        <button
          className={`text-sm px-4 py-2 rounded ${activeTab === 'About' ? 'bg-blue-500 text-gray-200' : 'bg-white'}`}
          onClick={() => setActiveTab('About')}
        >
          Deposit
        </button>
        <button
          className={`text-sm px-4 py-2 rounded ${activeTab === 'Services' ? 'bg-blue-500 text-gray-200' : 'bg-white'}`}
          onClick={() => setActiveTab('Services')}
        >
          Widhdraw
        </button>
        <button
          className={`text-sm px-4 py-2 rounded ${activeTab === 'Contact' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('Contact')}
        >
          Trade
        </button>
      </div>
      <div className='flex h-11 w-20 ml-36' >
      <div className="bg-white pt-4">  <GoSearch /></div>
<input type="text" placeholder="Enter text" class="border-0 p-2 focus:outline-none rounded-sm"/>

        </div>

      {/* Tab Content */}
    </div> 
     <div className=" bg-white text-sm p-4 border rounded">{renderContent()}</div>
    

     <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">Top Cryptocurrencies</h1>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Symbol</th>
            <th className="border px-4 py-2">Price (USD)</th>
            <th className="border px-4 py-2">Market Cap</th>
            <th className="border px-4 py-2">24h Change</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto, index) => (
            <tr key={crypto.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2">{crypto.name}</td>
              <td className="border px-4 py-2 text-center">{crypto.symbol}</td>
              <td className="border px-4 py-2 text-right">${crypto.price.toLocaleString()}</td>
              <td className="border px-4 py-2 text-right">${crypto.marketCap.toLocaleString()}</td>
              <td className={`border px-4 py-2 text-right ${crypto.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {crypto.change.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
       </div>
        </div>
  )
}

export default Transaction