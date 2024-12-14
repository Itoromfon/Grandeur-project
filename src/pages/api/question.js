// // /pages/api/chat.js
// // // import { Configuration, OpenAIApi } from 'openai';
// // import { OpenAIApi, Configuration} from "openai";
// import { OpenAIApi, Configuration } from "openai";

// export default async(req, res) => {
//     const { question } = req.body

//     if (!question) {
//         return res.status(400).json({error: "Question is required"})
//     }

//     const configuration = new Configuration({
//         apiKey: process.env.OPENAI_API_KEY
//     });

//     const openai = new OpenAIApi(configuration);

//     try {
//         const result = await openai.createCompletion({
//             model: 'text-davinci-003',
//             prompt: question,
//             max_tokens: 500
//         })
//         return res.json({answer: result.data.choices[0].text})
//     } catch (error)  {
//         //console.error("Error details:", error);
//         return res.status(500).json({error: "Error fetching answer"})
//     }
// }

// // const configuration = new Configuration({
// //   apiKey: process.env.OPENAI_API_KEY,
// // });
// // const openai = new OpenAIApi(configuration);

// // export default async function handler(req, res) {
// //   if (req.method === 'POST') {
// //     const { message } = req.body;
// //     try {
// //       const completion = await openai.createChatCompletion({
// //         model: 'gpt-3.5-turbo', // or use 'gpt-4' if available
// //         messages: [{ role: 'user', content: message }],
// //       });
// //       res.status(200).json({ reply: completion.data.choices[0].message.content });
// //     } catch (error) {
// //       res.status(500).json({ error: error.message });
// //     }
// //   } else {
// //     res.status(405).json({ error: 'Method not allowed' });
// //   }
// // }




