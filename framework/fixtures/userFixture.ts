import { faker } from '@faker-js/faker'
// import { NEW_USER_PASSWORD } from "../config/config";
export function generateUserCredentials() {
  return {
    username: faker.internet.username(),
    // password: NEW_USER_PASSWORD
    password: faker.internet.password()
  }
}

// console.log(generateUserCredentials().username)
