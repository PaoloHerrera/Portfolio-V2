import { PageTitle } from '@/pages/PageTitle.jsx'
import { SpotlightCard } from '@/components/Shared/SpotlightCard/SpotlightCard.jsx'

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
import { VisualStudioCode } from '@/components/Shared/Icons/Tools/VisualStudioCode'
import { Docker } from '@/components/Shared/Icons/Tools/Docker.jsx'

import { Nextjs } from '@/components/Shared/Icons/Frontend/Nextjs.jsx'
import { Jest } from '@/components/Shared/Icons/Tools/Jest.jsx'
import { Playwright } from '@/components/Shared/Icons/Tools/Playwright.jsx'

import styles from './Skills.module.css'

export const Skills = () => {
	return (
		<section id="skills" className={styles.skillsContainer}>
			<PageTitle title="Tecnologías" />

			<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-14 mt-10">
				<article className="w-full relative min-h-[300px]">
					<SpotlightCard
						spotlightColor="rgba(255, 255, 255, 0.25)"
						className="h-full"
					>
						<div className="flex flex-col gap-14 items-center justify-center h-full">
							<h3 className="font-bold lg:text-4xl text-2xl">Frontend</h3>
							<div className="w-full flex flex-row gap-14 justify-center flex-wrap h-full items-center">
								<div className="flex flex-col gap-2 items-center">
									<HTML5 height="4em" width="4em" />
									<span className="text-sm">HTML</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<CSS height="4em" width="4em" />
									<span className="text-sm">CSS</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<JavaScript height="4em" width="4em" />
									<span className="text-sm">JavaScript</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<TailwindCSS height="4em" width="4em" />
									<span className="text-sm">TailwindCSS</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<Vue height="4em" width="4em" />
									<span className="text-sm">Vue</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<React height="4em" width="4em" />
									<span className="text-sm">React</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<TypeScript height="4em" width="4em" />
									<span className="text-sm">TypeScript</span>
								</div>
							</div>
						</div>
					</SpotlightCard>
				</article>

				<article className="w-full relative min-h-[300px]">
					<SpotlightCard
						spotlightColor="rgba(255, 255, 255, 0.25)"
						className="h-full"
					>
						<div className="flex flex-col gap-14 items-center h-full">
							<h3 className="font-bold lg:text-4xl text-2xl">Backend</h3>
							<div className="w-full flex flex-row gap-14 justify-center flex-wrap h-full">
								<div className="flex flex-col gap-2 items-center">
									<Nodejs height="4em" width="4em" />
									<span className="text-sm">Node.js</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<Expressjs height="4em" width="4em" />
									<span className="text-sm">Express</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<MySQL height="4em" width="4em" />
									<span className="text-sm">MySQL</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<Php height="4em" width="4em" />
									<span className="text-sm">PHP</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<Laravel height="4em" width="4em" />
									<span className="text-sm">Laravel</span>
								</div>
							</div>
						</div>
					</SpotlightCard>
				</article>
				<article className="w-full relative min-h-[300px]">
					<SpotlightCard
						spotlightColor="rgba(255, 255, 255, 0.25)"
						className="h-full"
					>
						<div className="flex flex-col gap-14 items-center h-full">
							<h3 className="font-bold lg:text-4xl text-2xl">Herramientas</h3>
							<div className="w-full flex flex-row gap-14 justify-center flex-wrap h-full">
								<div className="flex flex-col gap-2 items-center">
									<Git height="4em" width="4em" />
									<span className="text-sm">Git</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<Github height="4em" width="4em" />
									<span className="text-sm">Github</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<VisualStudioCode height="4em" width="4em" />
									<span className="text-sm">VS Code</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<Docker height="4em" width="4em" />
									<span className="text-sm">Docker</span>
								</div>
							</div>
						</div>
					</SpotlightCard>
				</article>
				<article className="w-full relative min-h-[300px]">
					<SpotlightCard
						spotlightColor="rgba(255, 255, 255, 0.25)"
						className="h-full"
					>
						<div className="flex flex-col gap-14 items-center">
							<h3 className="font-bold lg:text-4xl text-2xl">Aprendiendo</h3>
							<div className="w-full flex flex-row gap-14 justify-center flex-wrap">
								<div className="flex flex-col gap-2 items-center">
									<Nextjs height="4em" width="4em" />
									<span className="text-sm">Next.js</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<Jest height="4em" width="4em" />
									<span className="text-sm">Jest</span>
								</div>
								<div className="flex flex-col gap-2 items-center">
									<Playwright height="4em" width="4em" />
									<span className="text-sm">Playwright</span>
								</div>
							</div>
						</div>
					</SpotlightCard>
				</article>
			</div>
		</section>
	)
}
