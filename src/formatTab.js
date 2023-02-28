
function formatTab() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const lastColumn = sheet.getLastColumn();
  
    // const headers = sheet.getRange('A1:G1');
    const headers = sheet.getRange(1, 1, 1, lastColumn);
    const table = sheet.getDataRange();
  
    headers.setFontColor('white');
    headers.setFontWeight('bold');
    headers.setBackground('#52489C');
  
    table.setFontFamily('Roboto');
    table.setHorizontalAlignment('center');
    table.setBorder(true, true, true, true, false, true, '#52489C', SpreadsheetApp.BorderStyle.SOLID);
    if (!table.getFilter()) {
      table.createFilter();
    } else {
      table.getFilter().remove();
      table.createFilter();
    }
    Logger.log('Hello World from VS Code 😀');
  }
  
