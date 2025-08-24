// Напишите 5 апи-тестов на сервис bookstore
// https://bookstore.demoqa.com/swagger/
// Напишите АПИ-тесты:
// Создание пользователя c ошибкой, логин уже используется
// Создание пользователя c ошибкой, пароль не подходит
// Создание пользователя успешно
// Генерация токена c ошибкой
// Генерация токена успешно

import {
  BASE_URL,
  ACCOUNT_URL,
  USER_NAME_EXIST,
  USER_PASSWORD_VALID,
  NEW_USER_NAME,
  NEW_USER_PASSWORD
} from '../framework/config/config.ts'

import { createUser, generateToken, authorized } from '../framework/services/services'
let userIDID: string, token: string

describe('Auth Service', () => {
  test('1. Создание пользователя c ошибкой, логин уже используется', async () => {
    const responseBody = await createUser({
      userName: USER_NAME_EXIST,
      password: '1userPassword!'
    })
    console.log('1. Создание пользователя c ошибкой, логин уже используется', responseBody)

    expect(responseBody.data.message).toBe('User exists!')

    expect(responseBody.status).toBe(406)

    expect(responseBody.data.code).toBe('1204')
  })

  test('2. Создание пользователя c ошибкой, пароль не подходит', async () => {
    const responseBody = await createUser({
      userName: USER_NAME_EXIST,
      password: 'user'
    })
    console.log('2. Создание пользователя c ошибкой, пароль не подходит', responseBody)

    expect(responseBody.data.message).toBe(
      "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer."
    )

    expect(responseBody.data.code).toBe('1300')

    expect(responseBody.status).toBe(400)
  })

  test('3. Создание пользователя успешно', async () => {
    const responseBody = await createUser({
      userName: NEW_USER_NAME,
      password: NEW_USER_PASSWORD
    })
    console.log('3. Создание пользователя успешно', responseBody)

    expect(responseBody.data.username).toBe(NEW_USER_NAME)

    expect(responseBody.data.userID).toBeDefined()

    expect(responseBody.status).toBe(201)
    console.log('responseBody.userID для Первого пользователя', responseBody.data.userID)
    userIDID = responseBody.data.userID
  })

  test('4. Генерация токена c ошибкой', async () => {
    const responseBody = await generateToken({
      userName: NEW_USER_NAME,
      password: `${USER_PASSWORD_VALID}1`
    })
    console.log('4. Генерация токена c ошибкой', responseBody)

    expect(responseBody.data.status).toBe('Failed')

    expect(responseBody.status).toBe(200)

    expect(responseBody.data.result).toBe('User authorization failed.')
  })

  test('5. Генерация токена успешно', async () => {
    const responseBody = await generateToken({
      userName: NEW_USER_NAME,
      password: NEW_USER_PASSWORD
    })
    console.log('5. Генерация токена успешно', responseBody)

    expect(responseBody.data.status).toBe('Success')

    expect(responseBody.data.result).toBe('User authorized successfully.')

    expect(responseBody.data.token).toBeDefined()

    expect(responseBody.data.expires).toBeDefined()
    token = responseBody.data.token
  })

  test('6. Успешная авторизация', async () => {
    const responseBody = await authorized({
      userName: NEW_USER_NAME,
      password: NEW_USER_PASSWORD
    })

    console.log('6. Успешная авторизация', responseBody)

    expect(responseBody.status).toBe(200)

    expect(responseBody.data).toBe(true)

    expect(responseBody.data).toEqual(true)

    expect(responseBody.data).toBeTruthy
  })

  test('7. Получение информации о пользователе', async () => {
    const response = await fetch(`${BASE_URL}${ACCOUNT_URL}/User/${userIDID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const responseBody = await response.json()

    console.log('7. Получение информации о пользователе', responseBody)

    expect(responseBody.username).toBe(NEW_USER_NAME)

    expect(responseBody.userId).toBe(userIDID)
  })

  test('8. Удаление пользователя', async () => {
    const response = await fetch(`${BASE_URL}${ACCOUNT_URL}/User/${userIDID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const responseBody = await response

    console.log('8. Удаление пользователя', responseBody)

    expect(response.status).toBe(204)

    expect(response.statusText).toBe('No Content')
  })
})
