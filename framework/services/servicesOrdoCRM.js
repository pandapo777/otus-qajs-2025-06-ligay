import { OTUS_PROJECT_BASE_URL, OTUS_PROJECT_USER_URL, OTUS_PROJECT_USER_AUTH_LOGIN_URL} from "../config/configOrdoCRM.js"

export const createUserOrdoCRM = async ({password, username}) =>{
    const response = await fetch (`${OTUS_PROJECT_BASE_URL}${OTUS_PROJECT_USER_URL}`,
    // const response = await fetch (`http://api.auth.dev.practic.ordocrm.online/api/user`,
    
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                    password,
                    username
           })
        })
        return {
            headers: response.headers,
            status: response.status,
            data: await response.json()
        } 
}

export const loginUserOrdoCrm = async ({password, username}) =>{
    const response = await fetch (`${OTUS_PROJECT_BASE_URL}${OTUS_PROJECT_USER_AUTH_LOGIN_URL}`,
    
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                    password,
                    username
           })
        })
        return {
            headers: response.headers,
            status: response.status,
            data: await response.json()
        } 
}

export const deleteUserOrdoCRM = async ({userID}) =>{
    const response = await fetch (`${OTUS_PROJECT_BASE_URL}${OTUS_PROJECT_USER_URL}/${userID}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'11a71a5a-bad4-4530-9278-0de4f7ebc84f'
            },        }
    )
    return {
        headers: response.headers,
        status: response.status,
        data: await response.json()
    }
}

