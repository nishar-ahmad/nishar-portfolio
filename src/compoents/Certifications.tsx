import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Certifications: React.FC = () => {
    const [certifications, setCertifications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCertifications = async () => {
            try{
                const response = await axios.get("https://nisharportfolioapi.azurewebsites.net/api/certifications");
                setCertifications(response.data);
            } catch (error){
                console.error('Error fetching certifications:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCertifications();
    },[]);

    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Certifications</h2>
            {
                loading ? (
                    <p>Loading Certifications...</p>
                ) : (
                    <ul className="list-group">
                {certifications.map((cert) => (
                    <li key={cert.id} className="list-group-item">
                        <strong>{cert.name}</strong> - {cert.year}
                    </li>
                ))}
            </ul>
                )
            }
            
        </div>
    );
};

export default Certifications;