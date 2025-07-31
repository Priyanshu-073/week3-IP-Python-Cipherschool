import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = "AIzaSyD4TnCAThB43DC1HdyRsbvl9-qEmUAC6Lk";

async function main(prompt) {
    const ai = new GoogleGenAI({
        apiKey: GEMINI_API_KEY, // Use the constant directly
    });
    const tools = [
        { googleSearch: {} },
    ];
    const config = {
        thinkingConfig: { thinkingBudget: -1 },
        tools,
    };
    const model = 'gemini-2.5-pro';
    const contents = [
        {
            role: 'user',
            parts: [
                { text: prompt },
            ],
        },
    ];

    const response = await ai.models.generateContentStream({
        model,
        config,
        contents,
    });

    let result = "";
    for await (const chunk of response) {
        console.log(chunk.text);
        result += chunk.text;
    }
    return result;
}

main();

export default main;