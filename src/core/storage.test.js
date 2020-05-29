const fs = require('fs')
/* global jest, describe, expect, it */
const Storage = require('./storage')

jest.mock('fs')

describe('core', () => {
  describe('storage', () => {
    it('stores a source', () => {
      const source = './example.csv'
      const storage = new Storage({source})
      expect(storage).toHaveProperty('source', source)
    })

    it('writes to output', () => {
      const source = './example.csv'
      const output = './example.converted.csv'
      const data = 'test'

      const storage = new Storage({source, output})
      expect(storage).toHaveProperty('source', source)
      expect(storage).toHaveProperty('output', output)
      storage.write(data)
      expect(fs.writeFileSync).toHaveBeenCalled()
    })
  })
})
