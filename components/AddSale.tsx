import React, {  useEffect,useState } from 'react';

import { FaPlus } from 'react-icons/fa';


interface Piece {
    idPiece: string;
    nomPiece: string;
    fabricant:string;
    prix: number;
  
  }

  interface Client {
    idClient: string;
    nomClient: string;
  
  }

  interface Sale {
    id: string; 
    piece: Piece;
    quantity: number;
    amount:number;
  }

interface AddSalestProps {
    isOpen: boolean;
    handleClose: () => void;
    pieces: Piece[];

  }

  const AddSale: React.FC<AddSalestProps> = ({ isOpen, handleClose}) => {

    const PIECE_API_BASE_URL="http://localhost:8080/pieces_voiture";
    const PIECE_API_BASE_URL_client="http://localhost:8080/Client";
    const ADDSALES_API_BASE_URL = "http://localhost:8080/Vente/buy-piece"; 


    const [selectedPiece, setSelectedPiece] = useState('');
    const [selectedClient, setSelectedClient] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [quantity, setQuantity] = useState(0);

    //initialiser des états (pieces et clients)
    const [pieces, setPieces] = useState<Piece[]>([]);
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
      // Appel API pour récupérer les pièces
      fetchPiecesFromAPI();
      fetchClientFromAPI();
    }, []);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value);
    };
  
    // Fonction pour récupérer les pièces depuis l'API
    const fetchPiecesFromAPI = async () => {
      try {
        const response = await fetch(PIECE_API_BASE_URL);
        const data = await response.json();
        // Mettez à jour l'état local 'pieces' avec les données de l'API
        setPieces(data);
     
      } catch (error) {
        console.error('Erreur lors de la récupération des pièces depuis l\'API :', error);
      }
    };


    const fetchClientFromAPI = async () => {
      try {
        const response = await fetch(PIECE_API_BASE_URL_client);
        const data = await response.json();
        // Mettez à jour l'état local 'pieces' avec les données de l'API
        setClients(data);
     
      } catch (error) {
        console.error('Erreur lors de la récupération des clients depuis l\'API :', error);
      }
    };

   

  

    const handleSaleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const selectedPieceObject = pieces.find((piece) => piece.nomPiece === selectedPiece);
  
        if (!selectedPieceObject) {
          console.error('Selected piece not found');
          return;
        }
  
        const selectedClientObject = clients.find((client) => client.nomClient === selectedClient);
  
        if (!selectedClientObject) {
          console.error('Selected client not found');
          return;
        }
      
        console.log('Quantity:', quantity);
        console.log('Request Payload:', {
          pieces:selectedPiece,
          quantity: quantity,
          paymentMethod: selectedOption,
          saleDate: new Date(),
          clientId: selectedClientObject.idClient,
      });

//Convertit l'objet Date en une chaîne de caractères au format UTC au format ISO 8601. Cette chaîne ressemble à quelque chose comme "2023-12-11T15:30:00.000Z"
//divise la chaine en deux partie et recuprer la partie de la date
      const saleDate = new Date().toISOString().split('T')[0]; 

        const response = await fetch(`${ADDSALES_API_BASE_URL}/${selectedPieceObject.idPiece}?quantity=${quantity}&paymentMethod=${selectedOption}&saleDate=${encodeURIComponent(saleDate)}&clientId=${selectedClientObject.idClient}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({       
          }),
        });
        
        const responseBody = await response.text(); // Store the response body

        console.log('Response:', responseBody); // Log the response body
    
        if (!response.ok) {
          throw new Error('HTTP error! Status: ' + response.status);
        }

        const responseData = JSON.parse(responseBody);
        console.log('Buy Piece API Response:', responseData);
  
        // Reset the form or clear local state as needed
        setQuantity(0);
        setSelectedPiece('');
        setSelectedClient('');
        setSelectedOption('');
       
    
        console.log('Sale added successfully!');

      } catch (error) {
        console.error('Error adding sale:', error);
      }
    };
    
  
    return (
      <div className='p-4 flex border rounded-lg bg-white justify-center w-[33%] h-[60%]'>
       
        <div className=' w-full justify-center'>
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
          <div className='flex w-full justify-center'>

          
          <form onSubmit={handleSaleSubmit}>
            
              <h3>Customer :</h3>
              <select
          className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          value={selectedClient}
          // La fonction appelée lorsqu'une sélection est modifiée
          onChange={(e) => setSelectedClient(e.target.value)}
        >
          
          {clients.map((client) => (
            <option key={client.idClient} value={client.nomClient}>
              {client.nomClient}
            </option>
          ))}
         

             
              </select>
              <h3>Methods :</h3>
              <div className='mx-10 flex justify-center'>

                <label className='mx-5'>
                  <input
                    className='mr-5'
                    type="radio"
                    value="Cash"
                    checked={selectedOption === 'Cash'}
                    onChange={handleOptionChange}
                  />
                  Cash
                </label>
                <label className='mx-5'>
                  <input
                    className='mr-5'
                    type="radio"
                    value="Card"
                    checked={selectedOption === 'Card'}
                    onChange={handleOptionChange}
                  />
                  Card
                </label>
                <label className='mx-5'>
                  <input
                    className='mr-5'
                    type="radio"
                    value="Cheque"
                    checked={selectedOption === 'Cheque'}
                    onChange={handleOptionChange}
                  />
                  Cheque
                </label>
              </div>


            

           <hr className='my-4' />
          <h3>Pices :</h3>
         
         
  <div className="flex items-center">

    <select
      className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
      value={selectedPiece}
          onChange={(e) => setSelectedPiece(e.target.value)}
        >
          {pieces.map((piece) => (
            <option key={piece.idPiece} value={piece.nomPiece}>
              {piece.nomPiece}
            </option>
          ))}
    </select>

    <div className="ml-4">
      <label htmlFor="quantity" className="block text-sm font-medium leading-6">
        Quantity
      </label>
      <input
            type="number"
            name="quantitePiece"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mt-1 block w-full rounded-md shadow-sm py-2 px-3 bg-slate-100 "
            required
          />
    </div>
  </div>
          <input type="submit" value="valide"    className="my-3 p-2 bg-blue-900 text-white  20px border-none rounded-[4px] cursor-pointer justify-center items-center"/>
</form>
</div>
</div>
        </div>
    
    );
        
  };


export default AddSale;

function uuidv4(): string {
  throw new Error('Function not implemented.');
}
