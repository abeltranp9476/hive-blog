import { api, HIVE_USER_ACCOUNT } from '../utils/api';

export const fetchPosts = async (params) => {
    const jsonrpc = {
        "jsonrpc": "2.0",
        "method": "condenser_api.get_blog",
"params" : [HIVE_USER_ACCOUNT, params.start, params.limit],
        "id": 1
    }

    return await api.post('', jsonrpc);
}
