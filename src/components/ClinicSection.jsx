const clinics = [
  {
    title: "Dentist",
    desc: "Teething troubles? Schedule a dental checkup",
  },
  {
    title: "Gynecologist/Obstetrician",
    desc: "Women's health & pregnancy care",
  },
  {
    title: "Dietitian/Nutrition",
    desc: "Eating right & weight management",
  },
  {
    title: "Physiotherapist",
    desc: "Muscle pain or injury treatment",
  },
];

const ClinicSection = () => {
  return (
    <section className="clinic">
      <h2>Book an appointment for an in-clinic consultation</h2>
      <div className="clinic-grid">
        {clinics.map((c, i) => (
          <div key={i} className="clinic-card">
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClinicSection;
