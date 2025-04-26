import React from 'react'


type FormData = {
    name: string;
    email: string;
    company: string;
    message: string;
  };
  
  const inputFields = [
    { name: 'name', placeholder: 'Full name', type: 'text' },
    { name: 'email', placeholder: 'Email', type: 'email' },
    { name: 'company', placeholder: 'Company', type: 'text' },
  ];

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    
  return (
    <div>ContactForm</div>
  )
}
