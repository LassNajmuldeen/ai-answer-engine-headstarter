# AI Answer Engine

Welcome to the AI Answer Engine, a project developed as part of my residency at Headstarter. Inspired by Perplexity.ai, this project leverages technologies in web scraping, natural language processing (NLP), and large language models (LLMs) to build an intelligent, explainable AI system for answering user queries with cited sources. Inspired by the principles of responsible AI, this tool is designed to deliver accurate and transparent insights by contextualizing data scraped from the web.

## 🚀 Project Overview

The AI Answer Engine offers users an intuitive chat interface for extracting insights from web pages while mitigating the problem of AI hallucinations through source citation. The system aims to address real-world challenges in AI explainability, making it both practical and user-friendly.

## Key Features

- Content Summarization: Extracts the most relevant information from web pages.
- Explainable Answers: Cites sources for all AI-generated responses to enhance trust and transparency.
- Conversational Context: Supports multi-turn conversations where users can ask follow-up questions seamlessly.
- User Collaboration: Allows users to share conversations and collaborate in real-time.


## 💡 Use Cases

- Research Assistance: Quickly gather and summarize information from multiple sources.
- Content Validation: Ensure AI outputs are backed by reliable, cited sources.
- Collaboration Tool: Share and build upon insights with team members in real-time.


## 🛠️ Technology Stack

- Frontend: Next.js with TypeScript for a modern, reactive user interface.
- Backend: Custom APIs built with Next.js routing and Groq SDK for LLM integration.
- Web Scraping: Cheerio.js and Puppeteer for extracting and processing web page data.
- Rate Limiting: Redis integration to ensure API efficiency and prevent abuse.
- AI Models: Groq for generating contextually accurate answers.
