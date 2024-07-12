'use client';
import scss from './TodoAdd.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { usePostTodosMutation } from '@/redux/api/todo';
import { usePostUploadMutation } from '@/redux/upload/todo';

const TodoAdd = () => {
	const [postTodosMutation] = usePostTodosMutation();
	const [postUploadMutation] = usePostUploadMutation();
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting }
	} = useForm<UploadFileTodo>();

	const onSubmit: SubmitHandler<UploadFileTodo> = async (data) => {
		const file = data.files[0];
		const formData = new FormData();
		formData.append('avatar', file);
		try {
			const { data: responseImage } = await postUploadMutation(formData);

			const newData = {
				title: data.title,
				files: responseImage!.url,
				isCompleted: false
			};
			postTodosMutation(newData);
			reset();
		} catch (error) {
			console.error('Ошибка при выполнении запроса:', error);
		}
	};
	return (
		<section className={scss.TodoAdd}>
			<div className="container">
				<div className={scss.content}>
					<h1>Add Images</h1>
					<form onSubmit={handleSubmit(onSubmit)} action="">
						<input
							placeholder="Title"
							type="text"
							{...register('title', { required: true })}
						/>
						<input type="file" {...register('files', { required: true })} />
						{isSubmitting ? (
							<button type="button">Loading...</button>
						) : (
							<button type="submit">Add</button>
						)}
					</form>
				</div>
			</div>
		</section>
	);
};

export default TodoAdd;
