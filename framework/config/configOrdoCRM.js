import { generateUserCredentials } from "../fixtures/userFixture.js"

export const OTUS_PROJECT_BASE_URL = 'http://api.auth.dev.practic.ordocrm.online/api'
export const OTUS_PROJECT_USER_URL= '/user'
export const OTUS_PROJECT_USER_AUTH_LOGIN_URL= '/auth/login'
export const OTUS_PROJECT_NEW_USER_NAME = generateUserCredentials().username
export const OTUS_PROJECT_NEW_USER_PASSWORD = 'Alena111' 
// export const OTUS_PROJECT_USER_EXIST_ID = 'd364a91a-b6b8-4477-8cf5-317c601c4436'
// export const OTUS_PROJECT_TOKEN_EXIST_USER = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkFsZW5hMTEiLCJwYXNzd29yZCI6IjFTdHJpbmdTdHJpbmchIiwiaWF0IjoxNzU1MzY0NzQ2fQ.NdLLU5BSwh60VOUNHvIzdTdyLoSDcz7ueJUhbw3fKnI'
// export const OTUS_PROJECT_ISBN = '9781449331818'
// export const OTUS_PROJECT_ISBN_NEW = '9781449337711'
// export const OTUS_PROJECT_USER_PASSWORD_VALID = '1StringString!' 
// export const OTUS_PROJECT_NEW_USER_NAME = generateUserCredentials().username //Для успешного прохождения кейса №3 нужно создается имя нового пользователя каждый раз с помощью библиотеки fakers
// export const OTUS_PROJECT_NEW_USER_PASSWORD = 'Alena2025String!1'
// export const OTUS_PROJECT_NEW_USER_NAME_GETTING_USER_ID = generateUserCredentials().username 
// console.log(OTUS_PROJECT_NEW_USER_NAME_GETTING_USER_ID),
// console.log(OTUS_PROJECT_NEW_USER_NAME)