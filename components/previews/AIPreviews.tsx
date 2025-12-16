"use client";

import { useState, useEffect } from "react";
import {
  Send, Bot, User, Copy, Check, RefreshCw, Sparkles, Code,
  Image, Wand2, Play, Pause, RotateCcw, ChevronDown, Zap
} from "lucide-react";

// ========== CHAT COMPONENTS ==========

// ChatInterface Preview
export function ChatInterfacePreview() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "HELLO! I AM YOUR RETRO AI ASSISTANT. HOW CAN I HELP YOU TODAY?" },
    { role: "user", content: "Can you explain what machine learning is?" },
    { role: "assistant", content: "MACHINE LEARNING IS A SUBSET OF AI WHERE SYSTEMS LEARN FROM DATA TO IMPROVE PERFORMANCE WITHOUT EXPLICIT PROGRAMMING. ■" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: "PROCESSING YOUR REQUEST... ANALYSIS COMPLETE! ■" }]);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md font-mono border-4 theme-border theme-bg">
      {/* Header */}
      <div className="px-4 py-2 border-b-4 theme-border theme-bg-header flex items-center gap-2">
        <Bot className="w-5 h-5 theme-text-muted" />
        <span className="font-bold uppercase theme-text">■ AI Chat</span>
        <span className="ml-auto w-2 h-2 bg-green-500 animate-pulse" />
      </div>

      {/* Messages */}
      <div className="h-64 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : ""}`}>
            {msg.role === "assistant" && (
              <div className="w-8 h-8 border-2 theme-border theme-bg-header flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 theme-text-muted" />
              </div>
            )}
            <div className={`max-w-[80%] px-3 py-2 border-4 ${
              msg.role === "user"
                ? "theme-border theme-accent-bg text-white"
                : "theme-border-light theme-bg-dark theme-text"
            }`}>
              <p className="text-sm">{msg.content}</p>
            </div>
            {msg.role === "user" && (
              <div className="w-8 h-8 border-2 theme-border theme-accent-bg flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t-4 theme-border theme-bg-dark">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="TYPE YOUR MESSAGE..."
            className="flex-1 px-3 py-2 border-4 theme-border theme-bg theme-text uppercase text-sm focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 border-4 theme-border theme-accent-bg text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ChatMessage Preview
export function ChatMessagePreview() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="w-full max-w-md font-mono space-y-3">
      {/* User Message */}
      <div className="flex gap-2 justify-end">
        <div className="max-w-[80%] px-3 py-2 border-4 theme-border theme-accent-bg text-white">
          <p className="text-sm uppercase">How do I create a React component?</p>
        </div>
        <div className="w-8 h-8 border-2 theme-border theme-accent-bg flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Assistant Message with actions */}
      <div className="flex gap-2">
        <div className="w-8 h-8 border-2 theme-border theme-bg-header flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 theme-text-muted" />
        </div>
        <div className="flex-1">
          <div className="px-3 py-2 border-4 theme-border-light theme-bg-dark">
            <p className="text-sm theme-text uppercase">
              HERE&apos;S HOW TO CREATE A REACT COMPONENT:
            </p>
            <div className="mt-2 p-2 theme-bg-header border-2 theme-border font-mono text-xs">
              <code className="theme-text">
                function MyComponent() {"{"}
                <br />
                {"  "}return {"<div>Hello!</div>"};
                <br />
                {"}"}
              </code>
            </div>
          </div>
          <div className="flex gap-1 mt-1">
            <button
              onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }}
              className="px-2 py-1 text-xs uppercase font-bold theme-text-muted hover:theme-bg-header hover:theme-bg-header border-2 border-transparent hover:theme-border"
            >
              {copied ? <><Check className="w-3 h-3 inline" /> Copied</> : <><Copy className="w-3 h-3 inline" /> Copy</>}
            </button>
            <button className="px-2 py-1 text-xs uppercase font-bold theme-text-muted hover:theme-bg-header hover:theme-bg-header border-2 border-transparent hover:theme-border">
              <RefreshCw className="w-3 h-3 inline" /> Regenerate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// StreamingText Preview
export function StreamingTextPreview() {
  const [text, setText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const fullText = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. THIS IS A DEMONSTRATION OF STREAMING TEXT OUTPUT FROM AN AI MODEL. ■";

  const startStreaming = () => {
    setText("");
    setIsStreaming(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 50);
  };

  return (
    <div className="w-full max-w-md font-mono">
      <div className="p-4 border-4 theme-border theme-bg-dark min-h-[100px]">
        <p className="theme-text">
          {text}
          {isStreaming && <span className="animate-pulse">█</span>}
        </p>
      </div>
      <button
        onClick={startStreaming}
        disabled={isStreaming}
        className="mt-3 px-4 py-2 border-4 theme-border theme-accent-bg text-white font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50"
      >
        {isStreaming ? "Streaming..." : "Start Stream"}
      </button>
    </div>
  );
}

// PromptInput Preview
export function PromptInputPreview() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="w-full max-w-md font-mono">
      <label className="block text-sm font-bold uppercase theme-text mb-2">
        ■ Enter Prompt
      </label>
      <div className="border-4 theme-border theme-bg">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="DESCRIBE WHAT YOU WANT THE AI TO DO..."
          rows={4}
          className="w-full p-3 bg-transparent theme-text uppercase resize-none focus:outline-none placeholder:theme-text-subtle"
        />
        <div className="flex items-center justify-between px-3 py-2 border-t-4 theme-border-light theme-bg-dark">
          <span className="text-xs theme-text-subtle">{prompt.length}/1000</span>
          <div className="flex gap-2">
            <button className="p-1.5 border-2 theme-border hover:theme-bg-header hover:theme-bg-header">
              <Sparkles className="w-4 h-4 theme-text-muted" />
            </button>
            <button className="px-3 py-1 border-4 theme-border theme-accent-bg text-white font-bold uppercase text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-4 h-4 inline mr-1" />
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== CODE COMPONENTS ==========

// CodeEditor Preview
export function CodeEditorPreview() {
  const [code, setCode] = useState(`function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World"));`);

  return (
    <div className="w-full max-w-lg font-mono border-4 theme-border">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b-4 theme-border theme-bg-header">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 theme-text-muted" />
          <span className="font-bold uppercase text-sm theme-text">code.js</span>
        </div>
        <div className="flex gap-1">
          <button className="px-2 py-1 border-2 theme-border text-xs uppercase font-bold theme-text-muted hover:theme-bg-header hover:theme-bg-header">
            <Copy className="w-3 h-3 inline" />
          </button>
          <button className="px-2 py-1 border-2 border-green-500 bg-green-500 text-white text-xs uppercase font-bold">
            <Play className="w-3 h-3 inline" /> Run
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex theme-bg">
        {/* Line numbers */}
        <div className="px-2 py-3 text-right theme-text-muted text-sm select-none border-r-2 theme-border">
          {code.split("\n").map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        {/* Code */}
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 p-3 bg-transparent theme-text text-sm resize-none focus:outline-none"
          rows={5}
          spellCheck={false}
        />
      </div>
    </div>
  );
}

// CodeCompletion Preview
export function CodeCompletionPreview() {
  const [showSuggestion, setShowSuggestion] = useState(false);

  const suggestions = [
    { label: "console.log()", type: "method" },
    { label: "console.error()", type: "method" },
    { label: "console.warn()", type: "method" },
    { label: "console.table()", type: "method" },
  ];

  return (
    <div className="w-full max-w-sm font-mono">
      <div className="relative">
        <div className="p-3 border-4 theme-border theme-bg">
          <div className="theme-text">
            <span className="text-purple-400">const</span> msg = <span className="text-green-400">&quot;Hello&quot;</span>;
          </div>
          <div className="flex items-center theme-text">
            <span className="theme-text-subtle">cons</span>
            <span className="animate-pulse">|</span>
            <button
              onMouseEnter={() => setShowSuggestion(true)}
              onMouseLeave={() => setShowSuggestion(false)}
              className="ml-1 text-xs theme-text-subtle border theme-border px-1"
            >
              Tab to complete
            </button>
          </div>
        </div>

        {showSuggestion && (
          <div className="absolute top-full left-0 mt-1 w-48 border-4 theme-border theme-bg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {suggestions.map((s, i) => (
              <div
                key={i}
                className={`px-3 py-1.5 flex items-center gap-2 text-sm ${
                  i === 0 ? "theme-bg-header" : "hover:theme-bg-dark"
                }`}
              >
                <span className="text-purple-400 text-xs">fn</span>
                <span className="theme-text">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-2 text-xs theme-text-subtle uppercase">■ AI-powered completions</div>
    </div>
  );
}

// ========== GENERATION COMPONENTS ==========

// ImageGeneration Preview
export function ImageGenerationPreview() {
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const generate = () => {
    setGenerating(true);
    setGenerated(false);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 2000);
  };

  return (
    <div className="w-full max-w-sm font-mono">
      <div className="border-4 theme-border theme-bg">
        {/* Preview */}
        <div className="aspect-square theme-bg-header flex items-center justify-center border-b-4 theme-border">
          {generating ? (
            <div className="text-center">
              <RefreshCw className="w-12 h-12 mx-auto mb-2 theme-text-subtle animate-spin" />
              <span className="theme-text-muted uppercase text-sm">Generating...</span>
            </div>
          ) : generated ? (
            <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">■ Generated</span>
            </div>
          ) : (
            <div className="text-center">
              <Image className="w-12 h-12 mx-auto mb-2 theme-text-subtle" />
              <span className="theme-text-subtle uppercase text-sm">No image</span>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="p-3 space-y-3">
          <input
            type="text"
            placeholder="DESCRIBE YOUR IMAGE..."
            className="w-full px-3 py-2 border-4 theme-border theme-bg-dark theme-text uppercase text-sm focus:outline-none"
          />
          <div className="flex gap-2">
            <select className="flex-1 px-2 py-1 border-4 theme-border theme-bg-dark theme-text text-sm uppercase">
              <option>512x512</option>
              <option>1024x1024</option>
            </select>
            <button
              onClick={generate}
              disabled={generating}
              className="flex-1 px-3 py-2 border-4 theme-border theme-accent-bg text-white font-bold uppercase text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50"
            >
              <Wand2 className="w-4 h-4 inline mr-1" />
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ModelSelector Preview
export function ModelSelectorPreview() {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState({ name: "GPT-4", desc: "Most capable" });

  const models = [
    { name: "GPT-4", desc: "Most capable", tokens: "128K" },
    { name: "GPT-3.5", desc: "Fast & efficient", tokens: "16K" },
    { name: "Claude-3", desc: "Best for analysis", tokens: "200K" },
    { name: "Llama-2", desc: "Open source", tokens: "4K" },
  ];

  return (
    <div className="font-mono relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 border-4 theme-border theme-bg-header font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]"
      >
        <Bot className="w-5 h-5 theme-text-muted" />
        <div className="text-left">
          <div className="theme-text uppercase">{model.name}</div>
          <div className="text-xs theme-text-subtle">{model.desc}</div>
        </div>
        <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute z-20 top-full left-0 mt-1 w-64 border-4 theme-border theme-bg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {models.map(m => (
              <button
                key={m.name}
                onClick={() => { setModel(m); setOpen(false); }}
                className={`w-full px-3 py-2 flex items-center justify-between text-left transition-colors ${
                  model.name === m.name ? "theme-bg-header" : "hover:theme-bg-dark dark:hover:theme-bg-dark"
                }`}
              >
                <div>
                  <div className="font-bold uppercase theme-text">{m.name}</div>
                  <div className="text-xs theme-text-subtle">{m.desc}</div>
                </div>
                <span className="text-xs px-1.5 py-0.5 theme-bg-header theme-text-muted">
                  {m.tokens}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ========== AGENT COMPONENTS ==========

// AgentCard Preview
export function AgentCardPreview() {
  const [running, setRunning] = useState(false);

  return (
    <div className="w-full max-w-sm font-mono border-4 theme-border theme-bg">
      <div className="px-4 py-3 border-b-4 theme-border theme-bg-header flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 border-4 border-purple-500 bg-purple-400 flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-bold uppercase theme-text">Research Agent</div>
            <div className="text-xs theme-text-subtle">v2.1.0</div>
          </div>
        </div>
        <div className={`w-3 h-3 ${running ? "bg-green-500 animate-pulse" : "theme-bg-header"}`} />
      </div>
      <div className="p-4 space-y-3">
        <p className="text-sm theme-text-muted">
          Autonomous agent for web research and data gathering.
        </p>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="p-2 border-2 theme-border-light theme-bg-dark">
            <div className="text-xs theme-text-subtle uppercase">Tasks</div>
            <div className="font-bold theme-text">1,234</div>
          </div>
          <div className="p-2 border-2 theme-border-light theme-bg-dark">
            <div className="text-xs theme-text-subtle uppercase">Success</div>
            <div className="font-bold text-green-600">98.5%</div>
          </div>
        </div>
        <button
          onClick={() => setRunning(!running)}
          className={`w-full px-4 py-2 border-4 font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 ${
            running
              ? "border-red-600 bg-red-500 text-white"
              : "theme-border theme-accent-bg text-white"
          }`}
        >
          {running ? <><Pause className="w-4 h-4" /> Stop</> : <><Play className="w-4 h-4" /> Start</>}
        </button>
      </div>
    </div>
  );
}

// AgentStatus Preview
export function AgentStatusPreview() {
  const [step, setStep] = useState(2);

  const steps = [
    { label: "Initializing", status: "complete" },
    { label: "Gathering Data", status: "complete" },
    { label: "Processing", status: "active" },
    { label: "Generating Report", status: "pending" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => (prev >= 3 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-sm font-mono border-4 theme-border theme-bg p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="font-bold uppercase theme-text">■ Agent Status</span>
        <button className="p-1 border-2 theme-border hover:theme-bg-header hover:theme-bg-header">
          <RotateCcw className="w-4 h-4 theme-text-muted" />
        </button>
      </div>
      <div className="space-y-2">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-6 h-6 border-4 flex items-center justify-center text-xs font-bold ${
              i < step ? "border-green-600 bg-green-500 text-white" :
              i === step ? "theme-border theme-accent-bg text-white animate-pulse" :
              "theme-border-light theme-bg-dark theme-text-subtle"
            }`}>
              {i < step ? "✓" : i + 1}
            </div>
            <span className={`text-sm uppercase ${
              i <= step ? "theme-text font-bold" : "theme-text-subtle"
            }`}>
              {s.label}
            </span>
            {i === step && (
              <span className="ml-auto text-xs theme-text-subtle">In progress...</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
