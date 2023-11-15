import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();

		return Promise.resolve(input);
	});
};

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, "print");
	logSpy.mockClear();

	return logSpy;
};

const getOutput = (logSpy) => {
	return [...logSpy.mock.calls].join(LINE_SEPARATOR);
};

const expectLogContains = (received, expectedLogs) => {
	expectedLogs.forEach((log) => {
		expect(received).toContain(log);
	});
};

describe("기능 테스트", () => {
	test("출력", async () => {
		// given
		const logSpy = getLogSpy();
		mockQuestions(["3", "티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1"]);

		// when
		const app = new App();
		await app.run();

		// then
		const expected = [
			"안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)",
			"3",
			"주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)",
			"티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1",
			"12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
			"<주문 메뉴>",
			"티본스테이크 1개\n바비큐립 1개\n초코케이크 2개\n제로콜라 1개",
			"<할인 전 총주문 금액>",
			"142,000원",
			"<증정 메뉴>",
			"샴페인 1개",
			"<혜택 내역>",
			"크리스마스 디데이 할인: -1,200원",
			"평일 할인: -4,046원",
			"특별 할인: -1,000원",
			"증정 이벤트: -25,000원",
			"<총혜택 금액>",
			"-31,246원",
			"<할인 후 예상 결제 금액>",
			"135,754원",
			"<12월 이벤트 배지>",
			"산타",
		];

		expectLogContains(getOutput(logSpy), expected);
	});
});
