import { Console } from "@woowacourse/mission-utils";

const presentDiscount = {
	async checkPresent(present) {
		const presentPrice = present === "샴페인 1개" ? "25,000원" : 0;

		if (presentPrice !== 0) {
			const presentPriceToNum = parseInt(presentPrice.replace(",", ""));
			Console.print("증정 이벤트: -" + presentPrice);

			return presentPriceToNum;
		}
	},
};

export default presentDiscount;
