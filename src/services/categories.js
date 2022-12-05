import request from './config';

const url = 'categories';

export const categoriesAll = async () => {
  const { data } = await request.get(url);
  return data;
};

export const categoryById = async (id) => {
  const { data } = await request.get(`${url}/${id}`);
  return data;
};

export const categoryCreate = async (object) => {
  const { data } = await request.post(url, object);
  return data;
};

export const categoryUpdate = async (id, object) => {
  const { data } = await request.put(id, object);
  return data;
};

export const categoryRemove = async (id) => {
  const { data } = await request.delete(`${url}/${id}`);
  return data;
};