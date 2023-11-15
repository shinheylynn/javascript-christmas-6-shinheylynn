import { Console } from "@woowacourse/mission-utils";

class SpecialDiscount {
	async formatDiscount(date) {
		const specialDate = ["3", "10", "17", "24", "25", "31"];
		const discount = 1000;
		const formattedDiscount = discount
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		if (specialDate.includes(date))
			Console.print("특별 할인: -" + formattedDiscount + "원");

		return discount;
	}
}

export default SpecialDiscount;
