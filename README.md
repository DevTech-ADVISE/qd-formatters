# qd-formatters

This library formats numbers and currencies up to large numbers in the trillions. 

## Getting Started

Install

```
npm install qd-formatters
```

Require in your code
```
//pass your parent app's d3 object into the require
var formatters = require('qd-formatters')(d3);

//using the formatter
formatters.currencyFormat(32724); //prints $32,724
formatters.bigCurrencyFormat(12343); //prints $12k
formatters.numberFormat(32724); //prints 32,724
formatters.bigNumberFormat(12343); //prints 12k
```

# API Reference

## .currencyFormat(number)
Pass a number to currencyFormat and a dollar sign will be prepended to the number. Comma separators will also be added to separate thousands, millions, billions etc.

## .bigCurrencyFormat(number)
Pass a number to bigCurrencyFormat and a dollar sign will be prepended to the number. The number will then be formatted to 3 digits or less. A letter will be added to indicate the size of the number. k for thousands, m for millions, b for billions, t for trillions.

## .numberFormat(number)
Pass a number to numberFormat. Comma separators will also be added to separate thousands, millions, billions etc.

## .bigNumberFormat(number)
Pass a number to bigNumberFormat. The number will then be formatted to 3 digits or less. A letter will be added to indicate the size of the number. k for thousands, m for millions, b for billions, t for trillions.


