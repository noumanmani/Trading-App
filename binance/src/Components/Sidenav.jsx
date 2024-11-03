import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";
import { LiaUserCircle } from "react-icons/lia";
import { PiHandDeposit } from "react-icons/pi";
import { GoArrowSwitch } from "react-icons/go";
import { CiDollar } from "react-icons/ci";
import { FaBitcoin } from "react-icons/fa";
import { FaCreativeCommonsPd } from "react-icons/fa";

const Sidenav = () => {
    const number =[ "7:15 PM",
      " 12:55 AM",
      "6:35 AM", 
      "12:15 PM",
      "5:55 PM"]
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const Navlink =[
        {
            icon:LuLayoutDashboard,
            Text:'Dashboard',
            Link:'/'

        },
        {
            icon:LuLayoutDashboard,
            Text:'Transactions',
            Link:'/Transactions'

        }
    ]
  return (
    <>
    <div className="h-screen w-screen flex">
    <div className="flex flex-col gap-3 w-64 h-screen pl-6 cursor-pointer border-r-2">
        <h1 className=' font-bold text-xl mt-5 text-blue-700'>ManiStock</h1>
        <div className="w-36 flex bg-slate-300 rounded-md hover:bg-slate-400 p-1">
            <div className="mt-1">
        <LuLayoutDashboard />
        </div>
        <h1 className='ml-4'>Dashboard</h1>
        </div>
        
        
        <div className="flex hover:bg-slate-400 rounded-md p-1 w-36">
        <div className="mt-1"><HiMiniArrowsRightLeft/></div>
        <NavLink to = "transaction" className='ml-4'>Transation</NavLink>
        
         </div>


     <div className="absolute bottom-5 flex hover:bg-slate-400 rounded-md p-1 w-36 ">
        <div className="mt-1"> <MdSupportAgent />   </div>
        <NavLink to='Supports'  className='ml-4'>Supports</NavLink>
        </div>  
        </div>

<div className="w-screen pl-20 shadow-lg h-screen bg-slate-100"> 
  <div className="flex justify-between">
  <h1 className='text-2xl font-bold'>Dashboard</h1>
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
        <div className="h-20 mt-2 bg-white flex gap-16">
          <div className="mt-2 pl-6">
            <h1>Totle portfolio vallue</h1>
            <h2>₹ 112,312.24</h2>
          </div>
          <div className="mt-2">
            <h1>Wallet Balances</h1>
            <h2>₹ 112,312.24</h2>
          </div>
          <div className="mt-2">
            <h1>Totle portfolio vallue</h1>
            <h2>₹ 112,312.24</h2>
          </div>

          <div className=''>

          <div className="flex h-10 w-24 bg-blue-800 text-white rounded-lg mt-4">
            <button  className="pl-2">Deposit</button>
            <div className="flex mt-3">
            <PiHandDeposit />
            </div>
          </div>
        
          </div>


          <div className="flex h-10 w-24 bg-blue-800 text-white rounded-lg mt-4 mr-20">
            <button  className="pl-2">Withdraw</button>
            <div className="flex mt-3">
            <GoArrowSwitch />
            </div>
          </div>
        </div>
             
             <div className="flex gap-7 pr-20 mt-10">
<div className="h-72 w-3/6 bg-white pl-6">

<div className="w-3/6 flex">
<div className="">
  <h5>currents price </h5>
  <h1 className='text-2xl'>₹26,670.25</h1>
</div>

<div className="">
<div className="flex gap-3 ml-32 mt-1">
<div className="flex h-10 w-14 bg-blue-800 text-white rounded-lg">
            <button  className="pl-2">Buy</button>
            <div className="flex mt-4">
            <GoArrowSwitch />
            </div>
          </div>
          <div className="flex h-10 w-14 bg-blue-800 text-white rounded-lg">
            <button  className="pl-2">Pay</button>
            <div className="flex mt-4">
            <GoArrowSwitch />
            </div>
            </div>
          </div>
          </div>
          </div>
          <img className='mt-20' src="Graph.png" alt="graph" />
          <ul className='flex gap-8 text-sm text-black'>
        {number.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
          </div>


<div className="h-72 w-3/6 bg-white pl-8">

<h1 className=''>Recent Transactions </h1>
<div className="flex mt-5">
<div className="w-10 pt-4 pl-3  bg-slate-400 rounded-full"> <FaCreativeCommonsPd /> </div>
<h1 className='ml-4'>INR Deposit <p className='text-sm text-slate-400'>12-15-2023</p></h1>
<h1 className='ml-20'>+ ₹81,123.10</h1>
</div>


<div className="flex mt-5">
<div className="w-10 pt-4 pl-3  bg-slate-400 rounded-full"> <CiDollar /> </div>
<h1 className='ml-4'>INR Deposit <p className='text-sm text-slate-400'>12-15-2023</p></h1>
<h1 className='ml-20'>+ ₹81,123.10</h1>
</div>

<div className="flex mt-5">
<div className="w-10 pt-4 pl-3  bg-slate-400 rounded-full"> <FaBitcoin /> </div>
<h1 className='ml-4'>INR Deposit <p className='text-sm text-slate-400'>12-15-2023</p></h1>
<h1 className='ml-20'>+ ₹81,123.10</h1>
</div>
 
 <div className="cursor-pointer text-center bg-slate-300 rounded-lg p-1 mt-9 mx-2"> <button>view All</button></div>
</div>
</div>

<div className="flex mt-5 gap-3">

<div className="pl-4  w-1/2 border-r-2 bg-white rounded-xl pt-4 ">
<button className='bg-blue-800 rounded-lg text-white w-12'>loans</button>
  <p>Loans Learn more about Loans – Keep your Bitcoin,<br /> access it’s value without selling it</p>
</div>

<div className="pl-4  w-1/2 mr-20 pt-4  bg-blue-800 text-white rounded-xl">
<button className=' bg-white rounded-lg text-black w-20'>Contact</button>
  <p>Loans Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</p>
</div>

</div>

 </div>
  </div>
    </>
  )}
export default Sidenav