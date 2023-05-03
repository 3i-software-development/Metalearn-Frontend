import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const chartQuery = createApi({
    reducerPath: "chartQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        getTotalTeacher: builder.query({
            query: ({ userId }) => {
                return {
                    url: `GetApiLmsCountTeacher?userId=` + userId,
                    method: "POST",
                };
            },
        }),
    }),
});
export const { useGetTotalTeacherQuery } = chartQuery;
