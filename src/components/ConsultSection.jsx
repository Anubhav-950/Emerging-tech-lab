const consults = [
  "Period doubts or Pregnancy",
  "Acne, pimple or skin issues",
  "Performance issues in bed",
  "Cold, cough or fever",
  "Child not feeling well",
  "Depression or anxiety",
];

const ConsultSection = () => {
  return (
    <section className="consult">
      <h2>Consult top doctors online for any health concern</h2>
      <div className="consult-grid">
        {consults.map((c, i) => (
          <div key={i} className="consult-card">
            <p>{c}</p>
            <span>CONSULT NOW</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultSection;
