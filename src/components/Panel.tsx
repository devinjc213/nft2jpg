import styles from "../styles/components/Panel.module.css";
import { ReactNode } from "react";

const Panel = ({ title, children }: { title: string, children: ReactNode }) => {
	return (
		<div className={styles.panelContainer}>
			<span className={styles.title}>{title}</span>
			<div className={styles.panelBody}>
				{children}	
			</div>
		</div>
	)
}

export default Panel;
