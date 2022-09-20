import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { tokenUtils } from '../utils/authentication'

export const useSign = () => {
    const [userName, setUserName] = useState('')
    const [token, setToken] = useState('')
    const search = window.location.search
    const params = new URLSearchParams(search)
    const expiresIn = params.get('expires_in')


    const navigate = useNavigate();

    let userNameParam
    let tokenParam

    const logout = () => {
        tokenUtils.clearAuthenticationToken()
        setUserName('')
        setToken('')
        navigate('/')
    }

    const setValues = () => {
        setToken(tokenUtils.getAuthenticationToken()
            ? tokenUtils.getAuthenticationToken().split(':')[1]
            : '')

        setUserName(tokenUtils.getUserId() ? tokenUtils.getUserId() : '')
    }

    useEffect(() => {
        userNameParam = params.get('username')
        tokenParam = params.get('access_token')

        if (!tokenParam && !userNameParam) setValues()
    }, [])


    useEffect(() => {
        userNameParam = params.get('username')
        tokenParam = params.get('access_token')

        if (tokenParam && userNameParam) {
            tokenUtils.setAuthenticationToken(userNameParam + ':' + tokenParam)
            setUserName(userNameParam)
            setToken(tokenParam)
        } else {
            setValues()
        }

    }, [userNameParam])

    return { userName, token, expiresIn, logout }
}
