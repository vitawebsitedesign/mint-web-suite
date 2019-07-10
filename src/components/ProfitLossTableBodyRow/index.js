import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const ProfitLossTableBodyRow = (props) => (
	<tr className={styles.row}>
		<td>
			{props.product}
		</td>
		<td>
			<img src={props.iconSrc} alt={props.product} className={styles.icon} />
		</td>
		<td className={props.profitLossClassName}>
			{props.profitLoss}
		</td>
		<td>
			{props.reagentsToMakeProduct}
		</td>
	</tr>
);

ProfitLossTableBodyRow.propTypes = {
	iconSrc: PropTypes.string.isRequired,
	product: PropTypes.string.isRequired,
	profitLoss: PropTypes.number.isRequired,
	reagentsToMakeProduct: PropTypes.string.isRequired,
	profitLossClassName: PropTypes.string
};

export default ProfitLossTableBodyRow;
