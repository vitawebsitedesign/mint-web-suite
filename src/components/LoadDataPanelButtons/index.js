import React from 'react';
import PropTypes from 'prop-types';
import bootstrap from '../../css/bootstrap.min.css';
import styles from './index.css';

class LoadDataPanelButtons extends React.Component {
	componentDidMount = () => {
		const fakeBtn = document.getElementById('fakeBtn');
		const realBtn = document.getElementById('realBtn');

		if (fakeBtn && realBtn) {
			realBtn.addEventListener('change', this.props.readFile);
			fakeBtn.addEventListener('click', () => {
				realBtn.click();
			});
		} else {
			console.warn('File loading may not work, because the <input/> html element couldnt be found');
		}
	};

	render = () => {
		const fakeBtnClassNames = `${bootstrap.btn} ${styles.fakeButton}`;
		return (
			<section>
				<button id="fakeBtn" className={fakeBtnClassNames}>Pick data file</button>
				<input type="file" id="realBtn" className={styles.realButton} />
			</section>
		);
	};
}

LoadDataPanelButtons.propTypes = {
	readFile: PropTypes.func.isRequired
};

export default LoadDataPanelButtons;
