import { USER_EXIST_ID, ISBN, ISBN_NEW } from '../framework/config/config'
import {
  createUserBooks,
  replaceUserBook,
  gettingInformationUserBook,
  deleteUserBook
} from '../framework/services/services'

describe('Проверка создания книги в коллекции пользователя', () => {
  const createUserBooksCases = [
    { userId: USER_EXIST_ID, isbn: ISBN, expectedStatus: 201, expectedMessage: undefined },
    {
      userId: USER_EXIST_ID,
      isbn: ISBN,
      expectedStatus: 400,
      expectedMessage: "ISBN already present in the User's Collection!"
    },
    { userId: 123, isbn: ISBN, expectedStatus: 401, expectedMessage: 'User not authorized!' },
    {
      userId: USER_EXIST_ID,
      isbn: 23135,
      expectedStatus: 400,
      expectedMessage: 'ISBN supplied is not available in Books Collection!'
    }
  ]

  test.each(createUserBooksCases)(
    'Проверка создания книги в коллекции пользователя',
    async ({ userId, isbn, expectedStatus, expectedMessage }: any) => {
      const responseBody = await createUserBooks({ userId, isbn })
      console.log(responseBody)

      expect(responseBody.status).toBe(expectedStatus)

      expect(responseBody.data.message).toBe(expectedMessage)
    }
  )
})

describe('Book Service', () => {
  test('3. Замена книги в коллекции пользователя', async () => {
    const responseBody = await replaceUserBook({
      userId: USER_EXIST_ID,
      isbn: ISBN_NEW
    })
    console.log('3. Замена книги в коллекции пользователя', responseBody)

    expect(responseBody.data.userId).toBe(USER_EXIST_ID)

    expect(responseBody.status).toBe(200)

    expect(responseBody.data.books).toBeDefined()
  })

  test('4. Получение информации о книге  в коллекции пользователя', async () => {
    // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
    const responseBody = await gettingInformationUserBook({
      userId: USER_EXIST_ID,
      isbn: ISBN_NEW
    })
    console.log('4. Получение информации о книге  в коллекции пользователя', responseBody)

    expect(responseBody.data.isbn).toBe(ISBN)

    expect(responseBody.status).toBe(200)

    expect(responseBody.data.title).toBe('Learning JavaScript Design Patterns')
  })

  test('5. Удаление книги пользователя', async () => {
    const responseBody = await deleteUserBook({
      userId: USER_EXIST_ID,
      isbn: ISBN_NEW
    })
    console.log('5. Удаление книги пользователя', responseBody)

    expect(responseBody.status).toBe(204)
  })
})
