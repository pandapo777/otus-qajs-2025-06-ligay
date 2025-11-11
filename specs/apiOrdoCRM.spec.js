import { OTUS_PROJECT_NEW_USER_NAME, OTUS_PROJECT_NEW_USER_PASSWORD , OTUS_PROJECT_BASE_URL, OTUS_PROJECT_USER_URL} from "../framework/config/configOrdoCRM.js"
import { createUserOrdoCRM, loginUserOrdoCrm, deleteUserOrdoCRM} from "../framework/services/servicesOrdoCRM.js"
let userID, token

describe('UserController в OrdoCRM', () =>{
    test('Успешное создание пользователя в OrdoCRM', async () =>{
        const responseBody = await createUserOrdoCRM({
            password: OTUS_PROJECT_NEW_USER_PASSWORD,
            username: OTUS_PROJECT_NEW_USER_NAME
        })
        console.log('responseBody проверка "Успешное создание пользователя"!!!!!!!!!!!', responseBody)
        expect(responseBody.status).toBe(201);
        expect(responseBody.data.data.username).toEqual(OTUS_PROJECT_NEW_USER_NAME)
        
        console.log('OTUS_PROJECT_NEW_USER_NAME', OTUS_PROJECT_NEW_USER_PASSWORD, OTUS_PROJECT_NEW_USER_NAME)
        // console.log("responseBody.userID для Первого пользователя", responseBody.data.userID)
        // userIDID = responseBody.data.userID
    })

    test('Успешная авторизация нового пользователя в OrdoCRM', async () =>{
        const responseBody = await loginUserOrdoCrm({
            password: OTUS_PROJECT_NEW_USER_PASSWORD,
            username: OTUS_PROJECT_NEW_USER_NAME
        })
        console.log('responseBody проверка "Успешная авторизация нового пользователя"!!!!!!!!!!!', responseBody)
        console.log('OTUS_PROJECT_NEW_USER_NAME', OTUS_PROJECT_NEW_USER_PASSWORD, OTUS_PROJECT_NEW_USER_NAME)
        // expect(responseBody.data.user.username).toBe(OTUS_PROJECT_NEW_USER_NAME)
        expect(responseBody.data.data.id).toBeDefined();
        expect(responseBody.data.data.token).toBeDefined();
        expect(responseBody.status).toBe(200);
        expect(responseBody.data.data.isDeleted).toBe(false);
        
        // isDeleted: false
        // console.log("responseBody.userID для Первого пользователя", responseBody.data.userID)
        userID = responseBody.data.data.user.id
        console.log ("userIDID!!!!!!!!!!!", userID)

      })
    
    // test('Успешное удаление пользователя в OrdoCRM', async () =>{
    //         const response = await fetch (`${OTUS_PROJECT_BASE_URL}${OTUS_PROJECT_USER_URL}/${userIDID}`,
    //     {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type':'application/json',
    //             'Authorization':'11a71a5a-bad4-4530-9278-0de4f7ebc84f'
    //         }
    //     })
   
    // const responseBody =await response
    //     console.log('responseBody проверка удаления пользователя!!!!!!!!!!!', responseBody)
    //     expect(response.status).toBe(200)
    // })

    test('Успешное удаление пользователя в OrdoCRM', async () =>{
        const response = await deleteUserOrdoCRM({userID})
        const responseBody =await response
        console.log('responseBody проверка "Успешное удаление пользователя"!!!!!!!!!!!', responseBody)
        expect(responseBody.status).toBe(200);
        expect(responseBody.data.status).toBe("SUCCESS");
        expect(responseBody.data.data).toBeNull();
        // expect(responseBody.data.message).toBeNaN();
        expect(responseBody.data.message).toContain("User with ID");
        expect(responseBody.data.message).toContain("deleted successfully");
})
})
