import './Sidebar.css'

export default function Sidebar({ children }) {
	return (
		<aside className="sidebar">
			<div className="sidebar-content">{children}</div>
		</aside>
	)
}
