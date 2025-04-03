import React, {useState, FC} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import exp from "constants";

type formData = {
    name: string;
    email: string;
    message: string;
}

const Contact: FC = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    });
    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {id,value} = e.target;
        setFormData((prev)=>({ ...prev, [id]: value}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(null);

        try{
            const response = await axios.post('https://nisharportfolioapi.azurewebsites.net/api/contact', formData);
            console.log('Form submitted successfully:', response.data);
            setStatus('Message sent successfully! I will get back to you soon.');
            setFormData({name: '', email: '', message: ''});
        } catch(error) {
            console.error('Error submitting form:', error);
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                        className="form-control" 
                        id="message" 
                        rows={5} 
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {status && <p className={`mt-3 ${status.includes('success') ? 'text-success' : 'text-danger'}`}>{status}</p>}
            <div className="mt-4">
                <p><strong>Email:</strong> nishar.contractor@hotmail.com</p>
                <p><strong>Mobile:</strong> +1 (443) 9625011</p>
            </div>
        </div>
    );
};

export default Contact;