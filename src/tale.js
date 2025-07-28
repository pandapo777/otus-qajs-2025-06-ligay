const NAME_STRANGER = 'лиса'
const NAME_WINTER_PERSONAGE = 'Дед Мороз'

function kolobok(name) {
  switch (name) {
    case 'дедушка':
      console.log('Я от дедушки ушел')
      break
    case 'заяц':
      console.log('Я от зайца ушел')
      break
    case 'лиса':
      console.log('Меня съели')
      break
    default:
      console.log('Значения могут быть "дедушка", "заяц" или "лиса"')
      break
  }
}

function newYear(name) {
  if (name === 'Cнегурочка' || name === 'Дед Мороз') {
    const exclamationName = `${name}! `
    console.log(exclamationName.repeat(3))
  } else {
    console.log(`Значения могут быть "Cнегурочка" или "Дед Мороз"`)
  }
}

kolobok(NAME_STRANGER)
newYear(NAME_WINTER_PERSONAGE)
