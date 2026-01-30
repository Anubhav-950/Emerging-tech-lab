const Appointment = () => {
  return (
    <div className="page">
      <h2>Book Appointment</h2>
      <form className="form">
        <input type="text" placeholder="Patient Name" required />
        <input type="date" required />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default Appointment;
