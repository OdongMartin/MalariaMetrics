'use client'

import { useState } from 'react';

const ReportPage = () => {
  // State variables to store form data
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [treatment, setTreatment] = useState('');

  const handleSubmit = async (event) => {
    console.log('handle submit called')
    event.preventDefault();
    //perform validation and submit data to backend 
    try {

      const response = await fetch('/api/malaria', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          patientName,
          age,
          gender,
          location,
          symptoms,
          diagnosis,
          treatment
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
  
      console.log('Form submitted successfully');

    } catch (error) {

      console.error('Error submitting form:', error.message);
    }

    //console.log('Form submitted:', { patientName, age, gender, location, symptoms, diagnosis, treatment });
    
    //clear form fields after submission
    setPatientName('');
    setAge('');
    setGender('');
    setLocation('');
    setSymptoms('');
    setDiagnosis('');
    setTreatment('');
  };

  return (
    <div className="container mx-auto flex m-4 p-4 w-full">
        <div>
            <h1 className="text-2xl font-bold mb-4">Report Malaria Case</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="patientName" className="block font-semibold mb-2">Patient Name</label>
                <input type="text" id="patientName" value={patientName} onChange={(e) => setPatientName(e.target.value)} required className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="age" className="block font-semibold mb-2">Age</label>
                <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="gender" className="block font-semibold mb-2">Gender</label>
                <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required className="w-full px-4 py-2 border rounded-md">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                </div>
                <div className="mb-4">
                <label htmlFor="location" className="block font-semibold mb-2">Location</label>
                <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="symptoms" className="block font-semibold mb-2">Symptoms</label>
                <textarea id="symptoms" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} required className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="diagnosis" className="block font-semibold mb-2">Diagnosis</label>
                <textarea id="diagnosis" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} required className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="treatment" className="block font-semibold mb-2">Treatment</label>
                <textarea id="treatment" value={treatment} onChange={(e) => setTreatment(e.target.value)} required className="w-full px-4 py-2 border rounded-md" />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
            </form>
        </div>
    </div>
  );
};

export default ReportPage;
