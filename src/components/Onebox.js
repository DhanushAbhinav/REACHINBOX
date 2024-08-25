import React, { useEffect, useState } from 'react';
import { fetchOneboxList, deleteOneboxThread } from '../api';
import EmailThread from './EmailThread';
import ReplyBox from './ReplyBox';
import '../styles/Onebox.css';

const Onebox = () => {
    const [emails, setEmails] = useState([]);
    const [selectedThreadId, setSelectedThreadId] = useState(null);

    useEffect(() => {
        const loadEmails = async () => {
            try {
                const data = await fetchOneboxList();
                setEmails(data);
            } catch (error) {
                console.error('Error loading emails', error);
            }
        };

        loadEmails();

        const handleKeyDown = (event) => {
            if (event.key === 'D' && selectedThreadId) {
                handleDelete(selectedThreadId);
            }
            if (event.key === 'R' && selectedThreadId) {
                document.getElementById('reply-box').focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedThreadId]);

    const handleDelete = async (threadId) => {
        try {
            await deleteOneboxThread(threadId);
            setEmails(emails.filter(email => email.id !== threadId));
            setSelectedThreadId(null);
        } catch (error) {
            console.error('Error deleting email', error);
        }
    };

    return (
        <div className="onebox-container">
            <div className="email-list">
                {emails.map(email => (
                    <div
                        key={email.id}
                        className={email-item ${email.id === selectedThreadId ? 'selected' : ''}}
                        onClick={() => setSelectedThreadId(email.id)}
                    >
                        {email.subject}
                    </div>
                ))}
            </div>
            {selectedThreadId && (
                <>
                    <EmailThread threadId={selectedThreadId} />
                    <ReplyBox threadId={selectedThreadId} />
                </>
            )}
        </div>
    );
};

export default Onebox;