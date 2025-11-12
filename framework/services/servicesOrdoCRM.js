import { OTUS_PROJECT_BASE_URL, OTUS_PROJECT_USER_URL, OTUS_PROJECT_USER_AUTH_LOGIN_URL, OTUS_PROJECT_ADMIN_TOKEN, OTUS_PROJECT_USER_ID_PARAMETRIZED } from "../config/configOrdoCRM.js"

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

export const getUserOrdoCRMbyID = async ({userID}) =>{
    const response = await fetch (`${OTUS_PROJECT_BASE_URL}${OTUS_PROJECT_USER_URL}/${userID}`,
        {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':OTUS_PROJECT_ADMIN_TOKEN
            },    
          })
    return {
        headers: response.headers,
        status: response.status,
        data: await response.json()
    }
}

export const getUserOrdoCRMbyUsername = async ({username}) =>{
    const response = await fetch (`${OTUS_PROJECT_BASE_URL}${OTUS_PROJECT_USER_URL}/username/${username}`,
        {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':OTUS_PROJECT_ADMIN_TOKEN
            },    
          })
    return {
        headers: response.headers,
        status: response.status,
        data: await response.json()
    }
}

export const updateUserOrdoCRM = async ({userID, password, username}) =>{
    const response = await fetch (`${OTUS_PROJECT_BASE_URL}${OTUS_PROJECT_USER_URL}/${userID}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Authorization':OTUS_PROJECT_ADMIN_TOKEN
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
                'Authorization':OTUS_PROJECT_ADMIN_TOKEN
            },        
        })
    return {
        headers: response.headers,
        status: response.status,
        data: await response.json()
    }
}

export const changeBlockUserOrdoCRMFalse = async ({userID}) =>{
    const response = await fetch (`${OTUS_PROJECT_BASE_URL}${OTUS_PROJECT_USER_URL}/${userID}:false`,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':OTUS_PROJECT_ADMIN_TOKEN
            },       
         })
    return {
        headers: response.headers,
        status: response.status,
        data: await response.json()
    }
}

export const changeBlockUserOrdoCRM = async ({isBlocked, token}) =>{
    const response = await fetch (`${OTUS_PROJECT_BASE_URL}${OTUS_PROJECT_USER_URL}/${OTUS_PROJECT_USER_ID_PARAMETRIZED}:${isBlocked}`,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':token
            },       
         })
    return {
        headers: response.headers,
        status: response.status,
        data: await response.json()
    }
}

export const getListUsersOrdoCRM = async ({token}) =>{
    const response = await fetch (`${OTUS_PROJECT_BASE_URL}${OTUS_PROJECT_USER_URL}`,
        {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':token
            },       
         })
    return {
        headers: response.headers,
        status: response.status,
        data: await response.json()
    }
}

