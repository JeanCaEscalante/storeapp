import request from "./config";

export const authLogin = async (object) => {
  const {data} = await request.post('auth/login', object)
  return data
}

export const authProfile = async (token) => {
  const config = {
    headers: {'Authorization': `bearer ${token}`}
  }

  const {data} = await request.get('auth/profile', config)
  return data
}

