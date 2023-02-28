function onOpen() {
    const ui = SpreadsheetApp.getUi();
    // eslint-disable-next-line no-undef
    ui.createMenu('Tabellen-Formatierung')
      .addItem('Tabelle formatieren', 'formatTab')
      .addItem('Tabellendaten generieren und formatieren', 'createRandomTable')
      .addToUi();
  }