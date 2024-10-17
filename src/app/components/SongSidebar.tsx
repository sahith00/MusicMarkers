"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import SongRow from './SongRow.tsx'
import './sidebar.css';

const SongSidebar: React.FC = () => {
	const router = useRouter();

	return (
		<>
		<div className="sidebar">
	      <div className="sidebar-header">
	        <h2>Songs with Markers</h2>
	        <button className="add-button" onClick={() => router.push('/songs?searching=true')}>+</button>
	      </div>
	      <div className="sidebar-content">
	        {/* Add your scrollable content here */}
	        <SongRow />
	        <SongRow />
	        <SongRow />
	        <SongRow />
	      </div>
	    </div>
	    </>
	);
}


export default SongSidebar;