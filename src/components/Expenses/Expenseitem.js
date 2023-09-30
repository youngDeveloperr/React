import Card from "../UI/Card";
import "./Expenseitem.css";
import DateUi from "./dateui";

function ExpenseItem() {
  const expenseDate = new Date(2023, 1, 30);
  const expenseTitle = "PayLater";
  const expenseAmount = 4999;

  return (
    <Card className="expense-item">
      <DateUi date={expenseDate}></DateUi>
      <div className="expense-item-desc">
        <h2>{expenseTitle}</h2>
        <div className="expense-item-price">{expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
