import { onResize } from './on-resize'

describe('onResize()', () => {
  const testState = {
    mobileViewport: 768
  }

  it('should dispatch true activate if its in desktop ', () => {
    const testStore = {
      dispatch: jest.fn()
    }

    global.innerWidth = 800
    global.dispatchEvent(new Event('resize'))

    onResize(testState, testStore)

    const actual = testStore.dispatch.mock.calls[0][1]

    expect(actual).toEqual(true)
  })

  it('should dispatch false activate if its in mobile', () => {
    const testStore = {
      dispatch: jest.fn()
    }

    global.innerWidth = 300
    global.dispatchEvent(new Event('resize'))

    onResize(testState, testStore)

    const actual = testStore.dispatch.mock.calls[0][1]

    expect(actual).toEqual(false)
  })
})
