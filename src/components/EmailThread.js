import React, {useEffect, useState} from 'react'
import {fetchOneboxThread} from '../api'
import '../styles/EmailThread.css'

const EmailThread = ({threadId}) => {
  const [thread, setThread] = useState(null)

  useEffect(() => {
    const loadThread = async () => {
      try {
        const data = await fetchOneboxThread(threadId)
        setThread(data)
      } catch (error) {
        console.error('Error loading thread', error)
      }
    }

    loadThread()
  }, [threadId])

  if (!thread) {
    return <div>Loading...</div>
  }

  return (
    <div className="email-thread">
      <h2>{thread.subject}</h2>
      <p>{thread.body}</p>
    </div>
  )
}

export default EmailThread
