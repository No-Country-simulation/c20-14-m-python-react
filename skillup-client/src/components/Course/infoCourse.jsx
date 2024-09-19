/* import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import css from "./css.module.css"; */

/* const InfoCourse = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const fetchCourses = async () => {
			try {
				const response = await fetch(
					"https://skillup-pi83.onrender.com/api/courses"
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setCourses(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchCourses();
	}, []);

	return (
		<Container fluid className="cardContainer">
			{courses.map((course, index) => (
				<Row key={index} className="courseRow">
					<Col lg={8}>
						<h2 className={css.courseh1}>{course.title}</h2>
						<div className={css.courseDescription}>
							<p>{course.description}</p>
							<p>{course.rating}</p>
							<p>
								<span className={css.courseTeacher}>INSTRUCTOR:</span>
								{course.instructor.first_name} {course.instructor.last_name}
							</p>
						</div>
						<div className="d-flex justify-content-center">
							<Button className={`${css.btnSale} btn-secondary`}>
								Comprar
							</Button>
						</div>
					</Col>
				</Row>
			))}
		</Container>
	);
};

export default InfoCourse;
 */

const infoCourse = () => {
	return <div>infoCourse</div>;
};

export default infoCourse;
