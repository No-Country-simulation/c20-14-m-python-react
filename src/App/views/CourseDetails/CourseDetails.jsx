import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { geCourseByIdService } from "./service/geCourseByIdService.js";
import { Container, Row, Col } from "react-bootstrap";

export default function CourseDetails() {
	const { id } = useParams();
	const [course, setCourse] = useState();
	const [currentVideoId, setCurrentVideoId] = useState("");

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();

		geCourseByIdService(controller.signal, id)
			.then(data => {
				setCourse(data);
				// Establecer el ID del primer video por defecto
				if (data.course.modules.length > 0) {
					setCurrentVideoId(extractVideoId(data.course.modules[0].video_url));
				}
			})
			.catch(err => console.log(err));

		return () => controller.abort();
	}, [id]);

	const extractVideoId = url => {
		const regex =
			/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
		const matches = url.match(regex);
		return matches ? matches[1] : null;
	};

	if (!course) return null;

	return (
		<>
			<div>test</div>
		</>
	);
}
