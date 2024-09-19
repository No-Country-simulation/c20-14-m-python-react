import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { geCourseByIdService } from "./service/geCourseByIdService.js";
import { Container, Row, Col } from "react-bootstrap";

export default function CourseDetails() {
	const { id } = useParams();
	const [course, setCourse] = useState();

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();

		geCourseByIdService(controller.signal, id)
			.then(data => setCourse(data))
			.catch(err => console.log(err));

		return () => controller.abort();
	}, [id]);

	if (!course) return null;
	return (
		<>
			<Container>
				<Row>
					<h1>{course.course.title}</h1>
				</Row>
				<Row>{course.course.description}</Row>
				<Row>
					<Col>
						<ul>
							<li></li>
						</ul>
					</Col>
					<Col>
						<iframe src="" frameborder="0"></iframe>
					</Col>
				</Row>
			</Container>

			<article>
				<div></div>
				<div></div>
			</article>
		</>
	);
}
