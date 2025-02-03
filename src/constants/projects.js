import {
	NEXTJS,
	TYPESCRIPT,
	TAILWINDCSS,
	NODEJS,
	MONGODB,
	EXPRESSJS,
	REACT,
	MYSQL,
} from './skills.js'

export const PROJECTS_ITEMS = {
	en: [
		{
			id: 1,
			name: 'Fretora',
			link: 'https://fretora.com/',
			github: 'https://github.com/PaoloHerrera/fretora-frontend',
			image:
				'https://images.pexels.com/photos/28539583/pexels-photo-28539583/free-photo-of-majestuosos-picos-de-montana-al-amanecer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
			alt: 'Image of Fretora page',
			description:
				'Demo of a E-commerce made from scratch. Combines a modern interface with a robust backend, integrating key features like dynamic cart, advanced guitar search and checkout simulation.',
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
			alt: 'Image of Min-URL page',
			description:
				'URL shortener that combines simplicity with security. Designed and developed entirely by me, allows users and companies to convert long URLs into short and downloadable QR codes in seconds.',
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
			alt: 'Image of Google Translate Clone page',
			description:
				'This is a clone of Google Translate, developed in the React course of @midudev. The main objective was to learn TypeScript, React and the OpenAI API.',
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
	],
	es: [
		{
			id: 1,
			name: 'Fretora',
			link: 'https://fretora.com/',
			github: 'https://github.com/PaoloHerrera/fretora-frontend',
			image:
				'https://images.pexels.com/photos/28539583/pexels-photo-28539583/free-photo-of-majestuosos-picos-de-montana-al-amanecer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
			alt: 'Imagen de la página de Fretora',
			description:
				'Demo de un e-commerce hecho desde cero. Combina una interfaz moderna con un backend robusto, integrando características clave como carrito dinámico, búsqueda avanzada de guitarras y simulación de pago.',
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
			alt: 'Imagen de la página de Min-URL',
			description:
				'Acortador de URL que combina simplicidad con seguridad. Desarrollado por mi mismo, permite a los usuarios y empresas convertir URLs largas en cortas y códigos QR en segundos.',
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
			name: 'Clon de Google Translate',
			link: 'https://google-clone-paolo.vercel.app/',
			github: 'https://github.com/PaoloHerrera/google-translate-clone',
			image:
				'https://images.pexels.com/photos/30426849/pexels-photo-30426849/free-photo-of-escena-urbana-en-bicicleta-en-blanco-y-negro.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
			alt: 'Imagen de la página de Clon de Google Translate',
			description:
				'Este es un clon de Google Translate, desarrollado en el curso de React de @midudev. El objetivo principal era aprender TypeScript, React y la API OpenAI.',
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
	],
}
