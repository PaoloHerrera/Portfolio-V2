import { Button } from '@/components/Shared/Button/Button.jsx'
import { Input } from '@/components/Shared/Input/Input.jsx'
import { TextArea } from '@/components/Shared/Input/Input.jsx'

export const ContactForm = ({ labels, placeholders }) => {
	return (
		<div className="md:w-1/2 w-full">
			<form action="" className="flex flex-col gap-8">
				<Input type="text" name={labels.name} placeholder={placeholders.name} />
				<Input
					type="email"
					name={labels.email}
					placeholder={placeholders.email}
				/>
				<TextArea name={labels.message} placeholder={placeholders.message} />
				<Button type="submit" variant="secondary">
					Enviar
				</Button>
			</form>
		</div>
	)
}
