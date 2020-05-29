const BaseFormatter = require('./base-formatter')

class BtcMarketsFormatter extends BaseFormatter {
  constructor(doc) {
    super(doc)
    this.fieldMaps = Object.assign({}, this.fieldMaps, {
      creationTime: 'Date',

    })
  }

  shouldProcessRow(row) {
    return Object.keys(row).some()
  }
}

module.exports = BtcMarketsFormatter
