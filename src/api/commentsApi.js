import { api, HIVE_USER_ACCOUNT } from '../utils/api'

export const commentsApi = async ({ slug }) => {
    const jsonrpc = {
        "jsonrpc": "2.0",
        "method": "bridge.get_discussion",
        "params": {
            "author": HIVE_USER_ACCOUNT,
            "permlink": slug
        },
        "id": 1
    }

    return await api.post('', jsonrpc)
}
