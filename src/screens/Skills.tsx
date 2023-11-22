import { useTranslation } from 'react-i18next';
import python from '../assets/python.svg'
import js from '../assets/js.svg'
import ts from '../assets/ts.svg'
import wordpress from '../assets/wp.svg'
const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-pinkbg h-auto flex flex-col items-center justify-center py-10 sm:py-12">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold py-4">{t('Skills')}</h2>
      <button className="rounded-full bg-bcolor w-40 h-10 py-1 text-center text-white flex items-center justify-center space-x-1 mb-6">{t('Conocimientos')}</button>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-20">

        <section className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4  ">
          <section className="pb-4 pt-2 flex justify-items-start text-lime-800 text-3xl font-semibold font-Raleway">Python</section>
          <img className="h-40 sm:h-52" src={python} alt="python svg" />
          <section className="py-2 text-neutral-900 text-lg font-semibold font-Raleway">{t('algoritmos')}</section>
          <section className="text-lime-800 text-sm font-semibold font-Raleway leading-6 ">{t('familiaridad')}</section>
        </section>

        <section className="flex flex-col items-center justify-center h-auo sm:h-96 w-60 sm:py-10 py-4">
          <section className="pb-1 flex justify-items-start text-lime-800 text-3xl font-semibold font-Raleway">JavaScript</section>
          <img className="h-44 sm:h-52" src={js} alt="js svg" />
          <section className="py-2 text-neutral-900 text-lg font-semibold font-Raleway">{t('poo')}</section>
          <section className="text-lime-800 text-sm font-semibold font-Raleway leading-6">{t('cono')}</section>
        </section>

        <section className="flex flex-col items-center justify-center h-auo sm:h-96 w-60 sm:py-10 py-4">
          <section className="pb-1 flex justify-items-start text-lime-800 text-3xl font-semibold font-Raleway">TypeScript</section>
          <img className="h-44 sm:h-48" src={ts} alt="ts svg" />
          <section className="py-4 text-neutral-900 text-lg font-semibold font-Raleway">{t('wd')}</section>
          <section className="text-lime-800 text-sm font-semibold font-Raleway leading-6">{t('tsd')}</section>
        </section>

        <section className="flex flex-col items-center justify-center h-auo sm:h-96 w-60 sm:py-10 py-4 ">
          <section className="pb-1 flex justify-items-start text-lime-800 text-3xl font-semibold font-Raleway">WordPress</section>
          <img className="h-44 sm:h-56" src={wordpress} alt="wordpress svg" />
          <section className="py-2 text-neutral-900 text-lg font-semibold font-Raleway">{t('xpw')}</section>
          <section className="text-lime-800 text-sm font-semibold font-Raleway leading-6">{t('descw')}</section>
        </section>
      </section>
    </section>

    
  );
};

export default Skills;