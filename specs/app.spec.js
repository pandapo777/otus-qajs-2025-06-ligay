import { nameIsValid, fullTrim, getTotal } from '../src/app'

describe('Функция  nameIsValid', () => {
    const nameIsValidCases = [
        { name : 'john', expected: true },
        { name : 'John', expected: false },
        { name : null, expected: false },
        { name : ' ', expected: false },
        { name : '', expected: false },
        { name : '123445', expected: false },
        { name : 12334555, expected: false },
        { name : 'иннокентий', expected: false },
        { name : 'john ', expected: false },
        { name : ' john', expected: false },
    ];
  it.each(nameIsValidCases)('Проверка имени на валидность', ({ name, expected}) => {
    const result = nameIsValid(name)
    expect(result).toBe(expected)
  })
})

describe('Функция  fullTrim', () => {
    const fullTrimCases = [
        { text : 'john ', expected: 'john' },
        { text : 'John + Amelia', expected: 'John+Amelia' },
        { text : null, expected: ''},
        { text : ' ', expected: '' },

        // console.log(fullTrim(1234))
        { text : '1 2 3 4 ', expected: '1234' },
        { text : '', expected: '' },
    ];
    it.each(fullTrimCases)('Проверка на удаление пробелов', ({ text, expected }) => {
        const result = fullTrim(text)
        expect(result).toBe(expected)
        expect(result).not.toContain(' ')
      })
    })

    
    //     const getTotalCases = [
    //         { discount : 'Двадцать два'},
    //         { discount : NaN},
    //         { discount : ' '},
    //         { discount : 2231242124},
    //         // { discountInvalid : -2 },
    //         // { discountInvalid : 100.1 },
    //     ]
    //   it.each(getTotalCases)('throws an error for discount !== "number"', (2, discount) => {
    //     expect(() => getTotal (2, discount)).toThrow('Скидка должна быть числом')
    //   })
    //   it.each(getTotalCases)('throws an error for 0 <= discount < 100"', (discountInvalid) => {
    //     expect(() => getTotal (2, discountInvalid)).toThrow('Процент скидки должен быть от 0 до 99')
    //   })
    
    describe('Функция  getTotal', () => {
      it('throws an error for 0 <= discount < 100"', () => {
        expect(() => getTotal (2, 100)).toThrow('Процент скидки должен быть от 0 до 99')
      })
    
    it('throws an error for 0 <= discount < 100"', () => {
        expect(() => getTotal (2, -1)).toThrow('Процент скидки должен быть от 0 до 99')
      })

    it( 'throws an error for discount !== "number"', () => {
            expect(() => getTotal (2, '')).toThrow('Скидка должна быть числом')
          })
    })

    

    // console.log(fullTrim('John + Amelia'))
// 