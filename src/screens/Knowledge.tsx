import { useTranslation } from 'react-i18next';

const Knowledge = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-pinkGradient to-violetGradient w-screen h-auto sm:h-screen  flex flex-col items-center">
      <h2 className="text-3xl sm:text-5xl font-bold pt-20 sm:pb-20">{t('Conocimientos')}</h2>
      <section className="w-[90%] sm:w-[80%] md:w-[70%] sm:justify-center sm:flex sm:flex-col items-center   rounded-tr-none rounded-bl-none max-w-xl h-auto bg-white rounded-3xl shadow-md mx-auto my-10 p-8">
        <p className="text-lg sm:text-xl font-oswald text-black text-center">{t('textKnowledge')}</p>
      </section>
    </section>
  );
};

export default Knowledge;
