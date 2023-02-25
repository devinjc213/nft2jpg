import styles from "../styles/components/Header.module.css"

const Header = () => {
	return (
		<div className={styles.headerContainer}>
			<h1 className={styles.title}>
				<span className={styles.cyanSpan}>nft</span>2jpg
			</h1>
		</div>
	)
}

export default Header;
