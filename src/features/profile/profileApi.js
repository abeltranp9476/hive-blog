import { api, HIVE_USER_ACCOUNT } from '../../utils/api';

export const fetchUserInfo= async () => {
     const jsonrpc = {
        "jsonrpc": "2.0",
        "method": "bridge.get_profile",
        "params": [HIVE_USER_ACCOUNT],
        "id": 1
    }

    return await api.post('', jsonrpc);
}