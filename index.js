var formatter = {};



var qdFormatter = function(d3) {
  var currency = d3.format("$,");
  var number = d3.format(",");
  var currency2p = d3.format("$,.2r");
  var number2p = d3.format(",.2r");

  var _formatters = {};

  _formatters.currencyFormat = function(d){
    var rounded = Math.round(d);
    if (Math.abs(rounded) < 10) return d3.format("$")(rounded);
    return currency(rounded);
  }
  _formatters.numberFormat = function(d){
    var rounded = Math.round(d);
    if (Math.abs(rounded) < 10) return rounded;
    return number(rounded);
  };
  _formatters.bigCurrencyFormat = function(d){
    var abs = Math.abs(d);
    if(abs/1e12 >= 1) {
      return generateBigFormatter(d, "currency") + "t";
    }
    else if (abs/1e9 >= 1) {
     return generateBigFormatter(d, "currency") + "b";
    }else if(abs/1e6 >= 1){
     return generateBigFormatter(d, "currency") + "m";
    }else if(abs/1e3 >= 1){
     return generateBigFormatter(d, "currency") + "k";
    }else{
     return formatter.currencyFormat(d);
    }
  }
  _formatters.bigNumberFormat = function(d){
    var abs = Math.abs(d);
    if(abs/1e12 >= 1) {
      return generateBigFormatter(d, "number") + "t";
    }
    else if (abs/1e9 >= 1) {
     return generateBigFormatter(d, "number") + "b";
    }else if(abs/1e6 >= 1){
     return generateBigFormatter(d, "number") + "m";
    }else if(abs/1e3 >= 1){
     return generateBigFormatter(d, "number") + "k";
    }else{
     return formatter.numberFormat(d);
    }
  }

  generateBigFormatter = function(d, type) {
    var digitLength, absoluteDividedNumber, actualDividedNumber, truncatedNumber;
    var abs = Math.abs(d);
    if(abs/1e12 >= 1) {
      absoluteDividedNumber = abs/1e12;
    }
    else if (abs/1e9 >= 1) {
     absoluteDividedNumber = abs/1e9;
    }else if(abs/1e6 >= 1){
     absoluteDividedNumber = abs/1e6;
    }else if(abs/1e3 >= 1){
     absoluteDividedNumber = abs/1e3;
    }
    digitLength = String(Math.floor(absoluteDividedNumber)).length;
    actualDividedNumber = (d < 0) ? -absoluteDividedNumber : absoluteDividedNumber;
    if(digitLength === 1) digitLength = 2;
    if(type === "currency")
      return d3.format("$,." + String(digitLength) + "r")(actualDividedNumber);
    else if(type === "number")
      return d3.format(",." + String(digitLength) + "r")(actualDividedNumber);
  };


  return _formatters;
};

module.exports = qdFormatter;