import { from } from 'memorystream'
import { kolobok, newYear } from '../src/tale.js'

// describe('Функция  kolobok', () => {
//   test('Проверка результата name === "дедушка"', () => {
//     const result = kolobok('дедушка')
//     expect(result).toContain('Я от дедушки ушел')
//   })

//   test('Проверка результата name !== допустимым значениям', () => {
//     const result = kolobok('дЭдушка')
//     expect(result).toContain('Значения могут быть "дедушка", "заяц" или "лиса"')
//   })
// })
describe('Функция  kolobok', () => {
  const kolobokCases = [
    { name: 'дедушка', expected: 'Я от дедушки ушел' },
    { name: 'заяц', expected: 'Я от зайца ушел' },
    { name: 'лиса', expected: 'Меня съели' },
    { name: ' ', expected: 'Значения могут быть "дедушка", "заяц" или "лиса"' },
    { name: '', expected: 'Значения могут быть "дедушка", "заяц" или "лиса"' },
    { name: '123445', expected: 'Значения могут быть "дедушка", "заяц" или "лиса"' },
    { name: 12334555, expected: 'Значения могут быть "дедушка", "заяц" или "лиса"' }
  ]
  it.each(kolobokCases)('Проверка результатов встречи колобка с другими персонажами', ({ name, expected }) => {
    const result = kolobok(name)
    expect(result).toBe(expected)
  })
})

describe('Функция  newYear', () => {
  const newYearCases = [
    { name: 'Cнегурочка', expected: 'Cнегурочка! Cнегурочка! Cнегурочка! ' },
    { name: 'Дед Мороз', expected: 'Дед Мороз! Дед Мороз! Дед Мороз! ' },
    { name: ' ', expected: 'Значения могут быть "Cнегурочка" или "Дед Мороз"' },
    { name: '', expected: 'Значения могут быть "Cнегурочка" или "Дед Мороз"' },
    { name: '123445', expected: 'Значения могут быть "Cнегурочка" или "Дед Мороз"' },
    { name: 12334555, expected: 'Значения могут быть "Cнегурочка" или "Дед Мороз"' }
  ]
  it.each(newYearCases)('Проверка вызова новогодних персонажей', ({ name, expected }) => {
    const result = newYear(name)
    expect(result).toBe(expected)
  })
})
