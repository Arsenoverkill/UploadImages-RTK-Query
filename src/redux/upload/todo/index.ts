import { uploadApi as index } from '..';

const uploadApi = index.injectEndpoints({
	endpoints: (build) => ({
		postUpload: build.mutation<
			UPLOAD.postUploadResponse,
			UPLOAD.postUploadRequest
		>({
			query: (formImage) => ({
				url: '',
				method: 'POST',
				body: formImage
			}),
			invalidatesTags: ['upload']
		})
	})
});
export const { usePostUploadMutation } = uploadApi;
