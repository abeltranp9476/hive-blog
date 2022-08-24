import { api, HIVE_USER_ACCOUNT } from '../../utils/api';

export const fetchTag = async (slug) => {
  const jsonrpc = {
    q: "* -dporn type:post tag:" + slug + " author:" + HIVE_USER_ACCOUNT,
    sort: "newest",
    hide_low: "0"
  }

  return await api.post('https://ecency.com/search-api/search', jsonrpc);
}