import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const infoUser = createApi({
  reducerPath: "infoUser",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://admin.metalearn.vn/MobileLogin/",
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
      // invalidatesTags: ["login"],
    }),
  }),
});
export const { useLoginMutation } = infoUser;
