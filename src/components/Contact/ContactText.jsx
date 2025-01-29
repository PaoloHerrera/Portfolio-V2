import { Text } from '@/components/Shared/Text/Text.jsx'

export const ContactText = ({ header, description, email, address }) => {
	return (
		<div className="max-w-[400px] flex flex-col gap-10  ">
			<h3 className="font-bold md:text-5xl text-3xl">{header}</h3>
			<Text>{description}</Text>
			<Text variant="secondary">📧 {email}</Text>
			<Text>
				🌎 {address.city}, {address.country}
			</Text>
		</div>
	)
}
