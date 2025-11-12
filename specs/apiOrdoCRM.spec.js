import { OTUS_PROJECT_NEW_USER_NAME, OTUS_PROJECT_NEW_USER_PASSWORD, OTUS_PROJECT_ADMIN_TOKEN, OTUS_PROJECT_EXPIRED_ADMIN_TOKEN, OTUS_PROJECT_USER_ID_PARAMETRIZED } from "../framework/config/configOrdoCRM.js"
import { createUserOrdoCRM, loginUserOrdoCrm, deleteUserOrdoCRM, updateUserOrdoCRM, getUserOrdoCRMbyID, getUserOrdoCRMbyUsername,  changeBlockUserOrdoCRM, changeBlockUserOrdoCRMFalse, getListUsersOrdoCRM} from "../framework/services/servicesOrdoCRM.js"
let userID


describe('UserController в OrdoCRM', () =>{
    const createGetListUsersCases = [
        { token: OTUS_PROJECT_ADMIN_TOKEN, expectedStatus: 200, expectedStatusData: "SUCCESS", expectedMessage : "OK"},
        { token: "08960860860", expectedStatus: 404, expectedStatusData: "UNAUTHORIZED", expectedMessage : "Session not found: "},
        { token: OTUS_PROJECT_EXPIRED_ADMIN_TOKEN, expectedStatus: 401, expectedStatusData: "UNAUTHORIZED", expectedMessage : "Session expired"},

        // Есть еще вот такие кейсы: но как их реализовать не в ручном режиме, непонятно
        // Возвращает статус 403, если доступ к микросервису запрещен
        // Возвращает статус 404, если микросервис не найден
        // Возвращает статус 500 при внутренней ошибке сервера
        
    ]
    test.each(createGetListUsersCases)('Параметризированная проверка получения коллекции пользователя', async ({ token, expectedStatus, expectedMessage, expectedStatusData }) => {
        const responseBody = await getListUsersOrdoCRM({token})
        console.log('Параметризированная проверка получения коллекции пользователя', responseBody)
        expect(responseBody.status).toBe(expectedStatus)
        expect(responseBody.data.message).toContain(expectedMessage)
        expect(responseBody.data.status).toEqual(expectedStatusData)
        })

    test('1. Успешное создание пользователя в OrdoCRM', async () =>{
        const responseBody = await createUserOrdoCRM({
            password: OTUS_PROJECT_NEW_USER_PASSWORD,
            username: OTUS_PROJECT_NEW_USER_NAME
        })
        console.log('"1. Успешное создание пользователя"!!!!!!!!!!!', responseBody)
        expect(responseBody.status).toBe(201);
        expect(responseBody.data.message).toEqual("OK");
        expect(responseBody.data.status).toEqual("SUCCESS");
        expect(responseBody.data.data.username).toEqual(OTUS_PROJECT_NEW_USER_NAME);
        expect(responseBody.data.data.isBlocked).toBeTruthy();
        expect(responseBody.data.data.isDeleted).toBeFalsy();
        expect(responseBody.data.data.agreementUserTerms).toEqual(null);
        expect(responseBody.data.data.agreementPrivacyPolicy).toEqual(null);
        expect(responseBody.data.data.agreementMarketing).toEqual(null);
        expect(responseBody.data.data.createdAt).toBeDefined();
        expect(responseBody.data.data.updatedAt).toBeDefined();
        expect(responseBody.data.data.createdAt).toEqual(responseBody.data.data.createdAt);
        console.log('OTUS_PROJECT_NEW_USER_NAME', OTUS_PROJECT_NEW_USER_NAME);
    })

    test('2. Успешная авторизация нового пользователя в OrdoCRM', async () =>{
        const responseBody = await loginUserOrdoCrm({
            password: OTUS_PROJECT_NEW_USER_PASSWORD,
            username: OTUS_PROJECT_NEW_USER_NAME
        })
        console.log('"2. Успешная авторизация нового пользователя"!!!!!!!!!!!', responseBody)
        userID = responseBody.data.data.user.id
        console.log("userID!!!!!!!!!!!", userID)
        expect(responseBody.data.data.id).toBeDefined();
        expect(responseBody.data.data.token).toBeDefined();
        expect(responseBody.status).toBe(200);
        expect(responseBody.data.status).toEqual("SUCCESS");
        expect(responseBody.data.data.createdAt).toBeDefined();
        expect(responseBody.data.data.expiresAt).toBeDefined();
        expect(responseBody.data.data.user.username).toEqual(OTUS_PROJECT_NEW_USER_NAME);
        expect(responseBody.data.data.user.isBlocked).toBeTruthy();
        expect(responseBody.data.data.user.isDeleted).toBeFalsy();
        expect(responseBody.data.data.user.agreementUserTerms).toEqual(null);
        expect(responseBody.data.data.user.agreementPrivacyPolicy).toEqual(null);
        expect(responseBody.data.data.user.agreementMarketing).toEqual(null);
        expect(responseBody.data.data.user.createdAt).toBeDefined();
        expect(responseBody.data.data.user.updatedAt).toBeDefined();
        expect(responseBody.data.data.user.createdAt).not.toEqual(responseBody.data.data.createdAt);
        expect(responseBody.data.data.user.id).toBeDefined();
        expect(responseBody.data.message).toEqual("OK");
      })

    //   3	"Получение информации о пользователе по ID 
    test('3. Успешное получение информации о пользователе по ID  в OrdoCRM', async () =>{
        const responseBody = await getUserOrdoCRMbyID({userID})
        console.log('3. Успешное получение информации о пользователе по ID  в OrdoCRM', responseBody);
        expect(responseBody.data.data.username).toEqual(OTUS_PROJECT_NEW_USER_NAME);
        expect(responseBody.status).toBe(200);
        expect(responseBody.data.data.isBlocked).toBeTruthy();
        expect(responseBody.data.data.isDeleted).toBeFalsy();
        expect(responseBody.data.data.agreementUserTerms).toEqual(null);
        expect(responseBody.data.data.agreementPrivacyPolicy).toEqual(null);
        expect(responseBody.data.data.agreementMarketing).toEqual(null);
        expect(responseBody.data.data.createdAt).toBeDefined();
        expect(responseBody.data.data.updatedAt).toBeDefined();
    })

    test('4. Успешное снятие блокировки пользователя в OrdoCRM', async () =>{
        const responseBody = await changeBlockUserOrdoCRMFalse({userID})
        console.log('"4. Успешное снятие блокировки пользователя в OrdoCRM"!!!!!!!!!!!', responseBody)
        expect(responseBody.status).toBe(200);
        expect(responseBody.data.status).toBe("SUCCESS");
        expect(responseBody.data.data.isBlocked).toBeFalsy();
        expect(responseBody.data.data.username).toEqual(OTUS_PROJECT_NEW_USER_NAME);
        expect(responseBody.data.data.isDeleted).toBeFalsy();
        expect(responseBody.data.data.agreementUserTerms).toEqual(null);
        expect(responseBody.data.data.agreementPrivacyPolicy).toEqual(null);
        expect(responseBody.data.data.agreementMarketing).toEqual(null);
        expect(responseBody.data.data.createdAt).toBeDefined();
        expect(responseBody.data.data.updatedAt).toBeDefined();
})

test('5. Успешное получение информации о пользователе по имени  после снятия блокировки в OrdoCRM', async () =>{
    const responseBody = await getUserOrdoCRMbyUsername({
        username : OTUS_PROJECT_NEW_USER_NAME
    })
    console.log('5. Успешное получение информации о пользователе по имени после снятия блокировки в OrdoCRM', responseBody);
    expect(responseBody.data.data.username).toEqual(OTUS_PROJECT_NEW_USER_NAME);
    expect(responseBody.status).toBe(200);
    expect(responseBody.data.data.isBlocked).toBeFalsy();
    expect(responseBody.data.data.isDeleted).toBeFalsy();
    expect(responseBody.data.data.agreementUserTerms).toEqual(null);
    expect(responseBody.data.data.agreementPrivacyPolicy).toEqual(null);
    expect(responseBody.data.data.agreementMarketing).toEqual(null);
    expect(responseBody.data.data.createdAt).toBeDefined();
    expect(responseBody.data.data.updatedAt).toBeDefined();

})
    test('6. Успешное обновление данных пользователя в OrdoCRM', async () =>{
        const responseBody = await updateUserOrdoCRM({
            userID, 
            username: OTUS_PROJECT_NEW_USER_NAME,
            password: OTUS_PROJECT_NEW_USER_PASSWORD,
            "agreementUserTerms": true,
            "agreementPrivacyPolicy": true,
            "agreementMarketing": true,
        })
        console.log('"6. Успешное обновление данных пользователя"!!!!!!!!!!!', responseBody)
        expect(responseBody.status).toBe(200);
        expect(responseBody.data.status).toBe("SUCCESS");
        expect(responseBody.data.data.isDeleted).toBeFalsy();
        expect(responseBody.data.data.agreementMarketing).toBeTruthy();
        expect(responseBody.data.data.agreementPrivacyPolicy).toBeTruthy();
        expect(responseBody.data.data.agreementUserTerms).toBeTruthy();
    })



    test('7. Успешное удаление пользователя в OrdoCRM', async () =>{
        const responseBody = await deleteUserOrdoCRM({userID})
        console.log('7. "Успешное удаление пользователя"!!!!!!!!!!!', responseBody)
        expect(responseBody.status).toBe(200);
        expect(responseBody.data.status).toBe("SUCCESS");
        expect(responseBody.data.data).toBeNull();
        expect(responseBody.data.message).toContain("User with ID");
        expect(responseBody.data.message).toContain("deleted successfully");
})

test('8. Успешное получение информации о пользователе по имени после удаления в OrdoCRM', async () =>{
    const responseBody = await getUserOrdoCRMbyUsername({
        username : OTUS_PROJECT_NEW_USER_NAME
    })
    console.log('8. Успешное получение информации о пользователе по имени после удаления в OrdoCRM', responseBody);
    expect(responseBody.data.data.username).toEqual(OTUS_PROJECT_NEW_USER_NAME);
    expect(responseBody.status).toBe(200);
    expect(responseBody.data.data.isDeleted).toBeTruthy();
    expect(responseBody.data.data.isBlocked).toBeFalsy();
    // expect(responseBody.data.data.agreementUserTerms).toEqual(null);
    // expect(responseBody.data.data.agreementPrivacyPolicy).toEqual(null);
    // expect(responseBody.data.data.agreementMarketing).toEqual(null);
    expect(responseBody.data.data.createdAt).toBeDefined();
    expect(responseBody.data.data.updatedAt).toBeDefined();
})

describe('Параметризированная проверка блокировки/разблокировки пользователя в OrdoCRM', () =>{
    const changeBlockUserOrdoCRMCases = [
        { isBlocked: false, token: "08960860860", expectedStatus: 401, expectedStatusData: "UNAUTHORIZED", expectedMessage : "Session not found: "},
        { isBlocked: false, token: OTUS_PROJECT_ADMIN_TOKEN, expectedStatus: 200, expectedStatusData: "SUCCESS", expectedMessage : "OK"},
        { isBlocked: false, token: OTUS_PROJECT_EXPIRED_ADMIN_TOKEN, expectedStatus: 401, expectedStatusData: "UNAUTHORIZED", expectedMessage : "Session expired"},
    ]
    test.each(changeBlockUserOrdoCRMCases)('Параметризированная проверка блокировки/разблокировки пользователя в OrdoCRM', async ({ isBlocked, token, expectedStatus, expectedMessage, expectedStatusData }) =>{
        const responseBody = await changeBlockUserOrdoCRM({ isBlocked, userID, token })
        console.log('Параметризированная проверка блокировки/разблокировки пользователя в OrdoCRM', responseBody)
        expect(responseBody.status).toBe(expectedStatus)
        expect(responseBody.data.message).toContain(expectedMessage)
        expect(responseBody.data.status).toEqual(expectedStatusData)
    //  Возвращает статус 403, если доступ к микросервису запрещен
    // Возвращает статус 404, если пользователь не найден по ID или микросервис не найден
    // Возвращает статус 500 при внутренней ошибке сервера
    })
})

})


