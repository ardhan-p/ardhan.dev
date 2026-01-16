type SectionProps = {
	id: string; 
	title: string;
	children: React.ReactNode;
}

const Section = ({id, title, children} : SectionProps ) => {
	return (
		<section 
			id={id}
      className="pt-40 pb-20" 
		>
      <div className="container mx-auto px-15">
				<div>
          <h1 className="text-3xl font-bold my-4">
						{title}
					</h1>
				</div>
				{children}
			</div>
		</section>
	)
};

export default Section;