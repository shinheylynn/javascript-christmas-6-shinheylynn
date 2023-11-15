import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../constants/Messages";
import InputView from "../views/InputView";
import DateValidator from "../validators/DateValidator";

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
};

export default UserController;
