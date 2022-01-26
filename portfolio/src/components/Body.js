import React from "react";

export default function Body() {
  return (
    <div className="projects">
      <div className="projectBox">
        <a href="www.sample.com">
          <h3>SpotList</h3>
          <p>
            A Spotify Web App. A unique way to access your playlists in your
            browser. Built with React.
          </p>
        </a>
      </div>
      <div className="projectBox">
        <a href="http://www.sample.com">
          <h3>Youtube Playlistr</h3>
          <p>
            A MERN Stack Project that allows users to create accounts to save
            their favorite Youtube videos.
          </p>
        </a>
      </div>
      <div className="projectBox">
        <a href="www.sample.com">
          <h3>Fictional Portfolio</h3>
          <p>
            A pure HTML/CSS project, extensive use of CSS to create a unique
            page.
          </p>
        </a>
      </div>
    </div>
  );
}
