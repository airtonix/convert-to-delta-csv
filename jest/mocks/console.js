/* global jest, process */

class ConsoleMock {
  constructor() {
    this.stdout = []
    this.stderr = []

    jest.spyOn(process.stdout, 'write').mockImplementation(val => this.stdout.push(val) > -1)
    jest.spyOn(process.stderr, 'write').mockImplementation(val => this.stderr.push(val) > -1)
    jest.spyOn(console, 'error').mockImplementation(val => this.stderr.push(val) > -1)
    jest.spyOn(console, 'log').mockImplementation(val => this.stdout.push(val) > -1)
    jest.spyOn(console, 'info').mockImplementation(val => this.stdout.push(val) > -1)
    jest.spyOn(console, 'warn').mockImplementation(val => this.stdout.push(val) > -1)
  }

  cleanup() {

  }
}

exports = {
  ConsoleMock,
}
