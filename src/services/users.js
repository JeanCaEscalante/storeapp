import request from './config';

const url = 'users';

export const usersAll = async () => {
  const { data } = await request.get(url);
  return data;
};

export const userById = async (id) => {
  const { data } = await request.get(`${url}/${id}`);
  return data;
};

export const userCreate = async (object) => {
  const { data } = await request.post(url, object);
  return data;
};

export const userUpdate = async (id, object) => {
  const { data } = await await request.put(id, object);
  return data;
};

export const userRemove = async (id) => {
  const { data } = await request.delete(`${url}/${id}`);
  return data;
};

export const productsPagination = async (previous, limit) => {
  const { data } = await request.get(`${url}?offset=${previous}&limit=${limit}`);
  return data;
};
