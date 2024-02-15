import { ChangeEvent, useEffect, useState } from "react";
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface EditPieceProps {
    handleClose: () => void;
    idPiece:String;
    setupdatedPiece: (updatedPiece: any) => void;
    // other props if any
  }

  const EditPiece: React.FC<EditPieceProps > = ({ idPiece,handleClose,setupdatedPiece }) => {

    const PIECE_API_BASE_URL="http://localhost:8080/pieces_voiture";

    const [Isopen, setIsOpen] = useState(false);

    const [piece, setPiece] = useState({
        idPiece: '',
        nomPiece: '',
        fabricant: '',
        quantitePiece: '',
        prixPiece: '',
       
      });

    function closeModel() {
        setIsOpen(false);
    }
    function openModel() {
        setIsOpen(true);
    }
// pour cahnger les donner avec le changement que se fait
      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const  value = event.target.value;
        setPiece({...piece,[event.target.name]:value}) ;//...piece :existant value will bee added + [event.target.name]:value:  the new one
         
      };

//pour afficher les donner dnas les inputs
useEffect(() => {
    const fetchData= async () => {
        try {
            const response = await fetch(PIECE_API_BASE_URL + "/"+ idPiece, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
         
        });
    
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
    
        const _piece = await response.json();
        setPiece(_piece);

        // Reset the form after the asynchronous operation is completed
      
      } catch (error) {
        console.error("Error saving piece:", error);
      }
      
    };
    fetchData();
}, [idPiece])



 //add piece   
 // explicitly type the e   
 
    const reset = async (e: { preventDefault: () => void ; }) => {
        e.preventDefault();
        handleClose();
       
    };


   const updatePiece = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
   const response = await fetch(PIECE_API_BASE_URL + "/"+ idPiece, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(piece),
         
        });

        if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          
        const _piece = await response.json();
        setupdatedPiece(_piece);
        reset(e);
   } 


return(

    <>
  
<div className="p-8 bg-white rounded-lg">
      <div className="flex justify-end">
        <button
          type="button"
          className="text-gray-400 hover:text-gray-500 focus:outline-none"
         onClick={handleClose}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

<h2 className="text-base font-bold leading-7 text-gray-900 mb-6">Edit a  Piece.</h2>

      <form >
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <label htmlFor="product-name" className="block text-sm font-medium leading-6 text-gray-900">
              Piece Name
            </label>
            <input
              type="text"
              name="nomPiece" // Update the name attribute to "name"
             value={piece.nomPiece}
             onChange={ (e) => handleInputChange(e) }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />

          </div>

         

          <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              Prix
            </label>
            <input
              name="prixPiece"
               value={piece.prixPiece}
               onChange={ (e) => handleInputChange(e) }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>


          <div>
            <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
              Quantity
            </label>
            <input
              type="number"
              name="quantitePiece"
            value={piece.quantitePiece}
            onChange={ (e) => handleInputChange(e) }
              className="mt-1 block w-full border-gray-800 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Fabriquant
            </label>
            <input
              id="country"
              name="fabricant"
              value={piece.fabricant}
              onChange={ (e) => handleInputChange(e) }
              className="mt-1 block w-full border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
              required
              >
           
             
            </input>
          </div>
         

         


        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            onClick={reset}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={updatePiece}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
   
  </>

);

};
export default EditPiece;