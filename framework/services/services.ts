import { BASE_URL, ACCOUNT_URL, BOOK_URL, TOKEN_EXIST_USER, ISBN, ISBN_NEW } from '../config/config'
export const HEADERS_REQUEST = {
  'Content-Type': 'application/json'
}
export const COLLECTION_OF_ISBNS = {
  isbn: '9781449331818'
}

export const createUser = async ({ userName, password }) => {
  const response = await fetch(`${BASE_URL}${ACCOUNT_URL}/User`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userName,
      password
    })
  })
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json()
  }
}

export const generateToken = async ({ userName, password }) => {
  const response = await fetch(`${BASE_URL}${ACCOUNT_URL}/GenerateToken`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userName,
      password
    })
  })
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json()
  }
}

export const authorized = async ({ userName, password }) => {
  const response = await fetch(`${BASE_URL}${ACCOUNT_URL}/Authorized`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userName,
      password
    })
  })
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json()
  }
}

export const createUserBooks = async ({ userId, isbn }) => {
  const response = await fetch(`${BASE_URL}${BOOK_URL}/Books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN_EXIST_USER}`
    },
    body: JSON.stringify({
      userId,
      collectionOfIsbns: [{ isbn }]
    })
  })
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json()
  }
}

export const replaceUserBook = async ({ userId, isbn }) => {
  const response = await fetch(`${BASE_URL}${BOOK_URL}/Books/${ISBN}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN_EXIST_USER}`
    },
    body: JSON.stringify({
      userId,
      isbn
    })
  })
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json()
  }
}

export const gettingInformationUserBook = async () => {
  const response = await fetch(`${BASE_URL}${BOOK_URL}/Book?ISBN=${ISBN}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN_EXIST_USER}`
    }
  })
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json()
  }
}

export const deleteUserBook = async ({ userId, isbn }) => {
  const response = await fetch(`${BASE_URL}${BOOK_URL}/Book`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN_EXIST_USER}`
    },
    body: JSON.stringify({
      userId,
      isbn
    })
  })
  return {
    headers: response.headers,
    status: response.status
    // data: await response.json()
  }
}
