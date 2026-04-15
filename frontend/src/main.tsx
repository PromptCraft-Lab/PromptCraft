import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-400">PromptCraft</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">PromptCraft</h1>
          <p className="mt-4 text-slate-300">Prompt generation platform starter</p>
        </div>
      </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
