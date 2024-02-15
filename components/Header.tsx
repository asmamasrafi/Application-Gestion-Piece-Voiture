import React, { useEffect, useState } from 'react';
import CardNotification from './CardNotification';
import BarChart from './Barchart';
interface Piece {
  idPiece: string;
  nomPiece: string;
  fabricant: string;
  quantitePiece: number;
  prixPiece: number;

}

interface HeaderProps {
  lowQuantityPieces: Piece[];
}

const Header: React.FC<HeaderProps> = ({  }) => {
  const [showPopupcard, setshowPopupcard] = useState(false);
  const togglePopup = () => {
    setshowPopupcard(!showPopupcard);
  };
  const [lowQuantityPieces, setLowQuantityPieces] = useState<Piece[]>([]);

const PIECE_API_BASE_URL="http://localhost:8080/pieces_voiture";

const [pieces, setpieces] = useState<Piece[]>([]);
const [loading, setloadig] = useState(true);

const [updatedPiece, setupdatedPiece] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
        setloadig(true);
        try {
            const response= await fetch(PIECE_API_BASE_URL,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            });
    
           const pieces=await response.json();
           setpieces(pieces);
    
           const lowQuantity = pieces.filter((piece: { quantitePiece: number; }) => piece.quantitePiece <= 10);
          console.log("Low Quantity Pieces:", lowQuantity);
          setLowQuantityPieces(lowQuantity);
    
        } catch (error) {
           console.log(error);
        }
        setloadig(false);
    };
    fetchData();
    },[updatedPiece]);
  return (
    <>
    <div className='flex justify-between px-4 pt-4'>
      <h2>Dashboard</h2>
      <button onClick={togglePopup} id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" type="button">
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
        </svg>
        <div className="relative flex">
          <div className="relative inline-flex w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-2 right-3 dark:border-gray-900">
          </div>
        </div>
      </button>
      
      {showPopupcard && (
      <CardNotification isOpen={showPopupcard} handleClose={togglePopup} lowQuantityPieces={lowQuantityPieces}/>
      )}
    </div>
   
   
</>
    
  );
}

export default Header