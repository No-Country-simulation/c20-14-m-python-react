// src/VideoCard.js
import { Card } from "react-bootstrap";
import { FaCheck, FaEllipsisH } from "react-icons/fa";

const VideoCard = ({ video, seen }) => {
	return (
		<Card className="my-3">
			<Card.Body>
				<Card.Title>{video.title}</Card.Title>
				<Card.Text>
					<iframe
						width="100%"
						height="200"
						src={`https://www.youtube.com/embed/${video.id}`}
						title={video.title}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</Card.Text>
				<Card.Footer>{seen ? <FaCheck /> : <FaEllipsisH />}</Card.Footer>
			</Card.Body>
		</Card>
	);
};

export default VideoCard;
