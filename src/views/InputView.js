import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../constants/Messages.js";

const InputView = {
	async getDate() {
		return await Console.readLineAsync(INPUT_MESSAGES.GET_DATE);
	},

	async getMenu() {
		return await Console.readLineAsync(INPUT_MESSAGES.GET_MENU);
	},
};

export default InputView;
