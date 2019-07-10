import React from 'react';
import styles from './index.css';

const ProfitLossTableHead = () => (
	<thead className={styles.container}>
		<tr>
			<th>Item</th>
			<th>Icon</th>
			<th>PNL</th>
			<th>Reagents</th>
		</tr>
	</thead>
);

export default ProfitLossTableHead;
