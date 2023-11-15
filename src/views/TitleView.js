import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_TITLE } from "../constants/Messages";

const TitleView = {
	printTitles() {
		Console.print(OUTPUT_TITLE.PRINT_MENU);
		Console.print(OUTPUT_TITLE.PRINT_PRICE_BEFORE_DISCOUNT);
		Console.print(OUTPUT_TITLE.PRINT_PRESENT);
		Console.print(OUTPUT_TITLE.PRINT_BENEFIT);
		Console.print(OUTPUT_TITLE.PRINT_TOTAL_BENEFIT);
		Console.print(OUTPUT_TITLE.PRINT_PRICE_AFTER_DISCOUNT);
		Console.print(OUTPUT_TITLE.PRINT_BADGE);
	},
};

export default TitleView;
