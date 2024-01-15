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
    getListCmsItem: builder.query({
      query: (cms) => {
        return {
          url: `GetListCmsItem`,
          method: "POST",
          body: new URLSearchParams(cms),
        };
      },
    }),
    deleteCmsItem: builder.mutation({
      query: (id) => {
        return {
          url: `DeleteCmsItem`,
          method: "POST",
          body: id,
        };
      },
    }),
    updateCmsItem: builder.mutation({
      query: (data) => {
        return {
          url: `UpdateCmsItem`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetCmsItemClassQuery, useGetListCmsItemQuery, useDeleteCmsItemMutation, useUpdateCmsItemMutation } = cmsClassQuery;
