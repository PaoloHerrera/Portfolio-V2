export const List = ({ items }) => {
	return (
		<ul className="flex flex-col gap-3">
			{items.map((item) => (
				<li key={item} className="list-disc list-inside text-md font-medium">
					{item}
				</li>
			))}
		</ul>
	)
}
