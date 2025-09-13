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
            <h4 className="vertical-timeline-element-subtitle">Black Unicrn (Immersive experience marketplace) , Los Angeles, CA</h4>
            <p>
              • Engineered and refactored a tailored RAG-based chatbot for company users to access personalized experiences and content creation, leveraging OpenAI LLMs, DeepSeek retrieval, Pinecone vector DB, and Python.
            </p>
            <p>
              • Optimized retrieval and generation pipeline through query re-ranking, caching layers, and async API calls, reducing average response latency by 70% (10s → 3s). 
            </p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2024 - January 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist Intern</h3>
            <h4 className="vertical-timeline-element-subtitle"> IDXExchange (real estate analytics platform), Los Angeles, CA</h4>
            <p>
             • Reduced average quote-to-purchase time by 30% and boosted lead-to-customer conversion by 20% by delivering a
real-time California house-pricing dashboard in Tableau to sales teams.
            </p>
            <p>
              • Automated data-quality monitoring for 400K+ property records via an end-to-end ETL pipeline (Python,
Pandas), adding freshness and null-rate checkpoints that eliminated 15 hrs/week of manual validation.
            </p>
            <p>
              • Developed and deployed clustering models in Python (scikit-learn) to identify 4 high-value buyer personas,
improving targeting precision by 15% and reducing acquisition cost by 18%.
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
              • Reduced student pathfinding time by 15% by engineering a Tableau dashboard that deliver real-time campus safety route recommendations compared to traditional information-gathering methods.
            </p>
            <p>
              • Implemented time series analysis and machine learning algorithms (clustering, anomaly detection) to
identify seasonal crime patterns and high-risk campus areas through comprehensive exploratory data analysis.
            </p>
            <p>
              • Developed an ETL pipeline to transform 1,885 USC crime log PDF files into 27,000+ structured data records
using Python (PyPDF2, pandas) through cross-functional collaboration.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Assuaged Foundation (health and wellness NGO) ,Greenlake Valley, CA</h4>
            <p>
              • Built and validated ML models to uncover affordable, safer housing areas, empowering underrepresented clients to
make data-driven rental decisions and achieve a 10% reduction in housing budgets across Los Angeles
            </p>
            <p>
              • Conducted exploratory data analysis and statistical modeling through regression and correlation analysis to
identify key drivers of rental prices, revealing strong influence from zip codes and housing configurations
            </p>
            <p>
              • Developed automated data pipelines using Python and SQL to integrate and process 5,000+ housing listings
with safety datasets, enabling scalable model development and deployment.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;