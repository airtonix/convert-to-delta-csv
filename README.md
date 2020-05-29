delta-cvs
=========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/delta-cvs.svg)](https://npmjs.org/package/delta-cvs)
[![Downloads/week](https://img.shields.io/npm/dw/delta-cvs.svg)](https://npmjs.org/package/delta-cvs)
[![License](https://img.shields.io/npm/l/delta-cvs.svg)](https://github.com/airtonix/delta-cvs/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g delta-cvs
$ delta-cvs COMMAND
running command...
$ delta-cvs (-v|--version|version)
delta-cvs/0.0.0 win32-x64 node-v12.16.3
$ delta-cvs --help [COMMAND]
USAGE
  $ delta-cvs COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`delta-cvs convert SOURCE`](#delta-cvs-convert-source)
* [`delta-cvs help [COMMAND]`](#delta-cvs-help-command)

## `delta-cvs convert SOURCE`

Describe the command here

```
USAGE
  $ delta-cvs convert SOURCE

OPTIONS
  -f, --format=format  [default: default] format to convert
  -o, --output=output  [default: ./] directory to write output
  --help               show CLI help
  --version            show CLI version

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src\commands\convert.js](https://github.com/airtonix/delta-cvs/blob/v0.0.0/src\commands\convert.js)_

## `delta-cvs help [COMMAND]`

display help for delta-cvs

```
USAGE
  $ delta-cvs help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src\commands\help.ts)_
<!-- commandsstop -->
