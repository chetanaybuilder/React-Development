// Developer: Chetan Ay Builder
// Project: React-01-Money-Calculator

function ExpenseList() {
  const food = 2000;
  const transport = 1000;
  const shopping = 1500;

  return (
    <section id="expense">
      <h2>Expenses</h2>

      <p>Food — ₹{food}</p>
      <p>Transport — ₹{transport}</p>
      <p>Shopping — ₹{shopping}</p>
    </section>
  );
}

export default ExpenseList;