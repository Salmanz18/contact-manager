import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './BaseUrl';
import { Contact } from './models/ContactModel';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    contacts: builder.query<Contact[], void>({
      query: () => '/contacts',
    }),
  }),
});

export const { useContactsQuery } = contactsApi;
