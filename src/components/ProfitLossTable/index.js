import React from 'react';
import PropTypes from 'prop-types';
import ProfitLossTableHead from '../ProfitLossTableHead';
import ProfitLossTableBody from '../ProfitLossTableBody';
import bootstrap from '../../css/bootstrap.min.css';

const ProfitLossTable = (props) => {
	const containerClassNames = `
		${bootstrap.table}
		${bootstrap['table-striped']}
		${bootstrap['table-bordered']}
		${bootstrap['table-hover']}
		`;

	return (
		<table className={containerClassNames}>
			<ProfitLossTableHead />
			<ProfitLossTableBody itemPnls={props.itemPnls} />
		</table>
	);
};

ProfitLossTable.propTypes = {
	itemPnls: PropTypes.arrayOf(PropTypes.object)
};

export default ProfitLossTable;
