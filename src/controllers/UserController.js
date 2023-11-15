import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../constants/Messages";
import InputView from "../views/InputView";
import DateValidator from "../validators/DateValidator";
import MenuValidator from "../validators/MenuValidator";
import MenuController from "./MenuController";

const UserController = {
	async inputDate() {
		try {
			const date = await InputView.getDate();
			const isValidDate = DateValidator.isValidDate(date);

			if (!isValidDate) {
				throw new Error(ERROR_MESSAGES.PRINT_INVALID_DATE);
			}

			return date;
		} catch (error) {
			Console.print(ERROR_MESSAGES.PRINT_INVALID_DATE);
		}
	},

	async inputMenu() {
		const menuController = new MenuController();
		const menu = menuController.getMenuItems();
		const menuInput = await InputView.getMenu();
		const menuAndQuantity = menuController.parseMenuAndQuantity(menuInput);

		try {
			const isValidMenu = await MenuValidator.isValidMenu(
				menuInput,
				menu,
				menuAndQuantity
			);

			console.log("user", menuAndQuantity);

			if (!isValidMenu) {
				throw new Error(ERROR_MESSAGES.PRINT_INVALID_MENU);
			}

			return menuInput;
		} catch (error) {
			Console.print(ERROR_MESSAGES.PRINT_INVALID_MENU);
		}
	},
};

export default UserController;
