import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faChartLine, faCogs, faCloud } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const mlSkills = [
  "Excel",
  "SQL (MySQL, PostgreSQL)",
  "Tableau",
  "Power BI",
  "Data Cleaning",
  "Exploratory Data Analysis",
  "Data Visualization",
  "Statistical Modeling",
  "Hypothesis Testing",
  "A/B Testing",
  "Regression Analysis",
  "Clustering",
  "Dashboarding",
];

const progSkills = [
  "Python (pandas, scikit-learn, PyTorch)",
  "SQL (MySQL, NoSQL)",
  "MongoDB",
  "Git",
  "Docker",
  "R",
  "Keras",
  "TensorFlow",
  "XGBoost",
  "OpenCV",
  "NLTK",
  "spaCy",
  "PySpark",
  "Java",
  "Scala",
];

const dataSciSkills = [
  "Root Cause Analysis",
  "Causal Inference",
  "Predictive Modeling",
  "Time Series",
  "A/B Testing",
  "Hypothesis Testing",
  "Statistical Analysis",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "LLM (e.g. GPT-4, LLaMA)",
  "ETL Pipelines",
];

const mlOpsSkills = [
  "Docker",
  "Kubernetes",
  "MLflow",
  "Airflow",
  "SageMaker",
  "CI/CD",
  "Model Monitoring",
  "Data Versioning",
  "TensorBoard",
  "Kubeflow",
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

          {/* ML Ops */}
          <div className="skill">
            <FontAwesomeIcon icon={faCogs} size="3x" />
            <h3>ML Ops & Deployment</h3>
            <p>
              Automating the end-to-end ML lifecycle: training, deployment,
              monitoring, and pipeline orchestration.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {mlOpsSkills.map((label, i) => (
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

