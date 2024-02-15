import React from 'react';

interface Piece {
  idPiece: string;
  nomPiece: string;
  fabricant: string;
  quantitePiece: number;
  prixPiece: number;
}

interface CardProps {
  isOpen: boolean;
  handleClose: () => void;
  lowQuantityPieces: Piece[];
}

const CardNotification: React.FC<CardProps> = ({ isOpen, handleClose, lowQuantityPieces }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 right-0 p-4 z-10">
          <div className="bg-white rounded-lg shadow-md m-7 ">
            <div className="flex items-center justify-between p-3 px-5">
              <p className="focus:outline-none text-2xl font-semibold leading-6 text-gray-800">Notifications</p>
              <button
                type="button"
                className="text-gray-300 hover:text-gray-500 focus:outline-none"
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
            <ul>
              {lowQuantityPieces.map((piece, index) => (
                <li key={index} className="w-full p-4 mt-4 bg-white rounded flex">
                  <div className='flex'>
                    <div className='bg-amber-300 p-2 rounded-lg'>
                      <img width="30" height="30" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-car-parts-automotive-dealership-flaticons-lineal-color-flat-icons.png" alt="external-car-parts-automotive-dealership-flaticons-lineal-color-flat-icons" />
                    </div>
                    <div className="pl-3">
                      <p className="focus:outline-none text-sm leading-none">
                        <span className="text-indigo-700">{piece.nomPiece}</span> has{' '}
                        <span className="text-indigo-700">{piece.quantitePiece}</span> pieces remaining.
                      </p>
                      <p className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default CardNotification;
