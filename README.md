# ExpensesApp
- https://unx-robert.github.io/ExpensesApp/

# Docs
- Worked with states to keep track of:
  - to keep track of the expenses data
  - to keep track of the input fields (title, amount, date) changes
  - to check what the new expense component should render(initial state of expanded is false so it will render Add new expense button, if you press the button the state becomes true and it will render a form that saves the data when the add expense button is pressed and changes the state back to false when the cancel button is pressed.)
  - to check by what year the data should be filtered
  - to check the state of the expenses list, if the button see expenses is pressed the list is rendered and a hide button as well that set back the state to the initial value when is pressed
- used conditional rendering to render diferent contents in depending on specific states
- worked with events to achieve the state functionality
