import React, { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';

export default function IdeaForm() {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [enhanced, setEnhanced] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    setLoading(true);
    setEnhanced('');

    // Simulate an AI enhancement process to keep the UI functional
    // Backend can be wired later to replace this simulation.
    await new Promise((r) => setTimeout(r, 900));
    const enhancedIdea = `${idea.trim()} — refined and ready to spark collaboration.`;
    setEnhanced(enhancedIdea);
    setLoading(false);
    setIdea('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative flex items-stretch gap-2">
        <input
          type="text"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Share a bold idea..."
          className="flex-1 rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-rose-500/60 focus:border-rose-400/40 backdrop-blur-md"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-tr from-rose-600 via-red-500 to-orange-400 px-4 py-3 text-white font-medium shadow-lg shadow-rose-900/30 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-60 disabled:cursor-not-allowed"
          aria-label="Post with AI"
        >
          <Sparkles className="h-5 w-5" />
          {loading ? 'Thinking…' : 'Post with AI'}
        </button>
      </form>

      {enhanced && (
        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-white/90">
          <div className="flex items-center gap-2 mb-1 text-sm text-white/70">
            <Sparkles className="h-4 w-4" />
            AI-enhanced
          </div>
          <p className="leading-relaxed">{enhanced}</p>
          <div className="mt-3 flex items-center gap-3 text-sm text-white/60">
            <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 transition">
              <Send className="h-4 w-4" />
              Share
            </button>
            <span>or keep refining your ideas</span>
          </div>
        </div>
      )}
    </div>
  );
}
