import { activateMenu } from './activate-menu'

describe('activateMenu()', () => {
  const testElement = {
    classList: {
      add: jest.fn()
    }
  }

  it('should call makeElementActive()', () => {
    activateMenu(testElement)

    const callLength = testElement.classList.add.mock.calls.length

    expect(callLength).toEqual(1)
  })
})
