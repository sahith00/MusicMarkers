import './songView.css';

export default function SongView() {
	return (
		<div className="songView">
			<div className="songInfo">
				<div className="view-header">
		        	<h2>Song Info</h2>
	        	</div>
			</div>
			<div className="markerView">
				<div className="playback">
					<p>Playback</p>
				</div>
				<div className="markerList">
					<p>Markers</p>
				</div>
			</div>
		</div>
	);
}