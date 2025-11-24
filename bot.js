const puppeteer = require("puppeteer");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // Proxyium botları (15 tane)
    for (let i = 0; i < 15; i++) {
        const page = await browser.newPage();
        await page.goto("https://www.proxyium.com/", { waitUntil: "networkidle2" });
        await page.waitForSelector("#unique-btn-blue");

        await page.evaluate(() => {
            const input = document.querySelector("#unique-form-control");
            if (input) input.value = "https://globepixel.net/#d,0,0,16";
        });

        await page.click("#unique-btn-blue");
        console.log("✅ Proxyium Bot connected: " + (i + 1));

        await delay(1000); // 1 saniye bekle
    }

    // CroxyProxy botları (30 tane)
    for (let i = 0; i < 30; i++) {
        const page = await browser.newPage();
        await page.goto("https://www.croxyproxy.com/", { waitUntil: "networkidle2" });
        await page.waitForSelector("#requestSubmit");

        await page.evaluate(() => {
            const input = document.getElementById("url");
            if (input) input.value = "https://globepixel.net/#d,0,0,16";
        });

        await page.click("#requestSubmit");
        console.log("✅ CroxyProxy Bot connected: " + (i + 1));

        await delay(1000); // 1 saniye bekle
    }

    // Tarayıcıyı kapatmak istersen aşağıdaki satırı açabilirsin:
    // await browser.close();
})();
