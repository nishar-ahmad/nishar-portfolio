import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
    return  (
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-md-4 text-center'>
                    <img 
                        src='/profile.png'
                        alt='Nisharahmad Contractor'
                        className='img-fluid rounded-circle'
                        style={{maxWidth:'200px'}}
                    />
                </div>
                <div className='col-md-8'>
                    <h1 className='text-primary'>Nisharahmad Contractor</h1>
                    <h2 className='text-muted'>Full Stack .NET Developer</h2>
                    <p>
                    Full Stack .NET Developer with 3+ years of experience in developing scalable applications for government sectors using Microsoft technologies. Skilled in .NET Framework (5, 6), ASP.NET, ASP.NET Core Web API, C#, JavaScript, SQL Server, Azure, Docker, and Kubernetes. Strong expertise in RESTful APIs, Microservices, Entity Framework, and MVC Architecture. Adept in unit testing, system integration, and Agile methodologies with experience in both front-end and back-end development.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};
export default Home;