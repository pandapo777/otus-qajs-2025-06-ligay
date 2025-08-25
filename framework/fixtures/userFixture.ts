import { faker } from '@faker-js/faker'

export function generateUserCredentials() {
  return {
    username: faker.internet.username(),
    
    password: faker.internet.password()
  }
}


