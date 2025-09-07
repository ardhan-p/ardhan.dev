const Section = ({id, title, children} : {id: string, title: string, children?: React.ReactNode}) => {
	return (
		<section id={id}>
			<div>
				<h2>{title}</h2>
			</div>
			{children}
		</section>
	);
};

export default Section;