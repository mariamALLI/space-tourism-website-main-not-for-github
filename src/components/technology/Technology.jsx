import { useState } from 'react';
import { useSpaceData } from '../../hooks/useSpaceData';

export default function Technology() {
  const [selectedTechnology, setSelectedTechnology] = useState(0);
  const { data, loading, error } = useSpaceData();

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!data) return null;

  const technology = data.technology[selectedTechnology];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-body_mobile_tech bg-cover bg-no-repeat bg-center bg-fixed min-[768px]:bg-body_tablet_tech min-[1440px]:bg-body_desktop_tech"></div>
      <div className="relative container mx-auto px-4 pt-[7.5rem] min-h-screen">
        <h1 className="uppercase text-center mb-[2.5rem] font-barlow_c text-[0.95rem] tracking-[4.55px] min-[768px]:text-left min-[768px]:text-[1.35rem]">
          <span className="text-gray-500 mr-4">03</span>
          Space launch 101
        </h1>
        
        <div className="grid lg:grid-cols-[auto,1fr] gap-8">
          <div className="flex lg:flex-col justify-center space-x-4 lg:space-x-0 lg:space-y-4">
            {data.technology.map((_, index) => (
              <button
                key={index}
                className={`w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border transition-colors duration-300 ${
                  selectedTechnology === index
                    ? 'bg-white text-black'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                onClick={() => setSelectedTechnology(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="space-y-8">
                <h2 className="font-barlow_c text-[14px] tracking-[2.36px] text-gray-400">THE TERMINOLOGY...</h2>
                <h3 className="font-belle text-[2rem] md:text-[2.5rem] lg:text-[3.5rem]">{technology.name.toUpperCase()}</h3>
                <p className="font-barlow text-[0.9rem] md:text-base leading-[25px] md:leading-[28px] text-gray-400 max-w-[444px] mx-auto md:mx-0">
                  {technology.description}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={technology.images.portrait} 
                alt={technology.name}
                className="w-full h-[170px] md:h-[310px] lg:h-[527px] object-cover md:object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 