export const SuccessMessage = ({ successMessage }) => {
	return (
		<div className="light:bg-success-light dark:bg-success-dark mt-5 h-[50px] flex justify-center items-center">
			<p className="text-black font-bold">{successMessage}</p>
		</div>
	)
}
