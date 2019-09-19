import { activateMenu } from './activate-menu'

jest.mock('./toggle-visibility-of-normal-menu', () => {
  return {
    toggleVisibilityOfNormalMenu: jest.fn()
  }
})

jest.mock('./activate-respective-menu', () => {
  return {
    activateRespectiveMenu: jest.fn()
  }
})

import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'
import { activateRespectiveMenu } from './activate-respective-menu'

describe('activateMenu()', () => {
  const testElements = [
    {
      classList: {
        add: jest.fn(),
        remove: jest.fn()
      },
      className: 'test-class'
    }
  ]

  describe('should call a series of functions', () => {
    activateMenu(testElements[0], 'testClass', 'testDropClass')

    it('should call toggleVisibilityOfNormalMenu', () => {
      const callLength = toggleVisibilityOfNormalMenu.mock.calls.length

      expect(callLength).toEqual(1)
    })

    it('should call activateRespectiveMenu', () => {
      const callLength = activateRespectiveMenu.mock.calls.length

      expect(callLength).toEqual(1)
    })
  })
})
