namespace UPLOAD {
	type postUploadResponse = {
		url: string;
		fileName: string;
	};
	type postUploadRequest = FormData;
}
