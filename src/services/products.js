import request from "./config";


const url =  'products';

export const productsAll = async () => {
  const {data} = await request.get(url);
  return data
}

export const productById = async (id) => {
  const {data} = await request.get(`${url}/${id}`)
  return data
}

export const productCreate = async (object) => {
  return await request.post(url, object)
}

export const productUpdate = async (id,object) => {
  return await request.put(url)
}

export const productRemove = async (id) => {
  return await request.delete(`${url}/${id}`)
}

export const productsPagination = async(previous,limit) => {
  const {data} = await request.get(`${url}?offset=${previous}&limit=${limit}`);
  return data
}