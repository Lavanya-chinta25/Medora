import React, { useState, useRef } from "react";
import doctorsData from "./doctordata.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DoctorsPage = () => {
  const [pincode, setPincode] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null); // State to hold selected doctor for profile view
  const resultsRef = useRef(null);

  const specialties = [
    { name: "General Surgeon", hint: "Performs surgeries on various parts of the body." },
    { name: "Ophthalmologist", hint: "Specializes in eye care and surgery." },
    { name: "Cardiologist", hint: "Focuses on heart and cardiovascular health." },
    { name: "Dermatologist", hint: "Treats skin, hair, and nail disorders." },
    { name: "Gynecologist", hint: "Specializes in female reproductive health." },
    { name: "Pediatrician", hint: "Provides medical care for children." },
    { name: "Psychiatrist", hint: "Diagnoses and treats mental health disorders." },
    { name: "Orthopedic Surgeon", hint: "Focuses on bone, joint, and musculoskeletal issues." },
    { name: "Gastroenterologist", hint: "Specializes in digestive system disorders." },
  ];

  const handleSearch = () => {
    const result = doctorsData.filter(
      (doctor) =>
        (doctor.pincode === pincode.trim() || pincode.trim() === "") &&
        (!selectedSpecialty || doctor.specialization === selectedSpecialty)
    );
    setFilteredDoctors(result);
    setShowAll(false);
  };

  const handleSpecialtyChange = (specialty) => {
    const newSelectedSpecialty =
      selectedSpecialty === specialty ? "" : specialty;
    setSelectedSpecialty(newSelectedSpecialty);

    const result = doctorsData.filter(
      (doctor) =>
        (doctor.pincode === pincode.trim() || pincode.trim() === "") &&
        (!newSelectedSpecialty || doctor.specialization === newSelectedSpecialty)
    );
    setFilteredDoctors(result);
    setShowAll(false);
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
    if (showAll && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayedDoctors = showAll
    ? filteredDoctors
    : filteredDoctors.slice(0, 3);

  const openProfileModal = (doctor) => {
    setSelectedDoctor(doctor); // Set the selected doctor to display in the modal
  };

  const closeProfileModal = () => {
    setSelectedDoctor(null); // Close the modal by setting selectedDoctor to null
  };

  return (
    <>
      {!selectedDoctor && <Navbar />} {/* Render Navbar only when no doctor is selected */}
      <div className="p-6 mt-20 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#185a79]">
          Find Doctors Near You
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Enter your location"
            className="p-3 border border-gray-300 rounded-md w-80 focus:ring-2 focus:ring-[#185a79] outline-none"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="ml-3 px-4 py-2 bg-[#185a79] text-white rounded-md hover:bg-[#153d55]"
          >
            Search
          </button>
        </div>

        {/* Introductory Paragraph */}
        <p className="text-center text-gray-700 mb-4">
          Select a specialty to narrow down your search and find the right doctor for your needs.
        </p>

        {/* Specialties Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {specialties.map((specialty) => (
            <div
              key={specialty.name}
              className={`p-4 border rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-transform transform hover:scale-105 ${
                selectedSpecialty === specialty.name
                  ? "bg-[#185a79] text-white"
                  : "bg-white text-gray-800"
              }`}
              title={specialty.hint}
              onClick={() => handleSpecialtyChange(specialty.name)}
            >
              <p className="text-center font-medium">{specialty.name}</p>
            </div>
          ))}
        </div>

        {/* Doctor Cards */} 
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          ref={resultsRef}
        >
          {displayedDoctors.length > 0 ? (
            displayedDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="h-40 bg-gray-300 flex items-center justify-center text-gray-600">
                  <img
                    src={doctor.imageUrl} // Ensure image URL exists in the doctor data
                    alt={doctor.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {doctor.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {doctor.specialization}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">{doctor.address}</p>
                  <p className="text-sm text-yellow-600 mt-2">
                    ⭐ {doctor.rating} ({doctor.reviews} reviews)
                  </p>
                  <p className="text-sm text-gray-700 mt-4">
                    <strong>Contact:</strong> {doctor.contact}
                  </p>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => openProfileModal(doctor)}
                      className="px-3 py-2 bg-[#185a79] text-white rounded-md hover:bg-[#153d55]"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No doctors found for the entered criteria.
            </p>
          )}
        </div>

        {/* Toggle More/Less Button */}
        {filteredDoctors.length > 3 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={toggleShowAll}
              className="px-4 py-2 bg-[#185a79] text-white rounded-md hover:bg-[#153d55]"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        {/* Modal for Profile */}
        {selectedDoctor && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={closeProfileModal}
          >
            <div
              className="bg-white p-6 rounded-lg w-11/12 md:w-1/2"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{selectedDoctor.name}</h2>
                <button
                  onClick={closeProfileModal}
                  className="text-xl text-gray-500 hover:text-gray-700"
                >
                  &#10005;
                </button>
              </div>

              {/* Modal Content: Image and Details */}
              <div className="flex mt-4">
                {/* Doctor Image Placeholder */}
                <div className="w-1/3 bg-[#153d55] h-40 rounded-lg"></div>

                {/* Doctor Details */}
                <div className="w-2/3 pl-6">
                  <p className="mt-2 font-medium">{selectedDoctor.specialization}</p>
                  <p className="mt-2">{selectedDoctor.address}</p>
                  <p className="mt-2 text-yellow-600">
                    ⭐ {selectedDoctor.rating} ({selectedDoctor.reviews} reviews)
                  </p>
                  <p className="mt-2">
                    <span className="font-medium">Contact:</span> {selectedDoctor.contact}
                  </p>
                  <div className="mt-4">
                  <span className="font-medium">Experience:</span> {selectedDoctor.experience} years
                  </div>
                  <div className="mt-4">
                  <span className="font-medium">Fee:</span> ₹{selectedDoctor.fee}
                  </div>
                  <div className="mt-4">
                  <span className="font-medium">Hospital:</span> {selectedDoctor.hospital}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <Footer/>
          </>
  );
};

export default DoctorsPage;

