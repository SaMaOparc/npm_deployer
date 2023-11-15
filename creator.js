const fs = require('fs');
const { exec } = require('child_process');

exec('npm install @angular/cli@16.0.3 --save-dev', (error, stdout, stderr) => {
    if (error) {
        console.error(`Fehler: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Fehler: ${stderr}`);
        return;
    }
    console.log(`Paket @angular/cli erfolgreich geändert: ${stdout}`);
});

exec('npm run create', (error, stdout) => {

    console.log(`Paket deployer2000 erfolgreich installiert: ${stdout}`);
});
