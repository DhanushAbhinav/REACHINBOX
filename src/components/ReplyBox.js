import React, {useState} from 'react'
import {replyToOneboxThread} from '../api'
import '../styles/ReplyBox.css'

const ReplyBox = ({threadId}) => {
  const [replyContent, setReplyContent] = useState('')

  const handleSendReply = async () => {
    try {
      const response = await replyToOneboxThread(threadId, {
        toName: 'Recipient Name',
        to: 'recipient@example.com',
        from: 'your-email@example.com',
        fromName: 'Your Name',
        subject: 'Re: Subject',
        body: replyContent,
        references: ['<email-reference>'],
        inReplyTo: '<email-reference>',
      })
      console.log('Reply sent successfully:', response)
    } catch (error) {
      console.error('Error sending reply', error)
    }
  }

  return (
    <div className="reply-box">
      <textarea
        id="reply-box"
        value={replyContent}
        onChange={e => setReplyContent(e.target.value)}
        placeholder="Type your reply here..."
      />
      <button onClick={handleSendReply}>Send</button>
    </div>
  )
}

export default ReplyBox
