"use client";

import { useState } from "react";
import {
  Wallet, Copy, Check, ArrowUpRight, ArrowDownLeft, RefreshCw,
  TrendingUp, TrendingDown, Repeat, Settings, ChevronDown, ExternalLink,
  AlertTriangle, Clock, Zap, Shield, Vote, Users, Image, Layers,
  ArrowLeftRight, BarChart3, Target, DollarSign, ArrowRight
} from "lucide-react";

// ========== WALLET COMPONENTS ==========

// WalletConnect Preview
export function WalletConnectPreview() {
  const [connected, setConnected] = useState(false);
  const [showWallets, setShowWallets] = useState(false);

  const wallets = [
    { name: "MetaMask", icon: "🦊" },
    { name: "WalletConnect", icon: "🔗" },
    { name: "Coinbase", icon: "🔵" },
    { name: "Phantom", icon: "👻" },
  ];

  return (
    <div className="font-mono">
      {!connected ? (
        <div>
          <button
            onClick={() => setShowWallets(true)}
            className="px-6 py-3 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] flex items-center gap-2"
          >
            <Wallet className="w-5 h-5" />
            Connect Wallet
          </button>

          {showWallets && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
              <div className="w-full max-w-sm border-4 border-amber-600 bg-amber-50 dark:bg-amber-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="px-4 py-3 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
                  <h3 className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Select Wallet</h3>
                </div>
                <div className="p-4 space-y-2">
                  {wallets.map(wallet => (
                    <button
                      key={wallet.name}
                      onClick={() => { setConnected(true); setShowWallets(false); }}
                      className="w-full flex items-center gap-3 px-4 py-3 border-4 border-amber-400 dark:border-amber-600 bg-amber-100 dark:bg-amber-900 hover:bg-amber-200 dark:hover:bg-amber-800 hover:border-amber-500 transition-all"
                    >
                      <span className="text-2xl">{wallet.icon}</span>
                      <span className="font-bold uppercase text-amber-800 dark:text-amber-200">{wallet.name}</span>
                    </button>
                  ))}
                </div>
                <div className="p-4 border-t-4 border-amber-400">
                  <button onClick={() => setShowWallets(false)} className="w-full px-4 py-2 border-4 border-amber-400 font-bold uppercase text-amber-700 hover:bg-amber-200">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-3 px-4 py-2 border-4 border-green-500 bg-green-100 dark:bg-green-900/30">
          <div className="w-3 h-3 bg-green-500 animate-pulse" />
          <span className="text-green-800 dark:text-green-300 font-bold uppercase">Connected</span>
          <span className="font-mono text-sm text-green-600">0x1234...5678</span>
          <button onClick={() => setConnected(false)} className="ml-auto text-red-500 hover:text-red-700">
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}

// WalletBalance Preview
export function WalletBalancePreview() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="px-4 py-3 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <div className="flex items-center justify-between">
          <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Wallet</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-amber-700 dark:text-amber-300 font-mono">0x1234...5678</span>
            <button onClick={copyAddress} className="p-1 hover:bg-amber-300 dark:hover:bg-amber-700">
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-amber-600" />}
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-4xl font-bold text-amber-900 dark:text-amber-100">$12,458.32</div>
        <div className="flex items-center gap-1 mt-1 text-green-600">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-bold">+5.23%</span>
          <span className="text-xs text-amber-500">24h</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 border-t-4 border-amber-400 dark:border-amber-600">
        <button className="px-4 py-2 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2">
          <ArrowUpRight className="w-4 h-4" />
          Send
        </button>
        <button className="px-4 py-2 border-4 border-amber-500 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2">
          <ArrowDownLeft className="w-4 h-4" />
          Receive
        </button>
      </div>
    </div>
  );
}

// NetworkSwitcher Preview
export function NetworkSwitcherPreview() {
  const [open, setOpen] = useState(false);
  const [network, setNetwork] = useState({ name: "Ethereum", icon: "⟠", color: "bg-blue-500" });

  const networks = [
    { name: "Ethereum", icon: "⟠", color: "bg-blue-500" },
    { name: "Polygon", icon: "⬡", color: "bg-purple-500" },
    { name: "Arbitrum", icon: "🔵", color: "bg-blue-400" },
    { name: "Optimism", icon: "🔴", color: "bg-red-500" },
    { name: "BSC", icon: "⬢", color: "bg-yellow-500" },
  ];

  return (
    <div className="font-mono relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 border-4 border-amber-600 bg-amber-200 dark:bg-amber-800 font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]"
      >
        <span className={`w-6 h-6 ${network.color} flex items-center justify-center text-white text-sm`}>
          {network.icon}
        </span>
        <span className="uppercase text-amber-800 dark:text-amber-200">{network.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute z-20 top-full left-0 mt-1 w-48 border-4 border-amber-600 bg-amber-50 dark:bg-amber-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {networks.map(n => (
              <button
                key={n.name}
                onClick={() => { setNetwork(n); setOpen(false); }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left uppercase font-bold text-sm transition-colors ${
                  network.name === n.name
                    ? "bg-amber-200 dark:bg-amber-800"
                    : "hover:bg-amber-100 dark:hover:bg-amber-900"
                }`}
              >
                <span className={`w-5 h-5 ${n.color} flex items-center justify-center text-white text-xs`}>
                  {n.icon}
                </span>
                <span className="text-amber-800 dark:text-amber-200">{n.name}</span>
                {network.name === n.name && <Check className="w-4 h-4 ml-auto text-green-500" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ========== TOKEN COMPONENTS ==========

// TokenList Preview
export function TokenListPreview() {
  const tokens = [
    { symbol: "ETH", name: "Ethereum", balance: "2.5432", value: "$4,521.32", change: "+3.2%" },
    { symbol: "USDC", name: "USD Coin", balance: "1,234.00", value: "$1,234.00", change: "0.0%" },
    { symbol: "LINK", name: "Chainlink", balance: "150.00", value: "$2,145.00", change: "-1.5%" },
  ];

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Tokens</span>
      </div>
      <div className="divide-y-4 divide-amber-300 dark:divide-amber-700">
        {tokens.map(token => (
          <div key={token.symbol} className="flex items-center gap-3 px-4 py-3 hover:bg-amber-100 dark:hover:bg-amber-900">
            <div className="w-10 h-10 border-4 border-amber-500 bg-amber-300 dark:bg-amber-700 flex items-center justify-center font-bold text-amber-800 dark:text-amber-200">
              {token.symbol.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="font-bold text-amber-900 dark:text-amber-100">{token.symbol}</div>
              <div className="text-xs text-amber-600 dark:text-amber-400">{token.name}</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-amber-900 dark:text-amber-100">{token.balance}</div>
              <div className={`text-xs ${token.change.startsWith("+") ? "text-green-600" : token.change.startsWith("-") ? "text-red-500" : "text-amber-500"}`}>
                {token.value} ({token.change})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// TokenInput Preview
export function TokenInputPreview() {
  const [amount, setAmount] = useState("0.0");

  return (
    <div className="w-full max-w-sm font-mono">
      <div className="border-4 border-amber-600 dark:border-amber-500 bg-amber-100 dark:bg-amber-900 p-4">
        <div className="flex justify-between mb-2 text-sm text-amber-600 dark:text-amber-400 uppercase">
          <span>Amount</span>
          <span>Balance: 2.5432 ETH</span>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-transparent text-2xl font-bold text-amber-900 dark:text-amber-100 focus:outline-none"
            placeholder="0.0"
          />
          <button className="flex items-center gap-2 px-3 py-2 border-4 border-amber-500 bg-amber-200 dark:bg-amber-800 font-bold">
            <div className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white text-xs">⟠</div>
            <span className="text-amber-800 dark:text-amber-200">ETH</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-2 mt-3">
          {["25%", "50%", "75%", "MAX"].map(pct => (
            <button
              key={pct}
              className="flex-1 px-2 py-1 border-2 border-amber-500 text-xs font-bold uppercase text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-800"
            >
              {pct}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// TokenApproval Preview
export function TokenApprovalPreview() {
  const [approved, setApproved] = useState(false);

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-3 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <h3 className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Token Approval</h3>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 border-4 border-amber-500 bg-amber-300 dark:bg-amber-700 flex items-center justify-center text-xl font-bold">U</div>
          <div>
            <div className="font-bold text-amber-900 dark:text-amber-100">USDC</div>
            <div className="text-sm text-amber-600 dark:text-amber-400">USD Coin</div>
          </div>
        </div>
        <div className="p-3 border-4 border-yellow-500 bg-yellow-100 dark:bg-yellow-900/30">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              Allow this contract to spend your USDC tokens
            </p>
          </div>
        </div>
        <button
          onClick={() => setApproved(!approved)}
          className={`w-full px-4 py-3 border-4 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
            approved
              ? "border-green-600 bg-green-500 text-white"
              : "border-amber-600 bg-amber-500 text-white"
          }`}
        >
          {approved ? "✓ Approved" : "Approve USDC"}
        </button>
      </div>
    </div>
  );
}

// TokenPrice Preview
export function TokenPricePreview() {
  return (
    <div className="w-full max-w-xs font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 border-4 border-blue-500 bg-blue-400 flex items-center justify-center text-white font-bold">⟠</div>
          <div>
            <div className="font-bold text-amber-900 dark:text-amber-100">ETH</div>
            <div className="text-xs text-amber-600 dark:text-amber-400">Ethereum</div>
          </div>
        </div>
        <div className="text-3xl font-bold text-amber-900 dark:text-amber-100">$1,834.52</div>
        <div className="flex items-center gap-2 mt-1">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span className="text-green-600 font-bold">+2.34%</span>
          <span className="text-xs text-amber-500">24h</span>
        </div>
      </div>
      <div className="px-4 py-2 border-t-4 border-amber-400 bg-amber-100 dark:bg-amber-900 flex justify-between text-xs text-amber-600 dark:text-amber-400 uppercase">
        <span>Vol: $12.5B</span>
        <span>MCap: $220B</span>
      </div>
    </div>
  );
}

// ========== TRANSACTION COMPONENTS ==========

// TransactionHistory Preview
export function TransactionHistoryPreview() {
  const txs = [
    { type: "send", amount: "-0.5 ETH", to: "0xabc...def", status: "completed", time: "2 min ago" },
    { type: "receive", amount: "+100 USDC", from: "0x123...456", status: "completed", time: "1 hr ago" },
    { type: "swap", amount: "1 ETH → 1800 USDC", status: "pending", time: "Just now" },
  ];

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex justify-between items-center">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ History</span>
        <RefreshCw className="w-4 h-4 text-amber-600 dark:text-amber-400 cursor-pointer hover:rotate-180 transition-transform duration-500" />
      </div>
      <div className="divide-y-2 divide-amber-300 dark:divide-amber-700">
        {txs.map((tx, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3">
            <div className={`w-8 h-8 border-2 flex items-center justify-center ${
              tx.type === "send" ? "border-red-500 bg-red-100" : tx.type === "receive" ? "border-green-500 bg-green-100" : "border-blue-500 bg-blue-100"
            }`}>
              {tx.type === "send" ? <ArrowUpRight className="w-4 h-4 text-red-600" /> :
               tx.type === "receive" ? <ArrowDownLeft className="w-4 h-4 text-green-600" /> :
               <Repeat className="w-4 h-4 text-blue-600" />}
            </div>
            <div className="flex-1">
              <div className={`font-bold text-sm ${tx.amount.startsWith("-") ? "text-red-600" : tx.amount.startsWith("+") ? "text-green-600" : "text-amber-800 dark:text-amber-200"}`}>
                {tx.amount}
              </div>
              <div className="text-xs text-amber-500">{tx.time}</div>
            </div>
            <div className={`px-2 py-0.5 text-xs uppercase font-bold ${
              tx.status === "completed" ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"
            }`}>
              {tx.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// TransactionStatus Preview
export function TransactionStatusPreview() {
  const [status, setStatus] = useState<"pending" | "confirmed" | "failed">("pending");

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="p-4 text-center">
        <div className={`w-16 h-16 mx-auto mb-4 border-4 flex items-center justify-center ${
          status === "pending" ? "border-yellow-500 bg-yellow-100 animate-pulse" :
          status === "confirmed" ? "border-green-500 bg-green-100" : "border-red-500 bg-red-100"
        }`}>
          {status === "pending" ? <Clock className="w-8 h-8 text-yellow-600" /> :
           status === "confirmed" ? <Check className="w-8 h-8 text-green-600" /> :
           <AlertTriangle className="w-8 h-8 text-red-600" />}
        </div>
        <h3 className="font-bold uppercase text-amber-900 dark:text-amber-100">
          {status === "pending" ? "Processing..." : status === "confirmed" ? "Confirmed!" : "Failed"}
        </h3>
        <p className="text-sm text-amber-600 dark:text-amber-400 mt-1 font-mono">
          Tx: 0x1234...abcd
        </p>
      </div>
      <div className="flex gap-1 p-2 border-t-4 border-amber-400">
        {(["pending", "confirmed", "failed"] as const).map(s => (
          <button
            key={s}
            onClick={() => setStatus(s)}
            className={`flex-1 px-2 py-1 text-xs uppercase font-bold ${
              status === s ? "bg-amber-500 text-white" : "bg-amber-200 dark:bg-amber-800 text-amber-700 dark:text-amber-300"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

// GasEstimator Preview
export function GasEstimatorPreview() {
  const [speed, setSpeed] = useState("standard");
  const options = [
    { id: "slow", label: "Slow", gwei: "15", time: "~10 min", cost: "$1.20" },
    { id: "standard", label: "Standard", gwei: "25", time: "~3 min", cost: "$2.00" },
    { id: "fast", label: "Fast", gwei: "40", time: "~30 sec", cost: "$3.20" },
  ];

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex items-center gap-2">
        <Zap className="w-4 h-4 text-amber-700" />
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">Gas Settings</span>
      </div>
      <div className="p-4 space-y-2">
        {options.map(opt => (
          <button
            key={opt.id}
            onClick={() => setSpeed(opt.id)}
            className={`w-full flex items-center justify-between px-4 py-3 border-4 transition-all ${
              speed === opt.id
                ? "border-amber-600 bg-amber-200 dark:bg-amber-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]"
                : "border-amber-300 dark:border-amber-700 hover:border-amber-500"
            }`}
          >
            <div>
              <div className="font-bold uppercase text-amber-900 dark:text-amber-100">{opt.label}</div>
              <div className="text-xs text-amber-600 dark:text-amber-400">{opt.time}</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-amber-900 dark:text-amber-100">{opt.gwei} Gwei</div>
              <div className="text-xs text-amber-500">{opt.cost}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ========== DEFI COMPONENTS ==========

// SwapInterface Preview
export function SwapInterfacePreview() {
  const [fromAmount, setFromAmount] = useState("1.0");

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex justify-between">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Swap</span>
        <Settings className="w-5 h-5 text-amber-600 cursor-pointer" />
      </div>
      <div className="p-4 space-y-2">
        {/* From */}
        <div className="p-3 border-4 border-amber-400 dark:border-amber-600 bg-amber-100 dark:bg-amber-900">
          <div className="text-xs text-amber-500 uppercase mb-1">From</div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="flex-1 bg-transparent text-xl font-bold text-amber-900 dark:text-amber-100 focus:outline-none"
            />
            <button className="flex items-center gap-1 px-2 py-1 border-2 border-amber-500 bg-amber-200 dark:bg-amber-800">
              <span className="w-5 h-5 bg-blue-500 flex items-center justify-center text-white text-xs">⟠</span>
              <span className="font-bold text-sm">ETH</span>
            </button>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-1 relative z-10">
          <button className="p-2 border-4 border-amber-600 bg-amber-500 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <ArrowLeftRight className="w-5 h-5" />
          </button>
        </div>

        {/* To */}
        <div className="p-3 border-4 border-amber-400 dark:border-amber-600 bg-amber-100 dark:bg-amber-900">
          <div className="text-xs text-amber-500 uppercase mb-1">To</div>
          <div className="flex items-center gap-2">
            <span className="flex-1 text-xl font-bold text-amber-900 dark:text-amber-100">1,834.52</span>
            <button className="flex items-center gap-1 px-2 py-1 border-2 border-amber-500 bg-amber-200 dark:bg-amber-800">
              <span className="w-5 h-5 bg-green-500 flex items-center justify-center text-white text-xs">$</span>
              <span className="font-bold text-sm">USDC</span>
            </button>
          </div>
        </div>

        <button className="w-full px-4 py-3 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Swap
        </button>
      </div>
    </div>
  );
}

// LiquidityPool Preview
export function LiquidityPoolPreview() {
  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Liquidity Pool</span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 border-2 border-amber-600 bg-blue-500 flex items-center justify-center text-white text-xs z-10">⟠</div>
            <div className="w-8 h-8 border-2 border-amber-600 bg-green-500 flex items-center justify-center text-white text-xs">$</div>
          </div>
          <span className="font-bold text-amber-900 dark:text-amber-100">ETH/USDC</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-2 border-2 border-amber-400 bg-amber-100 dark:bg-amber-900">
            <div className="text-xs text-amber-500 uppercase">TVL</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">$124.5M</div>
          </div>
          <div className="p-2 border-2 border-amber-400 bg-amber-100 dark:bg-amber-900">
            <div className="text-xs text-amber-500 uppercase">APY</div>
            <div className="font-bold text-green-600">12.4%</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Add
          </button>
          <button className="flex-1 px-3 py-2 border-4 border-amber-500 font-bold uppercase text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-800">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

// StakingCard Preview
export function StakingCardPreview() {
  const [staked, setStaked] = useState(false);

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex justify-between items-center">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Stake ETH</span>
        <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold">LIVE</span>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex justify-between">
          <div>
            <div className="text-xs text-amber-500 uppercase">APY</div>
            <div className="text-2xl font-bold text-green-600">5.2%</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-amber-500 uppercase">Total Staked</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">1.2M ETH</div>
          </div>
        </div>
        <div className="p-3 border-4 border-amber-400 bg-amber-100 dark:bg-amber-900">
          <div className="flex justify-between text-sm">
            <span className="text-amber-600">Your Stake</span>
            <span className="font-bold text-amber-900 dark:text-amber-100">{staked ? "2.5 ETH" : "0 ETH"}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-amber-600">Rewards</span>
            <span className="font-bold text-green-600">{staked ? "+0.013 ETH" : "0 ETH"}</span>
          </div>
        </div>
        <button
          onClick={() => setStaked(!staked)}
          className="w-full px-4 py-3 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          {staked ? "Unstake" : "Stake ETH"}
        </button>
      </div>
    </div>
  );
}

// YieldFarm Preview
export function YieldFarmPreview() {
  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-gradient-to-r from-purple-500 to-pink-500">
        <span className="font-bold uppercase text-white">■ Yield Farm</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 border-2 border-amber-600 bg-purple-500 flex items-center justify-center text-white font-bold z-10">U</div>
            <div className="w-10 h-10 border-2 border-amber-600 bg-blue-500 flex items-center justify-center text-white font-bold">⟠</div>
          </div>
          <div>
            <div className="font-bold text-amber-900 dark:text-amber-100">UNI-ETH LP</div>
            <div className="text-xs text-amber-500">Liquidity Pool</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 border-2 border-amber-400 bg-amber-100 dark:bg-amber-900 text-center">
            <div className="text-xs text-amber-500 uppercase">APR</div>
            <div className="font-bold text-green-600">42.5%</div>
          </div>
          <div className="p-2 border-2 border-amber-400 bg-amber-100 dark:bg-amber-900 text-center">
            <div className="text-xs text-amber-500 uppercase">TVL</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">$8.2M</div>
          </div>
          <div className="p-2 border-2 border-amber-400 bg-amber-100 dark:bg-amber-900 text-center">
            <div className="text-xs text-amber-500 uppercase">Earned</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">12.5</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Deposit
          </button>
          <button className="flex-1 px-3 py-2 border-4 border-green-600 bg-green-500 text-white font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Harvest
          </button>
        </div>
      </div>
    </div>
  );
}

// ========== TRADING COMPONENTS ==========

// PerpPositionCard Preview
export function PerpPositionCardPreview() {
  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold">LONG</span>
          <span className="font-bold text-amber-900 dark:text-amber-100">ETH-PERP</span>
        </div>
        <span className="text-xs text-amber-500">10x</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs text-amber-500 uppercase">Entry Price</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">$1,820.50</div>
          </div>
          <div>
            <div className="text-xs text-amber-500 uppercase">Mark Price</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">$1,834.20</div>
          </div>
          <div>
            <div className="text-xs text-amber-500 uppercase">Size</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">0.5 ETH</div>
          </div>
          <div>
            <div className="text-xs text-amber-500 uppercase">PnL</div>
            <div className="font-bold text-green-600">+$68.50 (+7.5%)</div>
          </div>
        </div>
        <div className="h-2 border-2 border-amber-500 bg-amber-200">
          <div className="h-full w-3/4 bg-green-500" />
        </div>
        <div className="flex justify-between text-xs text-amber-500">
          <span>Liq: $1,640.00</span>
          <span>Margin: 75%</span>
        </div>
      </div>
    </div>
  );
}

// OrderBook Preview
export function OrderBookPreview() {
  const asks = [
    { price: "1,838.50", size: "2.5", total: "12.5" },
    { price: "1,837.20", size: "1.8", total: "10.0" },
    { price: "1,836.00", size: "3.2", total: "8.2" },
  ];
  const bids = [
    { price: "1,834.50", size: "4.1", total: "4.1" },
    { price: "1,833.20", size: "2.7", total: "6.8" },
    { price: "1,832.00", size: "1.9", total: "8.7" },
  ];

  return (
    <div className="w-full max-w-xs font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-3 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <span className="font-bold uppercase text-sm text-amber-900 dark:text-amber-100">■ Order Book</span>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-3 text-xs text-amber-500 uppercase mb-1 px-1">
          <span>Price</span>
          <span className="text-center">Size</span>
          <span className="text-right">Total</span>
        </div>
        {/* Asks */}
        {asks.map((ask, i) => (
          <div key={i} className="grid grid-cols-3 text-sm py-0.5 px-1 relative">
            <div className="absolute inset-0 bg-red-500/20" style={{ width: `${(parseFloat(ask.total) / 15) * 100}%` }} />
            <span className="text-red-500 font-bold relative">{ask.price}</span>
            <span className="text-center text-amber-700 dark:text-amber-300 relative">{ask.size}</span>
            <span className="text-right text-amber-500 relative">{ask.total}</span>
          </div>
        ))}
        {/* Spread */}
        <div className="my-2 py-1 border-y-2 border-amber-400 text-center">
          <span className="text-amber-900 dark:text-amber-100 font-bold">1,835.50</span>
          <span className="text-xs text-amber-500 ml-2">Spread: 0.02%</span>
        </div>
        {/* Bids */}
        {bids.map((bid, i) => (
          <div key={i} className="grid grid-cols-3 text-sm py-0.5 px-1 relative">
            <div className="absolute inset-0 bg-green-500/20 right-0" style={{ width: `${(parseFloat(bid.total) / 15) * 100}%`, marginLeft: 'auto' }} />
            <span className="text-green-600 font-bold relative">{bid.price}</span>
            <span className="text-center text-amber-700 dark:text-amber-300 relative">{bid.size}</span>
            <span className="text-right text-amber-500 relative">{bid.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// LeverageSlider Preview
export function LeverageSliderPreview() {
  const [leverage, setLeverage] = useState(5);

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950 p-4">
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">Leverage</span>
        <span className="text-2xl font-bold text-amber-900 dark:text-amber-100">{leverage}x</span>
      </div>
      <input
        type="range"
        min="1"
        max="100"
        value={leverage}
        onChange={(e) => setLeverage(Number(e.target.value))}
        className="w-full h-4 appearance-none bg-amber-200 dark:bg-amber-800 border-4 border-amber-500 cursor-pointer"
      />
      <div className="flex justify-between mt-2">
        {[1, 5, 10, 25, 50, 100].map(l => (
          <button
            key={l}
            onClick={() => setLeverage(l)}
            className={`px-2 py-1 text-xs font-bold ${
              leverage === l
                ? "bg-amber-500 text-white"
                : "text-amber-600 hover:bg-amber-200"
            }`}
          >
            {l}x
          </button>
        ))}
      </div>
      {leverage > 20 && (
        <div className="mt-3 p-2 border-2 border-red-500 bg-red-100 dark:bg-red-900/30 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <span className="text-xs text-red-600 dark:text-red-400 uppercase">High leverage risk</span>
        </div>
      )}
    </div>
  );
}

// TradingPair Preview
export function TradingPairPreview() {
  const [pair, setPair] = useState("ETH/USD");

  const pairs = [
    { name: "ETH/USD", price: "1,834.52", change: "+2.34%" },
    { name: "BTC/USD", price: "43,521.00", change: "+1.12%" },
    { name: "SOL/USD", price: "98.45", change: "-0.85%" },
  ];

  return (
    <div className="font-mono">
      <div className="flex gap-2">
        {pairs.map(p => (
          <button
            key={p.name}
            onClick={() => setPair(p.name)}
            className={`px-4 py-3 border-4 transition-all ${
              pair === p.name
                ? "border-amber-600 bg-amber-200 dark:bg-amber-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]"
                : "border-amber-400 dark:border-amber-600 hover:border-amber-500"
            }`}
          >
            <div className="font-bold text-amber-900 dark:text-amber-100">{p.name}</div>
            <div className="text-sm text-amber-700 dark:text-amber-300">{p.price}</div>
            <div className={`text-xs font-bold ${p.change.startsWith("+") ? "text-green-600" : "text-red-500"}`}>
              {p.change}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// FundingRate Preview
export function FundingRatePreview() {
  return (
    <div className="w-full max-w-xs font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <span className="font-bold uppercase text-sm text-amber-900 dark:text-amber-100">■ Funding Rate</span>
      </div>
      <div className="p-4">
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-green-600">+0.0123%</div>
          <div className="text-xs text-amber-500 uppercase mt-1">Longs pay shorts</div>
        </div>
        <div className="flex justify-between text-sm border-t-2 border-amber-400 pt-3">
          <div>
            <div className="text-xs text-amber-500 uppercase">Next in</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">02:34:12</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-amber-500 uppercase">Avg (8h)</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">0.0098%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== PREDICTION MARKETS ==========

// PredictionCard Preview
export function PredictionCardPreview() {
  const [selected, setSelected] = useState<"yes" | "no" | null>(null);

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex justify-between">
        <span className="font-bold uppercase text-sm text-amber-900 dark:text-amber-100">■ Prediction</span>
        <span className="text-xs text-amber-500">Ends in 3d 12h</span>
      </div>
      <div className="p-4 space-y-4">
        <h3 className="font-bold text-amber-900 dark:text-amber-100">
          Will ETH reach $2,000 by end of month?
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setSelected("yes")}
            className={`px-4 py-3 border-4 font-bold uppercase transition-all ${
              selected === "yes"
                ? "border-green-600 bg-green-500 text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                : "border-green-400 text-green-600 hover:bg-green-100"
            }`}
          >
            <div>Yes</div>
            <div className="text-xl">65%</div>
          </button>
          <button
            onClick={() => setSelected("no")}
            className={`px-4 py-3 border-4 font-bold uppercase transition-all ${
              selected === "no"
                ? "border-red-600 bg-red-500 text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                : "border-red-400 text-red-600 hover:bg-red-100"
            }`}
          >
            <div>No</div>
            <div className="text-xl">35%</div>
          </button>
        </div>
        <div className="text-xs text-amber-500 flex justify-between">
          <span>Volume: $125,432</span>
          <span>Liquidity: $45,000</span>
        </div>
      </div>
    </div>
  );
}

// OutcomeBar Preview
export function OutcomeBarPreview() {
  const outcomes = [
    { label: "Yes", percentage: 65, color: "bg-green-500" },
    { label: "No", percentage: 35, color: "bg-red-500" },
  ];

  return (
    <div className="w-full max-w-sm font-mono">
      <div className="flex h-8 border-4 border-amber-600 overflow-hidden">
        {outcomes.map(o => (
          <div
            key={o.label}
            className={`${o.color} flex items-center justify-center text-white font-bold text-sm`}
            style={{ width: `${o.percentage}%` }}
          >
            {o.label} {o.percentage}%
          </div>
        ))}
      </div>
    </div>
  );
}

// MarketStats Preview
export function MarketStatsPreview() {
  return (
    <div className="w-full max-w-md font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950 p-4">
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Volume", value: "$1.2M" },
          { label: "Traders", value: "2,345" },
          { label: "Liquidity", value: "$456K" },
          { label: "Open Int.", value: "$890K" },
        ].map(stat => (
          <div key={stat.label} className="text-center p-2 border-2 border-amber-400 bg-amber-100 dark:bg-amber-900">
            <div className="text-xs text-amber-500 uppercase">{stat.label}</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========== NFT COMPONENTS ==========

// NFTCard Preview
export function NFTCardPreview() {
  return (
    <div className="w-full max-w-xs font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="aspect-square bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 flex items-center justify-center border-b-4 border-amber-500">
        <Image className="w-16 h-16 text-white/50" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="font-bold text-amber-900 dark:text-amber-100">Pixel Punk #1234</div>
            <div className="text-xs text-amber-500">CryptoPunks</div>
          </div>
          <span className="px-2 py-0.5 bg-amber-500 text-white text-xs font-bold">#1234</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t-2 border-amber-400">
          <div>
            <div className="text-xs text-amber-500 uppercase">Price</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">2.5 ETH</div>
          </div>
          <button className="px-4 py-2 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

// NFTGallery Preview
export function NFTGalleryPreview() {
  const nfts = [1, 2, 3, 4, 5, 6];
  const gradients = [
    "from-purple-400 to-pink-500",
    "from-blue-400 to-cyan-500",
    "from-green-400 to-emerald-500",
    "from-orange-400 to-red-500",
    "from-violet-400 to-purple-500",
    "from-yellow-400 to-orange-500",
  ];

  return (
    <div className="w-full max-w-md font-mono">
      <div className="grid grid-cols-3 gap-2">
        {nfts.map((nft, i) => (
          <div key={nft} className="border-4 border-amber-500 hover:border-amber-600 transition-all cursor-pointer group">
            <div className={`aspect-square bg-gradient-to-br ${gradients[i]} flex items-center justify-center group-hover:scale-105 transition-transform`}>
              <span className="text-2xl text-white/70">#{nft}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// NFTBid Preview
export function NFTBidPreview() {
  const [bid, setBid] = useState("2.5");

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Place Bid</span>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <div className="flex justify-between text-xs text-amber-500 uppercase mb-1">
            <span>Current Highest</span>
            <span>2.3 ETH</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={bid}
              onChange={(e) => setBid(e.target.value)}
              className="flex-1 px-3 py-2 border-4 border-amber-500 bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 font-bold text-xl focus:outline-none"
            />
            <span className="px-3 py-2 border-4 border-amber-500 bg-amber-200 dark:bg-amber-800 font-bold text-amber-700 dark:text-amber-300">
              ETH
            </span>
          </div>
        </div>
        <button className="w-full px-4 py-3 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Place Bid
        </button>
      </div>
    </div>
  );
}

// ========== BRIDGE COMPONENTS ==========

// BridgeInterface Preview
export function BridgeInterfacePreview() {
  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Bridge</span>
      </div>
      <div className="p-4 space-y-3">
        {/* From Chain */}
        <div className="p-3 border-4 border-amber-400 bg-amber-100 dark:bg-amber-900">
          <div className="text-xs text-amber-500 uppercase mb-2">From</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 flex items-center justify-center text-white font-bold">⟠</div>
              <span className="font-bold text-amber-900 dark:text-amber-100">Ethereum</span>
            </div>
            <input className="w-24 bg-transparent text-right text-xl font-bold text-amber-900 dark:text-amber-100 focus:outline-none" placeholder="0.0" />
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <button className="p-2 border-4 border-amber-600 bg-amber-500 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <ArrowLeftRight className="w-5 h-5" />
          </button>
        </div>

        {/* To Chain */}
        <div className="p-3 border-4 border-amber-400 bg-amber-100 dark:bg-amber-900">
          <div className="text-xs text-amber-500 uppercase mb-2">To</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-500 flex items-center justify-center text-white font-bold">⬡</div>
              <span className="font-bold text-amber-900 dark:text-amber-100">Polygon</span>
            </div>
            <span className="text-xl font-bold text-amber-900 dark:text-amber-100">0.0</span>
          </div>
        </div>

        <div className="text-xs text-amber-500 flex justify-between">
          <span>Est. time: ~15 min</span>
          <span>Fee: ~$5.00</span>
        </div>

        <button className="w-full px-4 py-3 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Bridge
        </button>
      </div>
    </div>
  );
}

// ChainSelector Preview
export function ChainSelectorPreview() {
  const [from, setFrom] = useState("Ethereum");
  const [to, setTo] = useState("Polygon");
  const chains = ["Ethereum", "Polygon", "Arbitrum", "Optimism", "BSC"];

  return (
    <div className="w-full max-w-md font-mono flex items-center gap-4">
      <div className="flex-1">
        <div className="text-xs text-amber-500 uppercase mb-1">From</div>
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="w-full px-3 py-2 border-4 border-amber-500 bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 font-bold uppercase focus:outline-none"
        >
          {chains.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <ArrowRight className="w-6 h-6 text-amber-500 mt-5" />
      <div className="flex-1">
        <div className="text-xs text-amber-500 uppercase mb-1">To</div>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full px-3 py-2 border-4 border-amber-500 bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 font-bold uppercase focus:outline-none"
        >
          {chains.filter(c => c !== from).map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    </div>
  );
}

// ========== GOVERNANCE ==========

// ProposalCard Preview
export function ProposalCardPreview() {
  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex justify-between items-center">
        <span className="font-bold uppercase text-sm text-amber-900 dark:text-amber-100">■ Proposal #42</span>
        <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold">ACTIVE</span>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-amber-900 dark:text-amber-100">
          Increase staking rewards by 2%
        </h3>
        <p className="text-sm text-amber-600 dark:text-amber-400">
          This proposal aims to increase the current staking rewards from 5% to 7% APY...
        </p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-green-600 font-bold">For: 68%</span>
            <span className="text-red-500 font-bold">Against: 32%</span>
          </div>
          <div className="flex h-4 border-2 border-amber-500 overflow-hidden">
            <div className="bg-green-500" style={{ width: "68%" }} />
            <div className="bg-red-500" style={{ width: "32%" }} />
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          <button className="flex-1 px-3 py-2 border-4 border-green-600 bg-green-500 text-white font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Vote className="w-4 h-4 inline mr-1" />
            For
          </button>
          <button className="flex-1 px-3 py-2 border-4 border-red-600 bg-red-500 text-white font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Vote className="w-4 h-4 inline mr-1" />
            Against
          </button>
        </div>
      </div>
    </div>
  );
}

// VotingPower Preview
export function VotingPowerPreview() {
  return (
    <div className="w-full max-w-xs font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950 p-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 border-4 border-amber-500 bg-amber-300 dark:bg-amber-700 flex items-center justify-center">
          <Shield className="w-6 h-6 text-amber-700 dark:text-amber-300" />
        </div>
        <div>
          <div className="text-xs text-amber-500 uppercase">Voting Power</div>
          <div className="text-2xl font-bold text-amber-900 dark:text-amber-100">1,234.56</div>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-amber-600 dark:text-amber-400">Token Balance</span>
          <span className="font-bold text-amber-900 dark:text-amber-100">1,000.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-amber-600 dark:text-amber-400">Delegated</span>
          <span className="font-bold text-amber-900 dark:text-amber-100">+234.56</span>
        </div>
      </div>
    </div>
  );
}

// DelegateCard Preview
export function DelegateCardPreview() {
  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 border-4 border-amber-500 bg-purple-500 flex items-center justify-center text-white font-bold">
            VB
          </div>
          <div className="flex-1">
            <div className="font-bold text-amber-900 dark:text-amber-100">vitalik.eth</div>
            <div className="text-xs text-amber-500 font-mono">0x1234...5678</div>
          </div>
          <Users className="w-5 h-5 text-amber-500" />
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 border-2 border-amber-400 bg-amber-100 dark:bg-amber-900">
            <div className="text-xs text-amber-500 uppercase">Power</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">5.2M</div>
          </div>
          <div className="text-center p-2 border-2 border-amber-400 bg-amber-100 dark:bg-amber-900">
            <div className="text-xs text-amber-500 uppercase">Delegates</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">1,234</div>
          </div>
          <div className="text-center p-2 border-2 border-amber-400 bg-amber-100 dark:bg-amber-900">
            <div className="text-xs text-amber-500 uppercase">Votes</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">42</div>
          </div>
        </div>
        <button className="w-full px-4 py-2 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          Delegate
        </button>
      </div>
    </div>
  );
}
