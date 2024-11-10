'use client'

import styles from './Chat.module.css'
import { Textarea } from "@headlessui/react";
import { useChat } from "ai/react"

export default function Chat() {
    const { messages, handleSubmit, input, handleInputChange } = useChat()
    return (
        <main className={styles.main}>
            <div className={styles.maincontainer}>
                <div className={styles.maintext}></div>
                <form 
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <Textarea 
                        className={styles.textarae}
                        placeholder="Say Something"
                        value={input}
                        onChange={handleInputChange}
                    />
                </form>
            </div>
        </main>
    )
}