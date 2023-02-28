function isSheetEmpty(sheet) {
    var range = sheet.getDataRange();
    var values = range.getValues();
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < values[i].length; j++) {
        if (values[i][j] != "") {
          return false; // If any cell is not empty, the sheet is not empty
        }
      }
    }
    return true; // If all cells are empty, the sheet is empty
  }