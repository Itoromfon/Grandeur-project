import { useState } from "react";
import React from "react";
import axios from "axios";
import styles from './Chat.module.css';
import TypingAnimation from "../typinganimation/TypingAnimation";
import { CgAttachment } from "react-icons/cg";
import { FaArrowUp } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Chat = () => {
    const [inputValue, setInputValue] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [attachedFile, setAttachedFile] = useState(null);
    const [isSent, setIsSent] = useState(false); 
    const [theme, setTheme] = useState('light'); 
    const [isSlideOpen, setIsSlideOpen] = useState(false);
    const [isBackgroundTransparent, setIsBackgroundTransparent] = useState(false);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const toggleSlide = () => {
        setIsSlideOpen(!isSlideOpen);
        setIsBackgroundTransparent(!isBackgroundTransparent); 
    };

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setAttachedFile(event.target.files[0]);
            setChatLog((prevChatLog) => [
                ...prevChatLog,
                {
                    type: 'user',
                    message: `📎 Attached: ${event.target.files[0].name}`,
                },
            ]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === '' && !attachedFile) {
            alert('Please enter a message or attach a file.');
            return;
        }

        if (inputValue.trim()) {
            setChatLog((prevChatLog) => [
                ...prevChatLog,
                { type: 'user', message: inputValue },
            ]);
        }

        sendMessage(inputValue, attachedFile);

        setIsSent(true);
        setInputValue('');
        setAttachedFile(null);

        setTimeout(() => {
            setIsSent(false);
        }, 2000);
    };

    const sendMessage = (message, file) => {
        const url = 'https://api.openai.com/v1/chat/completions';
        const headers = {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        };
        const data = {
            model: "gpt-3.5-turbo-0125",
            messages: [{ role: "user", content: message }],
        };

        setIsLoading(true);

        if (file) {
            console.log(`Uploading file: ${file.name}`);
        }

        axios.post(url, data, { headers }).then((response) => {
            setChatLog((prevChatLog) => [
                ...prevChatLog,
                {
                    type: 'bot',
                    message: response.data.choices[0].message.content,
                },
            ]);
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
        });
    };

    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.light : styles.dark}`}>
            <div className={styles.slideToggle} onClick={toggleSlide}>
                <FaBars />
            </div>

            {/* Slide-Out Panel */}
            <div className={`${styles.slidePanel} ${isSlideOpen ? styles.open : ''}`}>
                <button className={styles.closeButton} onClick={toggleSlide}>
                    <FaTimes />
                </button>
                <h2 className={styles.slidetext}>Previous Questions</h2>
                <ul>
                    {chatLog.map((message, index) =>
                        message.type === 'user' ? (
                            <li key={index} className={styles.historyItem}>
                                <a
                                    href="#"
                                    className={styles.historyLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        console.log(`Navigating to: ${message.message}`);
                                    }}
                                >
                                    {message.message}
                                </a>
                            </li>
                        ) : null
                    )}
                </ul>
            </div>

            <div className={styles.toggleContainer}>
                {/* <button onClick={toggleTheme} className={styles.toggleButton}>
                    {theme === 'light' ? '🌞' : '🌙'}
                </button> */}
            </div>

            {/* Centered Background Shapes */}
            <div
                className={styles.backgroundShapes} 
            >
                <div
                    className={styles.circle1}
                    style={{ display: isBackgroundTransparent ? 'none' : 'block' }}
                ></div>
                <div
                    className={styles.circle2}
                    style={{ display: isBackgroundTransparent ? 'none' : 'block' }}
                ></div>
                <div
                    className={styles.circle3}
                    style={{ display: isBackgroundTransparent ? 'none' : 'block' }}
                ></div>
            </div>


            <div className={styles.container2}>
                <h1 
                    className={styles.htext}
                    style={{ color: theme === 'dark' ? 'white' : 'white' }}
                >
                    Ask Grandeur Smart
                </h1>
                <div className={styles.messagediv}>
                    <div className={styles.message}>
                        {chatLog.map((message, index) => (
                            <div
                                key={index}
                                className={`${styles.flex} ${
                                    message.type === 'user'
                                        ? styles.justifyEnd
                                        : styles.justifyStart
                                }`}
                            >
                                <div
                                    className={`${
                                        message.type === 'user'
                                            ? styles.bgPurple
                                            : styles.bgGray
                                    } 
                                    ${styles.rounded} 
                                    ${styles.padding} 
                                    ${styles.textWhite} 
                                    ${styles.maxWidth}`}
                                >
                                    {message.message}
                                </div>
                                <div className={styles.chatdevicediv}>
                                    <Image 
                                        src='/chatdevice.svg'
                                        width={44}
                                        height={44}
                                        alt="Chat Device"
                                    />
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div key={chatLog.length} className={styles.isloading}>
                                <div className={styles.isloading2}>
                                    <TypingAnimation />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.divform}>
                        <label htmlFor="file-input" className={styles.attachButton}>
                        <CgAttachment />
                        </label>
                        <input
                            id="file-input"
                            type="file"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Message ChatGPT"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button 
                            type="submit" 
                            className={`${styles.button} ${inputValue.trim() ? styles.activeButton : ''}`}
                        >
                            {isSent ? (
                                <FaSquare className={styles.arrow} />
                            ) : (
                                <FaArrowUp className={styles.arrow} />
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Chat;
