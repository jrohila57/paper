import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//@ts-ignore
const API_KEY = '067ebff9ab7f4047af01a37c9e78602c';
const BASE_URL = 'https://newsapi.org/v2/';
type ApiConfig = {
  tag: string[];
  reducerPath: string;
};

const createApiConfig = (config: ApiConfig) => {
  const reducerPath = config?.reducerPath;
  const tag = config?.tag;
  const tagTypes = tag;
  const providesTags = tag;
  const baseUrl = BASE_URL;
  const headers = { 'X-Api-Key': API_KEY };
  const baseQuery = fetchBaseQuery({ baseUrl });

  return {
    tagTypes,
    providesTags,
    baseUrl,
    headers,
    reducerPath,
    baseQuery,
  };
};

export default createApiConfig;
