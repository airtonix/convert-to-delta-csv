const fs = require('fs-jetpack')
const cli = require('cli-ux').default

class Storage {
  constructor({source, output}) {
    this.source = source
    this.output = output
  }

  async load() {
    if (this.source) {
      cli.action.start(`loading ${this.source}`)
      this.contents = await fs.readAsync(this.source)
      cli.action.stop()
    }
  }

  async write(data) {
    await fs
    .writeAsync(this.output, data, {atomic: true})
  }
}

module.exports = Storage
