# qd-formatters

Pass in your parent app's d3 object to qd-formatter to use the formatters. 

Formatters will add comma separation, and dollar sign for currency formatters.

Use normal formatters .currencyFormat and .numberFormat for numbers less than 1000. Use the .bigCurrencyFormat, and .bigNumberFormat for large numbers greater than 1000. The large formatters format up to trillions. Each formatter will return a d3.format function.
