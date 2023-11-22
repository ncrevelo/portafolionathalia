import { useTranslation } from 'react-i18next';

const Galeria = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 bg-gradient-to-r from-pinkGradient to-violetGradient">
      <section className="px-4 lg:px-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-center lg:text-left">
          {t('GalleryTitulo')}
        </h2>
        <p className="text-base lg:text-xl font-Raleway max-w-md lg:max-w-xl text-bcolor whitespace-pre-line leading-normal">
          {t('textoGaleria')}
        </p>
      </section>
    </section>
  );
};

export default Galeria;
