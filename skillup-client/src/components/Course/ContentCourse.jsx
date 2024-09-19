/* import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineComputer } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

const ContentCourse = () => {
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
					<Col xs={12} lg={12} className="cardCol">
						<h2>Contenido del curso</h2>
						<h3>
							{course.duration} horas {course.videos} videos
						</h3>
						<ul>
							{course.modules.map((module, idx) => (
								<li key={idx} className="row">
									<span className="col-lg-2 col-xs-1">
										<MdOutlineComputer />
									</span>
									<p className="col-lg-6 col-xs-3">{module.title}</p>
									<span className="col-lg-2 col-xs-2">
										<a
											href={module.videoLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FaVideo />
										</a>
									</span>
								</li>
							))}
						</ul>
					</Col>
				</Row>
			))}
		</Container>
	);
};

export default ContentCourse; */

const contentCourse = () => {
	return <div>contentCourse</div>;
};

export default contentCourse;
