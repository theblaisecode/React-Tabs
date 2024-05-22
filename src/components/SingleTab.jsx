export default function SingleTab({
  id,
  company,
  title,
  dates,
  duties,
  toggleTabs,
}) {
  return (
    <div className={toggleTabs} key={id}>
      <div className="contentTop">
        <h3 className="title">{title}</h3>
        <span className="company">{company}</span>
        <p className="date">{dates}</p>
      </div>

      <div className="contentBottom">
        {duties.map((item) => {
          return (
            <div className="duty" key={item}>
              <i className="fa-solid fa-angles-right"></i>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
