import React from 'react';
import PropTypes from 'prop-types';
import ProfitLossTable from '../ProfitLossTable';

const ProfitLossPanelBody = (props) => (
	<section className={props.className}>
		<ProfitLossTable itemPnls={props.itemPnls} />
	</section>
);

ProfitLossPanelBody.propTypes = {
	className: PropTypes.string,
	itemPnls: PropTypes.arrayOf(PropTypes.object)
};

export default ProfitLossPanelBody;
