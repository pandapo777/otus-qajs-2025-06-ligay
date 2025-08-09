// Напишите 5 апи-тестов на сервис bookstore
// https://bookstore.demoqa.com/swagger/

// import { BASE_URL } from "../framework/config/config"

// Напишите АПИ-тесты:



// describe('Auth Service', () => {
//     test('get token with correct credentials', async () =>{
//         const response = await fetch ('https://bookstore.demoqa.com/Account/v1/Authorized',
//         {
//             method: 'POST',
//             headers: {
//                 'Content-type' : 'application/json',
//             },
//             body: JSON.stringify({
//                 userName: 'Alena',
//                 password: '1StringString!'
//             })
//         })
//         const responseBody = await response.json()
//         console.log(responseBody)
//     })
//     })

// Создание пользователя c ошибкой, логин уже используется
// Создание пользователя c ошибкой, пароль не подходит
// Создание пользователя успешно
// Генерация токена c ошибкой
// Генерация токена успешно

import { BASE_URL, ACCOUNT_URL, USER_NAME_EXIST, USER_PASSWORD_VALID, NEW_USER_NAME, NEW_USER_PASSWORD, NEW_USER_NAME_GETTING_USER_ID } from "../framework/config/config.js"
import { HEADERS_REQUEST } from "../framework/services/services.js"

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
        const responseGettingUserId = await fetch (`${BASE_URL}${ACCOUNT_URL}/User`,
            {
                method: 'POST',
                headers: HEADERS_REQUEST,
                body: JSON.stringify({
                    userName: NEW_USER_NAME_GETTING_USER_ID,
                    // password: '1StringString!'
                    password: NEW_USER_PASSWORD
                })
            })
            const responseBodyGettingUserId = await responseGettingUserId.json()
            console.log("тело запроса", responseGettingUserId)
            console.log(responseBodyGettingUserId)
            console.log(responseBodyGettingUserId.userID)
        

            
            const responseAuthorized = await fetch (`${BASE_URL}${ACCOUNT_URL}/Authorized`,
                {
                    method: 'POST',
                    headers: HEADERS_REQUEST,
                    body: JSON.stringify({
                        
                        userName: NEW_USER_NAME_GETTING_USER_ID,
                        // password: '1StringString!'
                        password: NEW_USER_PASSWORD,

                    })
                    
                })

               
                // console.log(responseAuthorized.json())
                const responseBodyAuthorized = await responseAuthorized.json()
                // console.log(responseAuthorized.NEW_USER_NAME)
                console.log(responseBodyAuthorized)
            
        const response = await fetch (`${BASE_URL}${ACCOUNT_URL}/User/{${responseBodyGettingUserId.userID}}`,
            
           
        {
            method: 'GET',
            headers: HEADERS_REQUEST,
            // body: JSON.stringify({
            //    UserID : USER_ID
            // })
        })
        const responseBody = await response.json()
        console.log(response)
        console.log('7. Получение информации о пользователе', responseBody)
        // expect(responseBody.username).toBe(NEW_USER_NAME)
        // // console.log(responseBody.username)
        // expect(responseBody.userID).toBeDefined();
    })

    })