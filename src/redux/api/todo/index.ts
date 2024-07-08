import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getTodos: build.query<TODO.GetResponse, TODO.GetRequest>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['todo']
		})
	})
});
export const { useGetTodosQuery } = api;
