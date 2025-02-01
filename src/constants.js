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
		date: 'Mar. 2019 - Mar. 2023',
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
		date: 'Sep. 2018 - Dic. 2022',
		role: 'Ingeniero de Software Fullstack',
		city: 'Santiago',
		country: 'Chile',
		description: [
			'Parte de un equipo que desarrolló un sistema de gestión de envíos masivos Emails y SMS.',
			'Desarrollador de landing pages y sitios web para campañas de cobranza.',
			'Gestión de la base de datos.',
		],
	},
	{
		id: 3,
		company: 'Yami SPA.',
		date: 'Jul. 2017 - Ago. 2018',
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
		name: 'Tecnologías',
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

import { TailwindCSS as tailwindCssIcon } from '@/components/Shared/Icons/Frontend/TailwindCSS.jsx'

import { React as ReactIcon } from '@/components/Shared/Icons/Frontend/React.jsx'
import { TypeScript as TypeScriptIcon } from '@/components/Shared/Icons/Frontend/TypeScript.jsx'

import { Nodejs as NodejsIcon } from '@/components/Shared/Icons/Backend/Nodejs.jsx'
import { Expressjs as ExpressjsIcon } from '@/components/Shared/Icons/Backend/Expressjs.jsx'
import { MySQL as mySqlIcon } from '@/components/Shared/Icons/Backend/MySQL.jsx'
import { MongoDB as mongoDbIcon } from '@/components/Shared/Icons/Backend/MongoDB.jsx'

import { Nextjs as NextjsIcon } from '@/components/Shared/Icons/Frontend/Nextjs.jsx'

const NEXTJS = {
	name: 'Next.js',
	icon: NextjsIcon,
	bgcolor: 'bg-[#1f1f1f]',
}

const TYPESCRIPT = {
	name: 'TypeScript',
	icon: TypeScriptIcon,
	bgcolor: 'bg-[#003159]',
}

const TAILWINDCSS = {
	name: 'TailwindCSS',
	icon: tailwindCssIcon,
	bgcolor: 'bg-[#005952]',
}

const REACT = {
	name: 'React',
	icon: ReactIcon,
	bgcolor: 'bg-[#23272f]',
}

const NODEJS = {
	name: 'Node.js',
	icon: NodejsIcon,
	bgcolor: 'bg-[#75a044]',
}

const EXPRESSJS = {
	name: 'Express',
	icon: ExpressjsIcon,
	bgcolor: 'bg-[#171d4f]',
}

const MYSQL = {
	name: 'MySQL',
	icon: mySqlIcon,
	bgcolor: 'bg-[#5180c3]',
}

const MONGODB = {
	name: 'MongoDB',
	icon: mongoDbIcon,
	bgcolor: 'bg-[#45a044]',
}

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
			{
				id: 1,
				...NEXTJS,
			},
			{
				id: 2,
				...TYPESCRIPT,
			},
			{
				id: 3,
				...TAILWINDCSS,
			},
			{
				id: 4,
				...NODEJS,
			},
			{
				id: 5,
				...MONGODB,
			},
			{
				id: 6,
				...EXPRESSJS,
			},
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
		technologies: [
			{
				id: 1,
				...REACT,
			},
			{
				id: 2,
				...TYPESCRIPT,
			},
			{
				id: 3,
				...TAILWINDCSS,
			},
			{
				id: 4,
				...NODEJS,
			},
			{
				id: 5,
				...MYSQL,
			},

			{
				id: 6,
				...EXPRESSJS,
			},
		],
	},
	{
		id: 3,
		name: 'Google Translate Clone',
		link: 'https://google-clone-paolo.vercel.app/',
		github: 'https://github.com/PaoloHerrera/google-translate-clone',
		image:
			'https://images.pexels.com/photos/30426849/pexels-photo-30426849/free-photo-of-escena-urbana-en-bicicleta-en-blanco-y-negro.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
		alt: 'Imagen de la página de Google Translate Clone',
		description:
			'Este es un proyecto que es un traductor basado en Google Translate, desarrollado en el curso de React de @midudev. El objetivo principal fue aprender a usar TypeScript, React y la API de OpenAI.',
		description2:
			'El sistema incorpora un sitema de debounce para evitar la carga excesiva de la API, incorporación de 9 idiomas y un sistema de lectura de voz para los textos traducidos.',
		description3:
			'Para el futuro, se planea agregar funcionalidades como la traducción por voz, el historial de traducciones y la capacidad de traducir textos en diferentes idiomas a la vez.',
		technologies: [
			{
				id: 1,
				...REACT,
			},
			{
				id: 2,
				...TYPESCRIPT,
			},
			{
				id: 3,
				...TAILWINDCSS,
			},
			{
				id: 4,
				...NODEJS,
			},
			{
				id: 5,
				...MONGODB,
			},
		],
	},
]

export const CONTACTME = {
	header: '¡Hablemos!',
	description:
		'Estoy disponible para trabajar en proyectos de desarrollo web. Si tienes alguna pregunta o colaboración, no dudes en contactarme.',
	email: 'paolo.herrera.araya@gmail.com',
	address: {
		city: 'Santiago',
		country: 'Chile',
	},
	labels: {
		name: 'Nombre',
		email: 'Email',
		message: 'Mensaje',
	},
	placeholders: {
		name: 'Juan Pérez',
		email: 'juanperez@example.com',
		message: 'Tu mensaje',
	},
}
