import { useState } from 'react';
import axios from 'axios';
import styles from './ChatBot.module.css';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { text: input, sender: 'user' }];
        setMessages(newMessages);

        try {
            const response = await axios.post('/api/chat', { message: input });
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: response.data.reply || 'No response', sender: 'ai' }, // Fallback if no reply
            ]);
        } catch (error) {
            console.error("API Error:", error); // Log the error for debugging
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: 'Error: Unable to fetch response.', sender: 'ai' },
            ]);
        }

        setInput(''); // Clear input
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatBox}>
                {messages.map((message, index) => (
                    <div key={index} className={styles[message.sender]}>
                        {message.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className={styles.input}
            />
            <button onClick={handleSend} className={styles.sendButton}>Send</button>
        </div>
    );
};

export default ChatBot;
