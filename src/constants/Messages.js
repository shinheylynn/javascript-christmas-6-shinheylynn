export const INPUT_MESSAGES = Object.freeze({
	GET_DATE:
		"안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)",
	GET_MENU:
		"주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)",
});

export const OUTPUT_MESSAGE = Object.freeze({
	GET_DATE:
		"안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)",
	GET_MENU:
		"주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)",
});

export const OUTPUT_TITLE = Object.freeze({
	PRINT_MENU: "<주문 메뉴>",
	PRINT_PRICE_BEFORE_DISCOUNT: "<할인 전 총주문 금액>",
	PRINT_PRESENT: "<증정 메뉴>",
	PRINT_BENEFIT: "<혜택 내역>",
	PRINT_TOTAL_BENEFIT: "<총혜택 금액>",
	PRINT_PRICE_AFTER_DISCOUNT: "<할인 후 예상 결제 금액>",
	PRINT_BADGE: "<12월 이벤트 배지>",
});

export const ERROR_MESSAGES = Object.freeze({
	PRINT_INVALID_DATE: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
	PRINT_INVALID_MENU: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
});
