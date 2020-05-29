const fs = require('fs-jetpack')
const cli = require('cli-ux').default
const csv = require('neat-csv')
const formats = require('./formats')

class Convertor {
  constructor({
    format,
  }) {
    this.formatter = formats[format]

    if (!this.formatter) {
      throw new Error(`${format} is not a valid formatter`)
    }
  }

  async process(contents) {
    cli.action.start(`processing ${contents.length} bytes`)

    const data = await csv(contents)
    const Formatter = this.formatter
    const formatter = new Formatter(data)
    const output = await formatter.process()

    cli.action.stop()

    return output
  }
}

module.exports = Convertor
