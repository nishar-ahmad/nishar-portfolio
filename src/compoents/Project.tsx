import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
//import exp from "constants";

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchProjects = async() =>{
            try{
                const response = await axios.get('https://nisharportfolioapi.azurewebsites.net/api/portfolio/');
                setProjects(response.data);
            } catch (error){
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return(
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Projects</h2>
            <p>Building something awesome. Check back soon!</p>
            {loading ? (
                <p>Loading Projects...</p>
            ) : (
                <div className="row">
                    {projects.map((projects) => (
                        <div key={projects.id} className="col-md-6 mb-4">
                           <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">{projects.title}</h4>
                                    <p className="card-text">{projects.description}</p>
                                    <p className="card-text"><strong>Technology:</strong>{projects.technologies}</p>
                                    <p className="card-text"><strong>Date:</strong>{new Date(projects.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;

