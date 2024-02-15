import React, { useEffect, useState } from 'react'
import { FaShoppingBag } from 'react-icons/fa';
import {FiSettings } from 'react-icons/fi'; 


interface Piece {
    idPiece: string;
    nomPiece: string;
    fabricant: string;
    quantitePiece: number;
    prixPiece: number;
    // Add other properties as needed
  }

  interface Client {
    idClient:number
    nomClient:String
    telephonClient:number
}

interface TopCardsProps {
    pieces?: Piece[];
    client?: Client[];
  }
  
  const TopCards: React.FC<TopCardsProps> = ({ pieces=[] ,client=[]}) => {

    if (!pieces || !Array.isArray(pieces)) {
        // Handle the case where pieces is not defined or not an array
        return null;
      }
    
      // Calculate the number of pieces
    const pieceCount = pieces.length;
    const clientCount = client.length;


  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{pieceCount}</p>
                <p className='text-gray-600'>Pieces</p>
            </div>
            <p className='bg-amber-200 justify-center items-center p-5 rounded-lg'>
                <span className='text-amber-500 text-lg'> 
                <FiSettings size={30} /></span>
            </p>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{clientCount}</p>
                <p className='text-gray-600'>Clients</p>
            </div>
            <p className='bg-green-200 justify-center items-center p-5 rounded-lg'>
                <span className='text-amber-500 text-lg'>
                   <img src="data:image/png;base64,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"></img> </span>
            </p>
        </div>
       
    </div>
  )
}

export default TopCards