import { isMobile } from './is-mobile'

describe('isMobile()', () => {
  it('given a screen size preset smaller than current window size, it should return true', () => {
    // arrange
    const testMobileViewportWidth = 700
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))

    // act
    const actual = isMobile(testMobileViewportWidth)

    // assert
    expect(actual).toEqual(true)
  })

  it('given a screen size preset larger than current window size, it should return true', () => {
    // arrange
    const testMobileViewportWidth = 700
    global.innerWidth = 900
    global.dispatchEvent(new Event('resize'))

    // act
    const actual = isMobile(testMobileViewportWidth)

    // assert
    expect(actual).toEqual(false)
  })
})
