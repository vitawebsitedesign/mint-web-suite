import productReagents from '../constants/product-reagents';
import appConstants from '../constants/app';

class ProfitLossCalculationCore {	
	static calculateProfitLoss (auctionHousePrices, requiredReagents, product) {
		const buyAndSellValues = ProfitLossCalculationCore.getBuyAndSellValuesForProduct(requiredReagents, auctionHousePrices, product);
		if (!buyAndSellValues.buy || !buyAndSellValues.sell) {
			return null;
		}
		return ProfitLossCalculationCore.calculateProfitLossAfterCut(buyAndSellValues);
	}
	
	static getBuyAndSellValuesForProduct = (requiredReagents, auctionHousePrices, product) => {
		return {
			buy: ProfitLossCalculationCore.calculateBuyValue(requiredReagents, auctionHousePrices),
			sell: parseFloat(auctionHousePrices[product])
		};
	};
	
	static calculateProfitLossAfterCut = (buyAndSellValues) => {
		const sellValueAfterCut = buyAndSellValues.sell * (1 - appConstants.auctionHouseCut);
		const profitLoss = (sellValueAfterCut - buyAndSellValues.buy);
		const profitLossRounded = profitLoss.toFixed(appConstants.profitLossDecimalPlaces);
		return parseFloat(profitLossRounded);
	};
	
	static calculateBuyValue = (requiredReagents, auctionHousePrices) => {
		let total = 0;
		const reagents = Object.keys(requiredReagents);
	
		for (let reagent of reagents) {
			const costPer = auctionHousePrices[reagent];
			const costPerNum = parseFloat(costPer);
			const numReagents = requiredReagents[reagent];
	
			if (costPerNum && numReagents) {
				total += costPerNum * numReagents;
			} else {
				return null;
			}
		}
	
		return total;
	};
	
	static getReagentInfosToMakeProduct = (requiredReagents, reagents) => {
		return reagents.reduce((reagentInfos, reagent) => {
			const amountOfReagent = requiredReagents[reagent];
			const reagentInfo = ProfitLossCalculationCore.getReagentInfoToMakeProduct(amountOfReagent, reagent);
			reagentInfos.push(reagentInfo);
			return reagentInfos;
		}, []);
	};
	
	static getReagentInfoToMakeProduct = (amountOfReagent, reagent) => `${amountOfReagent} ${reagent}`;

	static getProfitLossForProduct = (auctionHousePrices, product) => {
		const requiredReagents = productReagents[product];
		const profitLoss = ProfitLossCalculationCore.calculateProfitLoss(auctionHousePrices, requiredReagents, product);
		if (!profitLoss) {
			return null;
		}
	
		const reagents = Object.keys(requiredReagents);
		const reagentsToMakeProduct = ProfitLossCalculationCore.getReagentInfosToMakeProduct(requiredReagents, reagents).join(', ');
	
		return {
			product,
			profitLoss,
			reagentsToMakeProduct
		};
	};
}

export default ProfitLossCalculationCore;
