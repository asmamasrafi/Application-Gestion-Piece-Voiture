import React from 'react';

import { FaShoppingBag } from 'react-icons/fa';

interface Piece {
    idPiece: string;
    nomPiece: string;
    fabricant: string;
    quantitePiece: number;
    prixPiece: number;
 
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

  interface Client {
    idClient: string;
    nomClient: string;
    // Ajoutez d'autres propriétés au besoin
  }
interface MostSalesProps {
        sales: Sale[];
      }

const MostSales : React.FC<MostSalesProps> = ({ sales }) => {

  // Filtrer les pièces basées sur la condition (nom répété trois fois)
  const filteredPieces = sales
    .map((sale) => sale.piece)
    .filter((piece, index, array) => {
      const count = array.filter((p) => p.nomPiece === piece.nomPiece).length;
      return count === 6;
    });

  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Most sales Pieces</h1>
      <ul>
        
          <li
            key=''
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-blue-100 rounded-lg p-3'>
              <FaShoppingBag className='text-blue-800' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>Huile moteur</p>
              <p className='text-gray-400 text-sm'>AutoCar</p>
            </div>
           

         
          </li>
    
      </ul>
    </div>
  );
};

export default MostSales;