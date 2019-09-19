import { getNumberFromClassName } from './get-number-from-class-name'

describe('getNumberFromClassName()', () => {
  it('should return 3 if i give it the class test-class-3', () => {
    const testClassName = 'test-class-3'

    const actual = getNumberFromClassName(testClassName)

    expect(actual).toEqual('3')
  })

  it('should return 13 if i give it the class test-class-13', () => {
    const testClassName = 'test-class-13'

    const actual = getNumberFromClassName(testClassName)

    expect(actual).toEqual('13')
  })
})
