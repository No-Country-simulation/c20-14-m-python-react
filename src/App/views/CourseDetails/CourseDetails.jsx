import { useEffect, useState } from "react";
import { useParams } from "react-router-do
import { geCourseByIdService } from "./service/geCourseByIdService.js";

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
					<Col></Col>
					<Col></Col>
				</Row>
			</Container>
		</>
	);
}
