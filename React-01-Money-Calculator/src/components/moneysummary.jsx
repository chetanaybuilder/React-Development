// Developer: Chetan Ay Builder
// Project: React-01-Money-Calculator

function MoneySummary() {
  const income = 10000;
  const food = 2000;
  const transport = 1000;
  const shopping = 1500;

  const totalSpent = food + transport + shopping;
  const remaining = income - totalSpent;

  return (
    <section className="money-box">
      <div>
        <span>Income</span>
        <strong>₹{income}</strong>
      </div>

      <div>
        <span>Spent</span>
        <strong>₹{totalSpent}</strong>
      </div>

      <div>
        <span>Remaining</span>
        <strong>₹{remaining}</strong>
      </div>
    </section>
  );
}

export default MoneySummary;