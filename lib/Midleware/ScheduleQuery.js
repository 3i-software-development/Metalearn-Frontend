import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../env";

export const scheduleQuery = createApi({
    reducerPath: "scheduleQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        getListSchedule: builder.query({
            query: ({userName,userFilter}) => {
                return {
                    url: `GetListTutorScheduleNew`,
                    method: "POST",
                    params:{
                        "userName":userName,
                        "userFilter":userFilter
                    }
                };
            },
        }),
    }),
});
export const {  useGetListScheduleQuery} = scheduleQuery;
