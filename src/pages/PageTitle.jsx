import styles from './PageTitle.module.css'

export const PageTitle = ({ title }) => {
	return (
		<div className={styles.titleContainer}>
			<h2 className="font-bold text-nowrap md:text-5xl text-3xl text-secondary">
				{title}
			</h2>
		</div>
	)
}
