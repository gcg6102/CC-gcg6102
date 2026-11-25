

/*
// 1. Load the JSON file before the sketch starts
function preload() {
  scrapedData = loadJSON("data.json"); //i changed the name of the file to data.json
} //this is to preload the scraped data from the JSON file I create via WEBMD google search
*/

let scrapedData;
let poem = "";

//using async instead to load the data and sync with the sketch
async function setup() {
  createCanvas(600, 800);
  background("cyan");

  // 1. Pause setup until the scraped WebMD JSON file is loaded
  scrapedData = await loadJSON("data.json");
  //changed name of scraped data to data.json

  let pageInfo = scrapedData;

  // 2. Extract OpenGraph site name metadata ("WebMD")
  let siteTag = pageInfo.metadata?.openGraph?.find(
    (item) => item.property === "og:site_name"
  );
  let place = siteTag ? siteTag.content : "WebMD";
  //this is the setup for the scraped data from the JSON file I created via WEBMD google search

  // 3. Extract 5-letter words dynamically from scraped text
  let fiveLetterWords = pageInfo.text ? pageInfo.text.match(/\b[a-zA-Z]{5}\b/g) : ["light"];
  let randomFive = fiveLetterWords ? random(fiveLetterWords).toLowerCase() : "cloud";

  // 4. Sample phrase variables that plug in like MASH
  let descriptorNoun = "relief";
  let beforeShower = "prevent this trigger";
  let beforeFood = "avoid tyramine";
  let emotion = "ache for";
  let nessWord = "dizziness";

  // 5. Construct Geanna's poem
  poem =
    `I cannot believe we are in the same ${place}. ` +
    `I wish you showed consistency and ${descriptorNoun}, ` +
    `but you are only a reflection of mine... ` +
    `I hope whenever I look up ${randomFive} that you don't sell my data... ` +
    `If you do, it's okay, just don't forget to ${beforeShower} before I shower ` +
    `and ${beforeFood} before I eat food... ` +
    `I ${emotion} you with ${nessWord}\n\n` +
    `— Geanna`;

  fill("magenta");
  textSize(20);
  textLeading(24);
  text(poem, 30, 40, 540, 280); //arranegs the poem on the screen
}

/*
sample use of my poem
  // 2. Access the first item in the JSON array (index 0)
  let pageInfo = scrapedData[0];

  // 3. Select a basic piece of data from the metadata for {place}
  let siteTag = pageInfo.metadata.openGraph.find(
    (item) => item.property === "og:site_name"
  );
  let place = siteTag ? siteTag.content : "WebMD";

  // 4. Insert the extracted data into your sentence using a template literal
  let sentence = `I cannot believe we are in the same ${place}.`;

  // 5. Display the sentence on the canvas
  textSize(18);
  text(sentence, 20, 50, 560, 150);
}
  */
  //LLM reference for accessing JSON data and plugging it into a sentence
