import styles from "../styles/components/Header.module.css"
import Link from "next/link";

const Header = () => {
	return (
		<div className={styles.headerContainer}>
			<h1 className={styles.title}>
				<span className={styles.cyanSpan}>nft</span>2jpg
			</h1>
			<div className={styles.links}>
				<Link href="/browse" legacyBehavior><a>Browse</a></Link>
				<Link href="/cart" legacyBehavior><a>Cart (0)</a></Link>
			</div>
		</div>
	)
}

export default Header;
