import MENU from "../constants/Menu";
import { Console } from "@woowacourse/mission-utils";

class MenuController {
	constructor() {
		this.menu = MENU;
	}

	getMenuItems() {
		let menuItems = [];

		for (const category in this.menu) {
			menuItems = menuItems.concat(Object.keys(this.menu[category]));
		}

		return menuItems;
	}

	parseMenuAndQuantity(input) {
		if (input)
			return input.split(",").map((item) => {
				const [menuItem, quantity] = item.split("-").map((part) => part.trim());
				return [menuItem, Number(quantity)];
			});
	}

	static parseMenuString(input) {
		const menuList = input.split(",");
		const result = [];

		if (input)
			menuList.forEach((menuItem) => {
				const [menu, quantity] = menuItem.split("-");
				result.push(`${menu.trim()} ${quantity.trim()}개`);
			});

		return result.join("\n");
	}

	async calculateTotalPrice(inputMenu) {
		let totalPrice = 0;

		inputMenu.forEach(([menu, quantity]) => {
			const category = Object.keys(this.menu).find(
				(cat) => cat in this.menu && menu in this.menu[cat]
			);
			if (category) {
				const menuPrice = this.menu[category][menu];
				totalPrice += menuPrice * quantity;
			}
		});

		const formattedTotalPrice = totalPrice
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		Console.print(formattedTotalPrice + "원");

		return totalPrice;
	}
}

export default MenuController;
