import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatOpenAI } from "@langchain/openai";

const { OPENAI_API_KEY, GOOGLE_API_KEY } = process.env;

// create a new OpenAI instance
export const openai = new ChatOpenAI({
  model: "gpt-3.5-turbo",
  apiKey: OPENAI_API_KEY,
});

// create a new Gemini instance
export const gemini = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  apiKey: GOOGLE_API_KEY,
});
