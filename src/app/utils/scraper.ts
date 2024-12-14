import axios from "axios";
import * as cheerio from 'cheerio';


export const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(:[0-9]{1,5})?(\/.*)?$/;

export async function scrapeUrl(url: string) {
    try {
        const respone = await axios.get(url);
        const $ = cheerio.load(respone.data);
        console.log("response.data", respone.data)
        const title = $("title").text();
        console.log($)

        // Extract the meta description
        const metaDescription =
            $('meta[name="description"]').attr("content")?.trim() || "";

        // Extract the main content (e.g., paragraphs inside <body>)
        const content = $("body p")
            .map((_, el) => $(el).text().trim())
            .get()
            .join(" ")
            .slice(0, 50000); // Slice to the first 100,000 characters

        // Return extracted properties
        return {
            title,
            metaDescription,
            content,
        };
        
    }
    catch (error) {
        console.error("Error scraping the URL:", error);
        throw error;
      }
}