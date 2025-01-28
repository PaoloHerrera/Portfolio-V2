import styles from './List.module.css'

export const List = ({ items }) => {
	return (
		<ul className="flex flex-col gap-3">
			{items.map((item) => (
				<li key={item} className={`${styles.listItem} text-md`}>
					{item}
				</li>
			))}
		</ul>
	)
}
