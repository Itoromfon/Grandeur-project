// import { Configuration, OpenAIApi } from 'openai';

// export default async function handler(req, res) {
//   // Ensure the request method is POST
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });

//   const openai = new OpenAIApi(configuration);

//   try {
//     // Extract message from the request body
//     const { message } = req.body;

//     // Validate the message input
//     if (!message) {
//       return res.status(400).json({ error: 'Message is required' });
//     }

//     // Call the OpenAI API
//     const response = await openai.createCompletion({
//       model: 'text-davinci-003', // Ensure you are using a valid model
//       prompt: message,
//       max_tokens: 100,
//     });

//     // Return the AI response
//     res.status(200).json({ reply: response.data.choices[0].text.trim() });
//   } catch (error) {
//     console.error("Error fetching OpenAI response:", error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
