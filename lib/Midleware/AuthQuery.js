import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const infoUser = createApi({
  reducerPath: "infoUser",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (login) => {
        return {
          url: `LoginNoCheckOnline`,
          method: "POST",
          body: login,
        };
      },
    }),
    registers: builder.mutation({
      query: (register) => {
        return {
          url: `RegisterProfile`,
          method: "POST",
          body: register,
        };
      },
    }),
  }),
});
export const { useLoginMutation, useRegistersMutation } = infoUser;
