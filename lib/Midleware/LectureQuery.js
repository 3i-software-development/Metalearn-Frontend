import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const lectureQuery = createApi({
    reducerPath: "lectureQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        getListLecture: builder.query({
            query: (lecture) => {
                return {
                    url: `GetListLmsLecture`,
                    method: "POST",
                    headers: {
                        "Content-Type": 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams(lecture),
                };
            },
        }),
    }),
});
export const { useGetListLectureQuery } = lectureQuery;
