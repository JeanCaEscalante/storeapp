import request from './config';

const url = 'products';

export const productsAll = async () => {
  const { data } = await request.get(url);
  return data;
};

export const productById = async (id) => {
  const { data } = await request.get(`${url}/${id}`);
  return data;
};

export const productCreate = async (object) => {
  const { data } = await request.post(url, object);
  return data;
};

export const productUpdate = async (id, object) => {
  const { data } = await await request.put(id, object);
  return data;
};

export const productRemove = async (id) => {
  const { data } = await request.delete(`${url}/${id}`);
  return data;
};

export const productsPagination = async (previous, limit) => {
  const { data } = await request.get(`${url}?offset=${previous}&limit=${limit}`);
  return data;
};
