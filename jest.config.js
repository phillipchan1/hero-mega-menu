module.exports = {
  rootDir: './',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js?$': 'babel-jest'
  },
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  collectCoverage: true
}
