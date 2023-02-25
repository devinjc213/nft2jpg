import styles from "../styles/components/Panel.module.css";
import { ReactNode } from "react";

const Panel = ({ children, title }: { children: ReactNode, title?: string }) => {

	return (
		<div className={styles.panelContainer}>
			{title && <span className={styles.title}>{title}</span>}
			<div className={styles.panelBody}>
				{children}	
			</div>
		</div>
	)
}

export default Panel;
