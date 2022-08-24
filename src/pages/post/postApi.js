import { api, HIVE_USER_ACCOUNT } from '../../utils/api';

export const fetchPost = async (slug) => {
  const jsonrpc = {
    "jsonrpc": "2.0",
    "method": "bridge.get_post",
    "params": {
      "author": HIVE_USER_ACCOUNT,
      "permlink": slug
    },
    "id": 1
  }

  return await api.post('', jsonrpc);
}