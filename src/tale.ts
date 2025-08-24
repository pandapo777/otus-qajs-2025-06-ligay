const NAME_STRANGER = 'лиса'
const NAME_WINTER_PERSONAGE = 'Дед Мороз'

export function kolobok(name: string) {
  switch (name) {
    case 'дедушка':
      return 'Я от дедушки ушел'
    case 'заяц':
      return 'Я от зайца ушел'
    case 'лиса':
      return 'Меня съели'
    default:
      return 'Значения могут быть "дедушка", "заяц" или "лиса"'
  }
}

export function newYear(name: string) {
  if (name === 'Cнегурочка' || name === 'Дед Мороз') {
    const exclamationName = `${name}! `
    return exclamationName.repeat(3)
  } else {
    return `Значения могут быть "Cнегурочка" или "Дед Мороз"`
  }
}

kolobok(NAME_STRANGER)
newYear(NAME_WINTER_PERSONAGE)
