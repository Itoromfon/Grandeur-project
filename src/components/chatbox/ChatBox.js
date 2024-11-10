import React, { useState } from 'react'
import axios from 'axios'
import styles from './ChatBox.module.css'

function ChatBox() {
 const [question, setQuestion] = useState("")
 const [answer, setAnswer] = useState("")
 const [loading, setLoading] = useState(false)

 const handleQuestionChange = (e) => {
    setQuestion(e.target.value)
 }

 const askQuestion = async () => {
    setLoading(true)
    try {
        const response = await axios.post('/api/question', {question})
        setAnswer(response.data.answer)
    } catch (error) {
        console.error(error)
        setAnswer("An error has occured")
    } finally {
        setLoading(false)
    }
 }

  return (
    <div className={styles.main}>
        <div>
            <label>
                Ask a question:
            </label>
            <textarea 
                className={styles.textarea}
                rows={4}
                value={question}
                onChange={handleQuestionChange}
            />
        </div>
        <button 
            className={styles.button}
            onClick={askQuestion}
            disabled={loading}
        >
            Ask
        </button>
        {loading && <div>Loading...</div>}
        {answer && (
            <div>
                <strong>Answer:</strong>
                <p>{answer}</p>
            </div>
        )}
    </div>
  );
}

export default ChatBox