import { from } from 'memorystream'
import { kolobok, newYear } from '../src/tale.js'

describe('Функция  kolobok', () => {
  test('Проверка результата name === "дедушка"', () => {
    const result = kolobok('дедушка')
    expect(result).toContain('Я от дедушки ушел')
  })

  test('Проверка результата name !== допустимым значениям', () => {
    const result = kolobok('дЭдушка')
    expect(result).toContain('Значения могут быть "дедушка", "заяц" или "лиса"')
  })
})
