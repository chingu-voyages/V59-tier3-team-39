import { useState, useRef, useEffect } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatBot() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  function handleSend() {
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input.trim() }
    setMessages((prev) => [...prev, userMessage])
    setInput('')

    const placeholderResponse: Message = {
      role: 'assistant',
      content: 'response',
    }
    setMessages((prev) => [...prev, placeholderResponse])
  }

  function handleClear() {
    setInput('')
    setMessages([])
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-white border rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Chat with AI</h2>

      <div className="mb-4 h-96 overflow-y-auto bg-white border rounded p-4">
        {messages.length === 0 ? (
          <div className="text-sm text-gray-400 text-center mt-8">
            No messages yet. Start a conversation!
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a question..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSend()
        }}
        className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex gap-3">
        <button
          onClick={handleSend}
          className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
        <button
          onClick={handleClear}
          className="flex-1 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Clear
        </button>
      </div>
    </div>
  )
}
