import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Send form data
      console.log(formValues);
      // Reset form
      setFormValues({ name: '', email: '', message: '' });
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formValues.email.trim())) {
      errors.email = 'Invalid email address';
    }
    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                  formErrors.name ? 'border-red-500' : 'border-gray-400'
                }`}
              />
              {formErrors.name && <p className="text-red-500 mt-2">{formErrors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                  formErrors.email ? 'border-red-500' : 'border-gray-400'
                }`}
              />
              {formErrors.email && <p className="text-red-500 mt-2">{formErrors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none ${            formErrors.message ? 'border-red-500' : 'border-gray-400'
              }`}
            />
            {formErrors.message && <p className="text-red-500 mt-2">{formErrors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
  
      {/* Contact information */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <ul className="list-disc pl-4">
          <li className="mb-2">
            <span className="font-bold">Address:</span> 123 Main St, Anytown USA
          </li>
          <li className="mb-2">
            <span className="font-bold">Phone:</span> 555-555-5555
          </li>
          <li className="mb-2">
            <span className="font-bold">Email:</span> info@example.com
          </li>
        </ul>
  
        {/* Social media icons */}
        <div className="flex justify-start mt-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-500 hover:text-blue-600 mr-4" size={24} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-500 hover:text-blue-600 mr-4" size={24} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-blue-500 hover:text-blue-600" size={24} />
          </a>
        </div>
      </div>
    </div>
  </div>
);
};

export default Contact;  
