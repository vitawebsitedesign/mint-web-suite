import React from 'react';
import PropTypes from 'prop-types';
import LoadDataPanelTitles from '../LoadDataPanelTitles';
import LoadDataPanelButtons from '../LoadDataPanelButtons';
import bootstrap from '../../css/bootstrap.min.css';
import styles from './index.css';

class LoadDataPanel extends React.Component {
	readFile = (event) => {
		const f = event.target.files;
		const numDataFiles = f.length;

		for (var i = 0; i < numDataFiles; i++) {
			let reader = new FileReader();
			reader.onloadend = ((file) => {
				return (e) => {
					var dataStr = e.target.result;
					this.setData(file.name, dataStr);
				};
			})(f[i]);
			reader.readAsText(f[i]);
		}
	};

	setData = (filename, dataStr) => {
		try {
			var auctionData = JSON.parse(dataStr);
			this.props.setAuctionData(auctionData);
			this.props.recordDataTimestamp(filename);
		} catch (e) {
			console.error('Failed to parse json data: ' + e.message);
			throw e;
		}
	};

	render = () => {
		if (this.props.loadedData) {
			return null;
		}

		const containerClassNames = `${this.props.className} ${bootstrap['text-center']} ${styles.container}`;
		return (
			<div className={containerClassNames}>
				<LoadDataPanelTitles />
				<LoadDataPanelButtons readFile={this.readFile} />
			</div>
		);
	};
}

LoadDataPanel.propTypes = {
	className: PropTypes.string.isRequired,
	loadedData: PropTypes.bool.isRequired,
	setAuctionData: PropTypes.func.isRequired,
	recordDataTimestamp: PropTypes.func
};

export default LoadDataPanel;
