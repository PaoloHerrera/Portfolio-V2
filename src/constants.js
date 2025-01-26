export const PROFESSIONAL_INFORMATION = {
	name: 'Paolo',
	lastName: 'Herrera',
	profession: 'Ingeniero de Software',
	presentation: 'Especializado en Desarrollo Web Fullstack',
	email: 'paolo.herrera.araya@gmail.com',
	github: 'https://github.com/PaoloHerrera',
	image: {
		url: 'photos/Paolo_01.webp',
		alt: 'Foto de Paolo Herrera en blanco y negro y mirando a la cámara',
	},
	cv: {
		name: 'Descargar CV',
		link: '/assets/CV_Paolo_Herrera.pdf',
	},
}

export const EXPERIENCE_ITEMS = [
	{
		id: 1,
		company: 'Tecbros LLC.',
		date: 'Marzo 2019 - Marzo 2023',
		role: 'Ingeniero de Software Fullstack',
		city: 'Santiago',
		country: 'Chile',
		description: [
			'Desarrollador sistema de Renegociación, Refinanciamiento y Compromiso de Pago para una importante empresa de Retail.',
			'Diseño y desarrollo de un CRM para un importante banco de Chile.',
			'Diseño y desarrollo de un sistema personalizado de envíos de Emails y SMS para un importante banco de Chile.',
		],
	},
	{
		id: 2,
		company: 'Whitemail Singapur SPA.',
		date: 'Septiembre 2018 - Diciembre 2022',
		role: 'Ingeniero de Software Fullstack',
		city: 'Santiago',
		country: 'Chile',
		description: [
			'Desarrollador de un sistema de gestión de envíos masivos Emails y SMS.',
			'Desarrollador de landing pages y sitios web para campañas de cobranza.',
			'Soporte y comunicación con clientes y stakeholders.',
		],
	},
	{
		id: 3,
		company: 'Yami SPA.',
		date: 'Julio 2017 - Agosto 2018',
		role: 'Ingeniero de Software Fullstack',
		city: 'Santiago',
		country: 'Chile',
		description: [
			'Diseño y desarrollo de la plataforma web principal para usuarios y del dashboard de administración para los clientes.',
			'Diseño y gestión de la base de datos.',
			'Diseño de la arquitectura de la plataforma web principal',
		],
	},
]

export const NAVBAR_BRAND = {
	name: 'Paolo',
	link: '#home',
	last: '.',
}

export const NAVBAR_ITEMS = [
	{
		id: 1,
		name: 'Home',
		link: '#home',
	},
	{
		id: 2,
		name: 'Experiencia',
		link: '#experience',
	},
	{
		id: 3,
		name: 'Proyectos',
		link: '#projects',
	},
	{
		id: 4,
		name: 'Habilidades',
		link: '#skills',
	},
	{
		id: 5,
		name: 'Sobre Mí',
		link: '#about',
	},
	{
		id: 6,
		name: 'Contacto',
		link: '#contact',
	},
]

export const PROJECTS_ITEMS = [
	{
		id: 1,
		name: 'Fretora',
		link: 'https://fretora.com/',
		github: 'https://github.com/PaoloHerrera/fretora-frontend',
		image:
			'https://images.pexels.com/photos/28539583/pexels-photo-28539583/free-photo-of-majestuosos-picos-de-montana-al-amanecer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
		alt: 'Imagen de la página principal de Fretora',
		description:
			'Demo de un E-commerce de guitarras que diseñé y desarrollé desde cero. Combina una interfáz moderna con un backend robusto, integrando funcionalidades clave como carrito de compras dinámico, búsqueda avanzada de guitarras y simulación de checkout.',
		description2:
			'Los usuarios pueden explorar guitarras con filtros avanzados (tipo, marca, precio), gestionar pedidos en tiempo real y simular compras con Stripe.',
		description3:
			'El sistema fue desarrollado primero en React y luego migrado a NextJS, esto es debido a que NextJS ofrece un mejor rendimiento y mejora en el SEO debido a su optimización avanzada. Este proyecto demuestra mi capacidad para crear soluciones completas, priorizando tanto la experiencia de usuario como la eficiencia técnica.',
		technologies: [
			'NextJS',
			'TypeScript',
			'TailwindCSS',
			'NodeJS',
			'MongoDB',
			'ExpressJS',
		],
	},
	{
		id: 2,
		name: 'Min-URL',
		link: 'https://min-url.com/',
		github: 'https://github.com/PaoloHerrera/min-url-frontend',
		image:
			'https://images.pexels.com/photos/30243449/pexels-photo-30243449/free-photo-of-majestuosos-picos-nevados-en-invierno.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
		alt: 'Imagen de la página principal de Min-URL',
		description:
			'Acortador de URLs fullstack que combina simplicidad con seguridad. Diseñado y desarrollado íntegramente por mí, permite a usuarios y empresas convertir enlaces largos en short URLs y códigos QR descargables en segundos.',
		description2:
			'El sistema prioriza la seguridad rendimiento desde su núcleo: integra Google reCAPTCHA v3 para bloquear bots, limita usuarios a 3 URLs gratuitas para evitar abusos, y bloquea automáticamente URLs sospechosas mediante un algoritmo propio que analiza enlaces sospechosos. Además, utiliza Cloudflare para mitigar DDoS y garantizar escalabilidad. Este enfoque refleja mi capacidad para desarrollar soluciones técnicas eficientes, combinando protección proactiva con rendimiento robusto.',
		description3:
			'En un futuro, planeo agregar funcionalidades claves como la creación de URLs personalizadas, la caducidad de URLs por fecha definida por el usuario y un dashboard de administración para la gestión y monitoreo de URLs.',
		technologies: ['React', 'TailwindCSS', 'NodeJS', 'MySQL', 'ExpressJS'],
	},
	{
		id: 3,
		name: 'Google Translate Clone',
		link: 'https://google-clone-paolo.vercel.app/',
		github: 'https://github.com/PaoloHerrera/google-translate-clone',
		image:
			'https://images.pexels.com/photos/29933587/pexels-photo-29933587/free-photo-of-montana-schynige-platte.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
		alt: 'Imagen de la página de Google Translate Clone',
		description:
			'Este es un proyecto que es un traductor basado en Google Translate, desarrollado en el curso de React de @midudev. El objetivo principal fue aprender a usar TypeScript, React y la API de OpenAI.',
		description2:
			'El sistema incorpora un sitema de debounce para evitar la carga excesiva de la API, incorporación de 9 idiomas y un sistema de lectura de voz para los textos traducidos.',
		description3:
			'Para el futuro, se planea agregar funcionalidades como la traducción por voz, el historial de traducciones y la capacidad de traducir textos en diferentes idiomas a la vez.',
		technologies: ['React', 'TypeScript', 'NodeJS', 'ExpressJS'],
	},
]
