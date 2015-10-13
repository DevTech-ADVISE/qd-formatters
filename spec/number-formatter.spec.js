var d3 = require('d3');
var nf = require('../index.js')(d3);

var numbers = {
	hundreds: 238,
	thousands: 3027,
	millions: 85060230,
	billions: 2360409630,
	trillions: 6250800600100
};

describe("currency formatter", function() {
	it('should format a number to a currency', function() {
		expect(nf.currencyFormat(numbers.hundreds)).toBe('$238');
		expect(nf.currencyFormat(numbers.thousands)).toBe('$3,027');
		expect(nf.currencyFormat(numbers.millions)).toBe('$85,060,230');
		expect(nf.currencyFormat(numbers.billions)).toBe('$2,360,409,630');
		expect(nf.currencyFormat(numbers.trillions)).toBe('$6,250,800,600,100');
	});

	it('should format a negative number to a currency', function() {
		expect(nf.currencyFormat(-numbers.hundreds)).toBe('-$238');
		expect(nf.currencyFormat(-numbers.thousands)).toBe('-$3,027');
		expect(nf.currencyFormat(-numbers.millions)).toBe('-$85,060,230');
		expect(nf.currencyFormat(-numbers.billions)).toBe('-$2,360,409,630');
		expect(nf.currencyFormat(-numbers.trillions)).toBe('-$6,250,800,600,100');
	});
});

describe("number formatter", function() {
	it('should format a number to a more readable number(with commas)', function() {
		expect(nf.numberFormat(numbers.hundreds)).toBe('238');
		expect(nf.numberFormat(numbers.thousands)).toBe('3,027');
		expect(nf.numberFormat(numbers.millions)).toBe('85,060,230');
		expect(nf.numberFormat(numbers.billions)).toBe('2,360,409,630');
		expect(nf.numberFormat(numbers.trillions)).toBe('6,250,800,600,100');
	});

	it('should format a negative number to a more readable negative number(with commas)', function() {
		expect(nf.numberFormat(-numbers.hundreds)).toBe('-238');
		expect(nf.numberFormat(-numbers.thousands)).toBe('-3,027');
		expect(nf.numberFormat(-numbers.millions)).toBe('-85,060,230');
		expect(nf.numberFormat(-numbers.billions)).toBe('-2,360,409,630');
		expect(nf.numberFormat(-numbers.trillions)).toBe('-6,250,800,600,100');
	});
});

describe("Big currency formatter", function() {
	it('should format a number to a shortened currency', function() {
		expect(nf.bigCurrencyFormat(numbers.hundreds)).toBe('$238');
		expect(nf.bigCurrencyFormat(numbers.thousands)).toBe('$3.0k');
		expect(nf.bigCurrencyFormat(numbers.millions)).toBe('$85m');
		expect(nf.bigCurrencyFormat(numbers.billions)).toBe('$2.4b');
		expect(nf.bigCurrencyFormat(numbers.trillions)).toBe('$6.3t');
	});

	it('should format a negative number to a shortened currency', function() {
		expect(nf.bigCurrencyFormat(-numbers.hundreds)).toBe('-$238');
		expect(nf.bigCurrencyFormat(-numbers.thousands)).toBe('-$3.0k');
		expect(nf.bigCurrencyFormat(-numbers.millions)).toBe('-$85m');
		expect(nf.bigCurrencyFormat(-numbers.billions)).toBe('-$2.4b');
		expect(nf.bigCurrencyFormat(-numbers.trillions)).toBe('-$6.3t');
	});
});

describe("Big number formatter", function() {
	it('should format a number to a shortened number', function() {
		expect(nf.bigNumberFormat(numbers.hundreds)).toBe('238');
		expect(nf.bigNumberFormat(numbers.thousands)).toBe('3.0k');
		expect(nf.bigNumberFormat(numbers.millions)).toBe('85m');
		expect(nf.bigNumberFormat(numbers.billions)).toBe('2.4b');
		expect(nf.bigNumberFormat(numbers.trillions)).toBe('6.3t');
	});

	it('should format a negative number to a shortened number', function() {
		expect(nf.bigNumberFormat(-numbers.hundreds)).toBe('-238');
		expect(nf.bigNumberFormat(-numbers.thousands)).toBe('-3.0k');
		expect(nf.bigNumberFormat(-numbers.millions)).toBe('-85m');
		expect(nf.bigNumberFormat(-numbers.billions)).toBe('-2.4b');
		expect(nf.bigNumberFormat(-numbers.trillions)).toBe('-6.3t');
	});
});