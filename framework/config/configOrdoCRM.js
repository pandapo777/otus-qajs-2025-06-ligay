import { generateUserCredentials } from "../fixtures/userFixture.js"

export const OTUS_PROJECT_NEW_USER_NAME = generateUserCredentials().username 
export const OTUS_PROJECT_BASE_URL = 'http://api.auth.dev.practic.ordocrm.online'
export const OTUS_PROJECT_USER_URL= '/api/user'
export const OTUS_PROJECT_USER_AUTH_LOGIN_URL= '/api/auth/login'
export const OTUS_PROJECT_NEW_USER_PASSWORD = 'Alena111' 
export const OTUS_PROJECT_ADMIN_TOKEN = '11a71a5a-bad4-4530-9278-0de4f7ebc84f' //Валидный токен пользователя с правами администратора
export const OTUS_PROJECT_EXPIRED_ADMIN_TOKEN = '1a1ee860-2a2a-4f67-a3d0-8fc6fabd62b2' //Истекший токен пользователя с правами администратора
export const OTUS_PROJECT_USER_ID_PARAMETRIZED = 'aff000fc-1fe6-4063-8407-c576e5a3c1eb' //{"password": "Alena111", "username": "Jon123123123"}