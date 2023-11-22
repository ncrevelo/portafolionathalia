import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Portada from "../assets/portada.png"



const Home = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const desktopView =(
    <section className="grid grid-cols-2 h-screen w-screen">
    <section className="  bg-gradient-to-r from-pinkGradient to-violetGradient py-4 flex items-center justify-center h-screen">
        <section className='pl-10   text-left'>
            <h1 className="text-left text-4xl  py-2 font-Raleway flex-col order-start">{t('Bienvenido')}</h1>
            <h2 className="text-left text-6xl py-2 font-bold flex-col order-start">Nathalia Cabrera</h2>
            <h2 className=" flex flex-col order-2 py-2 text-left justify-center font-Montserrat font-normal text-5xl">Software</h2>
            <p className=' py-2 text-2xl text-left font-Raleway max-w-lg text-bcolor  whitespace-pre-line leading-normal  '>{t('textoPresent')}</p>
        </section>
        </section>
        <section className="bg-pinkbg flex flex-col items-center justify-end h-screen">
  <img className='h-[600px]  mb-0 h-w-full' src={Portada} alt="Portada" />
</section>
</section>
)

 const mobileView =(
    <section className="grid grid-rows-2 lg:grid-cols-2 lg:h-screen">
      <section className="bg-pinkbg lg:row-auto lg:col-span-1 flex items-end justify-center lg:justify-end">
        <img className=' lg:h-[600px] lg:w-auto w-80 h-80 justify-end items-end' src={Portada} alt="Portada" />
      </section>

      <section className="bg-gradient-to-r from-pinkGradient to-violetGradient py-4 flex flex-col items-center lg:justify-center lg:items-start lg:py-0 lg:pl-10 lg:col-span-1">
        <div className='text-center lg:text-left'>
          <h1 className="text-4xl py-2 font-Raleway">{t('Bienvenido')}</h1>
          <h2 className="text-6xl py-2 font-bold">{t('Nathalia Cabrera')}</h2>
          <h2 className="py-2 text-5xl font-Montserrat font-normal">{t('Software')}</h2>
          <p className='py-2 text-2xl font-Raleway max-w-lg text-bcolor whitespace-pre-line leading-normal'>{t('textoPresent')}</p>
        </div>
      </section>
    </section>
  )




  return (
    <div>
    {isMobile ? mobileView : desktopView}
  </div>
);
};

export default Home;