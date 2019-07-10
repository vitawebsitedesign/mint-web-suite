import products from '../constants/products';
import ProfitLossCalculationCore from './ProfitLossCalculationCore';

const getProfitLossForProducts = (auctionHousePrices) => {
	let profitLosses = [];

	for (let product of products) {
		const productLoss = ProfitLossCalculationCore.getProfitLossForProduct(auctionHousePrices, product);
		if (!productLoss) {
			const msg = `No profit/loss was calculated for ${product}, because one of its reagents wasnt listed on the auction house`;
			console.info(msg);
			continue;
		}
		profitLosses.push(productLoss);
	}

	return profitLosses;
};

export default getProfitLossForProducts;
