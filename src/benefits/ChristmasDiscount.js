import { Console } from "@woowacourse/mission-utils";

class ChristmasDiscount {
	async formatDiscount(date) {
		const startDate = new Date("2023-12-01");
		const endDate = new Date("2023-12-25");
		const selectedDate = new Date(Date.UTC(2023, 11, date));

		if (selectedDate >= startDate && selectedDate <= endDate) {
			const elapsedDays = Math.floor(
				(selectedDate - startDate) / (1000 * 60 * 60 * 24)
			);
			const calculateDiscount = (day) => 1000 + day * 100;
			const christmasDiscount = calculateDiscount(elapsedDays);
			const formattedChristmaDiscount = christmasDiscount
				.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			Console.print(
				"크리스마스 디데이 할인: -" + formattedChristmaDiscount + "원"
			);

			return Number(christmasDiscount);
		}
	}
}

export default ChristmasDiscount;
