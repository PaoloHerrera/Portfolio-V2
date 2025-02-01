import { IconLink } from '@/components/Shared/IconLink/IconLink.jsx'
import { Github } from '@/components/Shared/Icons/Tools/Github.jsx'
import { MailIcon } from '@/components/Shared/Icons/Icons.jsx'

export const Footer = () => {
	return (
		<footer className="opacity-80  mt-16 w-full mx-auto mb-10">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-[1200px]">
				<div className="text-center md:text-left mb-4 md:mb-0">
					<p className="text-sm font-bold">&copy; 2025 Paolo Herrera.</p>
					<p className="text-sm text-secondary">Ingeniero de Software</p>
					<p className="text-xs opacity-80">
						Hecho con React, TailwindCSS y con ❤️
					</p>
				</div>
				<div className="flex gap-4">
					<IconLink href="https://github.com/paolo-herrera" target="_blank">
						<Github />
					</IconLink>
					<IconLink href="mailto:0LHtP@example.com" target="_blank">
						<MailIcon height="1rem" width="1rem" />
					</IconLink>
				</div>
			</div>
		</footer>
	)
}
