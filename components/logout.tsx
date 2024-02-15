import router from "next/router";
import {BiLogOut} from 'react-icons/bi'; 

export default function LogoutBtn() {
    const handleLogout = async () => {
        router.push('/');
        // Send a request to the logout API route to destroy the session
        await fetch('/api/logout');
        // Redirect to login page after logout
    };
    return (
        <>

            <button
                onClick={handleLogout}
                className=' text-amber-300 cursor-pointer p-3 rounded-lg absolute bottom-4 right-1 inline-block'
              >
                 <div className=' p-3 rounded-lg inline-block'>
              <BiLogOut size={25} className='text-amber-300 ' />
            </div>

            </button>
        </>
    )
}