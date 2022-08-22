import { api } from '../../utils/api';

const hiveUserName = 'abeltranp9476';

export const fetchPost= async (slug) => {
     const jsonrpc = {
    "jsonrpc": "2.0",
    "method": "bridge.get_post",
    "params": {
    "author": hiveUserName,
    "permlink": slug
  },
    "id": 1
}

    return await api.post('', jsonrpc);
}