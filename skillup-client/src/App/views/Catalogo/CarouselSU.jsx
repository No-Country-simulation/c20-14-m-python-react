import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import face1 from "./img/face-boy-beard.png";
import face2 from "./img/face-girl-brunnette.jpg";
import face3 from "./img/face-girl-dotted.png";

import css from "./css.module.css";
function CarouselSU() {
	return (
		<Carousel className={css.carousel}>
			<Carousel.Item>
				<Row className={css.carouselSlide}>
					<Col xs={6} md={3} lg={4}>
						<img src={face1} className={css.slideImage} />
					</Col>
					<Col
						xs={6}
						md={9}
						lg={8}
						className="d-flex flex-column justify-content-center"
					>
						<h3 className={css.slideTitle}>Jackson Redbeard</h3>
					</Col>
					<Col xs={12} className="d-flex flex-wrap ">
						<p className={css.slideText}>
							Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla
							vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</Col>
				</Row>
			</Carousel.Item>
			<Carousel.Item>
				<Row className={css.carouselSlide}>
					<Col xs={6} md={3} lg={4}>
						<img src={face2} className={css.slideImage} />
					</Col>
					<Col
						xs={6}
						md={9}
						lg={8}
						className="d-flex flex-column justify-content-center"
					>
						<h3 className={css.slideTitle}>Melissa Bobhairstyle</h3>
					</Col>
					<Col xs={12} className="d-flex flex-wrap ">
						<p className={css.slideText}>
							Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla
							vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</Col>
				</Row>
			</Carousel.Item>
			<Carousel.Item>
				<Row className={css.carouselSlide}>
					<Col xs={6} md={3} lg={4}>
						<img src={face3} className={css.slideImage} />
					</Col>
					<Col
						xs={6}
						md={9}
						lg={8}
						className="d-flex flex-column justify-content-center"
					>
						<h3 className={css.slideTitle}>Nathaly Freckles</h3>
					</Col>
					<Col xs={12} className="d-flex flex-wrap ">
						<p className={css.slideText}>
							Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla
							vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</Col>
				</Row>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselSU;
