const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const websiteUrl = 'https://in.pinterest.com/UrDaDiSmE/south-sexy-ai/'; // Replace with the URL you want to scrape
const downloadFolder = './ai-images';

async function scrapeImages() {
  try {
    // Fetch the HTML content of the webpage
    const response = await axios.get(websiteUrl);
    const html = response.data;

    // Load the HTML content into Cheerio
    const $ = cheerio.load(html);

    // Find and extract image URLs
    const imgUrls = [];
    $('img').each((index, element) => {
      const imgUrl = $(element).attr('src');
      if (imgUrl) {
        imgUrls.push(imgUrl);
      }
    });

    // Create the download folder if it doesn't exist
    if (!fs.existsSync(downloadFolder)) {
      fs.mkdirSync(downloadFolder);
    }

    // Download and save images
    for (const imgUrl of imgUrls) {
      const imgFileName = path.basename(imgUrl);
      const imgPath = path.join(downloadFolder, imgFileName);

      const imgResponse = await axios.get(imgUrl, { responseType: 'stream' });
      imgResponse.data.pipe(fs.createWriteStream(imgPath));

      console.log(`Downloaded: ${imgFileName}`);
    }

    console.log('Image scraping and downloading completed.');
  } catch (error) {
    console.error('Error:', error);
  }
}

scrapeImages();
