const BtcMarketsFormatter = require('./btc-markets-formatter')
const BaseFormatter = require('./base-formatter')

module.exports = {
  btcmarkets: BtcMarketsFormatter,
  default: BaseFormatter,
}

