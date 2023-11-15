import MENU from "../constants/Menu";
import { Console } from "@woowacourse/mission-utils";

class WeekDiscount {
	constructor() {
		this.menu = MENU;
	}

	async getDayFromWeek(date) {
		const week = ["일", "월", "화", "수", "목", "금", "토"];
		const selectedDate = new Date(Date.UTC(2023, 11, date)).getDay();
		const day = week[selectedDate];

		return day;
	}

	async getCategory(menuItem) {
		for (const category in this.menu) {
			if (this.menu[category].hasOwnProperty(menuItem)) {
				return category;
			}
		}
		return null;
	}

	async calculateWeekDiscount(date, parsedInputMenu) {
		if (parsedInputMenu) {
			const day = await this.getDayFromWeek(date);
			let weekDiscount = 0;
			let weekendDiscount = 0;

			await Promise.all(
				parsedInputMenu.map(async ([menuItem, quantity]) => {
					const category = await this.getCategory(menuItem);

					if (day !== "금" && day !== "토" && category === "dessert") {
						weekDiscount += quantity * 2023;
					} else if ((day === "금" || day === "토") && category === "main") {
						weekendDiscount += quantity * 2023;
					}
				})
			);

			return { weekDiscount, weekendDiscount };
		}
	}

	async formatDiscount(date, parsedInputMenu) {
		const calculatedWeekDiscount = await this.calculateWeekDiscount(
			date,
			parsedInputMenu
		);

		if (calculatedWeekDiscount) {
			const weekDiscount = calculatedWeekDiscount.weekDiscount
				.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			const weekendDiscount = calculatedWeekDiscount.weekendDiscount
				.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			if (weekDiscount.trim() !== "0")
				Console.print("평일 할인: -" + weekDiscount + "원");
			if (weekendDiscount.trim() !== "0")
				Console.print("특별 할인: -" + weekendDiscount + "원");

			return calculatedWeekDiscount;
		}
	}
}

export default WeekDiscount;
