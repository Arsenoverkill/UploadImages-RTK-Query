import scss from "./TodoList.module.scss";

const TodoList = () => {
	return (
		<section className={scss.TodoList}>
			<div className="container">
				<div className={scss.content}>
					<h3>TodoList</h3>
				</div>
			</div>
		</section>
	);
};

export default TodoList;
