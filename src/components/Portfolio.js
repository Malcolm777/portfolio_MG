import React from 'react';
import './Portfolio.css'; // CSS file you’ll create below

const Portfolio = ({ resumeData }) => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check out some of my works.</h1>
          <p>Click on an image below to check out the project!</p>
          <div className="portfolio-grid">
            {resumeData.portfolio && resumeData.portfolio.map((item, index) => (
              <div key={index} className="portfolio-item">
                <img src={item.imgurl} alt={item.name} />
                <div className="overlay">
                  <div className="portfolio-text always-visible">{item.name}</div>
                  <div className="buttons">
                    <a href={item.demo} target="_blank" rel="noopener noreferrer" className="button">Demo</a>
                    <a href={item.code} target="_blank" rel="noopener noreferrer" className="button">Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;