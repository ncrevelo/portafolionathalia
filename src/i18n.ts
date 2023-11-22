import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        
        Home: 'Home',
        About: 'About',
        Contact: 'Contact',
        Gallery: 'Gallery',
        Skills: 'Skills',
        Bienvenido: 'Welcome',
        textoPresent: 'Connect through Communication, Impact through Action and transform with Programming.',
        SobreMi :'About me',
        textoSobre:'I am a person passionate about life and everything it offers. As an actress and presenter I immerse myself in the magic of these two professions, becoming passionate about every opportunity to connect with the public and tell captivating stories. I am training as a software engineer, acquiring a taste for programming, especially in the Frontend area, where I like to guarantee a positive user experience. This duality in my life allows me to approach problems creatively and logically. I consider programming to be another form of artistic expression, where I can create unique and functional solutions.',
        GalleryTitulo: 'Gallery',
        textoGaleria:'Explore my creative world through this gallery. Here you will find a sample of my love for art, my work and nature.',
        algoritmos: 'Algorithms and Advanced Data Structures',
        familiaridad: 'Familiarity with advanced data structures such as stacks, queues, trees, and graphs, as well as the ability to implement efficient algorithms.',
        poo:'Object-Oriented Programming',
        cono:'Knowledge of how to work with classes, objects, inheritance, encapsulation, polymorphism, etc.',
        wd:'Web development Front End',
        tsd:'Use of TypeScript in the development of front-end web applications, mainly with frameworks such as React.',
        Conocimientos: 'knowledge',
        xpw:'WordPress Experience',
        descw: 'Content Management, Custom Theme Development: Plugin Development and Optimization and Security.',
        textKnowledge:'My knowledge and experience is still limited, but my enthusiasm for learning is broad. I am exploring fundamental concepts of programming. I have worked with programming languages ​​such as Python, JavaScript, C#, TypeScript, Java; I have also made web pages in WordPress.',
        titleCard:'I would like to know of you',
        contactCard:'Contact me',
        textCard:'I thank you for taking the time to explore my portfolio. If you find that my experience and services can enrich your project or if you have any questions, do not hesitate to contact me. I am here to collaborate and answer your questions. I hope to have the opportunity to work with you!',
        textButton:'Send message',
        Hecho:'Made with love',
      },
    },
    es: {
      translation: {
        Home: 'Inicio',
        About: 'Acerca de',
        Contact: 'Contacto',
        Gallery: 'Galería',
        Skills: 'Habilidades',
        Bienvenido: 'Bienvenido',
        textoPresent: 'Conectar a través de la Comunicación, Impactar a través de la Acción y transformar con Programación.',
        SobreMi :'Sobre Mi',
        textoSobre:'Soy una persona apasionada por la vida y todo lo que ofrece. Como actriz y presentadora me introduzco en la magia de estas dos profesiones, apasionándome con cada oportunidad para conectar con el público y contar historias cautivadoras. Estoy formandome como ingeriera de softaware, adquieriendo gusto por la programacion, especialmnete en el área Frontend, donde me gusta garantizar una experiencia de usuario positiva. Esta dualidad en mi vida me permite abordar problemas de manera creativa y lógica. Considero que la programación es otra forma de expresión artística, donde puedo crear soluciones únicas y funcionales.',
        GalleryTitulo: 'Galería',
        textoGaleria : 'Explora mi mundo creativo a través de esta galería. Aquí encontrarás una muestra de mi amor por el arte , mi trabajo y la naturaleza. ',
        algoritmos: 'Algoritmos y Estructuras Avanzadas de Datos',
        familiaridad : ' Familiaridad con estructuras de datos avanzadas como pilas, colas, árboles y grafos, así como la capacidad para implementar algoritmos eficientes.',
        poo: 'Programación Orientada a Objetos',
        cono: ' Conocimientos sobre cómo trabajar con clases, objetos, herencia, encapsulamiento, polimorfismo, etc.',
        wd: 'Desarrollo Web Front End',
        tsd:'Uso de TypeScript en el desarrollo de aplicaciones web front-end, principalmente con frameworks como React.',
        Conocimientos: 'Conocimientos',
        xpw:'Experiencia de WordPress',
        descw: 'Gestion de Contenido, Desarrollo de Temas Personalizados: Desarrollo de Plugins y Optimización y Seguridad.',
        textKnowledge: 'Mis conocimientos y experiencia aun son limitados, pero mi entusiasmo por aprender es amplio. Me encuentro explorando conceptos fundamentales de la programación, He trabajado con  lenguajes de programación como Python, JavaScript, C#, TypeScript ,Java; asi mismo he realizado paginas web en wordpress. ',
        titleCard:'Me gustaria saber de ti ',
        contactCard:'Contactame',
        textCard:'Te agradezco por tomarte el tiempo de explorar mi portafolio. Si encuentras que mi experiencia y servicios pueden enriquecer tu proyecto o si tienes alguna consulta, no dudes en contactarme. Estoy aquí para colaborar y responder a tus preguntas. ¡Espero tener la oportunidad de trabajar contigo!',
        textButton:'Enviar mensaje',
        Hecho:'Hecho con amor',
          },

    },

  },
});

export default i18n;