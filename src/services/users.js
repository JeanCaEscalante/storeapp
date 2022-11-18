import request from "./config";


const url =  'users';

export const usersAll = async () => {
  return await request.get(url)
}

export const userById = async (id) => {
  return await request.get(`${url}/${id}`)
}

export const userCreate = async (object) => {
  return await request.post(url, object)
}

export const userUpdate = async (id,object) => {
  return await request.put(url)
}

export const userRemove = async (id) => {
  return await request.delete(`${url}/${id}`)
}