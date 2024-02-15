import { useState } from "react";
import EditPiece from "./EditPiece";

interface Piece {
    idPiece: string;
    nomPiece: string;
    fabricant: string;
    quantitePiece: number;
    prixPiece: number;
    // Add other properties as needed
  }
  
  interface PieceTableProps {
    piece: Piece;
    deletePiece: (e: React.MouseEvent<HTMLButtonElement>, idPiece: string) => void;
    editPiece: (e: React.MouseEvent<HTMLButtonElement>, idPiece: string) => void;
  }



const PieceTable: React.FC<PieceTableProps> = ({ piece, deletePiece,editPiece }) => {

const isQuantityLow = piece.quantitePiece <= 10;

    
return(

    <ul>
         <li key={piece.idPiece} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-6 sm:grid-cols-5 grid-cols-4 items-center justify-between cursor-pointer'>
                            <div className='flex'>
                                <div className='bg-amber-300 p-2 rounded-lg '>
                                <img width="30" height="30" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-car-parts-automotive-dealership-flaticons-lineal-color-flat-icons.png" alt="external-car-parts-automotive-dealership-flaticons-lineal-color-flat-icons"/>
                                </div>
                                
                               
                                <div className='pl-4'>
                                    <p className='text-gray-800 font-bold'>
                                    {piece.nomPiece}
                                    </p>
                                    <p className='text-gray-800 text-sm'></p>
                                </div>
                           </div>
                            <p className='text-gray-600 sm:text-left text-right px-3'>
                            {piece.idPiece}
                            </p>
                            <p className='hidden md:flex px-3'>{piece.fabricant}</p>
                             <p className={`hidden md:flex px-3 ${isQuantityLow ? 'text-red-400 font-bold' : ''}`}>
                            {piece.quantitePiece}
                              </p>
                            <p className='hidden md:flex px-3'> {piece.prixPiece}</p>
                            <div className='sm:flex hidden justify-between items-center'>
                                <div className='flex space-x-2'>

                                <div className="flex shrink-0 flex-col gap-2 justify-end sm:flex-row">

                                    <button type="button"
                                     className="inline-flex items-center px-4 py-2 bg-sky-500 hover:bg-blue-700 text-white text-sm font-medium rounded-md"

                                     onClick={ (e) =>editPiece(e,piece.idPiece)} >Edite</button>

                                     </div>


                                    <button type="button"  onClick={ (e) =>deletePiece(e,piece.idPiece) }

                                     className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Delete
                                    </button>

                                </div>
                            </div>
                        </li>

    </ul>


)




}
export default PieceTable;