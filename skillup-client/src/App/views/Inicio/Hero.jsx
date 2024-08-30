/* eslint-disable prettier/prettier */
import { Container, Row, Col } from "react-bootstrap";
import css from "./css.module.css";

import studentPc from './img/trabajo-remoto.webp';
import studentGrid from './img/alumnoGrid.jpg';
import teacherGrid from './img/profesor.webp';

/* import React from 'react' */

const Hero = () => {
  return (
    <>
    <Container fluid>
        <Row>
        <Col className={css.heroText}  xs={12} md={6} lg={6}>
                <h1 className={css.heroText_ppal}>Encontra
                    <span className={css.greenText}> cursos y carreras </span>   
                    de 
                    <span className={css.pinkText}> alta  especializacion </span> 
                    con
                    <span className={css.violetText}> practicas reales</span>
                    </h1>
            </Col>

            <Col className={css.heroGrid}>

            <p className={css.gridElement}>25 <br/>CURSOS</p>

            <p className={css.gridElement}>5500 <br/>HORAS </p>

            <p className={css.gridElement}>3000 ALUMNOS</p>

            <img className={css.gridElement}    src={studentPc}  alt="dos alumnos frente a laptops" />  
            <img className={css.gridElement}   src={studentGrid} alt="mujer joven sonriendo" />
            <img className={css.gridElement}   src={teacherGrid}  alt="imagen de aquiles gonzales profesor" />
            

            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Hero