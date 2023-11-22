import { useTranslation } from 'react-i18next';
import { languageData } from '../data/data';
import { useState, useEffect } from 'react';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


const Header = () => {
  const { i18n, t } = useTranslation();

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

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };


  const desktopView = (
    <header className='h-14 grid grid-cols-2 items-center justify-around bg-transparent'>

        <section className='h-full w-full bg-gradient-to-r from-pinkGradient to-violetGradient ' >

        <section className='flex items-end justify-between  pr-4'>
          <img  className= " h-12 w-auto pt-1" src="src/assets/logotipo.webp" alt="logo" />

        <select
        defaultValue={i18n.language}
        onChange={onChangeLang}
        className='block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500'
      >
        
        {languageData().map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>

      </section>
        </section>

        <section className='bg-pinkbg w-full h-full flex flex-rows items-center px-5 justify-center space-x-2'>
            <button className="w-[80px] h-5 px-0 justify-center pb-6 text-bcolor bg-transparent  rounded-lg"><p>{t('Home')} </p></button>
            <button className="w-[80px] h-5 justify-center pb-6 text-bcolor bg-transparent  rounded-lg">{t('About')}</button>
            <button className="w-[80px] h-5 justify-center pb-6 text-bcolor bg-transparent  rounded-lg">{t('Gallery')}</button>
            <button className="w-[80px] h-5 justify-center pb-6 text-bcolor bg-transparent  rounded-lg">{t('Skills')}</button>
            <button className="w-[80px] h-5  justify-center pb-6 text-bcolor bg-transparent  rounded-lg">{t('Portafolio')}</button>
            <button className="rounded-full bg-bcolor w-[150px] h-[40px] py-1 text-center text-white flex items-center justify-center space-x-1">
            <span>{t('Contact')}</span>
            </button>
        </section>
    </header>
  )



    const mobileView=(
        <header className='h-auto lg:h-14 grid grid-cols-2 items-center justify-around bg-transparent'>
      <section className='h-full w-full lg:w-auto bg-gradient-to-r from-pinkGradient to-violetGradient'>
        <section className='flex items-end justify-between pr-4'>
          <img className="h-12 w-auto pt-1" src="src/assets/logotipo.webp" alt="logo" />
          <select
            defaultValue={i18n.language}
            onChange={onChangeLang}
            className='block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm lg:w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500'
          >
            {languageData().map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </section>
      </section>

      <section className='bg-pinkbg w-full h-full lg:h-auto flex flex-col lg:flex-row items-center lg:px-5 justify-center lg:space-x-2'>
        <section className=''>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="rounded-full bg-bcolor w-[150px] h-[40px] py-1 text-center text-white flex items-center justify-center space-x-1">
                <span>{t('Menu')}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{t('Menu')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{t('Home')}</DropdownMenuItem>
              <DropdownMenuItem>{t('About')}</DropdownMenuItem>
              <DropdownMenuItem>{t('Gallery')}</DropdownMenuItem>
              <DropdownMenuItem>{t('Skills')}</DropdownMenuItem>
              <DropdownMenuItem>{t('Portafolio')}</DropdownMenuItem>
              <DropdownMenuItem>{t('Contact')}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </section>
    </header>
    )
  return (

    <div>
    {/* Renderiza la vista según el tamaño de la pantalla */}
    {isMobile ? mobileView : desktopView}
  </div>
    

  );
};

export default Header;
