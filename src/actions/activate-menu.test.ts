import { activateMenu } from './activate-menu'

jest.mock('./activate-respective-menu', () => {
  return {
    activateRespectiveMenu: jest.fn()
  }
})

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
    activateMenu(testElements[0], 'testClass')

    it('should call activateRespectiveMenu', () => {
      const callLength = activateRespectiveMenu.mock.calls.length

      expect(callLength).toEqual(1)
    })
  })
})
