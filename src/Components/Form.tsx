import React, { useState } from 'react';

// Define a TypeScript interface for the form data
interface FormData {
  name: string;
  email: string;
  password: string;
}

const App: React.FC = () => {
  // Initialize form state
  const initialFormData: FormData = {
    name: '',
    email: '',
    password: '',
  };

  // Create state variables for the form data
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // Handle form input changes
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    // You can access the form data in the formData object here
    console.log('Form data submitted:', formData);
    // You can also send the data to a server or perform other actions here
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
