import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const blogQuery = createApi({
    reducerPath: "blogQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        getListBlog: builder.query({
            query: (id) => {
                return {
                    url: `GetListBlog`,
                    method: "POST",
                    body: new URLSearchParams(id),
                };
            },
        }),
        getAllSubjectBlog: builder.query({
            query: (id) => {
                return {
                    url: `GetAllSubjectBlog`,
                    method: "POST",
                    body: new URLSearchParams(id),
                };
            },
        }),
        insertBlog: builder.mutation({
            query: (data) => {
                return {
                    url: `InsertBlog`,
                    method: "POST",
                    body: data,
                };
            },
        }),
    }),
});
export const { useGetListBlogQuery, useInsertBlogMutation, useGetAllSubjectBlogQuery } = blogQuery;
