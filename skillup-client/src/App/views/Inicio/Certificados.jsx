import { Container, Row, Col } from "react-bootstrap";
import certificado from "./img/certificadoDigital.avif";
import css from "./css.module.css";
const Certificados = () => {
	return (
		<>
			<Container fluid>
				<Row>
					<h2 className={css.heroText_ppal}>Certificados</h2>
				</Row>
				<Row>
					<Col xs={12} md={6} lg={4} className="mx-auto">
						<img
							className={css.certificadoImg}
							src={certificado}
							alt="imagen de certificado obtenido"
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Certificados;
