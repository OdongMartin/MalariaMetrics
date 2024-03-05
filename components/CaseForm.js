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
  const [reportingFacility, setreportingFacility] = useState('');

  const handleSubmit = async (event) => {
    console.log('handle submit called')
    event.preventDefault();
    //perform validation and submit data to backend 
    try {

      const response = await fetch('/api/malaria-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          reportingFacility,
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
    setreportingFacility('');
    setPatientName('');
    setAge('');
    setGender('');
    setLocation('');
    setSymptoms('');
    setDiagnosis('');
    setTreatment('');
  };

  return (
    <div className="container mx-auto flex justify-center pt-2 px-4 w-full">
        <div>
            <h1 className="text-2xl font-bold mb-4 ml-12">Report Malaria Case</h1>
            <div className=' md:col-span-2 relative md:h-[70vh] h-[50vh] m-4 md:w-[80vw] w-auto md:m-8 p-4 md:border rounded-lg md:bg-gray-300'
              // style={{
              //   width: "1080px",
              //   height: "500px",
              // //   padding: "20px",
              // //   cursor: "pointer",
              // }}
              >
              <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-8 gap-8 py-4'>
                  <div className='col-span-3'>
                    <div className="mb-4">
                      <label htmlFor="reportingFacility" className="block font-semibold mb-2">Reporting Facility</label>
                      <input type="text" id="reportingFacility" value={reportingFacility} onChange={(e) => setreportingFacility(e.target.value)} required className="w-full px-4 py-2 border rounded-md" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="patientName" className="block font-semibold mb-2">Patient Name/ID</label>
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
                  </div>

                  <div className='col-span-3'>
                    <div className="mb-4">
                      <label htmlFor="location" className="block font-semibold mb-2">Location</label>
                      <select type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required className="w-full px-4 py-2 border rounded-md">
                      <option value="">Select District</option>
                        <option value="Abim">Abim</option>
                        <option value="Adjumani">Adjumani</option>
                        <option value="Agago">Agago</option>
                        <option value="Alebtong">Alebtong</option>
                        <option value="Amolatar">Amolatar</option>
                        <option value="Amudat">Amudat</option>
                        <option value="Amuria">Amuria</option>
                        <option value="Amuru">Amuru</option>
                        <option value="Apac">Apac</option>
                        <option value="Arua">Arua</option>
                        <option value="Budaka">Budaka</option>
                        <option value="Bududa">Bududa</option>
                        <option value="Bugiri">Bugiri</option>
                        <option value="Buikwe">Buikwe</option>
                        <option value="Bukedea">Bukedea</option>
                        <option value="Bukomansimbi">Bukomansimbi</option>
                        <option value="Bukwo">Bukwo</option>
                        <option value="Bulambuli">Bulambuli</option>
                        <option value="Buliisa">Buliisa</option>
                        <option value="Bundibugyo">Bundibugyo</option>
                        <option value="Bunyangabu">Bunyangabu</option>
                        <option value="Bushenyi">Bushenyi</option>
                        <option value="Busia">Busia</option>
                        <option value="Butaleja">Butaleja</option>
                        <option value="Butambala">Butambala</option>
                        <option value="Butebo">Butebo</option>
                        <option value="Buvuma">Buvuma</option>
                        <option value="Buyende">Buyende</option>
                        <option value="Dokolo">Dokolo</option>
                        <option value="Gomba">Gomba</option>
                        <option value="Gulu">Gulu</option>
                        <option value="Hoima">Hoima</option>
                        <option value="Ibanda">Ibanda</option>
                        <option value="Iganga">Iganga</option>
                        <option value="Isingiro">Isingiro</option>
                        <option value="Jinja">Jinja</option>
                        <option value="Kaabong">Kaabong</option>
                        <option value="Kabale">Kabale</option>
                        <option value="Kabarole">Kabarole</option>
                        <option value="Kaberamaido">Kaberamaido</option>
                        <option value="Kagadi">Kagadi</option>
                        <option value="Kagwe">Kagwe</option>
                        <option value="Kakumiro">Kakumiro</option>
                        <option value="Kalangala">Kalangala</option>
                        <option value="Kaliro">Kaliro</option>
                        <option value="Kalungu">Kalungu</option>
                        <option value="Kampala">Kampala</option>
                        <option value="Kamuli">Kamuli</option>
                        <option value="Kamwenge">Kamwenge</option>
                        <option value="Kanungu">Kanungu</option>
                        <option value="Kapchorwa">Kapchorwa</option>
                        <option value="Kasese">Kasese</option>
                        <option value="Katakwi">Katakwi</option>
                        <option value="Kayunga">Kayunga</option>
                        <option value="Kibaale">Kibaale</option>
                        <option value="Kiboga">Kiboga</option>
                        <option value="Kikuube">Kikuube</option>
                        <option value="Kiruhura">Kiruhura</option>
                        <option value="Kisoro">Kisoro</option>
                        <option value="Kitagwenda">Kitagwenda</option>
                        <option value="Kitgum">Kitgum</option>
                        <option value="Koboko">Koboko</option>
                        <option value="Kole">Kole</option>
                        <option value="Kotido">Kotido</option>
                        <option value="Kumi">Kumi</option>
                        <option value="Kwania">Kwania</option>
                        <option value="Kyankwanzi">Kyankwanzi</option>
                        <option value="Kyegegwa">Kyegegwa</option>
                        <option value="Kyenjojo">Kyenjojo</option>
                        <option value="Kyotera">Kyotera</option>
                        <option value="Lamwo">Lamwo</option>
                        <option value="Lira">Lira</option>
                        <option value="Luuka">Luuka</option>
                        <option value="Luwero">Luwero</option>
                        <option value="Lwengo">Lwengo</option>
                        <option value="Lyantonde">Lyantonde</option>
                        <option value="Manafwa">Manafwa</option>
                        <option value="Maracha">Maracha</option>
                        <option value="Masaka">Masaka</option>
                        <option value="Masindi">Masindi</option>
                        <option value="Mayuge">Mayuge</option>
                        <option value="Mbale">Mbale</option>
                        <option value="Mbarara">Mbarara</option>
                        <option value="Mitooma">Mitooma</option>
                        <option value="Mityana">Mityana</option>
                        <option value="Moroto">Moroto</option>
                        <option value="Moyo">Moyo</option>
                        <option value="Mpigi">Mpigi</option>
                        <option value="Mubende">Mubende</option>
                        <option value="Mukono">Mukono</option>
                        <option value="Nakapiripirit">Nakapiripirit</option>
                        <option value="Nakaseke">Nakaseke</option>
                        <option value="Nakasongola">Nakasongola</option>
                        <option value="Namayingo">Namayingo</option>
                        <option value="Namisindwa">Namisindwa</option>
                        <option value="Namutumba">Namutumba</option>
                        <option value="Napak">Napak</option>
                        <option value="Nebbi">Nebbi</option>
                        <option value="Ngora">Ngora</option>
                        <option value="Ntoroko">Ntoroko</option>
                        <option value="Ntungamo">Ntungamo</option>
                        <option value="Nwoya">Nwoya</option>
                        <option value="Otuke">Otuke</option>
                        <option value="Oyam">Oyam</option>
                        <option value="Pader">Pader</option>
                        <option value="Pallisa">Pallisa</option>
                        <option value="Rakai">Rakai</option>
                        <option value="Rubanda">Rubanda</option>
                        <option value="Rubirizi">Rubirizi</option>
                        <option value="Rukiga">Rukiga</option>
                        <option value="Rukungiri">Rukungiri</option>
                        <option value="Rwampara">Rwampara</option>
                        <option value="Serere">Serere</option>
                        <option value="Sheema">Sheema</option>
                        <option value="Sironko">Sironko</option>
                        <option value="Soroti">Soroti</option>
                        <option value="Ssembabule">Ssembabule</option>
                        <option value="Tororo">Tororo</option>
                        <option value="Wakiso">Wakiso</option>
                        <option value="Yumbe">Yumbe</option>
                        <option value="Zombo">Zombo</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="symptoms" className="block font-semibold mb-2">Symptoms</label>
                      <textarea id="symptoms" rows={4} value={symptoms} onChange={(e) => setSymptoms(e.target.value)} required className="w-full px-4 py-2 border rounded-md" />
                    </div>
                      <div className="mb-4">
                      <label htmlFor="diagnosis" className="block font-semibold mb-2">Diagnosis</label>
                      <select id="diagnosis" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} required className="w-full px-4 py-2 border rounded-md">
                      <option value="">Select Diagnosis</option>
                          <option value="negative">Negative</option>
                          <option value="positive">Positive</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-span-2'>
                    <div className="mb-4">
                      <label htmlFor="treatment" className="block font-semibold mb-2">Treatment</label>
                      <textarea id="treatment"  rows={9} value={treatment} onChange={(e) => setTreatment(e.target.value)} required className="w-full px-4 py-2 border rounded-md" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                  </div>
                </div>
              </form>
            </div>
        </div>
    </div>
  );
};

export default ReportPage;
