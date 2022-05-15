import { ParsedSecurityData, SecurityData } from "../../types";

export function parseResponse(response:SecurityData):ParsedSecurityData{
    const object = {
        refreshToken:response["refresh-token"],
        authorization:response?.authorization,
        ...response
    }
    // console.log(object.authorization)
    return object
}

export function parseRefreshResponse(response:SecurityData):ParsedSecurityData{

    const object = {
        refreshToken:response["refresh-token"],
        authorization:response?.authorization
    }
    // console.log(object.authorization)
    return object
}