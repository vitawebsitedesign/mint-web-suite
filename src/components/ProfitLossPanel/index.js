import React from 'react';
import PropTypes from 'prop-types';
import ProfitLossPanelHeader from '../ProfitLossPanelHeader';
import ProfitLossPanelBody from '../ProfitLossPanelBody';
import bootstrap from '../../css/bootstrap.min.css';
import styles from './index.css';

class ProfitLossPanel extends React.Component {
	render = () => {
		if (!this.props.loadedData) {
			return null;
		}

		const containerClassNames = `
      ${this.props.className}
      ${styles.container}
      `;
		return (
			<div className={containerClassNames}>
				<ProfitLossPanelHeader dataTimestamp={this.props.dataTimestamp} className={bootstrap.row} />
				<ProfitLossPanelBody itemPnls={this.props.itemPnls} className={bootstrap.row} />
			</div>
		);
	};
}

ProfitLossPanel.propTypes = {
	className: PropTypes.string.isRequired,
	loadedData: PropTypes.bool.isRequired,
	itemPnls: PropTypes.arrayOf(PropTypes.object),
	dataTimestamp: PropTypes.string
};

export default ProfitLossPanel;
