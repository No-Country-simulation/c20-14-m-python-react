import { Container, Row, Col } from "react-bootstrap";
import certificado from "./img/certificadoDigital.avif";
import css from "./css.module.css";
const Certificados = () => {
	return (
		<>
<<<<<<< HEAD
			<Container fluid id="Certificados">
=======
			<Container fluid>
>>>>>>> 9f16bb33af0826cce33bd834cbb4dd81722e7e99
				<Row>
					<h2 className={css.heroText_ppal}>Certificados</h2>
				</Row>

				<Row>
					<Col xs={12} md={6} lg={4} className="certificadoBloque">
						<img
							className="certificadoImg"
							src={certificado}
							alt="imagen de certificado obtenido"
						/>
					</Col>
					{/*    <Col xs={12} md={6} lg={4} className="certificadoBloque">
            <img
              className="certificadoImg"
              src={certificado}
              alt="imagen de certificado obtenido"
            />
              </Col>
              <Col xs={12} md={6} lg={4} className="certificadoBloque">
            <img
              className="certificadoImg"
              src={certificado}
              alt="imagen de certificado obtenido"
            />
          </Col> */}
				</Row>
			</Container>
		</>
	);
};

export default Certificados;
