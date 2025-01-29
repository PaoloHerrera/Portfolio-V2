export const Input = ({ type, name, placeholder }) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name}>{name}</label>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				className="w-full h-12 border border-white rounded-md px-4 bg-black text-white"
			/>
		</div>
	)
}

export const TextArea = ({ name, placeholder }) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name}>{name}</label>
			<textarea
				id={name}
				name={name}
				cols="30"
				rows="10"
				placeholder={placeholder}
				className="w-full border border-white rounded-md p-4 bg-black text-white"
			/>
		</div>
	)
}
