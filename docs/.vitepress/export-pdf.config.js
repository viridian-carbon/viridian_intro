const path = require('path');

module.exports = {
    // 使用 Edge 浏览器
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',

    // PDF 选项
    format: 'A4',
    margin: {
        top: '20mm',
        right: '20mm',
        bottom: '20mm',
        left: '20mm'
    },
    printBackground: true,

    // 等待时间，确保页面完全加载
    waitForTimeout: 3000,

    // 排除的页面
    exclude: [
        '/404'
    ],

    // 输出目录
    outDir: './dist-pdf',

    // 文件名格式
    outFile: '融禹使用手册.pdf'
}; 