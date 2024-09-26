import { Container, Row, Col } from "react-bootstrap";
import css from "./css.module.css";

import studentPc from "./img/trabajo-remoto.webp";
import studentGrid from "./img/alumnoGrid.jpg";
import teacherGrid from "./img/profesor.webp";

/* import React from 'react' */

const Hero = () => {
	return (
		<>
			<Container fluid>
				<Row className={css.flexColumn_desktop}>
					<Col className={css.heroText} xs={12} md={6} lg={4}>
						<h1 className={css.heroText_ppal}>
							Encuentra
							<span className={css.greenText}> cursos </span>
							de
							<span className={css.pinkText}> alta especialización </span>
							con
							<span className={css.violetText}> prácticas reales</span>
						</h1>
					</Col>

					<Col className={css.heroGrid}>
						<p className={css.gridElement}>
							25 <br />
							CURSOS
						</p>

						<p className={css.gridElement}>
							5500 <br />
							HORAS
						</p>

						<p className={css.gridElement}>
							3000 <br /> ALUMNOS
						</p>
						<div className={`${css.imageContainer} ${css.gridElement}`}>
							<img
								className={css.imgGrid}
								src={studentPc}
								alt="dos alumnos frente a laptops"
							/>
						</div>
						<div className={`${css.imageContainer} ${css.gridElement}`}>
							<img
								className={css.imgGrid}
								src={studentGrid}
								alt="mujer joven sonriendo"
							/>
						</div>
						<div className={`${css.imageContainer} ${css.gridElement}`}>
							<img
								className={css.imgGrid}
								src={teacherGrid}
								alt="imagen de aquiles gonzales profesor"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Hero;
