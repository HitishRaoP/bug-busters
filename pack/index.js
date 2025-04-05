class GoogleGenAI {
  constructor(apiKey, model, systemPrompt, responseSchema) {
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({
      model: model,
      systemInstruction: systemPrompt,
    });
    this.generationConfig = {
      responseSchema: responseSchema,
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
    };
  }

  async generateResponse(userInput) {
    const chatSession = this.model.startChat({
      generationConfig: this.generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(userInput);
    return result.response.text();
  }
}

module.exports = GoogleGenAI;