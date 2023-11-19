import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { useRef } from 'react';

const Retailia = () => {
    const bottomRef = useRef(null);
    const [query, setQuery] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            message: "Hi! I am Retailia, your personal business assistant/analyst. How may I help you? 😁",
            sentTime: "just now",
            sender: "Retailia"
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const systemMessage = {
        role: "system",
        content: "Explain things like you're talking to a Business Analyst with 20 years of experience in 200 words. Do not mention your experience; just talk like a Retailia."
    };


    const predefinedQueries = [
        {
            query: "Suggest a strategy to increase sales for each of the section",
            message: `For a retail store that sells toys ,
                Below are the statistics of time spent on different sections :
                Soft toys : 20% , Game boards : 6 % , Plastic Toys : 24 % , Children books : 20%  others : 30 %.
                Suggest a strategy to increase sales for each of the section`
        },
        {
            query: "Suggest a strategy to increase dwell time and interaction",
            message: `For a retail store that sells toys ,
                Below are the statistics of time spent on different sections :
                Soft toys : 20% , Game boards : 6 % , Plastic Toys : 24 % , Children books : 20%  others : 30 %.
                Suggest a strategy to increase dwell time and interaction`
        },
        {
            query: "Suggest a strategy to increase the conversion rates of users",
            message: `For a retail store that sells toys ,
                Below are the statistics of time spent on different sections :
                Soft toys : 20% , Game boards : 6 % , Plastic Toys : 24 % , Children books : 20%  others : 30 %.
                Suggest a strategy to increase the conversion rates of users`
        },
    ];

    const handlePredefinedQuery = (selectedQuery) => {
        if (!isTyping) {
            setQuery(selectedQuery.query);
            setMessage(selectedQuery.message);
        }
    };

    const handleSend = async () => {
        if (!isTyping) {
            const newMessage = {
                message: message,
                direction: 'outgoing',
                sender: "User"
            };
            const newMessage2 = {
                message: query,
                direction: 'outgoing',
                sender: "User"
            };


            const newMessages = [...messages, newMessage2];

            setMessages(newMessages);

            setIsTyping(true);
            await processMessageToRetailia([newMessage], newMessages);
        }
    };

    async function processMessageToRetailia(chatMessages, newMessages) {
        let apiMessages = chatMessages.map((messageObject) => ({
            role: messageObject.sender === "Retailia" ? "assistant" : "user",
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
                    Authorization: "Bearer " + process.env.REACT_APP_CHATGPT_API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(apiRequestBody)
            });

            const data = await response.json();

            setQuery("");
            setMessage("");

            setMessages([...newMessages, { message: data.choices[0].message.content, sender: "Retailia" }]);
            setIsTyping(false);
        } catch (error) {
            console.error("Error processing message:", error);
            setIsTyping(false);
        }
    }
    const renderMessage = (msg, index) => (
        <div key={index} style={{ textAlign: msg.sender === 'Retailia' ? 'left' : 'right', padding: '10px' }}>
            <strong>{msg.sender}</strong>
            <Typography variant="body1" style={{ whiteSpace: 'pre-wrap', width: 'auto', borderRadius: '10px', padding: '10px', backgroundColor: msg.sender === 'Retailia' ? '#7BFAB2' : '#c6cef7' }} dangerouslySetInnerHTML={{ __html: msg.message }} />
        </div>
    );

    return (
        <Paper style={{ padding: '5px', Width: '600px', margin: '0px auto', borderRadius: '10px' }}>
            <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '10px' }}>
                {messages.map(renderMessage)}
                {isTyping && <div style={{ textAlign: 'left', margin: '5px' }}>Retailia is typing...</div>}
                <div ref={bottomRef}></div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                <TextField
                    fullWidth
                    type="text"
                    label="Ask your query"
                    variant="outlined"
                    value={query}
                    onChange={(e) => setMessage(e.target.value)}
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
                            onClick={() => handlePredefinedQuery(predefinedQueries[index])}
                            disabled={isTyping}
                        >
                            {predefinedQueries[index].query}
                        </Button>
                    ))}
                </div>
                <div className='flex items-center justify-center'>
                    <Button className='w-[100%] h-[50px]' onClick={bottomRef.current?.scrollIntoView({ behavior: 'smooth' })} type="submit" variant="contained" color="primary" disabled={isTyping} disableElevation>
                        Ask Resolutions to Boost Your Business
                    </Button>
                </div>

            </form>
        </Paper>
    );
};

export default Retailia;
