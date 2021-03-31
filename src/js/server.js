const express = require('express');
const path = require('path');

const HOME_DIR = path.join(__dirname, '..', '..');
const DIST_DIR = path.join(HOME_DIR, '/dist');
const HTML_FILE = path.join(HOME_DIR, 'index.html');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static(DIST_DIR));
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log(`
    HOME_DIR: ${HOME_DIR}\n
    DIST_DIR: ${DIST_DIR}\n
    HTML_FILE: ${HTML_FILE}\n
    PORT: ${PORT}
  `);
});
