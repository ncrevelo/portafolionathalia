import { useTranslation } from 'react-i18next';
import Logo from '../assets/logotipo.webp';

const Contact
 = () => {
    const { t } = useTranslation();

    return (
        <section className=" flex flex-col  items-center w-screen bg-gradient-to-r from-pinkGradient to-violetGradient h-56">
            <img className="h-34  w-52 pt-5" src= {Logo} alt="logo" />
            <div className="w-96 text-center text-lime-800 text-xl font-medium font-['Raleway'] leading-relaxed">{t('Hecho')} 💜🤖<br/> Nathalia Cabrera- 2023</div>
        </section>
        
    );
};

export default Contact
;