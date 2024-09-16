// src/VideoList.js
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { mockVideos, mockSeenVideos } from "./mockData.jsx";

const VideoList = () => {
	const [videos, setVideos] = useState([]);
	const [seenVideos, setSeenVideos] = useState(new Set());

	useEffect(() => {
		// Simular la llamada a la API con datos ficticios
		setVideos(mockVideos);
		setSeenVideos(new Set(mockSeenVideos));
	}, []);

	return (
		<Container>
			<Row>
				{videos.map(video => (
					<Col md={4} key={video.id}>
						<VideoCard video={video} seen={seenVideos.has(video.id)} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default VideoList;
