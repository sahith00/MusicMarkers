import SongRow from './SongRow.tsx'
import './sidebar.css';

export default function SongSidebar() {
	return (
		<div className="sidebar">
	      <div className="sidebar-header">
	        <h2>Songs with Markers</h2>
	        <button className="add-button">+</button>
	      </div>
	      <div className="sidebar-content">
	        {/* Add your scrollable content here */}
	        <SongRow />
	        <SongRow />
	        <SongRow />
	        <SongRow />
	        <SongRow />
	        <SongRow />
	        <SongRow />
	        <SongRow />
	        <SongRow />
	      </div>
	    </div>
	);
}