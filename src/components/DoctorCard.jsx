const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p>Experience: {doctor.experience} years</p>
      <button>Book Appointment</button>
    </div>
  );
};

export default DoctorCard;
