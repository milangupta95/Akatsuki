import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

const Chatbot = () => {
    const [query, setQuery] = useState('');
    const [messages, setMessages] = useState([
        {
            message: "Hello! Welcome to RetailSense",
            sentTime: "just now",
            sender: "ChatBot"
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const API_KEY = "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";

    const systemMessage = {
        role: "system",
        content: "Explain things like you're talking to a Business Analyst with 20 years of experience in 100 words. Do not mention your experience; just talk like a chatbot."
    };

    const predefinedQueries = [
        "What is the impact of data analytics on business decision-making?",
        "How can businesses leverage artificial intelligence for strategic planning?",
        "Explain the role of a Business Analyst in software development projects."
    ];

    const handlePredefinedQuery = (selectedQuery) => {
        if (!isTyping) {
            setQuery(selectedQuery);
        }
    };

    const handleSend = async () => {
        if (!isTyping) {
            const newMessage = {
                message: query,
                direction: 'outgoing',
                sender: "User"
            };

            const newMessages = [...messages, newMessage];

            setMessages(newMessages);

            setIsTyping(true);
            await processMessageToChatBot(newMessages);
        }
    };

    async function processMessageToChatBot(chatMessages) {
        let apiMessages = chatMessages.map((messageObject) => ({
            role: messageObject.sender === "ChatBot" ? "assistant" : "user",
            content: messageObject.message
        }));

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages
            ]
        };

        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(apiRequestBody)
            });

            const data = await response.json();

            setQuery("");

            setMessages([...chatMessages, { message: data.choices[0].message.content, sender: "ChatBot" }]);
            setIsTyping(false);
        } catch (error) {
            console.error("Error processing message:", error);
            setIsTyping(false);
        }
    }

    const renderMessage = (msg, index) => (
        <div key={index} style={{ textAlign: msg.sender === 'ChatBot' ? 'left' : 'right', padding: '10px' }}>
            <strong>{msg.sender}</strong>
            <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: msg.message }} />
        </div>
    );

    return (
        <Paper style={{ padding: '20px', maxWidth: '400px', margin: '20px auto', borderRadius: '10px' }}>
            <Typography variant="h5" gutterBottom style={{ margin: "8px" }}>
                Chatbot
            </Typography>
            <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '10px' }}>
                {messages.map(renderMessage)}
                {isTyping && <div style={{ textAlign: 'left', margin: '5px' }}>ChatBot is typing...</div>}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                <TextField
                    fullWidth
                    type="text"
                    label="Ask your query"
                    variant="outlined"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ marginBottom: '10px' }}
                    disabled={isTyping}
                />
                <div style={{ marginBottom: '5px' }}>
                    <Typography variant="subtitle1">Choose a query</Typography>
                    {predefinedQueries.map((predefinedQuery, index) => (
                        <Button
                            key={index}
                            variant="outlined"
                            color="primary"
                            style={{ margin: '5px', fontSize: "12px" }}
                            onClick={() => handlePredefinedQuery(predefinedQuery)}
                            disabled={isTyping}
                        >
                            {predefinedQuery}
                        </Button>
                    ))}
                </div>
                <Button type="submit" variant="contained" color="primary" disabled={isTyping}>
                    Ask
                </Button>
            </form>
        </Paper>
    );
};

export default Chatbot;
