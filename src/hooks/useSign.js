import { tokenUtils } from '../utils/authentication'
import { useNavigate } from 'react-router-dom';

export const useSign = () => {
    const search = window.location.search
    const params = new URLSearchParams(search)
    const expiresIn = params.get('expires_in')
    let userName = params.get('username')
    let token = params.get('access_token')

    const navigate = useNavigate();

    const logout = () => {
        tokenUtils.clearAuthenticationToken()
        navigate('/logout')
    }

    if (token && userName) {
        tokenUtils.setAuthenticationToken(userName + ':' + token)
    } else {
        userName = tokenUtils.getUserId()
        token = tokenUtils.getAuthenticationToken()
            ? tokenUtils.getAuthenticationToken().split(':')[1]
            : ''
    }

    return { userName, token, expiresIn, logout }
}
