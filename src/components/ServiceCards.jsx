const services = [
  {
    title: "Instant Video Consultation",
    desc: "Connect within 60 seconds",
  },
  {
    title: "Find Doctors Near You",
    desc: "Confirmed appointments",
  },
  {
    title: "Lab Tests",
    desc: "Safe and trusted lab tests",
  },
  {
    title: "Surgeries",
    desc: "Safe and trusted surgery centers",
  },
];

const ServiceCards = () => {
  return (
    <div className="services">
      {services.map((s, i) => (
        <div key={i} className="service-card">
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
