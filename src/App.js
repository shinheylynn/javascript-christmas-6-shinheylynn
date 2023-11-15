import TitleView from "./views/TitleView";

class App {
	async titles() {
		TitleView.printTitles(); // 기능 테스트 - 모든 타이틀 출력
	}

	async noBenefit() {}

	async invalidDate() {}

	async invalidMenu() {}

	async run() {}
}

export default App;
