import React from "react";
import styles from "./styles.module.scss";

const Background = ({ children }) => {
	return (
		<div className={styles.space}>
			<div className={styles.stars}></div>
			<div className={styles.stars2}></div>
			<div className={styles.stars3}></div>
			<div>{children}</div>
		</div>
	);
};

export default Background;
