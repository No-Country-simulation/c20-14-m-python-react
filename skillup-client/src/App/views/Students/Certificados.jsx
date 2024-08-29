import { Container, Row, Col } from "react-bootstrap";
import certificado from "../Students/img/certificado.png";
import "../Students/styles/Certificados.css";
const Certificados = () => {
	return (
		<>
			<Container fluid>
				<Row>
					<h2>Certificados</h2>
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
