const path = require('path');

module.exports = {
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',

    format: 'A4',
    margin: {
        top: '20mm',
        right: '20mm',
        bottom: '20mm',
        left: '20mm'
    },
    printBackground: true,

    waitForTimeout: 3000,

    routePatterns: [
        '/**',
        '!/',
        '!/index.html',
        '!/manual.html',
        '!/account-binding-tutorial.html',
        '!/404.html',
        '!/login.html'
    ],

    outDir: './dist-pdf',

    outFile: '融禹使用手册.pdf',

    puppeteerLaunchOptions: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: 'new'
    },

    customUserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 ViridianExportPDF'
}; 