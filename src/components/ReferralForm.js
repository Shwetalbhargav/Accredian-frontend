import React, { useState, useEffect } from 'react';
import { createReferral, fetchCourses } from '../services/api';
import { FaUser, FaEnvelope, FaPhone, FaClipboardList } from 'react-icons/fa';

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    referrer_name: '',
    referrer_email: '',
    referrer_phone: '',
    referee_name: '',
    referee_email: '',
    referee_phone: '',
    course_id: '',
    referral_code: '',
    consent: true,
  });

  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (error) {
        console.error('Failed to load courses:', error);
      }
    };
    loadCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'course_id' ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.course_id) {
      setError('Please select a course.');
      return;
    }

    try {
      await createReferral(formData);
      alert('Referral submitted successfully!');
    } catch (error) {
      setError('Error submitting referral. Please check the inputs.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Referral Form</h2>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Referrer Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center border rounded-md p-2">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="referrer_name"
              placeholder="Referrer Name"
              value={formData.referrer_name}
              onChange={handleChange}
              required
              className="w-full border-none focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center border rounded-md p-2">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              name="referrer_email"
              placeholder="Referrer Email"
              value={formData.referrer_email}
              onChange={handleChange}
              required
              className="w-full border-none focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center border rounded-md p-2">
            <FaPhone className="text-gray-500 mr-2" />
            <input
              type="text"
              name="referrer_phone"
              placeholder="Referrer Phone"
              value={formData.referrer_phone}
              onChange={handleChange}
              required
              className="w-full border-none focus:ring-0 focus:outline-none"
            />
          </div>
        </div>

        {/* Referee Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center border rounded-md p-2">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="referee_name"
              placeholder="Referee Name"
              value={formData.referee_name}
              onChange={handleChange}
              required
              className="w-full border-none focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center border rounded-md p-2">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              name="referee_email"
              placeholder="Referee Email"
              value={formData.referee_email}
              onChange={handleChange}
              required
              className="w-full border-none focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center border rounded-md p-2">
            <FaPhone className="text-gray-500 mr-2" />
            <input
              type="text"
              name="referee_phone"
              placeholder="Referee Phone"
              value={formData.referee_phone}
              onChange={handleChange}
              required
              className="w-full border-none focus:ring-0 focus:outline-none"
            />
          </div>
        </div>

        {/* Course Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center border rounded-md p-2">
            <FaClipboardList className="text-gray-500 mr-2" />
            <select
              name="course_id"
              value={formData.course_id}
              onChange={handleChange}
              required
              className="w-full border-none focus:ring-0 focus:outline-none"
            >
              <option value="">Select a Course</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>
                  {course.name} (Bonus: {course.referrer_bonus})
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center border rounded-md p-2">
            <FaClipboardList className="text-gray-500 mr-2" />
            <input
              type="text"
              name="referral_code"
              placeholder="Referral Code"
              value={formData.referral_code}
              onChange={handleChange}
              required
              className="w-full border-none focus:ring-0 focus:outline-none"
            />
          </div>
        </div>

        {/* Consent and Submit */}
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={() => setFormData({ ...formData, consent: !formData.consent })}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">I give my consent</span>
          </label>
          <button
            type="submit"
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReferralForm;
