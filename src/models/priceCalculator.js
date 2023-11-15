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
};

export default priceCalculator;
