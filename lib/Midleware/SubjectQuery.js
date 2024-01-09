import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const subjectQuery = createApi({
    reducerPath: "subjectQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        getListUserSubject: builder.query({
            query: ({ username, isTutor888 }) => {
                return {
                    url: `GetListUserSubject?userName=${username}&isTutor888=${isTutor888}`,
                    method: "POST",
                };
            },
        })
        // ,
        // getTreeDataSubjectUser: builder.query({
        //     query: ({ username, isTutor888 }) => {
        //         return {
        //             url: `GetTreeDataSubjectUser?userName=${username}&isTutor888=${isTutor888}`,
        //             method: "POST",
        //         };
        //     },
        // }),
    }),
});
export const { useGetListUserSubjectQuery } = subjectQuery;
