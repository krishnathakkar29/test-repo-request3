import React, { useEffect, useState } from 'react'

const ArcReactorLoader = () => {

    const loadingText = [
        "Venturing into the Upside Down...",
        "Unraveling the mysteries of Hawkins...",
        "Preparing for a Stranger Journey...",
        "Investigating the unknown in Hawkins...",
        "Brace yourself for an alternate dimension...",
        "Flashing back to the Upside Down...",
        "Unlocking secrets in the flickering lights...",
        "Stranger Things are about to unfold...",
        "Getting lost in the enigma of the Demogorgon...",
        "Epic battles await in the parallel universe..."
      ];

    const randomIndex = Math.floor(Math.random() * loadingText.length);
    const randomLoadingText = loadingText[randomIndex];
    
    const [textLoad, setTextLoad] = useState([]);

    useEffect(() => {
        const randomIndex1 = Math.floor(Math.random() * loadingText.length);
        const randomLoadingText1 = loadingText[randomIndex1];
        const randomIndex2 = Math.floor(Math.random() * loadingText.length);
        const randomLoadingText2 = loadingText[randomIndex2];
        const randomIndex3 = Math.floor(Math.random() * loadingText.length);
        const randomLoadingText3 = loadingText[randomIndex3];
        setTextLoad([randomLoadingText1, randomLoadingText2, ]);        
    }, []);
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gray-700'>
        <div className='w-80 h-80 relative scale-[1.5]'>
            {/* COIL RING*/}
            <div className='absolute h-44 w-44 rounded-full bg-white m-auto inset-0 shadow-[0_0_5px_1px_#52fefe]'>
                <div className='h-full w-full rounded-full shadow-[0_0_5px_4px_#52fefe_inset]'></div>
            </div>
            {/*CORE WRAPPER */}
            <div className='absolute h-36 w-36 rounded-full bg-[#073c4b] border-1 border-[#1b4e5f] m-auto inset-0 shadow-[0_0_1px_2px_#52fefe]'>
                <div className='h-full w-full rounded-full shadow-[0_0_3px_4px_#52fefe_inset]'></div>
            </div>
            {/*OUTER CORE */}
            <div className='absolute h-28 w-28 rounded-full bg-white m-auto inset-0 shadow-[0_0_7px_6px_#52fefe_inset]'>
                <div className='h-full w-full rounded-full shadow-[0_0_1px_1px_#52fefe]'></div>
            </div>
            {/*INNER CORE */}
            <div className='absolute h-16 w-16 rounded-full bg-white border-[6px] border-[#1b4e5f] m-auto inset-0 shadow-[0_0_8px_8px_#52fefe]'>
                <div className='h-full w-full rounded-full shadow-[0_0_4px_5px_#52fefe_inset]'></div>
            </div>

            {/* COIL CONTAINER*/}
            <div className='absolute animate-spinner h-44 w-44 rounded-full duration-2000 m-auto inset-0' ani>
                <div className='absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset]'></div>  
                
                <div className='absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-45'></div>

                <div className='absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-90'></div>
                
                <div className='absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-135'></div>

                <div className='absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-180'></div>

                <div className='absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-225'></div>

                <div className='absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-270'></div>

                <div className='absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-315'></div>
            </div>
            
        </div>
        <div className="random-text typewriter text-3xl text-white w-1/2">
            {randomLoadingText}
        </div>
    </div>
  )
}

export default ArcReactorLoader