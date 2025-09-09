import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../App.css";



const Home = ()=>{


    return(
    <div className="bg-cover bg-center h-screen flex flex-col justify-end" style={{ backgroundImage: bg }}>
      <div className="text-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Your Main Heading</h1>
        <p className="text-lg mb-6">Your subtitle or description can go here.</p>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Primary Button</button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Secondary Button</button>
        </div>
      </div>
    </div>
    );
}
export default Home;