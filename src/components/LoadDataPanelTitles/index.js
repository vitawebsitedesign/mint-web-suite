import React from 'react';
import appConstants from '../Util/constants/app';
import bootstrap from '../../css/bootstrap.min.css';
import styles from './index.css';

const LoadDataPanelTitles = () => {
	const col12 = `${bootstrap['col-12']}`;
	const mainTitleClassNames = `${col12} ${styles.mainTitle}`;
	const sloganClassNames = `${col12} ${styles.slogan}`;

	return (
		<section className={styles.container}>
			<h1 className={mainTitleClassNames}>{appConstants.appName}</h1>
			<p className={sloganClassNames}>Web suite for analyzing auction house data</p>
		</section>
	);
};

export default LoadDataPanelTitles;
