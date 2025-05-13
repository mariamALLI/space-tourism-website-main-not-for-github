import { useState } from 'react';
import { useSpaceData } from '../../hooks/useSpaceData';

export default function Crew() {
  const [selectedCrewMember, setSelectedCrewMember] = useState(0);
  const { data, loading, error } = useSpaceData();

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!data) return null;

  const crewMember = data.crew[selectedCrewMember];

  return (
    <div className="relative min-h-screen w-full overflow-hidden min-[1440px]:overflow-hidden">
      <div className="absolute inset-0 bg-body_mobile_crew bg-cover bg-no-repeat bg-center bg-fixed min-[768px]:bg-body_tablet_crew min-[1440px]:bg-body_desktop_crew"></div>
      <div className="relative container mx-auto px-4 pt-[7.5rem] min-h-screen overflow-hidden">
        <h1 className="uppercase text-center mb-[2.5rem] font-barlow_c text-[0.95rem] tracking-[4.55px] min-[768px]:text-left min-[768px]:text-[1.35rem]">
          <span className="text-gray-500 mr-4">02</span>
          Meet your crew
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-center overflow-hidden">
          <div className="order-2 md:order-1">
            <div className="space-y-8 text-center md:text-left">
              <h2 className="font-belle text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-gray-400">{crewMember.role}</h2>
              <h3 className="font-belle text-[2rem] md:text-[3rem] lg:text-[3.5rem]">{crewMember.name}</h3>
              <p className="font-barlow text-[0.9rem] md:text-base leading-[25px] md:leading-[28px] text-gray-400 max-w-[444px] mx-auto md:mx-0">
                {crewMember.bio}
              </p>
            </div>
            
            <div className="mt-8 flex justify-center md:justify-start">
              <nav>
                <ul className="flex space-x-4">
                  {data.crew.map((_, index) => (
                    <li key={index}>
                      <button
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          selectedCrewMember === index
                            ? 'bg-white'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        onClick={() => setSelectedCrewMember(index)}
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src={crewMember.images.webp} 
              alt={crewMember.name}
              className="w-[177px] h-[222px] md:w-[456px] md:h-[572px] lg:w-[568px] lg:h-[712px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 