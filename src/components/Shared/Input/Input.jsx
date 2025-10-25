export const Input = ({ params, disabled = false }) => {
	const { name, label, type, placeholder, error } = params
	const errorId = `${name}-error`
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				autoComplete={
					name === 'name' ? 'name' : name === 'email' ? 'email' : 'off'
				}
				required={true}
				aria-required="true"
				aria-invalid={Boolean(error)}
				aria-describedby={error ? errorId : undefined}
				aria-errormessage={error ? errorId : undefined}
				className={`w-full h-12 border rounded-md px-4 light:bg-nav-input-light dark:bg-nav-input-dark light:text-text-light dark:text-text-dark ${error ? 'light:border-error-light dark:border-error-dark' : 'light:border-black dark:border-white'}`}
				disabled={disabled}
			/>
			{error && (
				<span
					id={errorId}
					className="light:text-error-light dark:text-error-dark text-sm"
					role="alert"
					aria-live="polite"
				>
					{error}
				</span>
			)}
		</div>
	)
}

export const TextArea = ({ params, disabled = false }) => {
	const { name, label, placeholder, error } = params
	const errorId = `${name}-error`
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name}>{label}</label>
			<textarea
				id={name}
				name={name}
				cols="30"
				rows="10"
				placeholder={placeholder}
				autoComplete="off"
				required={true}
				aria-required="true"
				aria-invalid={Boolean(error)}
				aria-describedby={error ? errorId : undefined}
				aria-errormessage={error ? errorId : undefined}
				className={`w-full border rounded-md p-4 light:bg-nav-input-light dark:bg-nav-input-dark light:text-text-light dark:text-text-dark resize-none ${error ? 'light:border-error-light dark:border-error-dark' : 'light:border-black dark:border-white'}`}
				disabled={disabled}
			/>
			{error && (
				<span
					id={errorId}
					className="light:text-error-light dark:text-error-dark text-sm"
					role="alert"
					aria-live="polite"
				>
					{error}
				</span>
			)}
		</div>
	)
}
