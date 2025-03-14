import OpenAi from 'openai'
import AI_CHAT from '../model/AIchatModel.js'
import env from 'dotenv'

env.config();

const OPENAI = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY
});

export const createNewChat = async (req, res) => {
    const { message } = req.body;

    if(!message) return res.status(400).json({ error: 'Invalid message' });

    try {

        //save user message to database
        const userMessage = new AI_CHAT({
            role: 'user',
            message,
            timestamp: new Date()
        })
        await userMessage.save();

        //generate response from AI model
        const aiResponse = await OPENAI.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{role: 'user', content: message}]
        })

        const aiReply = aiResponse.choices[0]?.message?.content?.trim();

        if(!aiReply) return res.status(500).json({ error: " Failed to get response from AI"})

        //save ai response to database
        const assistMessage = new AI_CHAT({
            role: 'assistant',
            message: aiReply,
            timestamp: new Date()
        })

        await assistMessage.save();

        //sending response to client with the response gotten from ai
        res.status(200).json({ message: aiReply });
        
    } catch (error) {
        console.error("Error processing chat: ", error);
        res.status(500).json({ error: 'Failed to create new chat' });
    
    }
}