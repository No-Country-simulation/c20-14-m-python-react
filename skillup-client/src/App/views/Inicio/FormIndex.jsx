import { Container, Row, Col, Form, Button } from "react-bootstrap";
import css from "./css.module.css";

const FormIndex = () => {
	return (
		<Container>
			<Form className="w-100">
				<Row
					className={`align-items-center w-100 justify-content-center ${css.formAdjust}`}
				>
					<Col sm={6} className="my-1 formAdjust">
						<Form.Control
							className="formAdjust"
							id="inlineFormInputName"
							placeholder="Busca tu curso"
						/>
					</Col>
					<Col xs="auto" className="my-1">
						<Button type="submit" className="btn-secondary">
							Enviar
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

export default FormIndex;
