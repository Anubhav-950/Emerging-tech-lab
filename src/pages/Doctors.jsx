import { useState } from "react";
import DoctorCard from "../components/DoctorCard";
import SearchBar from "../components/SearchBar";

const Doctors = () => {
  const [query, setQuery] = useState("");

  const doctors = [
    { name: "Dr. Amit Sharma", specialization: "Cardiologist", experience: 10 },
    { name: "Dr. Neha Verma", specialization: "Dermatologist", experience: 7 },
    { name: "Dr. Rahul Singh", specialization: "Orthopedic", experience: 12 }
  ];

  const filteredDoctors = doctors.filter(d =>
    d.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page">
      <SearchBar setQuery={setQuery} />
      <div className="doctor-list">
        {filteredDoctors.map((doc, index) => (
          <DoctorCard key={index} doctor={doc} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
