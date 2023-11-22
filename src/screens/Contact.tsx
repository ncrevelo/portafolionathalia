import { useTranslation } from 'react-i18next';
import Linkedin from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';
import Github from '../assets/github.svg';
import Facebook from '../assets/facebook.svg';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="grid grid-rows-auto h-screen w-screen bg-pinkbg">
      <section className="flex flex-col justify-center items-center">
        <h3 className="text-center text-5xl font-bold flex-col pt-20">{t('Contact')}</h3>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start content-start justify-start">
        <section className="flex flex-col items-start content-start">

          <section className="w-[90%] sm:w-[460px] h-[400px] flex flex-col overflow-hidden rounded-tr-none border-1 bg-white rounded-3xl shadow-md mx-auto my-auto">
            <h3 className="text-center text-3xl font-bold flex-col py-8">{t('titleCard')}</h3>
            <h2 className="text-center text-2xl text-lime-800 font-semibold font-['Raleway']">{t('contactCard')}</h2>
            <p className="text-lg text-lime-800 px-5 py-6 font-semibold font-['Raleway'] leading-[27px]">{t('textCard')}</p>
          </section>
        </section>

        <section className="flex flex-col items-center justify-center">
          <button className="rounded-full bg-bcolor h-auto py-3 px-12 text-center text-white flex items-center justify-center space-x-1 mt-4">
            {t('textButton')}
          </button>
          <section className="flex flex-row py-3">
            <a href="https://co.linkedin.com/in/nathalia-cabrera-revelo" className="font-semibold py-2 px-4 rounded-md items-center">
              <img className="h-16 w-16 py-4 rounded-full bg-slate-100" src={Linkedin} alt="Linkedin img" />
            </a>
            <a href="https://www.instagram.com/_nathaliacabrera/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" className="font-semibold py-2 px-4 rounded-md items-center">
              <img className="h-16 w-16 py-3 rounded-full bg-slate-100" src={Instagram} alt="Instagram img" />
            </a>
            <a href="https://github.com/ncrevelo" className="font-semibold py-2 px-4 rounded-md items-center">
              <img className="h-16 w-16 py-3 rounded-full bg-slate-100" src={Github} alt="Github img" />
            </a>
            <a href="https://www.facebook.com/nathaliareve?mibextid=ZbWKwL" className="font-semibold py-2 px-4 rounded-md items-center">
              <img className="h-16 w-16 py-2 rounded-full bg-slate-100" src={Facebook} alt="Facebook img" />
            </a>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Contact;
