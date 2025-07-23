const NAME_STRANGER = 'лиса'
const NAME_WINTER_PERSONAGE = 'Cнегурочка1'

function kolobok(name1) {
  switch (name1) {
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
    console.log(`${name}! ${name}! ${name}!`)
  } else {
    console.log(`Значения могут быть "Cнегурочка" или "Дед Мороз"`)
  }
}

kolobok(NAME_STRANGER)
newYear(NAME_WINTER_PERSONAGE)
