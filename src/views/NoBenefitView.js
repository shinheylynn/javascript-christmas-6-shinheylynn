import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_TITLE } from "../constants/Messages";

const NoBenefitView = {
	printNoBenefit() {
		Console.print(`${OUTPUT_TITLE.PRINT_BENEFIT}\n없음`);
	},
};

export default NoBenefitView;
