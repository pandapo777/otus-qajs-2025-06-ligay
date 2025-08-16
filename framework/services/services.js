import { BASE_URL, ACCOUNT_URL, BOOK_URL, TOKEN_EXIST_USER} from "../config/config";
export const HEADERS_REQUEST = {
        'Content-Type':'application/json'
};
// export const collectionOfIsbns = [
//         {
//                 'isbn' : isbn

//         }
// ] 
        


export const createUser = async ({userName, password}) =>{
        const response = await fetch (`${BASE_URL}${ACCOUNT_URL}/User`,
                {
                        method: 'POST',
                        headers: {
                                 'Content-Type':'application/json',
                                },
                                 body: JSON.stringify({
                                        userName, password
                                })
                        })
                        return {
                                headers: response.headers,
                                status: response.status,
                                data: await response.json()
                        }
                }

export const generateToken = async ({userName, password}) =>{
        const response = await fetch (`${BASE_URL}${ACCOUNT_URL}/GenerateToken`,
                {
                        method: 'POST',
                        headers: {
                                 'Content-Type':'application/json'
                                },
                                 body: JSON.stringify({
                                        userName, password
                                })
                        })
                        return {
                                headers: response.headers,
                                status: response.status,
                                data: await response.json()
                        }
                }

export const authorized = async ({userName, password}) =>{
        const response = await fetch (`${BASE_URL}${ACCOUNT_URL}/Authorized`,
                {
                        method: 'POST',
                        headers: {
                                 'Content-Type':'application/json'
                                },
                                 body: JSON.stringify({
                                        userName, password
                                })
                        })
                        return {
                                headers: response.headers,
                                status: response.status,
                                data: await response.json()
                        }
                }

// export const manageUser = async ({userID, requestMethod, token}) => {
//          const response = await fetch (`${BASE_URL}${ACCOUNT_URL}/User/${userID}`,
//                         {
//                             method: requestMethod,
//                             headers: {
//                                 'Content-Type':'application/json',
//                                 'Authorization':`Bearer ${token}`
//                             }
//                         })
//                         return {
//                                 headers: response.headers,
//                                 status: response.status,
//                                 data: await response.json()
//                         }
//                 }

// {
//         "userId": "d364a91a-b6b8-4477-8cf5-317c601c4436",
//         "collectionOfIsbns": [
//           {
//             "isbn": "9781449325862"
//           }
//         ]
//       }

// export const createUserBooks = async ({userExistId, isbn}) =>{
//         const response = await fetch (`${BASE_URL}${BOOK_URL}/Books`,
//                 {
//                         method: 'POST',
//                         headers: {
//                                  'Content-Type':'application/json',
//                                  'Authorization':`Bearer ${TOKEN_EXIST_USER}`
//                                 },
//                                  body: JSON.stringify({
//                                         userExistId, 
//                                         collectionOfIsbns : [JSON.stringify({ isbn })]
                                        
                                        
//                                 })
//                         })
//                         return {
//                                 headers: response.headers,
//                                 status: response.status,
//                                 data: await response.json()
//                         }
//                 }
