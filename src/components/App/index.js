import React from 'react';
import LoadDataPanel from '../LoadDataPanel';
import ProfitLossPanel from '../ProfitLossPanel';
import getProfitLossForProducts from '../Util/ProfitLossCalculation/getProfitLossForProducts';
import vendorMaterialConstants from '../Util/constants/vendor-materials';
import { dataFilenameToLocalDateTime } from '../Util/mint-datafiles';
import bootstrap from '../../css/bootstrap.min.css';
import styles from './index.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pnls: null,
			dataTimestamp: null
		};
	}

	setAuctionData = (auctionData) => {
		const productPrices = {...auctionData, ...vendorMaterialConstants};
		const profitLosses = getProfitLossForProducts(productPrices);
		const profitLossesDescending = profitLosses.sort((a, b) => b.pnl - a.pnl);
		this.setState(() => ({
			pnls: profitLossesDescending
		}));
	};

	recordDataTimestamp = (dataFilename) => {
		const newDataTimestamp = dataFilenameToLocalDateTime(dataFilename);
		this.setState(() => ({
			dataTimestamp: newDataTimestamp
		}));
	};

	render = () => {
		const containerClassNames = `${styles.container} ${bootstrap['container-fluid']}`;
		const profitLossPanelClassNames = `${bootstrap['col-10']} ${bootstrap['offset-1']}`;
		const loadedData = this.state.pnls != null;

		return (
			<div className={containerClassNames}>
				<div className={bootstrap.row}>
					<LoadDataPanel
						loadedData={loadedData}
						setAuctionData={this.setAuctionData}
						dataLoadedHook={this.dataLoadedHook}
						recordDataTimestamp={this.recordDataTimestamp}
						className={bootstrap['col-12']}
					/>;
				</div>
				<div className={bootstrap.row}>
					<ProfitLossPanel
						loadedData={loadedData}
						itemPnls={this.state.pnls}
						className={profitLossPanelClassNames}
						dataTimestamp={this.state.dataTimestamp}
					/>;
				</div>
			</div>
		);
	};
}

export default App;
