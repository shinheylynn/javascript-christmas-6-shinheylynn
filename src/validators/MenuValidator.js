import MENU from "../constants/Menu";

// todo: 음료만 주문할 경우 예외 추가
class MenuValidator {
	constructor() {
		this.menu = MENU;
	}

	static isInputValid(input) {
		const regex = /^([가-힣]+-\d+)(,[가-힣]+-\d+)*$/;

		return regex.test(input);
	}

	static isNotEmpty(input) {
		return !input ? false : true;
	}

	static isQuantityValid(menuAndQuantity) {
		let isValid = true;
		menuAndQuantity.forEach(([, quantity]) => {
			if (Number.isNaN(quantity) || quantity <= 0 || quantity > 20)
				isValid = false;
		});

		return isValid;
	}

	static isInputInMenu(menu, menuAndQuantity) {
		if (menuAndQuantity)
			return menuAndQuantity.every(([menuItem]) => menu.includes(menuItem));
	}

	static isDuplicated(menuAndQuantity) {
		const seenMenus = new Set();
		let isValid = true;

		for (const [menu] of menuAndQuantity) {
			seenMenus.has(menu) ? (isValid = false) : seenMenus.add(menu);
		}

		return isValid;
	}

	static isNotOnlyBeverage(menuAndQuantity) {
		const categories = menuAndQuantity.map(([itemName]) => {
			for (const category in this.menu) {
				if (this.menu[category][itemName] !== undefined) {
					return category;
				}
			}
		});

		const uniqueCategories = [...new Set(categories)];

		return !(
			uniqueCategories.length === 1 && uniqueCategories[0] === "beverage"
		);
	}

	static isValidMenu(input, menu, menuAndQuantity) {
		return (
			this.isInputValid(input) &&
			this.isNotEmpty(input) &&
			this.isQuantityValid(menuAndQuantity) &&
			this.isInputInMenu(menu, menuAndQuantity) &&
			this.isDuplicated(menuAndQuantity) &&
			this.isNotOnlyBeverage(menuAndQuantity)
		);
	}
}

export default MenuValidator;
