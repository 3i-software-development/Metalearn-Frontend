import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const cmsClassQuery = createApi({
  reducerPath: "cmsClassQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getCmsItemClass: builder.query({
      query: (cmsclass) => {
        return {
          url: `GetCmsItemClass`,
          method: "POST",
          body: new URLSearchParams(cmsclass),
        };
      },
    }),
  }),
});
export const { useGetCmsItemClassQuery } = cmsClassQuery;
