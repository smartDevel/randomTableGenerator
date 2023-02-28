/* eslint-disable no-plusplus */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */

function generateRandomSheetData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Check if the sheet is empty
  if (!isSheetEmpty(sheet)) {
    // If not, prompt the user to continue or cancel
    var response = Browser.msgBox(
      "Sheet not empty",
      "The sheet already contains data. Do you want to continue and overwrite it?",
      Browser.Buttons.YES_NO
    );
    if (response == "no") {
      return; // Stop the function if the user cancels
    }
    // Otherwise, clear the sheet before generating new data
    sheet.clear();
  }

  // Prompt the user for the number of rows and columns
  var numRows = Browser.inputBox(
    "Enter the number of rows:",
    Browser.Buttons.OK_CANCEL
  );
  if (numRows == "cancel") {
    return; // Stop the function if the user cancels
  }
  var numColumns = Browser.inputBox(
    "Enter the number of columns:",
    Browser.Buttons.OK_CANCEL
  );
  if (numColumns == "cancel") {
    return; // Stop the function if the user cancels
  }

  // Define an array of possible header titles
  const headerTitles = ["ID", "Name", "Age", "Email", "Phone", "Address"];

  // Generate the header row
  const headerRow = [];
  for (let i = 0; i < numColumns; i++) {
    headerRow.push(
      headerTitles[Math.floor(Math.random() * headerTitles.length)]
    );
  }

  // Generate the data rows
  const data = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numColumns; j++) {
      const randomValue =
        Math.random() < 0.5 ? generateRandomString() : generateRandomNumber();
      row.push(randomValue);
    }
    data.push(row);
  }

  // Write the header and data to the sheet
  sheet.getRange(1, 1, 1, numColumns).setValues([headerRow]);
  sheet.getRange(2, 1, numRows, numColumns).setValues(data);
}
