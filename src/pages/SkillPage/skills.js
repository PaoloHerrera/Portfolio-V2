import { HTML5 } from '@/components/Shared/Icons/Frontend/HTML5.jsx'
import { CSS } from '@/components/Shared/Icons/Frontend/CSS.jsx'
import { JavaScript } from '@/components/Shared/Icons/Frontend/JavaScript.jsx'
import { TailwindCSS } from '@/components/Shared/Icons/Frontend/TailwindCSS.jsx'
import { Vue } from '@/components/Shared/Icons/Frontend/Vue.jsx'
import { React } from '@/components/Shared/Icons/Frontend/React.jsx'
import { TypeScript } from '@/components/Shared/Icons/Frontend/TypeScript.jsx'

import { Nodejs } from '@/components/Shared/Icons/Backend/Nodejs.jsx'
import { Expressjs } from '@/components/Shared/Icons/Backend/Expressjs.jsx'
import { MySQL } from '@/components/Shared/Icons/Backend/MySQL.jsx'
import { Php } from '@/components/Shared/Icons/Backend/Php.jsx'
import { Laravel } from '@/components/Shared/Icons/Backend/Laravel.jsx'

import { Git } from '@/components/Shared/Icons/Tools/Git.jsx'
import { Github } from '@/components/Shared/Icons/Tools/Github.jsx'
import { VisualStudioCode } from '@/components/Shared/Icons/Tools/VisualStudioCode.jsx'
import { Docker } from '@/components/Shared/Icons/Tools/Docker.jsx'

import { Nextjs } from '@/components/Shared/Icons/Frontend/Nextjs.jsx'
import { Jest } from '@/components/Shared/Icons/Tools/Jest.jsx'
import { Playwright } from '@/components/Shared/Icons/Tools/Playwright.jsx'

export const frontend = {
	name: 'Frontend',
	items: [
		{ id: 1, name: 'HTML5', icon: HTML5 },
		{ id: 2, name: 'CSS', icon: CSS },
		{ id: 3, name: 'JavaScript', icon: JavaScript },
		{ id: 4, name: 'TailwindCSS', icon: TailwindCSS },
		{ id: 5, name: 'Vue', icon: Vue },
		{ id: 6, name: 'React', icon: React },
		{ id: 7, name: 'TypeScript', icon: TypeScript },
	],
}

export const backend = {
	name: 'Backend',
	items: [
		{ id: 1, name: 'Node.js', icon: Nodejs },
		{ id: 2, name: 'Express', icon: Expressjs },
		{ id: 3, name: 'MySQL', icon: MySQL },
		{ id: 4, name: 'PHP', icon: Php },
		{ id: 5, name: 'Laravel', icon: Laravel },
	],
}

export const tools = {
	name: 'Herramientas',
	items: [
		{ id: 1, name: 'Git', icon: Git },
		{ id: 2, name: 'Github', icon: Github },
		{ id: 3, name: 'VS Code', icon: VisualStudioCode },
		{ id: 4, name: 'Docker', icon: Docker },
	],
}

export const learning = {
	name: 'Aprendiendo',
	items: [
		{ id: 1, name: 'Next.js', icon: Nextjs },
		{ id: 2, name: 'Jest', icon: Jest },
		{ id: 3, name: 'Playwright', icon: Playwright },
	],
}
