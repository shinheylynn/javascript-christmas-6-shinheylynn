import TitleView from "./views/TitleView";
import NoBenefitView from "./views/NoBenefitView";
import UserController from "./controllers/UserController";

class App {
	async titles() {
		TitleView.printTitles(); // 기능 테스트 - 모든 타이틀 출력
	}

	async noBenefit() {
		NoBenefitView.printNoBenefit(); // 기능 테스트 - 혜택 내역 타이틀과 없음 출력
	}

	async invalidDate() {
		await UserController.inputDate(); // 예외 테스트 - 날짜 예외 테스트
	}

	async invalidMenu() {}

	async run() {}
}

export default App;
