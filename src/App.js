
import "./App.css";
import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/Expenseitem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "EMI",
      amount: 3000,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "PayLater", amount: 4999, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Savings",
      amount: 5000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "food",
      amount: 3000,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Fuel",
      amount: 1500,
      date: new Date(2021, 6, 12),
    },
  ];
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default App;
