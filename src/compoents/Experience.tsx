import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { title } from "process";
import exp from "constants";

const Experience: React.FC = () => {
    const experiences = [
        {
            title:'Full Stack .NET Developer',
            company:'Sara Software Systems',
            duration:'Sept 2021 - Present',
            description:'Developed N-tier applications using ASP.NET, C#, SQL Server, and JavaScript. Designed RESTful APIs and microservices.'
        },
        {
            title: 'Software Tester',
            company: 'Sara Software Systems - U.S. Dept of Health and Human Services',
            duration: 'Aug 2020 - Sept 2021',
            description: 'Conducted functional and regression testing, automated tests with Selenium, and performed API testing with Postman.'
        },
        {
            title: 'Technical Specialist',
            company: 'Abscus Inc. - U.S. Dept of Health and Human Services',
            duration: 'Sept 2019 - Aug 2020',
            description: 'Extracted and reported data using SQL queries, optimized report generation by 15%.'
        },
        {
            title: 'Junior Developer',
            company: 'Comter Systems - U.S. Dept of Health and Human Services',
            duration: 'Jan 2019 - Aug 2019',
            description: 'Assisted in Crystal Reports development and optimized SQL queries.'
        }
    ];

    return(
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Work Experience</h2>
            <div className="row">
                {experiences.map((exp, index)=>(
                    <div key={index} className="col-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{exp.title}</h4>
                                <h4 className="card-subtitle mb-2 text-muted">{exp.company}</h4>
                                <h4 className="card-text"><strong>Duration</strong>{exp.duration}</h4>
                                <h4 className="card-text">{exp.description}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;