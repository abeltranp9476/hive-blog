import { useSign } from '../../hooks/useSign'
import { api, HIVE_USER_ACCOUNT, HIVE_SIGNER_BROADCAST } from '../../utils/api'

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

  return await api.post('', jsonrpc)
}

export const fetchComments = async (slug) => {
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

export const setVote = async ({ permlink, weight }) => {
  const { userName, token } = useSign()
  const payload = {
    "operations": [
      ["vote", {
        "voter": userName,
        "author": HIVE_USER_ACCOUNT,
        "permlink": permlink,
        "weight": weight
      }]
    ]
  }

  return await api.post(HIVE_SIGNER_BROADCAST, payload, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}