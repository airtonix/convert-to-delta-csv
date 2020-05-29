/* global expect, describe, it */

describe('commands', () => {
  describe('convert', () => {
    it('runs convert', async () => {
      const ConvertCommand = require('./convert')
      await ConvertCommand.run([
        'example.csv',
      ])
      expect(result).toBeDefined()
    })
  })
})
