import React from "react";
import styles from "./styles.module.scss";
import Background from "../Background/Background";

const Preloader = () => {
	return (
		<Background>
			<div className={styles.pageLoader}>
				<div className={styles.pageLoader__content}>
					<div className={styles.pageLoader__content_first}>
						<h2>Мы кормим мир</h2>
						<p>
							Помогаем внедрять и применять фермерам{" "}
							<strong>инновационные решения</strong>
						</p>
					</div>
					<div className={styles.pageLoader__content_second}>
						<h2>Развиваем сельское хозяйство</h2>
						<p>
							Для производство продукции <strong>наивысшее качество</strong>
						</p>
					</div>
				</div>

				<div className={styles.pageLoader__front}>
					<div className={styles.pageLoader__back}></div>
					<div className={styles.pageLoader__info}></div>
				</div>
			</div>
		</Background>
	);
};

export default Preloader;
