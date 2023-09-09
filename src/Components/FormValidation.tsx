import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  password: string;
  subscribe: boolean;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  password: '',
  subscribe: false,
};

const FormValidation: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
  
    // Use type guards to check if the element is a checkbox
    const newValue = type === 'checkbox' ? (event.target as HTMLInputElement).checked : value;
  
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here, you can perform form validation and submit the data
    alert(formData);
  };

  return (
    <div className="App">
      <h1>React Form with TypeScript</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>
            Subscribe to newsletter:
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
