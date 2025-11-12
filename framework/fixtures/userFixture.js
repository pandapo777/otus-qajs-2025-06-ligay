import { ru, fakerRU } from "@faker-js/faker";

export function generateUserCredentials() {
    return {
        username: fakerRU.internet.username(ru),
        password: fakerRU.internet.password()
    }
}
console.log(generateUserCredentials().username)

// console.log(generateUserCredentials().username)