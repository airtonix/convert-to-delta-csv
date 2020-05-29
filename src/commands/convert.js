const {Command, flags} = require('@oclif/command')
const Convertor = require('../core/convertor')
const Storage = require('../core/storage')

class ConvertCommand extends Command {
  async run() {
    const {flags, args} = this.parse(ConvertCommand)
    const {format, output} = flags
    const {source} = args

    const storage = new Storage({source, output})
    await storage.load()

    const convertor = new Convertor({format})
    const result = await convertor.process(storage.contents)
  }
}

ConvertCommand.description = `Describe the command here
...
Extra documentation goes here
`

ConvertCommand.args = [
  {name: 'source', required: true},
]

ConvertCommand.flags = {
  version: flags.version(),
  help: flags.help(),
  format: flags.string({char: 'f', description: 'format to convert', default: 'default'}),
  output: flags.string({char: 'o', description: 'directory to write output', default: process.cwd()}),
}

module.exports = ConvertCommand
