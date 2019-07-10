import React from 'react';
import PropTypes from 'prop-types';
import ProfitLossTableBodyRow from '../ProfitLossTableBodyRow';
import { encodeHtmlId } from '../Util/mint-datafiles';
import appConstants from '../Util/constants/app';
import styles from './index.css';

class ProfitLossTableBody extends React.Component {
	getItemRows = (itemInfos) => {
		if (!itemInfos) {
			return null;
		}

		const itemInfosDescending = itemInfos.sort((a, b) => b.profitLoss - a.profitLoss);
		return itemInfosDescending.map((itemPnl) => {
			const iconFilename = encodeHtmlId(itemPnl.product);
			const iconSrc = `images/item-icons/${iconFilename}.jpg`;
			let pnlClassName = this.getPnlClassName(itemPnl.profitLoss);

			return <ProfitLossTableBodyRow
				key={itemPnl.product}
				product={itemPnl.product}
				iconSrc={iconSrc}
				profitLossClassName={pnlClassName}
				profitLoss={itemPnl.profitLoss}
				reagentsToMakeProduct={itemPnl.reagentsToMakeProduct}
			/>;
		});
	};

	getPnlClassName = (pnl) => {
		if (pnl >= appConstants.pnlLimit) {
			return `${styles.abovePnlLimit}`;
		}
		return null;
	};

	render = () => {
		const itemRows = this.getItemRows(this.props.itemPnls);
		return (
			<tbody className={styles.container}>
				{itemRows}
			</tbody>
		);
	};
}

ProfitLossTableBody.propTypes = {
	itemPnls: PropTypes.arrayOf(PropTypes.object)
};

export default ProfitLossTableBody;
