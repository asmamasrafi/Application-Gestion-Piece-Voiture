import { FaShoppingBag } from 'react-icons/fa';

import React, { useState, useEffect } from 'react';
import {GrMoney } from 'react-icons/gr';
import Sidebar from '../components/Sidebar';
import AddSale from '@/components/AddSale';



interface Piece {
    idPiece: string;
    nomPiece: string;
    fabricant:string;
    prix:number;
    
    // Ajoutez d'autres propriétés au besoin
  }

  interface Client {
    idClient: string;
    nomClient: string;
    // Ajoutez d'autres propriétés au besoin
  }
  
  interface Sale {
    id: string; // ou tout autre identifiant unique pour la vente
    piece: Piece;
    quantity: number;
    amount:number;
    saleDate: string | null; 
    paymentMethod: string | null;
    client: Client;
  }


const sales_page: React.FC = () => {

  const SALES_API_BASE_URL = "http://localhost:8080/Vente"; 

    const [showPopup, setShowPopup] = useState(false);
    const [pieces, setPieces] = useState<Piece[]>([]);
    const [sales, setsales] = useState<Sale[]>([]);
    const [loading, setloadig] = useState(true);
    const [updatedSale, setupdatedSale] = useState(false);

const togglePopup = () => {
    setShowPopup(!showPopup);
  };


  useEffect(() => {

    const fetchData = async () => {
        setloadig(true);
        try {
            const response= await fetch(SALES_API_BASE_URL,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            });
    
           const sales=await response.json();
           setsales(sales);
        } catch (error) {
           console.log(error);
        }
        setloadig(false);
    };
    fetchData();
    },[updatedSale]);



  return (
    <Sidebar>
      <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between px-4 pt-4'>
          <h2>Sales</h2>
          <h2>Welcome Back, Clint</h2>
        </div>
        <div className='p-4'>
          <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
            
            <button
             
              className='flex  float-right select-none items-center gap-3 rounded-lg border bg-yellow-200 py-3 px-9 p-3 text-center align-middle font-sans text-xs font-bold uppercase text-blue-950 transition-all hover:opacity-75 focus:ring focus:ring-yellow-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type="button"
              data-ripple-dark="true"
              onClick={togglePopup}
              >
              Add Sale
            
            </button>
           
            <div className='my-4 p-1 ml-6 grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-center justify-between cursor-pointer'>
              <span>Pieces</span> 
            <span className='sm:text-left text-right'>Client</span>
              <span className='sm:text-left text-right'>Date</span>
              
              <span className='sm:text-left text-right py-7'>Quantite</span>
              <span className='hidden sm:grid'>paymentMethod</span>



            </div>
            <ul>
            {
     sales.map((sale) => (
                <li key={sale.id}  className='bg-gray-50 hover:bg-gray-100 rounded-lg my-4 p-2 mr-6 grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-center justify-between cursor-pointer'
                >
                  <div className='flex'>
                    <div className='bg-yellow-200 p-3 rounded-lg'>
                   <GrMoney  size={20}  />
                    </div>

                    <div className='pl-4'>
                      <p className='text-gray-800 font-bold'>
                      {sale.piece && sale.piece.nomPiece}
                      </p>
                      <p className='text-gray-800 text-sm'>
                      {sale.amount} DH
                      </p>
                    </div>
                  </div>
                 
                  <p className='text-gray-600 sm:text-left text-right px-3'>
                  {sale.client && sale.client.nomClient}
                  </p>
                   <p className='text-gray-600 sm:text-left text-right'>
                  {sale.saleDate}
                  </p>
                  <p className='text-gray-600 sm:text-left text-right pl-12 '>
                  {sale.quantity}
                  </p>
                  <p className='text-gray-600 sm:text-left text-right'>
                  {sale.paymentMethod}
                  </p>


                </li>
              


))}
            </ul>
            <div className='flex justify-center'>

            </div>

          </div>
        </div>
       

        {!loading && (
<div>
 {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
            {/* Popup content */}

            <AddSale isOpen={showPopup} handleClose={() => setShowPopup(false)} pieces={pieces} />

             
          </div>
        )}
</div>
        )}
      </div>
    </Sidebar>
  );
};

export default sales_page;