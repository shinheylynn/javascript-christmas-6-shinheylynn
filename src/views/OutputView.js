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
};

export default OutputView;
