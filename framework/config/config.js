import { generateUserCredentials } from "../fixtures/userFixture.js"
export const BASE_URL = 'https://bookstore.demoqa.com'
export const ACCOUNT_URL = '/Account/v1'
export const USER_NAME_EXIST = 'Alena'
export const USER_PASSWORD_VALID = '1StringString!' 
export const NEW_USER_NAME = generateUserCredentials().username //Для успешного прохождения кейса №3 нужно создается имя нового пользователя каждый раз с помощью библиотеки fakers
export const NEW_USER_PASSWORD = 'Alena2025String!1'
export const NEW_USER_NAME_GETTING_USER_ID = generateUserCredentials().username 

// console.log(NEW_USER_NAME)