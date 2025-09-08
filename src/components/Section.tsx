type SectionProps = {
	id: string; 
	title: string;
	children: React.ReactNode;
}

const Section = ({id, title, children} : SectionProps ) => {
	return (
		<section id={id}>
			<div>
				<h2>{title}</h2>
			</div>
			{children}
		</section>
	)
};

export default Section;