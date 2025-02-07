import { HTML5 as Html5Icon } from '@/components/Shared/Icons/Frontend/HTML5.jsx'
import { CSS as CssIcon } from '@/components/Shared/Icons/Frontend/CSS.jsx'
import { JavaScript as JavaScriptIcon } from '@/components/Shared/Icons/Frontend/JavaScript.jsx'
import { TailwindCSS as TailwindCssIcon } from '@/components/Shared/Icons/Frontend/TailwindCSS.jsx'
import { Vue as VueIcon } from '@/components/Shared/Icons/Frontend/Vue.jsx'
import { React as ReactIcon } from '@/components/Shared/Icons/Frontend/React.jsx'
import { TypeScript as TypeScriptIcon } from '@/components/Shared/Icons/Frontend/TypeScript.jsx'

import { Nodejs as NodejsIcon } from '@/components/Shared/Icons/Backend/Nodejs.jsx'
import { Expressjs as ExpressjsIcon } from '@/components/Shared/Icons/Backend/Expressjs.jsx'
import { MySQL as MySqlIcon } from '@/components/Shared/Icons/Backend/MySQL.jsx'
import { Php as PhpIcon } from '@/components/Shared/Icons/Backend/Php.jsx'
import { Laravel as LaravelIcon } from '@/components/Shared/Icons/Backend/Laravel.jsx'
import { MongoDB as MongoDbIcon } from '@/components/Shared/Icons/Backend/MongoDB.jsx'

import { Git as GitIcon } from '@/components/Shared/Icons/Tools/Git.jsx'
import { Github as GithubIcon } from '@/components/Shared/Icons/Tools/Github.jsx'
import { VisualStudioCode as VisualStudioCodeIcon } from '@/components/Shared/Icons/Tools/VisualStudioCode.jsx'
import { Docker as DockerIcon } from '@/components/Shared/Icons/Tools/Docker.jsx'

import { Nextjs as NextjsIcon } from '@/components/Shared/Icons/Frontend/Nextjs.jsx'
import { Jest as JestIcon } from '@/components/Shared/Icons/Tools/Jest.jsx'
import { Playwright as PlaywrightIcon } from '@/components/Shared/Icons/Tools/Playwright.jsx'
import { Figma as FigmaIcon } from '@/components/Shared/Icons/Tools/Figma.jsx'

export const NEXTJS = {
	name: 'Next.js',
	icon: NextjsIcon,
	bgcolor: 'bg-[#1f1f1f]',
}

export const TYPESCRIPT = {
	name: 'TypeScript',
	icon: TypeScriptIcon,
	bgcolor: 'bg-[#003159]',
}

export const TAILWINDCSS = {
	name: 'TailwindCSS',
	icon: TailwindCssIcon,
	bgcolor: 'bg-[#005952]',
}

export const REACT = {
	name: 'React',
	icon: ReactIcon,
	bgcolor: 'bg-[#23272f]',
}

export const NODEJS = {
	name: 'Node.js',
	icon: NodejsIcon,
	bgcolor: 'bg-[#0d121c]',
}

export const EXPRESSJS = {
	name: 'Express',
	icon: ExpressjsIcon,
	bgcolor: 'bg-[#171d4f]',
}

export const MYSQL = {
	name: 'MySQL',
	icon: MySqlIcon,
	bgcolor: 'bg-[#000000]',
}

export const MONGODB = {
	name: 'MongoDB',
	icon: MongoDbIcon,
	bgcolor: 'bg-[#001e2b]',
}

export const HTML5 = {
	name: 'HTML',
	icon: Html5Icon,
	bgcolor: '',
}

export const CSS = {
	name: 'CSS',
	icon: CssIcon,
	bgcolor: '',
}

export const JAVASCRIPT = {
	name: 'JavaScript',
	icon: JavaScriptIcon,
	bgcolor: '',
}

export const VUE = {
	name: 'Vue',
	icon: VueIcon,
	bgcolor: '',
}

export const PHP = {
	name: 'PHP',
	icon: PhpIcon,
	bgcolor: '',
}

export const LARAVEL = {
	name: 'Laravel',
	icon: LaravelIcon,
	bgcolor: '',
}

export const GIT = {
	name: 'Git',
	icon: GitIcon,
	bgcolor: '',
}

export const GITHUB = {
	name: 'Github',
	icon: GithubIcon,
	bgcolor: '',
}

export const VSCODE = {
	name: 'Visual Studio Code',
	icon: VisualStudioCodeIcon,
	bgcolor: '',
}

export const DOCKER = {
	name: 'Docker',
	icon: DockerIcon,
	bgcolor: '',
}

export const JEST = {
	name: 'Jest',
	icon: JestIcon,
	bgcolor: '',
}

export const PLAYWRIGHT = {
	name: 'Playwright',
	icon: PlaywrightIcon,
	bgcolor: '',
}

export const FIGMA = {
	name: 'Figma',
	icon: FigmaIcon,
	bgcolor: '',
}

export const FRONTEND = {
	name: 'Frontend',
	items: [
		{ id: 1, ...HTML5 },
		{ id: 2, ...CSS },
		{ id: 3, ...JAVASCRIPT },
		{ id: 4, ...TAILWINDCSS },
		{ id: 5, ...VUE },
		{ id: 6, ...REACT },
		{ id: 7, ...TYPESCRIPT },
	],
}

export const BACKEND = {
	name: 'Backend',
	items: [
		{ id: 1, ...NODEJS },
		{ id: 2, ...EXPRESSJS },
		{ id: 3, ...MYSQL },
		{ id: 4, ...PHP },
		{ id: 5, ...LARAVEL },
		{ id: 6, ...MONGODB },
	],
}

export const TOOLS = {
	name: {
		es: 'Herramientas',
		en: 'Tools',
	},
	items: [
		{ id: 1, ...GIT },
		{ id: 2, ...GITHUB },
		{ id: 3, ...VSCODE },
		{ id: 4, ...DOCKER },
	],
}

export const LEARNING = {
	name: {
		es: 'Aprendiendo',
		en: 'Learning',
	},
	items: [
		{ id: 1, ...NEXTJS },
		{ id: 2, ...JEST },
		{ id: 3, ...PLAYWRIGHT },
		{ id: 4, ...FIGMA },
	],
}
