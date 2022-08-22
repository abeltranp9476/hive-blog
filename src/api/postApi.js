import { api } from '../utils/api';

const hiveUserName = 'abeltranp9476';

export const fetchPosts = async (params) => {
    const jsonrpc = {
        "jsonrpc": "2.0",
        "method": "condenser_api.get_blog",
        "params": [hiveUserName, params.start, params.limit],
        "id": 1
    }

    return await api.post('', jsonrpc);
}
