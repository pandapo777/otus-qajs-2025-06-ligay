// Напишите 5 апи-тестов на сервис bookstore
// https://bookstore.demoqa.com/swagger/

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

const baseUrl = 'https://bookstore.demoqa.com'
const accountUrl = '/Account/v1'
const userNameExists = 'Alena'
const userPasswordValid = '1StringString!' 
const newUserName = 'Alena2025' //Для успешного прохождения кейса №3 нужно создавать имя нового пользователя
const newUserPassword = 'Alena2025String!1'


describe('Auth Service', () => {
        test('1. Создание пользователя c ошибкой, логин уже используется', async () =>{
        const response = await fetch (`${baseUrl}${accountUrl}/User`,
        {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify({
                userName: userNameExists,
                // password: '1StringString!'
                password: "1userPassword!"
            })
        })
        const responseBody = await response.json()
        console.log(responseBody)
        expect(responseBody.message).toBe('User exists!')
        expect(responseBody.code).toBe('1204')
    })

    test('2. Создание пользователя c ошибкой, пароль не подходит', async () =>{
        const response = await fetch (`${baseUrl}${accountUrl}/User`,
        {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify({
                userName: userNameExists,
                // password: '1StringString!'
                password: "userPassword"
            })
        })
        const responseBody = await response.json()
        console.log(responseBody)
        expect(responseBody.message).toBe("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.")
        expect(responseBody.code).toBe('1300')
    })
    test('3. Создание пользователя успешно', async () =>{
        const response = await fetch (`${baseUrl}${accountUrl}/User`,
        {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify({
                userName: newUserName,
                // password: '1StringString!'
                password: newUserPassword
            })
        })
        const responseBody = await response.json()
        console.log(responseBody)
        expect(responseBody.username).toBe(newUserName)
        expect(responseBody.userID).toBeDefined();
    })
   
    test('4. Генерация токена c ошибкой', async () =>{
        const response = await fetch (`${baseUrl}${accountUrl}/GenerateToken`,
        {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify({
                userName: newUserName,
                // password: '1StringString!'
                password: `${newUserPassword}1`
            })
        })
        const responseBody = await response.json()
        console.log(responseBody)
        expect(responseBody.status).toBe('Failed')
        expect(responseBody.result).toBe('User authorization failed.')
    })
     test('5. Генерация токена успешно', async () =>{
        const response = await fetch (`${baseUrl}${accountUrl}/GenerateToken`,
        {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify({
                userName: newUserName,
                // password: '1StringString!'
                password: newUserPassword
            })
        })
        const responseBody = await response.json()
        console.log(responseBody)
        expect(responseBody.status).toBe('Success')
        expect(responseBody.result).toBe('User authorized successfully.');
        expect(responseBody.token).toBeDefined();
        expect(responseBody.expires).toBeDefined();
    })
    // test('Успешная авторизация', async () =>{
    //     const response = await fetch (`${baseUrl}${accountUrl}/Authorized`,
    //     {
    //         method: 'POST',
    //         headers: {
    //             'Content-type' : 'application/json',
    //         },
    //         body: JSON.stringify({
    //             userName:  userNameValid,
    //             password: userPasswordValid
    //         })
    //     })
    //     const responseBody = await response.json()
    //     console.log(responseBody)
    //     expect(responseBody).toBe(true)
    // })
    })