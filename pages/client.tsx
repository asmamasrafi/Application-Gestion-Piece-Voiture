import Sidebar from '../components/Sidebar'
import React, { useEffect, useState } from 'react';
import AddClient from '../components/AddClient';


import { useRouter } from 'next/router';

interface Client {
    idClient:number
    nomClient:String
    telephonClient:number
}

interface ClientProps {
    client:Client
}

const client_page : React.FC<ClientProps> = ({client}) => {
 
    
const PIECE_API_BASE_URL_client="http://localhost:8080/Client";  

const [showPopupClient, setShowPopupClient] = useState(false);

const togglePopupClient = () => {
    setShowPopupClient(!showPopupClient);
  };

const [clients, setclients] = useState<Client[]>([]);
const [loading, setloadig] = useState(true);
const [updatedClient, setupdatedClient] = useState(false);


useEffect(() => {

    const fetchData = async () => {
        setloadig(true);
        try {
            const response= await fetch(PIECE_API_BASE_URL_client,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            });
    
           const clients=await response.json();
           setclients(clients);
        } catch (error) {
           console.log(error);
        }
        setloadig(false);
    };
    fetchData();
    },[updatedClient]);


    return (
        <Sidebar>
            <div className='bg-gray-100 min-h-screen'>
                <div className='flex justify-between p-4'>
                    <h2>Clients</h2>
                    <h2>Welcome Back, </h2>
                    
                </div>
                <div className='p-4'>
                    <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                        
                    <button
                    type="button"
                    className='flex  float-right select-none items-center gap-3 rounded-lg border bg-yellow-200 py-3 px-7 p-3 text-center align-middle font-sans text-xs font-bold uppercase text-blue-950 transition-all hover:opacity-75 focus:ring focus:ring-yellow-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                    onClick={togglePopupClient}
                >
                    Add Client
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
                </button>
                        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 categories-center justify-between cursor-pointer'>
                            <span>client</span>
                            <span className='hidden sm:grid'>Phone Number</span>
                            <span className='hidden sm:grid'>
                                
                         
        
                            </span>
                        
                        </div>
                        <ul>
  {
     clients.map((client) => (
    <li key={client.idClient} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 categories-center justify-between cursor-pointer'>
      <p className='text-gray-600 sm:text-left text-right'>{client.nomClient}</p>
      <p className='text-gray-600 sm:text-left text-right'>{client.telephonClient}</p>
      <p className='text-gray-600 sm:text-left text-right'></p>
      <div className='sm:flex justify-between categories-center'>
        <p></p>
       
      </div>
    </li>
  ))
  
  }
</ul>
                    </div>
                </div>

                {!loading && (
                    <div>
                {showPopupClient && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
            {/* Popup content */}
            <AddClient isOpen={showPopupClient}
            setupdatedClient={setupdatedClient}  handleClose={() => setShowPopupClient(false)}

            />
          </div>
        )}
        </div>
                )}
            </div>
        </Sidebar>
    );
};

export default client_page;
