import { tokenUtils } from '../utils/authentication'

export const useSign = () => {
    const search = window.location.search
    const params = new URLSearchParams(search)
    const expiresIn = params.get('expires_in')
    let userName = params.get('username')
    let token = params.get('access_token')

    if (token && userName) {
        tokenUtils.setAuthenticationToken(userName + ':' + token)
    } else {
        userName = tokenUtils.getUserId()
        token = tokenUtils.getAuthenticationToken()
            ? tokenUtils.getAuthenticationToken().split(':')[1]
            : ''
    }

    return { userName, token, expiresIn }
}
