import { ChatOpenAI } from "@langchain/openai";

const { OPENAI_API_KEY } = process.env;

// create a new OpenAI instance
export const openai = new ChatOpenAI({
  model: "gpt-3.5-turbo",
  apiKey: OPENAI_API_KEY,
});
