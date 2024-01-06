import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { data } from './Test';
import './dash.css';

const Dashboard = () => {
  const [nameQuery, setNameQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  const handleCandidateSelection = (candidateId) => {
    if (selectedCandidates.includes(candidateId)) {
      setSelectedCandidates(selectedCandidates.filter((id) => id !== candidateId));
    } else {
      setSelectedCandidates([...selectedCandidates, candidateId]);
    }
  };

  return (
    <div className="app">
      <div>
        <div className="flex">
          <p>Name:</p>
          <input
            className="srcname"
            placeholder="Enter Name"
            onChange={(event) => setNameQuery(event.target.value)}
          />
          
        </div>
        <br />

        <div className="flex">
          <p>Location:</p>
          <input
            className="srcname"
            placeholder="Enter Location"
            onChange={(event) => setLocationQuery(event.target.value)}
          />
          <br />
        </div>
      </div>

      {/* Name search */}
      <div className="candidates-list">
        {data
          .filter((post) => {
            if (nameQuery === '') {
              return true;
            } else if (post.name.toLowerCase().includes(nameQuery.toLowerCase())) {
              return true;
            }
            return false;
          })
          .map((post, index) => (
            <div className="box" key={index}>
              <div>
                <input
                  type="checkbox"
                  checked={selectedCandidates.includes(post.id)}
                  onChange={() => handleCandidateSelection(post.id)}
                />
              </div>

              <p>{post.name}</p>
              <p>{post.jobType}</p>
              <p>{post.location}</p>
            </div>
          ))}
      </div>

      {/* Location search */}
      <div className="candidates-list">
        {data
          .filter((post) => {
            if (locationQuery === '') {
              return true;
            } else if (post.location.toLowerCase().includes(locationQuery.toLowerCase())) {
              return true;
            }
            return false;
          })
          .map((post, index) => (
            <div className="box" key={index}>
              <div>
                <input
                  type="checkbox"
                  checked={selectedCandidates.includes(post.id)}
                  onChange={() => handleCandidateSelection(post.id)}
                />
              </div>

              <p>{post.name}</p>
              <p>{post.jobType}</p>
              <p>{post.location}</p>
            </div>
          ))}
      </div>

      {/* Selected Candidates */}
      <div className="selected-candidates">
        <h2>Selected Candidates:</h2>
        {data
          .filter((post) => selectedCandidates.includes(post.id))
          .map((post) => (
            <div className="box" key={post.id}>
              <p>{post.name}</p>
              <p>{post.jobType}</p>
              <p>{post.location}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
