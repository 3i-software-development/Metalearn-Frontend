import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const courseQuery = createApi({
    reducerPath: "courseQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        startCourseUpdate: builder.query({
            query: (course) => {
                return {
                    url: `GetItemCourseMobile?Id=` + course.Id,
                    method: "POST"
                };
            },
        }),
        endUpdateCourse: builder.mutation({
            query: ({ course }) => ({
                url: `GetItemCourseMobile?Id=` + course.Id,
                method: "POST",
                body: course
            }),
        })
    }),
});
export const { 
    useStartCourseUpdateQuery,
    useEndUpdateCourseQuery,
} = courseQuery;
