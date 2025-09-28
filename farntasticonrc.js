// .fantasticonrc.js
module.exports = {
    inputDir: './src/assets/icons/svg',      // پوشه‌ی svgها
    outputDir: './src/assets/icons/public',  // فایل‌های تولید شده (فونت، css، json، ...)
    fontTypes: ['ttf','woff','woff2'],
    assetTypes: ['css','json','html','ts'],
    name: 'icons',             // نام مجموعه فونت
    fontsUrl: '/icons/fonts',     // مسیر عمومی که فونت‌ها از آن سرو می‌شوند (در CSS تولیدی استفاده می‌شود)
    formatOptions: {
        json: { indent: 2 }
    }
};
