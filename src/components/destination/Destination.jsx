import { useState } from 'react';
import { useSpaceData } from '../../hooks/useSpaceData';

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState('Moon');
  const { data, loading, error } = useSpaceData();

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!data) return null;

  const destination = data.destinations.find(
    d => d.name === selectedDestination
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-body_mobile_des bg-cover bg-no-repeat bg-center bg-fixed min-[768px]:bg-body_tablet_des min-[1440px]:bg-body_desktop_des"></div>
      <div className="relative container mx-auto px-6 pt-[5.5rem] min-h-screen min-[768px]:pt-[8.5rem] min-[1440px]:pt-[13.25rem]">
        <h1 className="uppercase text-center mb-8 font-barlow_c text-base tracking-[2.7px] min-[768px]:text-left min-[768px]:text-xl min-[768px]:mb-[3.75rem] min-[1440px]:text-[1.75rem] min-[1440px]:tracking-[4.72px]">
          <span className="text-gray-500 mr-4">01</span>
          Pick your destination
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-center min-[1440px]:gap-[9.75rem]">
          <div className="flex justify-center min-[1440px]:justify-start">
            <img 
              src={destination.images.webp} 
              alt={destination.name}
              className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px] object-contain"
            />
          </div>
          
          <div className='flex flex-col items-center min-[1440px]:items-start'>
            <nav className="mb-8 min-[1440px]:mb-[2.375rem]">
              <ul className="flex justify-center md:justify-start space-x-6 min-[1440px]:space-x-8">
                {data.destinations.map((dest) => (
                  <li key={dest.name}>
                    <button 
                      className={`font-barlow_c text-nav-text pb-2 border-b-2 border-transparent hover:border-gray-500 transition-colors duration-300 ${
                        selectedDestination === dest.name ? 'border-white' : ''
                      }`}
                      onClick={() => setSelectedDestination(dest.name)}
                    >
                      {dest.name.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="text-center md:text-left">
              <h2 className="font-belle text-[56px] md:text-[80px] min-[1440px]:text-[100px] leading-none mb-4">{destination.name.toUpperCase()}</h2>
              <p className="max-w-[50ch] mx-auto md:mx-0 text-center md:text-left font-normal font-barlow text-[0.9375rem] leading-[25px] min-[768px]:text-base min-[768px]:leading-[28px] min-[1440px]:text-lg min-[1440px]:leading-[32px] text-gray-300">
                {destination.description}
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-700 mt-8 min-[1440px]:mt-[3.375rem]">
                <div>
                  <h3 className="font-barlow_c text-[14px] tracking-[2.36px] text-gray-400 mb-2">AVG. DISTANCE</h3>
                  <p className="font-belle text-[28px] min-[1440px]:text-[32px]">{destination.distance}</p>
                </div>
                <div>
                  <h3 className="font-barlow_c text-[14px] tracking-[2.36px] text-gray-400 mb-2">EST. TRAVEL TIME</h3>
                  <p className="font-belle text-[28px] min-[1440px]:text-[32px]">{destination.travel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 