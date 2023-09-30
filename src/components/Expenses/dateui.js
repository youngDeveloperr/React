import "./dateui.css";

function DateUi(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{day}</div>
      <div className="expense-date-day">{year}</div>
    </div>
  );
}

export default DateUi;
