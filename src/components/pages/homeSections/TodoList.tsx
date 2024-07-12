'use client';
import { useDeletTodosMutation, useGetTodosQuery } from '@/redux/api/todo';
import scss from './TodoList.module.scss';
import Image from 'next/image';

const TodoList = () => {
	const { data } = useGetTodosQuery();
	const [deletTodosMutation] = useDeletTodosMutation();
	function deletImages(id: number) {
		deletTodosMutation(id);
	}
	return (
		<section className={scss.TodoList}>
			<div className="container">
				<div className={scss.content}>
					<h1>Your Images</h1>
					<div className={scss.imagesBlocks}>
						{data
							? data.map((el, idx) => (
									<div className={scss.imageBlock} key={idx}>
										<h3>{el.title}</h3>
										<Image
											width={300}
											height={200}
											src={el.files}
											alt="image"
										/>
										<button onClick={() => deletImages(el._id!)}>Delete</button>
									</div>
							  ))
							: ''}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TodoList;
