export const SuccessMessage = ({ successMessage }) => {
	return (
		<output
			className="light:bg-success-light dark:bg-success-dark mt-5 h-[50px] flex justify-center items-center"
			aria-live="polite"
			aria-atomic="true"
		>
			<p className="text-black font-bold">{successMessage}</p>
		</output>
	)
}
