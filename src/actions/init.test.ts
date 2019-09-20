import { init } from './init'

jest.mock('./toggle-visibility-of-normal-menu', () => {
  return {
    toggleVisibilityOfNormalMenu: jest.fn()
  }
})

import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'

describe('activateInit()', () => {
  it('should call toggleVisibilityOfNormalMenu', () => {
    const testClass = 'testClass'

    init(testClass)

    const numberOfTimesCalled = toggleVisibilityOfNormalMenu.mock.calls.length

    expect(numberOfTimesCalled).toEqual(1)
  })
})
