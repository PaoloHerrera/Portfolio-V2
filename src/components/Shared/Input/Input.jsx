export const Input = ({ params, disabled = false }) => {
	const { name, label, type, placeholder, error } = params
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				className={`w-full h-12 border rounded-md px-4 bg-black text-white ${error ? 'border-error' : 'border-white'}`}
				disabled={disabled}
			/>
			{error && <span className="text-error text-sm">{error}</span>}
		</div>
	)
}

export const TextArea = ({ params, disabled = false }) => {
	const { name, label, placeholder, error } = params
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name}>{label}</label>
			<textarea
				id={name}
				name={name}
				cols="30"
				rows="10"
				placeholder={placeholder}
				className={`w-full border rounded-md p-4 bg-black text-white resize-none ${error ? 'border-error' : 'border-white'}`}
				disabled={disabled}
			/>
			{error && <span className="text-error text-sm">{error}</span>}
		</div>
	)
}
