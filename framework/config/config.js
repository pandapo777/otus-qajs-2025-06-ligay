import { generateUserCredentials } from "../fixtures/userFixture.js"
// import 'dotenv/config'
export const BASE_URL = 'https://bookstore.demoqa.com'
export const ACCOUNT_URL = '/Account/v1'
export const BOOK_URL = '/BookStore/v1'
export const USER_NAME_EXIST = 'Alena11' //"userID": "d364a91a-b6b8-4477-8cf5-317c601c4436", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkFsZW5hMTEiLCJwYXNzd29yZCI6IjFTdHJpbmdTdHJpbmchIiwiaWF0IjoxNzU1MzY0NzQ2fQ.NdLLU5BSwh60VOUNHvIzdTdyLoSDcz7ueJUhbw3fKnI"
export const USER_EXIST_ID = 'd364a91a-b6b8-4477-8cf5-317c601c4436'
export const TOKEN_EXIST_USER = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkFsZW5hMTEiLCJwYXNzd29yZCI6IjFTdHJpbmdTdHJpbmchIiwiaWF0IjoxNzU1MzY0NzQ2fQ.NdLLU5BSwh60VOUNHvIzdTdyLoSDcz7ueJUhbw3fKnI'
export const ISBN = '9781449331818'
export const ISBN_NEW = '9781449337711'
export const USER_PASSWORD_VALID = '1StringString!' 
export const NEW_USER_NAME = generateUserCredentials().username //Для успешного прохождения кейса №3 нужно создается имя нового пользователя каждый раз с помощью библиотеки fakers
export const NEW_USER_PASSWORD = 'Alena2025String!1'
export const NEW_USER_NAME_GETTING_USER_ID = generateUserCredentials().username 

// console.log(NEW_USER_NAME)