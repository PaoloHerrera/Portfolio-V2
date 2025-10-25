export const ErrorMessage = ({ errorMessage }) => {
	return (
		<div
			className="light:bg-error-light dark:bg-error-dark mt-5 h-[50px] flex justify-center items-center"
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
		>
			<p className="text-black text-center font-bold">{errorMessage}</p>
		</div>
	)
}
