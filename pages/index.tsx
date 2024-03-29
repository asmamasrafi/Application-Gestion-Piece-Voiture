
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import TopCards from '@/components/TopCards';
import BarChart from '@/components/Barchart';
import MostSales from '@/components/MostSales';


import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
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
export default function Home() {
  const [pieces, setPieces] = useState([]);
  const [sales, setsales] = useState<Sale[]>([]);
  const [client, setClient] = useState([]);
  const [lowQuantityPieces, setLowQuantityPieces] = useState<Piece[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/pieces_voiture')
      .then(response => response.json())
      .then(data => setPieces(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/Client')
      .then(response => response.json())
      .then(data => setClient(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <main>
    
    <Head>
      <title>Gestion PiecesVoitures</title>
    </Head>
  
    <Sidebar>
      <Head>
        <title>Stock management</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-gray-100 min-h-screen'>
      <Header lowQuantityPieces={lowQuantityPieces} />
      
        <TopCards pieces={pieces} client={client} />

        <div className=' p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>  
        <BarChart />
        
        <MostSales sales={sales}/>
      
        </div>
      </main>
    </Sidebar>
  
    
  
    </main>
  
 
  );
}
