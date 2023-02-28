# Random Table Data Generator for Google Sheets

This script generates random table data for a Google Sheets table of specified dimensions, with a header row and cells containing random strings and numbers. The script also checks whether the active sheet is empty before generating the table, and prompts the user to clear the sheet or cancel if it already contains data.

## How to Install

To install this script in your Google Sheets:

1. Open the Google Sheets document where you want to use the script.
2. From the top menu, click on `Tools > Script editor`. This will open a new tab with the Google Apps Script editor.
3. Copy and paste the code from `generateRandomSheetData.gs` file into the editor.
4. Save the script with a name of your choice.
5. Close the script editor tab and go back to your Google Sheets document.

## How to Use

To use the script:

1. Ensure that the sheet where you want to generate the table is active.
2. From the top menu, click on `Tools > Script manager`. This will open a dialog showing all your installed scripts.
3. Select the script you just installed and click `Run`.
4. The script will prompt you to enter the number of rows and columns for the table. Enter the values and click `OK`.
5. If the sheet already contains data, the script will prompt you to clear the sheet or cancel. Choose the appropriate option.
6. The script will generate a table with a header row and random data in the specified number of rows and columns.

## Function Reference

The script contains the following functions:

### `generateRandomSheetData()`

This function generates random table data for the active sheet, with the number of rows and columns specified by user input. The function checks whether the sheet is empty before generating the table, and prompts the user to clear the sheet or cancel if it already contains data.

### `isSheetEmpty(sheet)`

This function checks whether the specified sheet is empty, i.e., whether all its cells are empty.

### `generateRandomString()`

This function generates a random string of 5-10 characters, using uppercase and lowercase letters and digits.

### `generateRandomNumber()`

This function generates a random integer between 0 and 100.

## License

This script is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it as you wish.
