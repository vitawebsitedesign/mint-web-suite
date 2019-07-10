import React from 'react';
import PropTypes from 'prop-types';
import appConstants from '../Util/constants/app';
import bootstrap from '../../css/bootstrap.min.css';
import styles from './index.css';

const ProfitLossPanelHeader = (props) => {
	const col6 = `${bootstrap['col-6']}`;
	const appNameClassNames = `${col6} ${styles.appName}`;
	const dataFileInfoClassNames = `${col6} ${styles.dataFileInfo}`;

	return (
		<section className={props.className}>
			<p className={appNameClassNames}>{appConstants.appName}</p>
			<p className={dataFileInfoClassNames}>Using data snapshot from {props.dataTimestamp}</p>
		</section>
	);
};

ProfitLossPanelHeader.propTypes = {
	className: PropTypes.string,
	dataTimestamp: PropTypes.string
};

export default ProfitLossPanelHeader;
