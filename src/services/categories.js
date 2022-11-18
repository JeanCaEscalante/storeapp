import request from "./config";


const url =  'categories';

export const categoriesAll = async () => {
  const {data} = await request.get(url)
  return data
}

export const categoryById = async (id) => {
  return await request.get(`${url}/${id}`)
}

export const categoryCreate = async (object) => {
  return await request.post(url, object)
}

export const categoryUpdate = async (id,object) => {
  return await request.put(url)
}

export const categoryRemove = async (id) => {
  return await request.delete(`${url}/${id}`)
}