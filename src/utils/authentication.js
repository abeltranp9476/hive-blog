const AUTHENTICATION_STORAGE_KEY = 'Hive-Blog:Authentication';

export const tokenUtils = {
    getAuthenticationToken: () =>
        JSON.parse(localStorage.getItem(AUTHENTICATION_STORAGE_KEY)),

    setAuthenticationToken: user =>
        localStorage.setItem(AUTHENTICATION_STORAGE_KEY, JSON.stringify(user)),

    clearAuthenticationToken: () =>
        localStorage.removeItem(AUTHENTICATION_STORAGE_KEY),

    getUserId: () => {
        try {
            const data = tokenUtils.getAuthenticationToken();
            let userId = null;
            if (data) {
                userId = data.split(':')[0];
            }
            return userId;
        } catch (error) {
            return false;
        }
    }
};
