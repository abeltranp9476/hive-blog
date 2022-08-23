import { api } from '../../utils/api';

const hiveUserName = 'abeltranp9476';

export const fetchUserInfo= async () => {
     const jsonrpc = {
        "jsonrpc": "2.0",
        "method": "bridge.get_profile",
        "params": [hiveUserName],
        "id": 1
    }

    return await api.post('', jsonrpc);
}