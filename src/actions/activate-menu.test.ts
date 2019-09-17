import { activateMenu } from './activate-menu'

jest.mock('./toggle-visibility-of-normal-menu', () => {
  return {
    toggleVisibilityOfNormalMenu: jest.fn()
  }
})

jest.mock('../lib/remove-class-from-elements', () => {
  return {
    removeClassFromElements: jest.fn()
  }
})

import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'
import { removeClassFromElements } from '../lib/remove-class-from-elements'

describe('activateMenu()', () => {
  const testElements = [
    {
      classList: {
        add: jest.fn(),
        remove: jest.fn()
      }
    }
  ]

  describe('should call a series of functions', () => {
    activateMenu(testElements, testElements[0], 'testClass')

    it('should call add class active', () => {
      const callLength = testElements[0].classList.add.mock.calls.length

      expect(callLength).toEqual(1)
    })

    it('should call toggleVisibilityOfNormalMenu', () => {
      const callLength = toggleVisibilityOfNormalMenu.mock.calls.length

      expect(callLength).toEqual(1)
    })

    it('should call removeClassFromElements', () => {
      const callLength = removeClassFromElements.mock.calls.length

      expect(callLength).toEqual(1)
    })
  })
})
