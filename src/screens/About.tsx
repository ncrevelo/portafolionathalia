import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Portada from "src/assets/portada2.png"


const About = () => {
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



const desktopView = (
    <section className="grid grid-cols-2 h-screen w-screen">
        <section className="bg-pinkbg flex flex-col items-center justify-end h-screen">
  <img className='h-[600px]  mb-0 h-w-full' src={Portada} alt="Portada" />
</section>
        <section className="bg-white py-4 flex items-center justify-center bg-gradient-to-r from-pinkGradient to-violetGradient ">
            <section className='w-full text-center justify-center flex flex-col items-center'>
                <h2 className=" text-center text-5xl font-bold flex-col order-start" >{t('SobreMi')}</h2>
                <p className=' py-2 text-xl text-justify font-Raleway max-w-lg text-bcolor  whitespace-pre-line leading-normal  '>{t('textoSobre')}</p>
            </section> 
        </section>
        </section>
)

const mobileView =(
    <section className="grid grid-rows-2 lg:grid-cols-2 lg:h-screen">
      <section className="bg-pinkbg lg:row-auto lg:col-span-1 flex items-end justify-center lg:justify-end">
        <img className='lg:h-[600px] lg:w-auto w-auto h-80 justify-end items-end' src={Portada} alt="Portada" />
      </section>

      <section className="bg-gradient-to-r from-pinkGradient to-violetGradient py-4 flex flex-col items-center lg:justify-center lg:items-start lg:py-0 lg:pl-10 lg:col-span-1">
        <div className='text-center lg:text-left'>
          <h2 className="text-5xl font-bold flex-col order-start">{t('SobreMi')}</h2>
          <p className='py-2 text-xl font-Raleway max-w-lg text-bcolor whitespace-pre-line leading-normal'>{t('textoSobre')}</p>
        </div>
      </section>
    </section>
  )

  return (
    <div>
    {/* Renderiza la vista según el tamaño de la pantalla */}
    {isMobile ? mobileView : desktopView}
  </div>
  );
};

export default About;
