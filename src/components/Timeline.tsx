import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date=" June 2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer Intern </h3>
            <h4 className="vertical-timeline-element-subtitle">Black Unicrn, Los Angeles, CA</h4>
            <p>
              Refactored and optimized a tailored RAG-based chatbot using OpenAI LLMs and DeepSeek retrieval, reducing
average response latency by 70% (10 s → 3 s), boosting user engagement by 50% and cutting drop-off rates by 30%
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2024 - January 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist Intern</h3>
            <h4 className="vertical-timeline-element-subtitle"> IDXExchange,Los Angeles, CA</h4>
            <p>
              Built real-time pricing prediction platform for California housing (↑20% accuracy),  
    deployed ML models on GCP to process 400K+ records, achieving 70% error reduction.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
              Developed AI chatbot and Power BI dashboard for campus safety routing (↓15% student pathfinding time), built ETL pipelines and analyzed crime patterns using Python (pandas, scikit-learn, TensorFlow) and ML algorithms (Clustering, Time Series Forecasting).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Assuaged Foundation,Greenlake Valley, CA</h4>
            <p>
              Built ML models to identify affordable, safer housing (↓10% rent),  
    automated data pipelines (Python, SQL) integrating 5,000+ listings with crime data.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;