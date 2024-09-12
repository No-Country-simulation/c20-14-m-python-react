import { Container, Row, Col } from "react-bootstrap";

const About = () => {
	return (
		<section id="about" className="about-section">
			<Container fluid className="text-center">
				{/* Encabezado centrado */}
				<Row>
					<Col>
						<h1 className="mb-4">Sobre nosotros</h1>
					</Col>
				</Row>

				{/* Contenedor de textos centrados */}
				<Row className="justify-content-center">
					<Col xs={12} md={8} lg={6}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
							nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
							Nulla quis sem at nibh elementum imperdiet.
						</p>
						<p>
							Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
							semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
							Class aptent taciti sociosqu ad litora torquent per conubia
							nostra, per inceptos himenaeos.
						</p>
						<p>
							Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
							Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
							sem at dolor. Maecenas mattis.
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
