import { Console } from "@woowacourse/mission-utils";

const priceCalculator = {
	async calculateTotalBenefit(
		christmasDiscount,
		weekDiscount,
		specialDiscount,
		presentDiscount
	) {
		const weekdayDiscount = weekDiscount.weekDiscount;
		const weekendDiscount = weekDiscount.weekendDiscount;

		const totalBenefitAmount =
			christmasDiscount +
			weekdayDiscount +
			weekendDiscount +
			specialDiscount +
			presentDiscount;
		const formattedTotalBenefitAmount = totalBenefitAmount
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		Console.print("-" + formattedTotalBenefitAmount + "원");

		return totalBenefitAmount;
	},

	async calculateTotalAfterDiscount(
		totalPrice,
		totalBenefitAmount,
		presentDiscount
	) {
		const priceAfterDiscount =
			totalPrice - totalBenefitAmount + presentDiscount;
		const formattedPriceAfterDiscount = priceAfterDiscount
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		Console.print(formattedPriceAfterDiscount + "원");

		return priceAfterDiscount;
	},

	async checkBadge(totalBenefitAmount) {
		let badge = "없음";

		if (totalBenefitAmount >= 20000) badge = "산타";

		if (totalBenefitAmount >= 10000 && totalBenefitAmount < 20000)
			badge = "트리";

		if (totalBenefitAmount >= 5000 && totalBenefitAmount < 10000) badge = "별";

		Console.print(badge);

		return badge;
	},
};

export default priceCalculator;
