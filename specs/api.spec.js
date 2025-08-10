// Напишите 5 апи-тестов на сервис bookstore
// https://bookstore.demoqa.com/swagger/
// Напишите АПИ-тесты:
// Создание пользователя c ошибкой, логин уже используется
// Создание пользователя c ошибкой, пароль не подходит
// Создание пользователя успешно
// Генерация токена c ошибкой
// Генерация токена успешно

import { BASE_URL, ACCOUNT_URL, USER_NAME_EXIST, USER_PASSWORD_VALID, NEW_USER_NAME, NEW_USER_PASSWORD, NEW_USER_NAME_GETTING_USER_ID } from "../framework/config/config.js"
import { HEADERS_REQUEST } from "../framework/services/services.js"
let userID, token

describe('Auth Service', () => {
        test('1. Создание пользователя c ошибкой, логин уже используется', async () =>{
        const response = await fetch (`${BASE_URL}${ACCOUNT_URL}/User`,
        {
            method: 'POST',
            headers: HEADERS_REQUEST,
            body: JSON.stringify({
                userName: USER_NAME_EXIST,
                // password: '1StringString!'
                password: "1userPassword!"
            })
        })
        const responseBody = await response.json()
        console.log('1. Создание пользователя c ошибкой, логин уже используется', responseBody)
        expect(responseBody.message).toBe('User exists!')
        expect(responseBody.code).toBe('1204')
    })

    test('2. Создание пользователя c ошибкой, пароль не подходит', async () =>{
        const response = await fetch (`${BASE_URL}${ACCOUNT_URL}/User`,
        {
            method: 'POST',
            HEADERS_REQUEST,
            headers: HEADERS_REQUEST,
            body: JSON.stringify({
                userName: USER_NAME_EXIST,
                // password: '1StringString!'
                password: "user"
                
            })
        })
        const responseBody = await response.json()
        console.log('2. Создание пользователя c ошибкой, пароль не подходит', responseBody)
        expect(responseBody.message).toBe("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.")
        expect(responseBody.code).toBe('1300')
    })
    test('3. Создание пользователя успешно', async () =>{
        const response = await fetch (`${BASE_URL}${ACCOUNT_URL}/User`,
        {
            method: 'POST',
            headers: HEADERS_REQUEST,
            body: JSON.stringify({
                userName: NEW_USER_NAME,
                // password: '1StringString!'
                password: NEW_USER_PASSWORD
            })
        })
        const responseBody = await response.json()
        console.log('3. Создание пользователя успешно', responseBody)
        expect(responseBody.username).toBe(NEW_USER_NAME)
        // console.log(responseBody.username)
        expect(responseBody.userID).toBeDefined();
        console.log("responseBody.userID для Первого пользователя", responseBody.userID)
        // const USER_ID = responseBody.userID
        userID = responseBody.userID
        
    })
   
    test('4. Генерация токена c ошибкой', async () =>{
        const response = await fetch (`${BASE_URL}${ACCOUNT_URL}/GenerateToken`,
        {
            method: 'POST',
            headers: HEADERS_REQUEST,
            body: JSON.stringify({
                userName: NEW_USER_NAME,
                // password: '1StringString!'
                password: `${USER_PASSWORD_VALID}1`
            })
        })
        const responseBody = await response.json()
        console.log('4. Генерация токена c ошибкой', responseBody)
        expect(responseBody.status).toBe('Failed')
        expect(responseBody.result).toBe('User authorization failed.')
    })
     test('5. Генерация токена успешно', async () =>{
        const response = await fetch (`${BASE_URL}${ACCOUNT_URL}/GenerateToken`,
        {
            method: 'POST',
            headers: HEADERS_REQUEST,
            body: JSON.stringify({
                userName: NEW_USER_NAME,
                // password: '1StringString!'
                password: NEW_USER_PASSWORD
            })
        })
        const responseBody = await response.json()
        console.log('5. Генерация токена успешно', responseBody)
        expect(responseBody.status).toBe('Success')
        expect(responseBody.result).toBe('User authorized successfully.');
        expect(responseBody.token).toBeDefined();
        expect(responseBody.expires).toBeDefined();
        token = responseBody.token
    })
    test('6. Успешная авторизация', async () =>{
        const response = await fetch (`${BASE_URL}${ACCOUNT_URL}/Authorized`,
        {
            method: 'POST',
            headers: HEADERS_REQUEST,
            body: JSON.stringify({
                userName: NEW_USER_NAME,
                // password: '1StringString!'
                password: NEW_USER_PASSWORD
            })
        })
        const responseBody = await response.json()
        console.log('6. Успешная авторизация', responseBody)
        expect(responseBody).toBe(true)
        expect(responseBody).toEqual(true);
        expect(responseBody).toBeTruthy;
    })
    test('7. Получение информации о пользователе', async () =>{
          const response = await fetch (`${BASE_URL}${ACCOUNT_URL}/User/${userID}`,
        {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        })
        const responseBody = await response.json()
        console.log(response)
        console.log('7. Получение информации о пользователе', responseBody)
        expect(responseBody.username).toBe(NEW_USER_NAME)
        expect(responseBody.userId).toBe(userID);
    })
    test('8. Удаление пользователя', async () =>{
       const response = await fetch (`${BASE_URL}${ACCOUNT_URL}/User/${userID}`,
      {
          method: 'DELETE',
          headers: {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
          }
      })
      // console.log()
      const responseBody = await response
      console.log('8. Удаление пользователя', response)
      console.log('8. Удаление пользователя', responseBody)
      expect(response.status).toBe(204);
      expect(response.statusText).toBe('No Content');
      
  })
 })