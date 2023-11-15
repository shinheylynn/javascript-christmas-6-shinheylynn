import User from "../controllers/UserController.js";
import MenuController from "../controllers/MenuController.js";
import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_TITLE, OUTPUT_MESSAGE } from "../constants/Messages.js";

const OutputView = {
	async printGetDate() {
		const date = await User.inputDate();
		Console.print(`${OUTPUT_MESSAGE.GET_DATE}\n${date}`);

		return date;
	},

	async printGetMenu() {
		const inputMenu = await User.inputMenu();
		Console.print(`${OUTPUT_MESSAGE.GET_MENU}\n${inputMenu}`);

		return inputMenu;
	},

	async printMenu(inputMenu) {
		const inputMenuString = MenuController.parseMenuString(inputMenu);
		Console.print(`${OUTPUT_TITLE.PRINT_MENU}\n${inputMenuString}`);
	},

	printPriceBeforeDiscount() {
		Console.print(OUTPUT_TITLE.PRINT_PRICE_BEFORE_DISCOUNT);
	},

	printPresent(totalPrice) {
		let present = "";
		totalPrice >= 120000 ? (present = "샴페인 1개") : (present = "없음");
		Console.print(`${OUTPUT_TITLE.PRINT_PRESENT}\n${present}`);

		return present;
	},

	printBenefit() {
		Console.print(OUTPUT_TITLE.PRINT_BENEFIT);
	},

	printTotalBenefit() {
		Console.print(OUTPUT_TITLE.PRINT_TOTAL_BENEFIT);
	},

	printPriceAfterDiscount() {
		Console.print(OUTPUT_TITLE.PRINT_PRICE_AFTER_DISCOUNT);
	},

	printBadge() {
		Console.print(OUTPUT_TITLE.PRINT_BADGE);
	},
};

export default OutputView;
