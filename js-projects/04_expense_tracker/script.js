// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  // Initialize expenses and total amount
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();

  // Render initial expenses
  renderExpenses();

  // Handle form submission
  expenseForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = expenseNameInput.value.trim();
      const amount = parseFloat(expenseAmountInput.value.trim());

      if (name !== "" && !isNaN(amount) && amount > 0) {
          const newExpense = {
              id: Date.now(),
              name, // Shorthand for name: name
              amount // Shorthand for amount: amount
          };
          
          expenses.push(newExpense);
          saveExpensesToLocal();
          renderExpenses();
          updateTotal();

          // Clear the input fields
          expenseNameInput.value = "";
          expenseAmountInput.value = "";
      }
  });

  // Render expenses in the list
  function renderExpenses() {
      expenseList.innerHTML = "";
      expenses.forEach(expense => {
          const li = document.createElement('li');
          li.innerHTML = `
              ${expense.name} -- $${expense.amount}
              <button data-id="${expense.id}">Delete</button>
          `;
          expenseList.appendChild(li);
      });
  }

  // Calculate total expense amount
  function calculateTotal() {
      return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  // Save expenses to localStorage
  function saveExpensesToLocal() {
      localStorage.setItem('expenses', JSON.stringify(expenses));
  }

  // Update total amount display
  function updateTotal() {
      totalAmount = calculateTotal();
      totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  // Handle delete button click in the expense list
  expenseList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
          const expenseId = parseInt(e.target.getAttribute('data-id'));
          expenses = expenses.filter(expense => expense.id !== expenseId);
          saveExpensesToLocal();
          renderExpenses();
          updateTotal();
      }
  });
});




/*
Code Explanation:
DOMContentLoaded Event: Ensures the script runs only after the DOM is fully loaded.
Expense Management:
Expenses are stored in localStorage to retain data across sessions.
Each expense has a unique id, name, and amount.
Form Handling:
The form validates input to ensure a valid name and positive number for the amount.
On successful submission, the new expense is added, and the list and total are updated.
Render Function:
Dynamically creates a list item (li) for each expense and appends it to the expense list.
Includes a delete button with the expense's id.
LocalStorage:
Saves and retrieves the expenses array to and from localStorage.
Delete Functionality:
Filters out the deleted expense based on its id.
Updates the localStorage and re-renders the list and total.
Next Steps:
Test the application to ensure it handles edge cases (e.g., invalid inputs).
Add styling to improve the user interface.
Consider additional features like editing an expense or categorizing expenses.
 */






























































// document.addEventListener("DOMContentLoaded", () => {
//   const expenseForm = document.getElementById("expense-form");
//   const expenseNameInput = document.getElementById("expense-name");
//   const expenseAmountInput = document.getElementById("expense-amount");
//   const expenseList = document.getElementById("expense-list");
//   const totalAmountDisplay = document.getElementById("total-amount");

//   let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
//   let totalAmount = calculateTotal();

//   renderExpenses();

//   expenseForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const name = expenseNameInput.value.trim();
//     const amount = parseFloat(expenseAmountInput.value.trim());

//     if (name !== "" && !isNaN(amount) && amount > 0) {
//       const newExpense = {
//         id: Date.now(),
//         name: name,
//         amount: amount,
//       };
//       expenses.push(newExpense);
//       saveExpensesTolocal();
//       renderExpenses();
//       updateTotal();

//       //clear input
//       expenseNameInput.value = "";
//       expenseAmountInput.value = "";
//     }
//   });

//   function renderExpenses() {
//     expenseList.innerHTML = "";
//     expenses.forEach((expense) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         ${expense.name} - $${expense.amount}
//         <button data-id="${expense.id}">Delete</button>
//         `;
//       expenseList.appendChild(li);
//     });
//   }

//   function calculateTotal() {
//     return expenses.reduce((sum, expense) => sum + expense.amount, 0);
//   }

//   function saveExpensesTolocal() {
//     localStorage.setItem("expenses", JSON.stringify(expenses));
//   }

//   function updateTotal() {
//     totalAmount = calculateTotal();
//     totalAmountDisplay.textContent = totalAmount.toFixed(2);
//   }

//   expenseList.addEventListener("click", (e) => {
//     if (e.target.tagName === "BUTTON") {
//       const expenseId = parseInt(e.target.getAttribute("data-id"));
//       expenses = expenses.filter((expense) => expense.id !== expenseId);

//       saveExpensesTolocal();
//       renderExpenses();
//       updateTotal();
//     }
//   });
// });
