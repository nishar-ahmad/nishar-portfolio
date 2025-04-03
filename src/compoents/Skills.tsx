import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'

interface Skill {
    id: number;
    category: string;
    name: string;
}

export const Skills: React.FC = () => {
    const [skills, setSkills]= useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchSkills = async () => {
            try{
                const response = await axios.get("https://nisharportfolioapi.azurewebsites.net/api/skill");
                setSkills(response.data);
            } catch (error) {
                console.error('Error fetching skills:', error);
            } finally{
                setLoading(false);
            }
        };
        fetchSkills();
    }, []);
    
    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill.name);
        return acc;
    }, {} as { [key: string]: string[] });

    return(
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Technical Skills</h2>
            {
                loading? (
                    <p>Loading skills...</p>
                ) : (
                    <table className="table table-bordered">
                    <tbody>
                        {Object.entries(groupedSkills).map(([category, skillList]) => (
                            <tr key={category}>
                                <td className="fw-bold" style={{ width: '30%' }}>{category}</td>
                                <td>{skillList.join(', ')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                )}
            </div>    
    );
};
export default Skills;