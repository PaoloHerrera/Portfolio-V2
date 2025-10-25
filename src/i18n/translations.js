import { ABOUT_ME } from '../constants/about.js'
import { CONTACT_ME } from '../constants/contact.js'
import { EXPERIENCE_ITEMS } from '../constants/experience.js'
import { NAVBAR_ITEMS } from '../constants/navbar.js'
import { PERSONAL_INFO } from '../constants/personalInfo.js'
import { PROJECTS_ITEMS } from '../constants/projects.js'

export const translations = {
	en: {
		navbar: NAVBAR_ITEMS.en,
		hero: {
			profession: PERSONAL_INFO.profession.en,
			description: PERSONAL_INFO.description.en,
			alt: PERSONAL_INFO.image.alt.en,
			cv: {
				name: PERSONAL_INFO.cv.name.en,
			},
		},
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
			alt: ABOUT_ME.alt.en,
		},
		contact: {
			title: 'Contact',
			info: CONTACT_ME.en,
		},
		footer: {
			profession: PERSONAL_INFO.profession.en,
			legend: 'Built with React, TailwindCSS, Motion and with ❤️',
		},
	},
	es: {
		navbar: NAVBAR_ITEMS.es,
		hero: {
			profession: PERSONAL_INFO.profession.es,
			description: PERSONAL_INFO.description.es,
			alt: PERSONAL_INFO.image.alt.es,
			cv: {
				name: PERSONAL_INFO.cv.name.es,
			},
		},
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
			title: 'Sobre mí',
			alt: ABOUT_ME.alt.es,
		},
		contact: {
			title: 'Contacto',
			info: CONTACT_ME.es,
		},
		footer: {
			profession: PERSONAL_INFO.profession.es,
			legend: 'Hecho con React, TailwindCSS, Motion y con ❤️',
		},
	},
}
