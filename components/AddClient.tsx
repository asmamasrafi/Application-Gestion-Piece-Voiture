import {  useRef, useState,ChangeEvent } from 'react'
import router from 'next/router';


interface AddClientProps {
    isOpen: boolean;
    handleClose: () => void;
    setupdatedClient: (updatedClient: any) => void;

    // other props if any
  }

  const AddClient: React.FC<AddClientProps> = ({  handleClose,isOpen,setupdatedClient }) => {

    const [open, setOpen] = useState(false);
    


    const PIECE_API_BASE_URL_client="http://localhost:8080/Client";


    const [client, setClient] = useState({
        idClient: '',
        nomClient: '',
        telephonClient: '',
           
          });
        

          const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
            const  value = event.target.value;
            setClient({...client,[event.target.name]:value}) ;//...piece :existant value will bee added + [event.target.name]:value:  the new one
             
          };


        const saveClient  = async (e: { preventDefault: () => void; }) => {
            e.preventDefault();
        try {
            const response = await fetch(PIECE_API_BASE_URL_client, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(client),
                    
            });

            if (!response.ok) {
                console.log('client added successful');
                router.reload();
            } 
            const _client = await response.json();
            setupdatedClient(_client);

        } catch (error) {
            console.error('client added failed:', error);
        }
    }
 const reset = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setClient(
            {
                idClient: '',
                nomClient: '',
                telephonClient: '',
                   
        });
        handleClose();
       
    };
    return (
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

      <h2 className="text-base font-bold leading-7 text-gray-900 mb-6"> Client Informations.</h2>
                                   
    <form onSubmit={saveClient}>
    <div className="grid grid-cols-2 gap-x-6">
          <div>
            <label htmlFor="client-name" className="block text-sm font-medium leading-6 text-gray-900">
              Client Name
            </label>
            <input
              type="text"
              name="nomClient" // Update the name attribute to "name"
             value={client.nomClient}
             onChange={ (e) => handleInputChange(e) }
              className="mt-1 block w-full bg-gray-100 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />

          </div>
          <div>
            <label htmlFor="client-phone" className="block text-sm font-medium leading-6 text-gray-900">
              Client telephon
            </label>
            <input
              type="text"
              name="telephonClient" // Update the name attribute to "name"
             value={client.telephonClient}
             onChange={ (e) => handleInputChange(e) }
              className="mt-1 block w-full bg-gray-100 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />

          </div>         
                                            
                                        
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                                onClick={saveClient}
                                            >
                                                Done
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                onClick={reset}
                                               
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                        </div>
                                        </form>
                                
        </div>
    );
};
export default AddClient;
