import PieceTable from "@/components/PieceTable";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import AddPiece from "@/components/AddPiece"
import React, { useEffect, useState } from 'react';
import EditPiece from "@/components/EditPiece";

interface Piece {
    idPiece: string;
    nomPiece: string;
    fabricant: string;
    quantitePiece: number;
    prixPiece: number;
 
  }
  
 
const PieceList = () => {

const [showAlert, setShowAlert] = useState(true);

const closeAlert = () => {
      setShowAlert(false);
      localStorage.setItem('hideAlert', 'true');
    };    
    
const [showPopupAdd, setShowPopupAdd] = useState(false);
const [showPopupEdit, setShowPopupEdit] = useState(false);

const togglePopupAdd = () => {
    setShowPopupAdd(!showPopupAdd);
  };

  const togglePopupEdit = () => {
    setShowPopupEdit(!showPopupEdit);
  };



const PIECE_API_BASE_URL="http://localhost:8080/pieces_voiture";

const [pieces, setpieces] = useState<Piece[]>([]);
const [loading, setloadig] = useState(true);
const [ idPiece, setpieceID] = useState(String);
const [updatedPiece, setupdatedPiece] = useState(false);
const [searchQuery, setSearchQuery] = useState('');



const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Fetching data for search query:", searchQuery);
        fetchData();
  };

useEffect(() => {
    setShowAlert(true);
  }, []);


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

       

    } catch (error) {
       console.log(error);
    }
    setloadig(false);
};
fetchData();
},[updatedPiece]);


const deletePiece = async(e: { preventDefault: () => void; },idPiece:string) =>{
    e.preventDefault();
       
          fetch(PIECE_API_BASE_URL + "/"+ idPiece, {
              method: "DELETE",
            }).then((resp)=>{
               if (pieces) {
                setpieces((prevElement)=>{
                    return prevElement.filter((piece) => piece. idPiece !==  idPiece);
                });
            }  
                });
            };



            
const editPiece = (e: { preventDefault: () => void; },idPiece:string) =>{
    e.preventDefault();
  setpieceID(idPiece);
  togglePopupEdit();

};

useEffect(() => {
    fetchData();
  }, [updatedPiece, searchQuery]);

const fetchData = async () => {
    setloadig(true);
    try {
      const response = await fetch(`${PIECE_API_BASE_URL}?search=${searchQuery}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const pieces = await response.json();
      console.log("Fetched data:", pieces);
      setpieces(pieces);
    } catch (error) {
      console.log(error);
    }
    setloadig(false);
  };


    return (
        <>
        <Sidebar>
 <div className='bg-gray-100 min-h-screen  '>
                <div className='flex justify-between px-4 pt-4'>
                   
                    <div id="dropdownNotification" className="z-20 hidden w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700" aria-labelledby="dropdownNotificationButton">
                        <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                            Notifications
                        </div>
                    </div>
                </div>
                <div className='p-3 '>
                    <div className='w-full m-auto  border rounded-lg bg-white overflow-y-auto'>
                   
                        <div className="mx-auto my-auto  px-4 py-20 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 mb-5 ">

                        {showAlert && (
                        <div className="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 my-7 rounded relative" role="alert">
                             <strong className="font-bold">Rupture de Stock ! </strong>
                               <span className="block sm:inline">Lorsque la quantité du produit de voiture est inférieure à 10 pièces, vous recevrez une notification pour la rupture de stock.</span>
                                   <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                 <button onClick={closeAlert}>
                                    <svg className="fill-current h-6 w-6 text-gray-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title>
                                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                    </svg>
                                 </button>
                                </span>
                     </div>
      )}
                            <div className="flex items-center justify-between mb-5 sm:flex-row">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Pieces de Voiture</h2>
                                <div className="flex space-x-2">
                                    
                                    <form action="" className="relative mx-auto w-max float-right mr-3 pl-4" onSubmit={handleSearch}>
                                        <input
                                            type="search"
                                            className="peer cursor-pointer  border-gray-400 relative z-10 h-10 w-10 rounded-full shadow-md border bg-transparent pl-10 outline-none focus:w-full focus:cursor-text focus:border-amber-300 focus:pl-8 focus:pr-3"
                                            placeholder='Product name ..'
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            />
                                        <button
                                            type="submit"
                                            className="absolute right-0 top-0 h-10 w-10  shadow-lg rounded-full border bg-blue-950  focus:outline-none"
                                           
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 m-auto text-white peer-focus:text-sky-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}

                                                />
                                            </svg>
                                        </button>
                                    </form>
                                    <button
                                        className='hover:bg-white'
                                        onClick={togglePopupAdd}
                                    >
                                        <div className="w-auto h-auto">
                                            <div className="flex-1 h-full">
                                                <div className="flex items-center justify-center flex-1 h-full p-2 bg-blue-900 text-white hover:bg-blue-200 shadow rounded-full">
                                                    <div className="relative">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </button>                             
                                </div>
                            </div> 
                           <div>
                            <div className='my-4 p-3 grid md:grid-cols-6 sm:grid-cols-5 grid-cols-4 items-center justify-between cursor-pointer'>
                                      <span> Pieces </span>
                                       <span className='sm:text-left text-right'>Code</span>
                                   <span className='hidden sm:grid'>Fabriquant</span>
                                    <span className='hidden sm:grid'>Quantites</span>
                                    <span className='hidden sm:grid px-3'>Prix</span>
                                             </div>
                                             
                          {!loading && (
                            <div>                              
                            {
                            pieces?.map( (piece) => (
                           <PieceTable   piece={piece}  key={piece.idPiece} deletePiece={deletePiece}  editPiece={editPiece}/>
                           ))
                           }
                            </div> 
                          )}   
                          </div>
                                        
                         
                        </div>

                    </div>
                </div>

              
                {showPopupAdd && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 ">
                        {/* Popup content */}
                        <AddPiece isOpen={true} handleClose={() => setShowPopupAdd(false)} />
                    </div>
                )}


            </div>
            {showPopupEdit && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 ">
                        {/* Popup content */}
                        <EditPiece idPiece={idPiece} setupdatedPiece={setupdatedPiece} handleClose={() =>  setShowPopupEdit(false)} /> 
                    </div>
                )}


      
      
    
    
            
        </Sidebar>
        </>
    );


};
export default PieceList;