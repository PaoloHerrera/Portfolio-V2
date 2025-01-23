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
