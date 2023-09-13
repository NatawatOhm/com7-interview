declare interface String {
  numberOnly: () => string
  formatToPattern: (pattern: string) => string
  formatToCurrency: () => string
}
declare interface Number {
  formatToCurrency: () => string
}

String.prototype.numberOnly = function () {
  return this.replace(/\D/gm, '')
}

String.prototype.formatToCurrency = function () {
  return new Intl.NumberFormat('en-US').format(Number(this.numberOnly()))
}
Number.prototype.formatToCurrency = function () {
  return this.toString().formatToCurrency()
}
