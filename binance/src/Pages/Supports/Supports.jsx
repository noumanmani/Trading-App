import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";
import { LiaUserCircle } from "react-icons/lia";
import { CgMail } from "react-icons/cg";
import { CiChat2 } from "react-icons/ci";
const Supports = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

 // State for form inputs
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');

 // Handle input changes
 const handleUsernameChange = (e) => setUsername(e.target.value);
 const handlePasswordChange = (e) => setPassword(e.target.value);

 // Handle form submission
 const handleSubmit = (e) => {
   e.preventDefault();
   if (username === 'user' && password === 'password') {
     alert('Login successful!');
   } else {
     setError('Invalid username or password');
   }
 };  


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
          <NavLink to='/transaction'className='ml-4'>Transation</NavLink> 
           </div>
  
           <div className="absolute bottom-5 flex hover:bg-slate-400 rounded-md p-1 w-36 ">
          <div className="mt-1"> <MdSupportAgent />   </div>
          <h1  className='ml-4'>Supports</h1>
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
  {/* //start real work//         */}
  <div className="flex">

    <div className="h-96 w-96">
    <div className='mt-5 w-4 h-4 text-blue-700 text-3xl '><CgMail /></div>
    <h1 className='mt-10 font-bold font-mono text-xl'>Contact Us</h1>
    <p>Have a question or just want to khnow more ? feel to true react out to us</p>
    </div>

    <div className="bg-white h-96 w-2/4 rounded-3xl">
    <h1 className='max-w-md mx-auto'>You will receive response within 24 hours of time of submit.</h1>

    <div className="rounded-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-slate-400 text-white font-semibold rounded hover:bg-blue-600 transition duration-200">
          Send a Massage
        </button>
        <button
          type="submit"
          className="w-full py-2 mt-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200">
          Log In
        </button>
      </form>
    </div>

    </div>
  </div>
   
  
<div className="flex mt-6">
  <div className="w-96">
  <div className=" text-blue-700 text-3xl"><CiChat2/></div>
  <h1 className='text-2xl font-extralight'> Live Chat</h1>
  <p>I'm avilable for your chate and im your</p>
  </div>

  <div className="pl-4  w-1/2 mr-20 pt-4  bg-blue-500 text-white rounded-xl">
<button className=' bg-white rounded-lg text-black w-20'>Contact</button>
  <p>Loans Learn more about Loans Keep your Bitcoin, access its value without selling it</p>

  </div>
  </div> 


    </div>
          </div>
  )
}

export default Supports














// const [activeTab, setActiveTab] = useState('Home');

// Function to render content based on active tab
//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Home':
//         return <div>Welcome to the Home Page</div>;
//       case 'About':
//         return <div>About Us</div>;
//       case 'Services':
//         return <div>Our Services</div>;
//       case 'Contact':
//         return <div>Contact Us</div>;
//       default:
//         return <div>Welcome to the Home Page</div>;
//     }
//   };






//   return (
//     <div className="container mx-auto p-4">
//       {/* Tab Buttons */}
//       <div className="flex space-x-4 mb-4">
//         <button
//           className={`px-4 py-2 rounded ${activeTab === 'Home' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//           onClick={() => setActiveTab('Home')}
//         >
//           Home
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${activeTab === 'About' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//           onClick={() => setActiveTab('About')}
//         >
//           About
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${activeTab === 'Services' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//           onClick={() => setActiveTab('Services')}
//         >
//           Services
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${activeTab === 'Contact' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//           onClick={() => setActiveTab('Contact')}
//         >
//           Contact
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div className="p-4 border rounded bg-gray-100">{renderContent()}</div>
//     </div>