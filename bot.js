const { chromium } = require("playwright");
// Loads Chromium, a Chrome automation tool.

const question = process.argv.slice(2).join(" ");
/*
 process.argv means [
  "node",
  "bot.js",
  "question that the user inputs"
 ]
 slice(2).join(" ") removes the first two elements in the array and puts the rest together into a string.
*/
async function main() {
   console.log("AI Prompter is starting...");

   if (!question) {
      console.log('Usage: node bot.js "your question here"');
      process.exit(1);
   }

   console.log("Your question is:", question);

   const browser = await chromium.launchPersistentContext("./chrome-profile", {
      channel: "chrome", // uses real Google Chrome
      headless: false, // show the browser window
   });
   const page = await browser.newPage();
   await page.goto("https://chatgpt.com/");
   console.log("Chrome opened ChatGPT.");
}

main();
