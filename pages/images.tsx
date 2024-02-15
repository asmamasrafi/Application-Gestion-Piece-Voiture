import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
const images = () => {
return(
    <Sidebar>
    <div className='bg-gray-100 min-h-screen'>
    <div className='flex justify-between p-4'>
        <h2>Clients</h2>
        <h2>Welcome Back, </h2>
        
    </div>
    <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
            
<div className="my-4 p-3 grid md:grid-cols-6 sm:grid-cols-5 grid-cols-4 items-center justify-between cursor-pointer">

                <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-xl">
                    <div  className="card">
                        <Link href=''>
                            <img src="OIP (8).jpeg" alt="" className="rounded shadow" />
                        </Link>
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">
                                <Link href={``}>
                                </Link>
                            </span>
                            <p className="text-lg font-bold text-black truncate block capitalize">vbvbn</p>
                            <p className="text-lg font-semibold text-black cursor-auto my-3">hbjhgh</p>
                            <p className="text-sm font-md text-gray-700 cursor-auto my-3 whitespace-normal">vbvbn</p>
                            <div className="flex items-center">
                                <p className="text-sm text-gray-600 cursor-auto ml-2">vvbnn$</p>

                            </div>
                        </div>
                    </div>
                  
                </div>
                </div>
                </div>
                </div>
                </div>
            
               

                </Sidebar>
            )
};

export default images;