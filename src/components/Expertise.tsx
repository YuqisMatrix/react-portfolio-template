import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faChartLine, faCogs, faCloud } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const mlSkills = [
"Machine Learning", "Deep Learning", "NLP", "LLM (GPT-4, LLaMA, Gemini)", "Predictive Modeling", "Time Series", "Clustering", "Feature Engineering", "Hypothesis Testing", "Causal Inference", "Recommendation Systems"
];

const progSkills = [
"Python (pandas, scikit-learn, PyTorch, PySpark)", "R", "Java", "SQL (MySQL, NoSQL, PostgreSQL)", "MongoDB", "Git", "Docker", "CI/CD", "Keras", "TensorFlow", "AWS (S3, EC2, Lambda)", "RESTful API"
];

const dataSciSkills = [
"Exploratory Data Analysis", "Data Visualization", "Tableau", 
"Power BI", "Excel", "Root Cause Analysis", "Statistical Analysis", "ETL Pipelines", "Data Warehousing", "A/B Testing",
"Relational Databases"
];



function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {/* ML / AI & LLM */}
          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
                        <h3>ML & AI / LLM Engineering</h3>
            <p>
              Building and deploying large-language-model applications—chatbots,
              retrieval-augmented systems, computer vision pipelines, and more.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {mlSkills.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Programming & Frameworks */}
          <div className="skill">
            <FontAwesomeIcon icon={faCloud} size="3x" />
            <h3>Programming & Frameworks</h3>
            <p>
              Core programming languages, data libraries, and ML/DL frameworks
              for end-to-end application development and data processing.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {progSkills.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Data Science & Analytics */}
          <div className="skill">
            <FontAwesomeIcon icon={faChartLine} size="3x" />
            <h3>Data Science & Analytics</h3>
            <p>
              End-to-end statistical analysis and experimentation: forecasting,
              hypothesis testing, A/B testing, and interactive dashboards.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {dataSciSkills.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default Expertise;

