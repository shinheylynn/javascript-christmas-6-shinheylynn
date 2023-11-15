class DateValidator {
	static isNumber(input) {
		return Number.isSafeInteger(Number(input));
	}

	static isNumberInRange(input) {
		return Number(input) >= 1 && Number(input) <= 31;
	}

	static isValidDate(input) {
		return this.isNumber(input) && this.isNumberInRange(input);
	}
}

export default DateValidator;
