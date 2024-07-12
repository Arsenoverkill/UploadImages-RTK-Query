interface Params {
	id: string;
}

interface AboutProps {
	params: Params;
}

const About: React.FC<AboutProps> = ({ params }) => {
	return (
		<div>
			<h3>About Page {params.id}</h3>
		</div>
	);
};

export default About;
