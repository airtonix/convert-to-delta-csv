const cli = require('cli-ux').default

class BaseFormatter {
  constructor(doc) {
    this.doc = doc

    this.fieldMaps = {
      default: {
        name: async ({name}) => name,
        value: async ({value}) => value,
      },
    }
  }

  // eslint-disable-next-line no-unused-vars
  shouldProcessRow(row) {
    return true
  }

  cleanRow(row) {
    return Object.keys(row)
    .reduce((results, key) => ({
      ...results,
      [key.trim()]: row[key],
    }), {})
  }

  process() {
    const {doc} = this
    cli.action.start(`formatting ${doc.length} rows`)

    const output = doc.reduce((previous, item, index) => {
      return previous.then(results => {
        cli.action.start(`processing row ${index + 1}`)
        const row = this.cleanRow(item)
        return this.processRow(row)
        .then(row => {
          results.push(row)
          return results
        })
      })
    }, Promise.resolve([]))

    cli.action.stop()

    return output
  }

  processRow(row) {
    const keys = Object.keys(row)

    return keys.reduce((previous, fieldName) => {
      return previous.then(async results => {
        if (!this.shouldProcessRow(row)) return results

        const fieldValue = row[fieldName]
        const {newFieldName, newFieldValue} = await this.processCell({
          fieldName,
          fieldValue,
          row,
        })
        return {
          ...results,
          [newFieldName]: newFieldValue,
        }
      })
    }, Promise.resolve({}))
  }

  async processCell({
    fieldName,
    fieldValue,
    row,
  }) {
    const mapper = this.getFieldMapper(fieldName)
    const output = {
      newFieldName: await mapper.name({
        name: fieldName,
        value: fieldValue,
        row,
      }),
      newFieldValue: await mapper.value({
        name: fieldName,
        value: fieldValue,
        row,
      }),
    }
    return output
  }

  getFieldMapper(fieldName) {
    const fieldMaps = this.fieldMaps
    const fieldMap = fieldMaps[fieldName] || fieldMaps.default

    const mapper = fieldMap

    if (typeof fieldMap === 'string') {
      mapper.name = async () => fieldMap
      mapper.value = async ({value}) => value
    }

    if (fieldMap && typeof fieldMap.name === 'string') {
      mapper.name = async () => fieldMap.name
    }

    if (fieldMap && typeof fieldMap.value === 'string') {
      mapper.value = async () => fieldMap.value
    }

    return mapper
  }
}

module.exports = BaseFormatter
