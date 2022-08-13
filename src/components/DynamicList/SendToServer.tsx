import React, {useState} from 'react';
import {saveContacts} from "../../api/saveContacts";

function SendToServer() {
    const [sending, setSending] = useState();
    const send = () => {
        // Todo use saveContacts() to save data that are enabled and handle rest of logic here
    }
    return (
        <div>
            {sending ? "Sending..." : <button onClick={send}>Send to server</button>}
            {/* todo handle to show this message for 2 seconds when send to server was successfully */}
            <div style={{color: "green"}}>Message sent so server successfully</div>
        </div>
    );
}

export default SendToServer;