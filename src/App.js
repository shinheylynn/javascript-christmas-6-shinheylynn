import { Console } from "@woowacourse/mission-utils";
import TitleView from "./views/TitleView";
import NoBenefitView from "./views/NoBenefitView";
import OutputView from "./views/OutputView";
import UserController from "./controllers/UserController";
import MenuController from "./controllers/MenuController";
import MENU from "./constants/Menu";

class App {
	constructor() {
		this.menu = MENU;
		this.menuController = new MenuController();
	}

	async titles() {
		TitleView.printTitles(); // 기능 테스트 - 모든 타이틀 출력
	}

	async noBenefit() {
		NoBenefitView.printNoBenefit(); // 기능 테스트 - 혜택 내역 타이틀과 없음 출력
	}

	async invalidDate() {
		await UserController.inputDate(); // 예외 테스트 - 날짜 예외 테스트
	}

	async invalidMenu() {
		await UserController.inputMenu(); // 예외 테스트 - 주문 예외 테스트
	}

	async run() {
		const date = await OutputView.printGetDate();
		const inputMenu = await OutputView.printGetMenu();
		const parsedInputMenu = await this.menuController.parseMenuAndQuantity(
			inputMenu
		);
		await Console.print(
			`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
		);

		OutputView.printMenu(inputMenu);

		OutputView.printPriceBeforeDiscount();
		const totalPrice = await this.menuController.calculateTotalPrice(
			parsedInputMenu
		);

		const present = OutputView.printPresent(totalPrice);
	}
}

export default App;
