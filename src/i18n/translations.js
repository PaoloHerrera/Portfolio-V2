import { PERSONAL_INFO } from '../constants/personalInfo.js'
import { EXPERIENCE_ITEMS } from '../constants/experience.js'
import { NAVBAR_ITEMS } from '../constants/navbar.js'
import { PROJECTS_ITEMS } from '../constants/projects.js'
import { CONTACT_ME } from '../constants/contact.js'

export const translations = {
	en: {
		navbar: NAVBAR_ITEMS.en,
		hero: PERSONAL_INFO.en,
		experience: {
			title: 'Experience',
			jobs: EXPERIENCE_ITEMS.en,
		},
		projects: {
			title: 'Projects',
			items: PROJECTS_ITEMS.en,
		},
		skills: {
			title: 'Skills',
			tools: 'Tools',
			learning: 'Learning',
		},
		about: {
			title: 'About Me',
		},
		contact: {
			title: 'Contact',
			info: CONTACT_ME.en,
		},
		footer: {
			name: PERSONAL_INFO.en.name,
			lastName: PERSONAL_INFO.en.lastName,
			year: new Date().getFullYear(),
			profession: PERSONAL_INFO.en.profession,
			legend: 'Built with React, TailwindCSS and with ❤️',
			github: PERSONAL_INFO.en.github,
			email: PERSONAL_INFO.en.email,
		},
	},
	es: {
		navbar: NAVBAR_ITEMS.es,
		hero: PERSONAL_INFO.es,
		experience: {
			title: 'Experiencia',
			jobs: EXPERIENCE_ITEMS.es,
		},
		projects: {
			title: 'Proyectos',
			items: PROJECTS_ITEMS.es,
		},
		skills: {
			title: 'Tecnologías',
			tools: 'Herramientas',
			learning: 'Aprendiendo',
		},
		about: {
			title: 'Sobre mi',
		},
		contact: {
			title: 'Contacto',
			info: CONTACT_ME.es,
		},
		footer: {
			name: PERSONAL_INFO.es.name,
			lastName: PERSONAL_INFO.es.lastName,
			year: new Date().getFullYear(),
			profession: PERSONAL_INFO.es.profession,
			legend: 'Hecho con React, TailwindCSS y con ❤️',
			github: PERSONAL_INFO.es.github,
			email: PERSONAL_INFO.es.email,
		},
	},
}
