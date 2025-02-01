export const ErrorMessage = ({ errorMessage }) => {
	return (
		<div className="bg-error mt-5 h-[50px] flex justify-center items-center">
			<p className="text-primary text-center font-bold text-md">
				{errorMessage}
			</p>
		</div>
	)
}
