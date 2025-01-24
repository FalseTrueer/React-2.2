import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState([...data]);
	const [activeIndex, setActiveIndex] = useState(0);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	function goNextStep() {
		setActiveIndex(activeIndex + 1);

		if (lastStep) {
			setActiveIndex(0);
		}
	}

	function goBackStep() {
		setActiveIndex(activeIndex - 1);
	}

	function goToStep(index) {
		setActiveIndex(index);
	}

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	const firstStep = activeIndex === 0;
	const lastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((elem, index) => {
							return (
								<li
									key={elem.id}
									className={`${styles['steps-item']}
									${activeIndex === index ? styles.active : ''}
									${activeIndex > index ? styles.done : ''}`}
								>
									<button
										className={styles['steps-item-button']}
										onClick={() => {
											goToStep(index);
										}}
									>
										{index}
									</button>
									{elem.title}
								</li>
							);
						})}
					</ul>

					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={goBackStep}
							disabled={firstStep}
						>
							Назад
						</button>
						<button className={styles.button} onClick={goNextStep}>
							{lastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
