import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const userQuery = createApi({
  reducerPath: "userQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getListUserConnected: builder.query({
      query: (user) => {
        return {
          url: `GetListUserConnected`,
          method: "POST",
          body: new URLSearchParams(user)
        };
      },
    })
  }),
});

export const { useGetListUserConnectedQuery } = userQuery;
