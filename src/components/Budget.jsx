import { useState } from "react"
import "../styles/Budget.css";

export default function Budget() {
  const [categories] = useState([
    { id: 1, name: "Rent", budgeted: 1000, spent: 950 },
    { id: 2, name: "Groceries", budgeted: 400, spent: 420 },
    { id: 3, name: "Entertainment", budgeted: 150, spent: 90 }
  ])

  // Bank account data (updated)
  const account = {
    current: 2500,
    buffer: 1200,
    monthlyExpenses: 800,
    ccPayments: 400,
    forSavings: 150,
    discretionary: 100
  }

  // Calculate remaining = sum of buffer through discretionary
  const remaining =
    account.buffer +
    account.monthlyExpenses +
    account.ccPayments +
    account.forSavings +
    account.discretionary

  // Credit card data
  const creditCards = [
    {
      id: 1,
      name: "Chase Freedom",
      preBalance: 1200,
      pendingAmount: 150,
      payment: 200,
      actualBalance: 1150
    },
    {
      id: 2,
      name: "Capital One",
      preBalance: 600,
      pendingAmount: 75,
      payment: 100,
      actualBalance: 575
    },
    {
      id: 3,
      name: "Amex Gold",
      preBalance: 2500,
      pendingAmount: 120,
      payment: 300,
      actualBalance: 2320
    }
  ]

    return (
    <div className="budget-layout">

      {/* First column: Bank account info */}
      <div className="card bank-account-column">
        <div className="card-body">
          <h2 className="bank-title">Checking Account</h2>

          <div className="bank-info-box">
            <div className="bank-info-grid">
              <div className="bank-row bold">
                <span className="bank-amount">${account.current}</span>
                <span className="bank-description">Current Amount</span>
              </div>
              <div className="bank-row">
                <span className="bank-amount">${account.buffer}</span>
                <span className="bank-description">Buffer</span>
              </div>
              <div className="bank-row">
                <span className="bank-amount">${account.monthlyExpenses}</span>
                <span className="bank-description">Cash for Monthly Expenses</span>
              </div>
              <div className="bank-row">
                <span className="bank-amount">${account.ccPayments}</span>
                <span className="bank-description">CC Payments</span>
              </div>
              <div className="bank-row">
                <span className="bank-amount">${account.forSavings}</span>
                <span className="bank-description">For Savings</span>
              </div>
              <div className="bank-row">
                <span className="bank-amount">${account.discretionary}</span>
                <span className="bank-description">Discretionary</span>
              </div>
              <div className="bank-row bold">
                <span className="bank-amount">${remaining}</span>
                <span className="bank-description">Amount Remaining</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second column: Credit Cards */}
      <div className="card credit-card-column">
        <div className="card-body">
          <h1 className="title">Credit Cards</h1>
          <div className="credit-card-grid">
            {creditCards.map((card) => (
              <div key={card.id} className="credit-card-item">
                <h2 className="subtitle">{card.name}</h2>
                <div className="credit-card-info">
                  <div className="cc-row">
                    <span className="cc-amount">${card.preBalance}</span>
                    <span className="cc-description">Pre-Balance</span>
                  </div>
                  <div className="cc-row">
                    <span className="cc-amount">${card.pendingAmount}</span>
                    <span className="cc-description">Pending Amount</span>
                  </div>
                  <div className="cc-row">
                    <span className="cc-amount">${card.payment}</span>
                    <span className="cc-description">Payment</span>
                  </div>
                  <div className="cc-row bold">
                    <span className="cc-amount">${card.actualBalance}</span>
                    <span className="cc-description">Actual Balance</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third column: My Expenses & Cash for Monthly Expenses */}
      <div className="my-expenses-cash-remaining-column">

        {/* --- My Expenses Card --- */}
        <div className="card my-expenses-card">
          <div className="card-body">
            <h1 className="title">My Expenses</h1>
            
            {/* --- Fixed Expenses Section --- */}
            <h2 className="subtitle">Fixed Expenses</h2>
            <div className="fixed-expenses-box">
              <div className="expenses-grid">
                <div className="expense-row">
                  <span className="expense-amount">$1000</span>
                  <span className="expense-description">Rent</span>
                </div>
                <div className="expense-row">
                  <span className="expense-amount">$120</span>
                  <span className="expense-description">Internet</span>
                </div>
                <div className="expense-row">
                  <span className="expense-amount">$80</span>
                  <span className="expense-description">Utilities</span>
                </div>
              </div>
              <div className="expense-total">
                <span className="expense-amount bold">$1200</span>
                <span className="expense-description bold">Total Fixed Expenses</span>
              </div>
            </div>

            {/* --- Variable Expenses Section --- */}
            <h2 className="subtitle">Variable Expenses</h2>
            <div className="variable-expenses-box">
              <div className="expenses-grid">
                <div className="expense-row">
                  <span className="expense-amount">$300</span>
                  <span className="expense-description">Groceries</span>
                </div>
                <div className="expense-row">
                  <span className="expense-amount">$90</span>
                  <span className="expense-description">Gas</span>
                </div>
                <div className="expense-row">
                  <span className="expense-amount">$60</span>
                  <span className="expense-description">Dining Out</span>
                </div>
              </div>
              <div className="expense-total">
                <span className="expense-amount bold">$450</span>
                <span className="expense-description bold">Total Variable Expenses</span>
              </div>
            </div>

            {/* --- Combined Total --- */}
            <div className="overall-expenses-total">
              <span className="expense-amount bold">$1650</span>
              <span className="expense-description bold">Total Expenses</span>
            </div>
          </div>
        </div>

        {/* --- Cash for Monthly Expenses Card --- */}
        <div className="card cash-for-monthly-expenses">
          <div className="card-body">
            <h1 className="title">Cash for Monthly Expenses</h1>

            <div className="cash-monthly-box">
              <div className="expenses-grid">
                {/* First group: weekly allocations */}
                <div className="expense-row">
                  <span className="expense-amount">$400</span>
                  <span className="expense-description">Week 1</span>
                </div>
                <div className="expense-row">
                  <span className="expense-amount">$350</span>
                  <span className="expense-description">Week 2</span>
                </div>
                <div className="expense-row">
                  <span className="expense-amount">$300</span>
                  <span className="expense-description">Week 3</span>
                </div>
                <div className="expense-row">
                  <span className="expense-amount">$300</span>
                  <span className="expense-description">Week 4</span>
                </div>
              </div>

              {/* Divider before summary */}
              <div className="expense-divider"></div>

              {/* Bottom two rows (Sum Spent + Remaining) */}
              <div className="expenses-grid">
                <div className="expense-row">
                  <span className="expense-amount">$330</span>
                  <span className="expense-description">Sum Spent</span>
                </div>
                <div className="expense-row bold">
                  <span className="expense-amount">$1020</span>
                  <span className="expense-description">Remaining for Expenses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth column: Payed expenses  */}
      <div className="card payed-expenses-column">
        <div className="card-body">
          <h1 className="title">Paid Expenses</h1>

          <div className="payed-expenses-box">
            <div className="expenses-grid">
              <div className="expense-row">
                <span className="expense-amount">$60</span>
                <span className="expense-description">Groceries</span>
              </div>
              <div className="expense-row">
                <span className="expense-amount">$120</span>
                <span className="expense-description">Utilities</span>
              </div>
              <div className="expense-row">
                <span className="expense-amount">$45</span>
                <span className="expense-description">Gas</span>
              </div>
              <div className="expense-row">
                <span className="expense-amount">$25</span>
                <span className="expense-description">Coffee Shop</span>
              </div>
              <div className="expense-row">
                <span className="expense-amount">$80</span>
                <span className="expense-description">Phone Bill</span>
              </div>
            </div>

            <div className="expense-total">
              <span className="expense-amount bold">$330</span>
              <span className="expense-description bold">Sum Spent</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Column: Savings & Discretionary Spending */}
      <div className="savings-discretionary-column">
        
        {/* --- Savings Card --- */}
        <div className="card savings-card">
          <div className="card-body">
            <h1 className="title">Savings</h1>
            <div className="savings-box">
              <div className="expenses-grid">
                <div className="expense-row">
                  <span className="expense-amount">$150</span>
                  <span className="expense-description">Emergency Fund</span>
                </div>
                <div className="expense-row">
                  <span className="expense-amount">$200</span>
                  <span className="expense-description">Vacation Savings</span>
                </div>
                <div className="expense-row">
                  <span className="expense-amount">$100</span>
                  <span className="expense-description">Car Maintenance</span>
                </div>
              </div>

              <div className="expense-total">
                <span className="expense-amount bold">$450</span>
                <span className="expense-description bold">Send to Savings</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Discretionary Spending Card --- */}
        <div className="card discretionary-card">
          <div className="card-body">
            <h1 className="title">Discretionary Spending</h1>
            <div className="discretionary-box">
              <div className="expenses-grid">
                <div className="expense-row">
                  <span className="expense-amount">$40</span>
                  <span className="expense-description">Dining Out</span>
                </div>
                <div className="expense-row">
                  <span className="expense-amount">$60</span>
                  <span className="expense-description">Movies & Entertainment</span>
                </div>
                <div className="expense-row">
                  <span className="expense-amount">$30</span>
                  <span className="expense-description">Coffee & Snacks</span>
                </div>
              </div>

              <div className="discretionary-summary">
                <div className="discretionary-line bold">
                  <span className="expense-amount">$200</span>
                  <span className="expense-description">Target Spending</span>
                </div>
                <div className="discretionary-line bold remaining">
                  <span className="expense-amount">$70</span>
                  <span className="expense-description">Remaining Funds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}