import Link from 'next/link';


import {FiSettings } from 'react-icons/fi'; 
import React, { ReactNode } from 'react';
import LogoutBtn from '../components/logout'
import {TiThListOutline} from 'react-icons/ti';
import {RxDashboard} from 'react-icons/rx'; 

interface SidebarProps {
  children: ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-blue-950 border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className=' p-1 rounded-lg inline-block'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXUlEQVR4nO1YT0gVQRhfyaQuInXQsENSQR6CihKp8B2Cerz9vl2lHgVZ3uwkXSLo4jWh0IsGRUXdyovHPJRSYHawnjuzT0yI/khdggiMDql9Mfvm7R/d3Wf1Vt8+3g8Gdnd+M9/vNzPf7OwqSgVlDMqojWQkdypxBXHtHHE4q8QVxHCIGA4qcQUxyIqixBFk6PuJI1nFTB1Q4gZicNc2wOGeEieQobURw9+2AXFtaG0bI4bhKDEYIxO7aDxRXZBvphqI47wz+nkT8EnUFWw/nqi2YomYDEf/34ABh4jjohSRFfeB3JfprcRhkhh+JQ4XHAPqRflsUnBCYzHIynaLYbH+zgTDQdd6/kkMO/15cIs4XqeZ9u00nN5kt7FG9eQ2q47hUECMTqtvZ9n58v7VQD0xWPAuC7hJpFQFtpnq3uzsQumaQB4pVcTwxorltiBiFs2AFYhDX04MdhGH02JnIY5XA/lzyVpb0FyyNqTfK8TxPpnqGWup5Qanr6jirUAm7sntLDArRrcgfxqbbAPT2FSQPyVmDGatGFl1b9GEe4JweJ6fhTVwjzhLQjtckG+KmbX4L4omeFUQht1yjZph619yOx0D6vlQLok8AFP2fanowj3LyE5MtSWUy7DftaP0h3INbHWSuH130YV7guVfUgwGwnkw6dpVXoVyGQxI7nzRBfsIeyyDvQv9kGGw7DlKZNTG4D7xreQ9iky4HYxBry1spmOHPwd77Lcph19SXI8vN6PX2ecmBr3RG7D2azs5O/wNwIQUNEYMnsnrCV+uASdcu1U6egPuhPMZMcpqB52E1C7nSvB2Sgyv2fUGtkZvgME+13Fi2Kf+gTS3TBl9l1Xy+cDw4So+h2Gnv1TzOhjAete55bVXTKrZPrlyHHGe44g0vCS+1Lz9wRvXl1tD9AbMdI1rBr6vEPPEqdOPOm3UFpfpp542HL/Zde8TWyI3EHuQ+1MxikLhR5QKIp0Fqox+YVRyoBRAzuHri3XP1VPiLes5gQYWWLL+2jFI5PqCz+ueA/KvwUcyUPc8NzUt1ISoMzXN08ZAnRh+II4/SiKJicPtEAN3lFIHcTwWaMCE40qpg9z/g1aWjF630frKH1ToLV0KiVrWBsoCtOpPdsxGnyoGNhixn4EKlLXjD3SUECPwt2D5AAAAAElFTkSuQmCC"/>
            </div>
          </Link>

          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/'>

          <div className=' hover:bg-amber-300 hover:text-amber-300 cursor-pointer mt-2 p-3 rounded-lg inline-block'>
            <RxDashboard size={20} className='text-white hover:text-black ' />
            </div>
          </Link>

          <Link href='/PieceList'>
          <div className=' hover:bg-amber-300 hover:text-white cursor-pointer mt-2 p-3 rounded-lg inline-block'>
            <TiThListOutline size={25} className='text-white hover:text-black' />
            </div>
          </Link> 
          
          <Link href='/sales'>
          <div className='  hover:bg-amber-300 cursor-pointer mt-2 p-3 rounded-lg inline-block hover:text-black'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABM0lEQVR4nO2XQQ6DMAwE/Z5+p1zoR/r3ttJUrXoABIaAEzsle8QR8tgLq4gEFYmSqKKBBBP/spGpgCvwqBqEFYgqQIAOeE76flYFwvwmXkBfDQgKxK/uD/KbaL/DTt3gjC/IoMlRYykQ7iAzdvlY5bbVTiFAlF/oFyYFwk0LdplaZ9VOrlI8vwbWSSU5oFmtV945kiuEcua19k2YgljkwMzZTXYyA7HKgZTBmINY5sBecRTEOge0hthZc8mB4iBkyoGiIGTIgeIgGORAjmZJAbHKAVcQDHPADQTjHHABIUOYFQchUyIXBQEuRy41paeOUvsU79omIjWLBjKASb7oR6qNbLbwvC6QJUVqlgYisabOaTZCoIZoIBJrsrSNSKzJ0jYisSZL24jEmixtIxJrspx5I2+9/HSLIdbC7wAAAABJRU5ErkJggg=="  />
            </div>
          </Link>

       

          <Link href='/client'>
            <div className=' hover:bg-amber-300  cursor-pointer mt-2 p-2 rounded-lg inline-block hover:text-black'>
<img src="data:image/png;base64,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"></img>            </div>
          </Link>
          
          <Link href='/Login'> 
          <LogoutBtn />
          </Link>
         
         

        </div>
      </div>
    
      <main className='ml-20 w-full '>{children}</main>
       </div>

  
    

  );
};

export default Sidebar;