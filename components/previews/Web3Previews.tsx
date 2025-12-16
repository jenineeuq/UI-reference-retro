"use client";

import { useState, useEffect } from "react";
import {
  Wallet, Copy, Check, ArrowUpRight, ArrowDownLeft, RefreshCw,
  TrendingUp, TrendingDown, Repeat, Settings, ChevronDown, ExternalLink,
  AlertTriangle, Clock, Zap, Shield, Vote, Users, Image, Layers,
  ArrowLeftRight, BarChart3, Target, DollarSign, ArrowRight, Sparkles
} from "lucide-react";

// ========== TOKEN/CHAIN LOGO COMPONENTS ==========

// Actual styled token logos
const TokenLogos: Record<string, React.ReactNode> = {
  ETH: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle fill="#627EEA" cx="16" cy="16" r="16"/>
      <g fill="#fff">
        <polygon fillOpacity=".6" points="16.498 4 16.498 13.229 24.006 16.502"/>
        <polygon points="16.498 4 8.99 16.502 16.498 13.229"/>
        <polygon fillOpacity=".6" points="16.498 21.968 16.498 27.995 24.011 17.921"/>
        <polygon points="16.498 27.995 16.498 21.967 8.99 17.921"/>
        <polygon fillOpacity=".2" points="16.498 20.573 24.006 16.502 16.498 13.23"/>
        <polygon fillOpacity=".6" points="8.99 16.502 16.498 20.573 16.498 13.23"/>
      </g>
    </svg>
  ),
  BTC: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle fill="#F7931A" cx="16" cy="16" r="16"/>
      <path fill="#fff" d="M22.5 14.5c.3-2-1.2-3.1-3.4-3.8l.7-2.8-1.7-.4-.7 2.7c-.4-.1-.9-.2-1.4-.3l.7-2.7-1.7-.4-.7 2.8c-.4-.1-.7-.2-1-.2l-2.4-.6-.4 1.8s1.3.3 1.2.3c.7.2.8.6.8 1l-.8 3.2c0 0 .1 0 .2.1h-.2l-1.1 4.5c-.1.2-.3.5-.8.4 0 0-1.2-.3-1.2-.3l-.9 2 2.3.6c.4.1.8.2 1.2.3l-.7 2.8 1.7.4.7-2.8c.5.1.9.2 1.4.3l-.7 2.8 1.7.4.7-2.8c2.9.5 5.1.3 6-2.3.7-2.1 0-3.3-1.5-4.1 1.1-.3 1.9-1 2.1-2.5zm-3.8 5.3c-.5 2.1-4 1-5.1.7l.9-3.7c1.1.3 4.8.8 4.2 3zm.5-5.4c-.5 1.9-3.4.9-4.3.7l.8-3.4c.9.2 4 .7 3.5 2.7z"/>
    </svg>
  ),
  USDC: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle fill="#2775CA" cx="16" cy="16" r="16"/>
      <path fill="#fff" d="M16 6C10.48 6 6 10.48 6 16s4.48 10 10 10 10-4.48 10-10S21.52 6 16 6zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13h-1v2h-1.5v1h1.5v4h-1.5v1h1.5v2h1v-2h1.5v-1h-1.5v-4h1.5v-1h-1.5v-2z"/>
      <text x="16" y="18" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">$</text>
    </svg>
  ),
  USDT: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle fill="#26A17B" cx="16" cy="16" r="16"/>
      <path fill="#fff" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"/>
    </svg>
  ),
  LINK: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle fill="#2A5ADA" cx="16" cy="16" r="16"/>
      <path fill="#fff" d="M16 6l-1.5.9-6 3.5-1.5.9v9.4l1.5.9 6 3.5 1.5.9 1.5-.9 6-3.5 1.5-.9v-9.4l-1.5-.9-6-3.5-1.5-.9zm4.5 12.1l-4.5 2.6-4.5-2.6v-5.2l4.5-2.6 4.5 2.6v5.2z"/>
    </svg>
  ),
  UNI: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle fill="#FF007A" cx="16" cy="16" r="16"/>
      <path fill="#fff" d="M11 10c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3H11zm5 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"/>
    </svg>
  ),
  SOL: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="sol-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FFA3"/>
          <stop offset="100%" stopColor="#DC1FFF"/>
        </linearGradient>
      </defs>
      <circle fill="url(#sol-gradient)" cx="16" cy="16" r="16"/>
      <path fill="#fff" d="M10 18.5l2-2h10l-2 2H10zm0-5l2 2h10l-2-2H10zm12-3l-2-2H10l2 2h10z"/>
    </svg>
  ),
  MATIC: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle fill="#8247E5" cx="16" cy="16" r="16"/>
      <path fill="#fff" d="M21.5 12.5L17 10l-5 2.5v5l5 2.5 4.5-2.5v-5zm-5 6.25L13 16.5v-3l3.5-1.75 3.5 1.75v3l-3.5 2.25z"/>
    </svg>
  ),
  ARB: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle fill="#28A0F0" cx="16" cy="16" r="16"/>
      <path fill="#fff" d="M16 8l-6 10 6-4 6 4-6-10zm-6 12l6 4 6-4-6 2-6-2z"/>
    </svg>
  ),
  OP: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle fill="#FF0420" cx="16" cy="16" r="16"/>
      <circle fill="#fff" cx="16" cy="16" r="6"/>
    </svg>
  ),
  BSC: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle fill="#F3BA2F" cx="16" cy="16" r="16"/>
      <path fill="#fff" d="M16 6l-2.5 2.5L16 11l2.5-2.5L16 6zm-6 6l-2.5 2.5L10 17l2.5-2.5L10 12zm12 0l-2.5 2.5L22 17l2.5-2.5L22 12zm-6 4l-2.5 2.5L16 21l2.5-2.5L16 16zm-6 4l-2.5 2.5L10 25l2.5-2.5L10 20zm12 0l-2.5 2.5L22 25l2.5-2.5L22 20z"/>
    </svg>
  ),
};

// Chain logo component
function ChainLogo({ chain, size = "md" }: { chain: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = { sm: "w-5 h-5", md: "w-8 h-8", lg: "w-10 h-10" };
  const chainMap: Record<string, string> = {
    "Ethereum": "ETH",
    "Polygon": "MATIC",
    "Arbitrum": "ARB",
    "Optimism": "OP",
    "BSC": "BSC",
    "Solana": "SOL",
  };
  const tokenKey = chainMap[chain] || chain;

  return (
    <div className={`${sizeClasses[size]} rounded-sm overflow-hidden`}>
      {TokenLogos[tokenKey] || (
        <div className="w-full h-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs">
          {chain.charAt(0)}
        </div>
      )}
    </div>
  );
}

// Token logo component
function TokenLogo({ token, size = "md" }: { token: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = { sm: "w-5 h-5", md: "w-8 h-8", lg: "w-10 h-10" };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden`}>
      {TokenLogos[token] || (
        <div className="w-full h-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs">
          {token.charAt(0)}
        </div>
      )}
    </div>
  );
}

// ========== WALLET COMPONENTS ==========

// WalletConnect Preview
export function WalletConnectPreview() {
  const [connected, setConnected] = useState(false);
  const [showWallets, setShowWallets] = useState(false);
  const [connecting, setConnecting] = useState<string | null>(null);

  const wallets = [
    { name: "MetaMask", color: "#E2761B", icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path fill="#E2761B" d="M37.5 20c0 9.7-7.8 17.5-17.5 17.5S2.5 29.7 2.5 20 10.3 2.5 20 2.5 37.5 10.3 37.5 20z"/>
        <path fill="#fff" d="M28 12l-8 6 1.5-3.5L28 12zm-16 0l6.5 2.5L20 18l-8-6zm11.5 14l-1 3-2.5-1-2.5 1-1-3h7zm-12 0l1 3-1 3h-2l2-6zm14 0l-2 6h-2l1-3 1-3h2z"/>
      </svg>
    )},
    { name: "WalletConnect", color: "#3B99FC", icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <circle fill="#3B99FC" cx="20" cy="20" r="17.5"/>
        <path fill="#fff" d="M12 16c4.4-4.4 11.6-4.4 16 0l.5.5c.2.2.2.6 0 .8l-1.7 1.7c-.1.1-.3.1-.4 0l-.7-.7c-3.1-3.1-8.1-3.1-11.2 0l-.8.8c-.1.1-.3.1-.4 0l-1.7-1.7c-.2-.2-.2-.6 0-.8l.4-.6zm19.8 3.7l1.5 1.5c.2.2.2.6 0 .8l-6.8 6.8c-.2.2-.6.2-.8 0l-4.8-4.8c-.1-.1-.2-.1-.2 0l-4.8 4.8c-.2.2-.6.2-.8 0L8.3 22c-.2-.2-.2-.6 0-.8l1.5-1.5c.2-.2.6-.2.8 0l4.8 4.8c.1.1.2.1.2 0l4.8-4.8c.2-.2.6-.2.8 0l4.8 4.8c.1.1.2.1.2 0l4.8-4.8c.2-.2.6-.2.8 0z"/>
      </svg>
    )},
    { name: "Coinbase", color: "#0052FF", icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <circle fill="#0052FF" cx="20" cy="20" r="17.5"/>
        <rect fill="#fff" x="12" y="12" width="16" height="16" rx="4"/>
        <rect fill="#0052FF" x="16" y="16" width="8" height="8" rx="2"/>
      </svg>
    )},
    { name: "Phantom", color: "#AB9FF2", icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <defs>
          <linearGradient id="phantom-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#534BB1"/>
            <stop offset="100%" stopColor="#AB9FF2"/>
          </linearGradient>
        </defs>
        <circle fill="url(#phantom-grad)" cx="20" cy="20" r="17.5"/>
        <ellipse fill="#fff" cx="15" cy="18" rx="3" ry="4"/>
        <ellipse fill="#fff" cx="25" cy="18" rx="3" ry="4"/>
        <circle fill="#534BB1" cx="15" cy="18" r="1.5"/>
        <circle fill="#534BB1" cx="25" cy="18" r="1.5"/>
      </svg>
    )},
  ];

  const handleConnect = (walletName: string) => {
    setConnecting(walletName);
    setTimeout(() => {
      setConnected(true);
      setShowWallets(false);
      setConnecting(null);
    }, 1500);
  };

  return (
    <div className="font-mono">
      {!connected ? (
        <div>
          <button
            onClick={() => setShowWallets(true)}
            className="px-6 py-3 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2"
          >
            <Wallet className="w-5 h-5" />
            Connect Wallet
          </button>

          {showWallets && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
              <div className="w-full max-w-sm border-4 border-amber-600 bg-amber-50 dark:bg-amber-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-[bounce-in_0.3s_ease-out]">
                <div className="px-4 py-3 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
                  <h3 className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Select Wallet</h3>
                </div>
                <div className="p-4 space-y-2">
                  {wallets.map(wallet => (
                    <button
                      key={wallet.name}
                      onClick={() => handleConnect(wallet.name)}
                      disabled={connecting !== null}
                      className={`w-full flex items-center gap-3 px-4 py-3 border-4 border-amber-400 dark:border-amber-600 bg-amber-100 dark:bg-amber-900 hover:bg-amber-200 dark:hover:bg-amber-800 hover:border-amber-500 transition-all ${
                        connecting === wallet.name ? "animate-pulse" : ""
                      }`}
                    >
                      {wallet.icon}
                      <span className="font-bold uppercase text-amber-800 dark:text-amber-200">{wallet.name}</span>
                      {connecting === wallet.name && (
                        <RefreshCw className="w-4 h-4 ml-auto animate-spin text-amber-600" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="p-4 border-t-4 border-amber-400">
                  <button
                    onClick={() => setShowWallets(false)}
                    className="w-full px-4 py-2 border-4 border-amber-400 font-bold uppercase text-amber-700 hover:bg-amber-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-3 px-4 py-2 border-4 border-green-500 bg-green-100 dark:bg-green-900/30 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]">
          <div className="w-3 h-3 bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          <span className="text-green-800 dark:text-green-300 font-bold uppercase">Connected</span>
          <span className="font-mono text-sm text-green-600">0x1234...5678</span>
          <button
            onClick={() => setConnected(false)}
            className="ml-auto text-red-500 hover:text-red-700 font-bold uppercase text-sm transition-colors"
          >
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
  const [balance, setBalance] = useState(12458.32);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalance(prev => prev + (Math.random() - 0.48) * 50);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const copyAddress = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const change = ((balance - 12458.32) / 12458.32 * 100);

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="px-4 py-3 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <div className="flex items-center justify-between">
          <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Wallet</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-amber-700 dark:text-amber-300 font-mono">0x1234...5678</span>
            <button onClick={copyAddress} className="p-1 hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors">
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-amber-600" />}
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-4xl font-bold text-amber-900 dark:text-amber-100 transition-all">
          ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className={`flex items-center gap-1 mt-1 ${change >= 0 ? "text-green-600" : "text-red-500"}`}>
          {change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span className="text-sm font-bold">{change >= 0 ? "+" : ""}{change.toFixed(2)}%</span>
          <span className="text-xs text-amber-500">24h</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 border-t-4 border-amber-400 dark:border-amber-600">
        <button className="px-4 py-2 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
          <ArrowUpRight className="w-4 h-4" />
          Send
        </button>
        <button className="px-4 py-2 border-4 border-amber-500 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
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
  const [network, setNetwork] = useState("Ethereum");

  const networks = ["Ethereum", "Polygon", "Arbitrum", "Optimism", "BSC"];

  return (
    <div className="font-mono relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 border-4 border-amber-600 bg-amber-200 dark:bg-amber-800 font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
      >
        <ChainLogo chain={network} size="sm" />
        <span className="uppercase text-amber-800 dark:text-amber-200">{network}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute z-20 top-full left-0 mt-1 w-48 border-4 border-amber-600 bg-amber-50 dark:bg-amber-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {networks.map(n => (
              <button
                key={n}
                onClick={() => { setNetwork(n); setOpen(false); }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left uppercase font-bold text-sm transition-colors ${
                  network === n
                    ? "bg-amber-200 dark:bg-amber-800"
                    : "hover:bg-amber-100 dark:hover:bg-amber-900"
                }`}
              >
                <ChainLogo chain={n} size="sm" />
                <span className="text-amber-800 dark:text-amber-200">{n}</span>
                {network === n && <Check className="w-4 h-4 ml-auto text-green-500" />}
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
  const [tokens, setTokens] = useState([
    { symbol: "ETH", name: "Ethereum", balance: "2.5432", value: 4521.32, change: 3.2 },
    { symbol: "USDC", name: "USD Coin", balance: "1,234.00", value: 1234.00, change: 0.01 },
    { symbol: "LINK", name: "Chainlink", balance: "150.00", value: 2145.00, change: -1.5 },
    { symbol: "UNI", name: "Uniswap", balance: "85.50", value: 512.85, change: 2.8 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTokens(prev => prev.map(token => ({
        ...token,
        value: token.value * (1 + (Math.random() - 0.5) * 0.02),
        change: token.change + (Math.random() - 0.5) * 0.5,
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Tokens</span>
      </div>
      <div className="divide-y-4 divide-amber-300 dark:divide-amber-700">
        {tokens.map(token => (
          <div key={token.symbol} className="flex items-center gap-3 px-4 py-3 hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors cursor-pointer">
            <TokenLogo token={token.symbol} />
            <div className="flex-1">
              <div className="font-bold text-amber-900 dark:text-amber-100">{token.symbol}</div>
              <div className="text-xs text-amber-600 dark:text-amber-400">{token.name}</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-amber-900 dark:text-amber-100">{token.balance}</div>
              <div className={`text-xs font-bold ${token.change >= 0 ? "text-green-600" : "text-red-500"}`}>
                ${token.value.toLocaleString(undefined, { maximumFractionDigits: 2 })} ({token.change >= 0 ? "+" : ""}{token.change.toFixed(1)}%)
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
  const [selectedToken, setSelectedToken] = useState("ETH");
  const [showTokens, setShowTokens] = useState(false);

  const tokens = ["ETH", "USDC", "LINK", "UNI"];
  const balances: Record<string, string> = { ETH: "2.5432", USDC: "1,234.00", LINK: "150.00", UNI: "85.50" };

  return (
    <div className="w-full max-w-sm font-mono">
      <div className="border-4 border-amber-600 dark:border-amber-500 bg-amber-100 dark:bg-amber-900 p-4">
        <div className="flex justify-between mb-2 text-sm text-amber-600 dark:text-amber-400 uppercase">
          <span>Amount</span>
          <span>Balance: {balances[selectedToken]} {selectedToken}</span>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-transparent text-2xl font-bold text-amber-900 dark:text-amber-100 focus:outline-none"
            placeholder="0.0"
          />
          <div className="relative">
            <button
              onClick={() => setShowTokens(!showTokens)}
              className="flex items-center gap-2 px-3 py-2 border-4 border-amber-500 bg-amber-200 dark:bg-amber-800 font-bold hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors"
            >
              <TokenLogo token={selectedToken} size="sm" />
              <span className="text-amber-800 dark:text-amber-200">{selectedToken}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showTokens ? "rotate-180" : ""}`} />
            </button>
            {showTokens && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowTokens(false)} />
                <div className="absolute z-20 top-full right-0 mt-1 w-40 border-4 border-amber-500 bg-amber-50 dark:bg-amber-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {tokens.map(t => (
                    <button
                      key={t}
                      onClick={() => { setSelectedToken(t); setShowTokens(false); }}
                      className="w-full flex items-center gap-2 px-3 py-2 hover:bg-amber-200 dark:hover:bg-amber-800 transition-colors"
                    >
                      <TokenLogo token={t} size="sm" />
                      <span className="font-bold text-amber-800 dark:text-amber-200">{t}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          {["25%", "50%", "75%", "MAX"].map(pct => (
            <button
              key={pct}
              onClick={() => setAmount(pct === "MAX" ? balances[selectedToken] : (parseFloat(balances[selectedToken].replace(",", "")) * parseInt(pct) / 100).toFixed(4))}
              className="flex-1 px-2 py-1 border-2 border-amber-500 text-xs font-bold uppercase text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-800 transition-colors"
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
  const [status, setStatus] = useState<"idle" | "approving" | "approved">("idle");

  const handleApprove = () => {
    setStatus("approving");
    setTimeout(() => setStatus("approved"), 2000);
  };

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-3 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <h3 className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Token Approval</h3>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-3">
          <TokenLogo token="USDC" size="lg" />
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
          onClick={handleApprove}
          disabled={status !== "idle"}
          className={`w-full px-4 py-3 border-4 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 ${
            status === "approved"
              ? "border-green-600 bg-green-500 text-white"
              : status === "approving"
              ? "border-amber-500 bg-amber-400 text-white cursor-wait"
              : "border-amber-600 bg-amber-500 text-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
          }`}
        >
          {status === "approving" && <RefreshCw className="w-5 h-5 animate-spin" />}
          {status === "approved" && <Check className="w-5 h-5" />}
          {status === "idle" ? "Approve USDC" : status === "approving" ? "Approving..." : "Approved!"}
        </button>
      </div>
    </div>
  );
}

// TokenPrice Preview
export function TokenPricePreview() {
  const [price, setPrice] = useState(1834.52);
  const [change, setChange] = useState(2.34);

  useEffect(() => {
    const interval = setInterval(() => {
      const newChange = (Math.random() - 0.48) * 2;
      setPrice(prev => prev * (1 + newChange / 100));
      setChange(prev => prev + newChange * 0.1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xs font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <TokenLogo token="ETH" size="lg" />
          <div>
            <div className="font-bold text-amber-900 dark:text-amber-100">ETH</div>
            <div className="text-xs text-amber-600 dark:text-amber-400">Ethereum</div>
          </div>
        </div>
        <div className="text-3xl font-bold text-amber-900 dark:text-amber-100 transition-all">
          ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className={`flex items-center gap-2 mt-1 ${change >= 0 ? "text-green-600" : "text-red-500"}`}>
          {change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span className="font-bold">{change >= 0 ? "+" : ""}{change.toFixed(2)}%</span>
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
  const [txs, setTxs] = useState([
    { type: "send", token: "ETH", amount: "-0.5 ETH", to: "0xabc...def", status: "completed", time: "2 min ago" },
    { type: "receive", token: "USDC", amount: "+100 USDC", from: "0x123...456", status: "completed", time: "1 hr ago" },
    { type: "swap", token: "ETH", amount: "1 ETH → 1800 USDC", status: "pending", time: "Just now" },
  ]);

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex justify-between items-center">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ History</span>
        <RefreshCw className="w-4 h-4 text-amber-600 dark:text-amber-400 cursor-pointer hover:rotate-180 transition-transform duration-500" />
      </div>
      <div className="divide-y-2 divide-amber-300 dark:divide-amber-700">
        {txs.map((tx, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors cursor-pointer">
            <div className={`w-10 h-10 border-2 flex items-center justify-center ${
              tx.type === "send" ? "border-red-500 bg-red-100 dark:bg-red-900/30" :
              tx.type === "receive" ? "border-green-500 bg-green-100 dark:bg-green-900/30" :
              "border-blue-500 bg-blue-100 dark:bg-blue-900/30"
            }`}>
              {tx.type === "send" ? <ArrowUpRight className="w-5 h-5 text-red-600" /> :
               tx.type === "receive" ? <ArrowDownLeft className="w-5 h-5 text-green-600" /> :
               <Repeat className="w-5 h-5 text-blue-600" />}
            </div>
            <div className="flex-1">
              <div className={`font-bold text-sm ${tx.amount.startsWith("-") ? "text-red-600" : tx.amount.startsWith("+") ? "text-green-600" : "text-amber-800 dark:text-amber-200"}`}>
                {tx.amount}
              </div>
              <div className="text-xs text-amber-500">{tx.time}</div>
            </div>
            <div className={`px-2 py-0.5 text-xs uppercase font-bold ${
              tx.status === "completed" ? "bg-green-200 text-green-700 dark:bg-green-900/50 dark:text-green-400" :
              "bg-yellow-200 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400 animate-pulse"
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (status === "pending") {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setStatus("confirmed");
            return 100;
          }
          return prev + 10;
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [status]);

  const reset = () => {
    setStatus("pending");
    setProgress(0);
  };

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="p-4 text-center">
        <div className={`w-16 h-16 mx-auto mb-4 border-4 flex items-center justify-center transition-all ${
          status === "pending" ? "border-yellow-500 bg-yellow-100 dark:bg-yellow-900/30" :
          status === "confirmed" ? "border-green-500 bg-green-100 dark:bg-green-900/30 scale-110" :
          "border-red-500 bg-red-100 dark:bg-red-900/30"
        }`}>
          {status === "pending" ? <Clock className="w-8 h-8 text-yellow-600 animate-pulse" /> :
           status === "confirmed" ? <Check className="w-8 h-8 text-green-600" /> :
           <AlertTriangle className="w-8 h-8 text-red-600" />}
        </div>
        <h3 className="font-bold uppercase text-amber-900 dark:text-amber-100 text-lg">
          {status === "pending" ? "Processing..." : status === "confirmed" ? "Confirmed!" : "Failed"}
        </h3>
        <p className="text-sm text-amber-600 dark:text-amber-400 mt-1 font-mono">
          Tx: 0x1234...abcd
        </p>
        {status === "pending" && (
          <div className="mt-4 h-3 border-2 border-amber-500 bg-amber-200 dark:bg-amber-800 overflow-hidden">
            <div
              className="h-full bg-amber-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
      <div className="flex gap-1 p-2 border-t-4 border-amber-400">
        {(["pending", "confirmed", "failed"] as const).map(s => (
          <button
            key={s}
            onClick={() => s === "pending" ? reset() : setStatus(s)}
            className={`flex-1 px-2 py-1 text-xs uppercase font-bold transition-colors ${
              status === s ? "bg-amber-500 text-white" : "bg-amber-200 dark:bg-amber-800 text-amber-700 dark:text-amber-300 hover:bg-amber-300 dark:hover:bg-amber-700"
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
  const [gasData, setGasData] = useState([
    { id: "slow", label: "Slow", gwei: 15, time: "~10 min", cost: 1.20 },
    { id: "standard", label: "Standard", gwei: 25, time: "~3 min", cost: 2.00 },
    { id: "fast", label: "Fast", gwei: 40, time: "~30 sec", cost: 3.20 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGasData(prev => prev.map(opt => ({
        ...opt,
        gwei: Math.round(opt.gwei * (1 + (Math.random() - 0.5) * 0.1)),
        cost: opt.cost * (1 + (Math.random() - 0.5) * 0.1),
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex items-center gap-2">
        <Zap className="w-4 h-4 text-amber-700" />
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">Gas Settings</span>
      </div>
      <div className="p-4 space-y-2">
        {gasData.map(opt => (
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
              <div className="text-xs text-amber-500">${opt.cost.toFixed(2)}</div>
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
  const [fromToken, setFromToken] = useState("ETH");
  const [toToken, setToToken] = useState("USDC");
  const [rate, setRate] = useState(1834.52);

  useEffect(() => {
    const interval = setInterval(() => {
      setRate(prev => prev * (1 + (Math.random() - 0.5) * 0.01));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const swapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
  };

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex justify-between">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Swap</span>
        <Settings className="w-5 h-5 text-amber-600 cursor-pointer hover:rotate-90 transition-transform" />
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
            <div className="flex items-center gap-1 px-2 py-1 border-2 border-amber-500 bg-amber-200 dark:bg-amber-800">
              <TokenLogo token={fromToken} size="sm" />
              <span className="font-bold text-sm text-amber-800 dark:text-amber-200">{fromToken}</span>
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-1 relative z-10">
          <button
            onClick={swapTokens}
            className="p-2 border-4 border-amber-600 bg-amber-500 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:rotate-180 transition-all"
          >
            <ArrowLeftRight className="w-5 h-5" />
          </button>
        </div>

        {/* To */}
        <div className="p-3 border-4 border-amber-400 dark:border-amber-600 bg-amber-100 dark:bg-amber-900">
          <div className="text-xs text-amber-500 uppercase mb-1">To</div>
          <div className="flex items-center gap-2">
            <span className="flex-1 text-xl font-bold text-amber-900 dark:text-amber-100">
              {(parseFloat(fromAmount || "0") * rate).toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </span>
            <div className="flex items-center gap-1 px-2 py-1 border-2 border-amber-500 bg-amber-200 dark:bg-amber-800">
              <TokenLogo token={toToken} size="sm" />
              <span className="font-bold text-sm text-amber-800 dark:text-amber-200">{toToken}</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-amber-500 text-center">
          1 {fromToken} = {rate.toLocaleString(undefined, { maximumFractionDigits: 2 })} {toToken}
        </div>

        <button className="w-full px-4 py-3 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
          Swap
        </button>
      </div>
    </div>
  );
}

// LiquidityPool Preview
export function LiquidityPoolPreview() {
  const [tvl, setTvl] = useState(124.5);
  const [apy, setApy] = useState(12.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setTvl(prev => prev * (1 + (Math.random() - 0.5) * 0.02));
      setApy(prev => Math.max(5, prev + (Math.random() - 0.5) * 0.5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Liquidity Pool</span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-600 z-10">
              {TokenLogos.ETH}
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-600">
              {TokenLogos.USDC}
            </div>
          </div>
          <span className="font-bold text-amber-900 dark:text-amber-100">ETH/USDC</span>
          <span className="ml-auto px-2 py-0.5 bg-green-500 text-white text-xs font-bold">0.3%</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-2 border-2 border-amber-400 bg-amber-100 dark:bg-amber-900">
            <div className="text-xs text-amber-500 uppercase">TVL</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">${tvl.toFixed(1)}M</div>
          </div>
          <div className="p-2 border-2 border-amber-400 bg-amber-100 dark:bg-amber-900">
            <div className="text-xs text-amber-500 uppercase">APY</div>
            <div className="font-bold text-green-600">{apy.toFixed(1)}%</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            Add
          </button>
          <button className="flex-1 px-3 py-2 border-4 border-amber-500 font-bold uppercase text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-800 transition-colors">
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
  const [rewards, setRewards] = useState(0);

  useEffect(() => {
    if (staked) {
      const interval = setInterval(() => {
        setRewards(prev => prev + 0.00001);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [staked]);

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex justify-between items-center">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Stake ETH</span>
        <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold animate-pulse">LIVE</span>
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
            <span className="font-bold text-green-600">
              {staked ? `+${rewards.toFixed(5)} ETH` : "0 ETH"}
            </span>
          </div>
        </div>
        <button
          onClick={() => { setStaked(!staked); setRewards(0); }}
          className={`w-full px-4 py-3 border-4 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all ${
            staked ? "border-red-600 bg-red-500 text-white" : "border-amber-600 bg-amber-500 text-white"
          }`}
        >
          {staked ? "Unstake" : "Stake ETH"}
        </button>
      </div>
    </div>
  );
}

// YieldFarm Preview
export function YieldFarmPreview() {
  const [earned, setEarned] = useState(12.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setEarned(prev => prev + 0.001);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-gradient-to-r from-purple-500 to-pink-500">
        <span className="font-bold uppercase text-white">■ Yield Farm</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-600 z-10">
              {TokenLogos.UNI}
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-600">
              {TokenLogos.ETH}
            </div>
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
            <div className="font-bold text-amber-900 dark:text-amber-100">{earned.toFixed(2)}</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            Deposit
          </button>
          <button className="flex-1 px-3 py-2 border-4 border-green-600 bg-green-500 text-white font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-1">
            <Sparkles className="w-4 h-4" />
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
  const [markPrice, setMarkPrice] = useState(1834.20);
  const entryPrice = 1820.50;

  useEffect(() => {
    const interval = setInterval(() => {
      setMarkPrice(prev => prev + (Math.random() - 0.48) * 5);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pnl = (markPrice - entryPrice) * 0.5 * 10; // size * leverage
  const pnlPercent = ((markPrice - entryPrice) / entryPrice) * 100 * 10;

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 text-white text-xs font-bold ${pnl >= 0 ? "bg-green-500" : "bg-red-500"}`}>LONG</span>
          <span className="font-bold text-amber-900 dark:text-amber-100">ETH-PERP</span>
        </div>
        <span className="text-xs text-amber-500 border border-amber-500 px-2 py-0.5">10x</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs text-amber-500 uppercase">Entry Price</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">${entryPrice.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-xs text-amber-500 uppercase">Mark Price</div>
            <div className="font-bold text-amber-900 dark:text-amber-100 transition-all">${markPrice.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-xs text-amber-500 uppercase">Size</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">0.5 ETH</div>
          </div>
          <div>
            <div className="text-xs text-amber-500 uppercase">PnL</div>
            <div className={`font-bold ${pnl >= 0 ? "text-green-600" : "text-red-500"}`}>
              {pnl >= 0 ? "+" : ""}${pnl.toFixed(2)} ({pnlPercent >= 0 ? "+" : ""}{pnlPercent.toFixed(1)}%)
            </div>
          </div>
        </div>
        <div className="h-2 border-2 border-amber-500 bg-amber-200">
          <div
            className={`h-full transition-all ${pnl >= 0 ? "bg-green-500" : "bg-red-500"}`}
            style={{ width: `${Math.min(100, Math.max(10, 50 + pnlPercent))}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-amber-500">
          <span>Liq: $1,640.00</span>
          <span>Margin: {Math.max(0, 75 - Math.abs(pnlPercent) * 0.5).toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
}

// OrderBook Preview - NOW WITH FLUCTUATING DATA
export function OrderBookPreview() {
  const [orderBook, setOrderBook] = useState({
    asks: [
      { price: 1838.50, size: 2.5, total: 12.5 },
      { price: 1837.20, size: 1.8, total: 10.0 },
      { price: 1836.00, size: 3.2, total: 8.2 },
      { price: 1835.80, size: 1.2, total: 5.0 },
    ],
    bids: [
      { price: 1834.50, size: 4.1, total: 4.1 },
      { price: 1833.20, size: 2.7, total: 6.8 },
      { price: 1832.00, size: 1.9, total: 8.7 },
      { price: 1831.50, size: 2.3, total: 11.0 },
    ],
    spread: 1835.50,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOrderBook(prev => {
        const priceChange = (Math.random() - 0.5) * 2;
        const newSpread = prev.spread + priceChange;

        return {
          asks: prev.asks.map((ask, i) => ({
            price: newSpread + 0.5 + i * (0.8 + Math.random() * 0.4),
            size: Math.max(0.5, ask.size + (Math.random() - 0.5) * 0.5),
            total: Math.max(1, ask.total + (Math.random() - 0.5) * 2),
          })),
          bids: prev.bids.map((bid, i) => ({
            price: newSpread - 0.5 - i * (0.8 + Math.random() * 0.4),
            size: Math.max(0.5, bid.size + (Math.random() - 0.5) * 0.5),
            total: Math.max(1, bid.total + (Math.random() - 0.5) * 2),
          })),
          spread: newSpread,
        };
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const maxTotal = Math.max(
    ...orderBook.asks.map(a => a.total),
    ...orderBook.bids.map(b => b.total)
  );

  return (
    <div className="w-full max-w-xs font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-3 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex items-center justify-between">
        <span className="font-bold uppercase text-sm text-amber-900 dark:text-amber-100">■ Order Book</span>
        <span className="text-xs text-amber-600 dark:text-amber-400">ETH/USD</span>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-3 text-xs text-amber-500 uppercase mb-1 px-1">
          <span>Price</span>
          <span className="text-center">Size</span>
          <span className="text-right">Total</span>
        </div>
        {/* Asks (reversed to show highest at top) */}
        {[...orderBook.asks].reverse().map((ask, i) => (
          <div key={`ask-${i}`} className="grid grid-cols-3 text-sm py-0.5 px-1 relative">
            <div
              className="absolute inset-0 bg-red-500/20 transition-all duration-300"
              style={{ width: `${(ask.total / maxTotal) * 100}%` }}
            />
            <span className="text-red-500 font-bold relative z-10">{ask.price.toFixed(2)}</span>
            <span className="text-center text-amber-700 dark:text-amber-300 relative z-10">{ask.size.toFixed(2)}</span>
            <span className="text-right text-amber-500 relative z-10">{ask.total.toFixed(1)}</span>
          </div>
        ))}
        {/* Spread */}
        <div className="my-2 py-1 border-y-2 border-amber-400 text-center bg-amber-100 dark:bg-amber-900">
          <span className="text-amber-900 dark:text-amber-100 font-bold">{orderBook.spread.toFixed(2)}</span>
          <span className="text-xs text-amber-500 ml-2">
            Spread: {((orderBook.asks[0].price - orderBook.bids[0].price) / orderBook.spread * 100).toFixed(3)}%
          </span>
        </div>
        {/* Bids */}
        {orderBook.bids.map((bid, i) => (
          <div key={`bid-${i}`} className="grid grid-cols-3 text-sm py-0.5 px-1 relative">
            <div
              className="absolute inset-0 bg-green-500/20 right-0 transition-all duration-300"
              style={{ width: `${(bid.total / maxTotal) * 100}%`, marginLeft: 'auto' }}
            />
            <span className="text-green-600 font-bold relative z-10">{bid.price.toFixed(2)}</span>
            <span className="text-center text-amber-700 dark:text-amber-300 relative z-10">{bid.size.toFixed(2)}</span>
            <span className="text-right text-amber-500 relative z-10">{bid.total.toFixed(1)}</span>
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
        <span className={`text-2xl font-bold transition-colors ${
          leverage > 50 ? "text-red-500" : leverage > 20 ? "text-yellow-500" : "text-amber-900 dark:text-amber-100"
        }`}>{leverage}x</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min="1"
          max="100"
          value={leverage}
          onChange={(e) => setLeverage(Number(e.target.value))}
          className="w-full h-4 appearance-none bg-amber-200 dark:bg-amber-800 border-4 border-amber-500 cursor-pointer"
          style={{
            background: `linear-gradient(to right, #f59e0b ${leverage}%, #fde68a ${leverage}%)`,
          }}
        />
      </div>
      <div className="flex justify-between mt-2">
        {[1, 5, 10, 25, 50, 100].map(l => (
          <button
            key={l}
            onClick={() => setLeverage(l)}
            className={`px-2 py-1 text-xs font-bold transition-all ${
              leverage === l
                ? "bg-amber-500 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
                : "text-amber-600 hover:bg-amber-200 dark:hover:bg-amber-800"
            }`}
          >
            {l}x
          </button>
        ))}
      </div>
      {leverage > 20 && (
        <div className={`mt-3 p-2 border-2 flex items-center gap-2 transition-all ${
          leverage > 50
            ? "border-red-500 bg-red-100 dark:bg-red-900/30"
            : "border-yellow-500 bg-yellow-100 dark:bg-yellow-900/30"
        }`}>
          <AlertTriangle className={`w-4 h-4 ${leverage > 50 ? "text-red-500" : "text-yellow-500"}`} />
          <span className={`text-xs uppercase ${leverage > 50 ? "text-red-600 dark:text-red-400" : "text-yellow-600 dark:text-yellow-400"}`}>
            {leverage > 50 ? "Extreme leverage risk!" : "High leverage risk"}
          </span>
        </div>
      )}
    </div>
  );
}

// TradingPair Preview
export function TradingPairPreview() {
  const [pair, setPair] = useState("ETH/USD");
  const [prices, setPrices] = useState({
    "ETH/USD": { price: 1834.52, change: 2.34 },
    "BTC/USD": { price: 43521.00, change: 1.12 },
    "SOL/USD": { price: 98.45, change: -0.85 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => ({
        "ETH/USD": {
          price: prev["ETH/USD"].price * (1 + (Math.random() - 0.5) * 0.002),
          change: prev["ETH/USD"].change + (Math.random() - 0.5) * 0.1,
        },
        "BTC/USD": {
          price: prev["BTC/USD"].price * (1 + (Math.random() - 0.5) * 0.002),
          change: prev["BTC/USD"].change + (Math.random() - 0.5) * 0.1,
        },
        "SOL/USD": {
          price: prev["SOL/USD"].price * (1 + (Math.random() - 0.5) * 0.002),
          change: prev["SOL/USD"].change + (Math.random() - 0.5) * 0.1,
        },
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const pairTokens: Record<string, string> = {
    "ETH/USD": "ETH",
    "BTC/USD": "BTC",
    "SOL/USD": "SOL",
  };

  return (
    <div className="font-mono">
      <div className="flex gap-2">
        {Object.entries(prices).map(([name, data]) => (
          <button
            key={name}
            onClick={() => setPair(name)}
            className={`px-4 py-3 border-4 transition-all ${
              pair === name
                ? "border-amber-600 bg-amber-200 dark:bg-amber-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]"
                : "border-amber-400 dark:border-amber-600 hover:border-amber-500"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <TokenLogo token={pairTokens[name]} size="sm" />
              <span className="font-bold text-amber-900 dark:text-amber-100">{name}</span>
            </div>
            <div className="text-sm text-amber-700 dark:text-amber-300">
              ${data.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </div>
            <div className={`text-xs font-bold ${data.change >= 0 ? "text-green-600" : "text-red-500"}`}>
              {data.change >= 0 ? "+" : ""}{data.change.toFixed(2)}%
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// FundingRate Preview
export function FundingRatePreview() {
  const [rate, setRate] = useState(0.0123);
  const [countdown, setCountdown] = useState({ h: 2, m: 34, s: 12 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRate(prev => prev + (Math.random() - 0.5) * 0.002);
      setCountdown(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 7; m = 59; s = 59; setRate(Math.random() * 0.02 - 0.005); }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xs font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <span className="font-bold uppercase text-sm text-amber-900 dark:text-amber-100">■ Funding Rate</span>
      </div>
      <div className="p-4">
        <div className="text-center mb-4">
          <div className={`text-3xl font-bold ${rate >= 0 ? "text-green-600" : "text-red-500"}`}>
            {rate >= 0 ? "+" : ""}{(rate * 100).toFixed(4)}%
          </div>
          <div className="text-xs text-amber-500 uppercase mt-1">
            {rate >= 0 ? "Longs pay shorts" : "Shorts pay longs"}
          </div>
        </div>
        <div className="flex justify-between text-sm border-t-2 border-amber-400 pt-3">
          <div>
            <div className="text-xs text-amber-500 uppercase">Next in</div>
            <div className="font-bold text-amber-900 dark:text-amber-100 font-mono">
              {String(countdown.h).padStart(2, '0')}:{String(countdown.m).padStart(2, '0')}:{String(countdown.s).padStart(2, '0')}
            </div>
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
  const [odds, setOdds] = useState({ yes: 65, no: 35 });

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 2;
      setOdds(prev => ({
        yes: Math.min(95, Math.max(5, prev.yes + change)),
        no: Math.min(95, Math.max(5, prev.no - change)),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex justify-between">
        <span className="font-bold uppercase text-sm text-amber-900 dark:text-amber-100">■ Prediction</span>
        <span className="text-xs text-amber-500 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          Ends in 3d 12h
        </span>
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
                : "border-green-400 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/30"
            }`}
          >
            <div>Yes</div>
            <div className="text-xl">{odds.yes.toFixed(0)}%</div>
          </button>
          <button
            onClick={() => setSelected("no")}
            className={`px-4 py-3 border-4 font-bold uppercase transition-all ${
              selected === "no"
                ? "border-red-600 bg-red-500 text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                : "border-red-400 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30"
            }`}
          >
            <div>No</div>
            <div className="text-xl">{odds.no.toFixed(0)}%</div>
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
  const [outcomes, setOutcomes] = useState([
    { label: "Yes", percentage: 65, color: "bg-green-500" },
    { label: "No", percentage: 35, color: "bg-red-500" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 4;
      setOutcomes(prev => [
        { ...prev[0], percentage: Math.min(95, Math.max(5, prev[0].percentage + change)) },
        { ...prev[1], percentage: Math.min(95, Math.max(5, prev[1].percentage - change)) },
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm font-mono">
      <div className="flex h-10 border-4 border-amber-600 overflow-hidden">
        {outcomes.map(o => (
          <div
            key={o.label}
            className={`${o.color} flex items-center justify-center text-white font-bold text-sm transition-all duration-500`}
            style={{ width: `${o.percentage}%` }}
          >
            {o.label} {o.percentage.toFixed(0)}%
          </div>
        ))}
      </div>
    </div>
  );
}

// MarketStats Preview
export function MarketStatsPreview() {
  const [stats, setStats] = useState([
    { label: "Volume", value: 1.2 },
    { label: "Traders", value: 2345 },
    { label: "Liquidity", value: 456 },
    { label: "Open Int.", value: 890 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => prev.map(s => ({
        ...s,
        value: s.value * (1 + (Math.random() - 0.5) * 0.02),
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const formatValue = (label: string, value: number) => {
    if (label === "Traders") return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `$${value.toFixed(0)}K`;
  };

  return (
    <div className="w-full max-w-md font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950 p-4">
      <div className="grid grid-cols-4 gap-2">
        {stats.map(stat => (
          <div key={stat.label} className="text-center p-2 border-2 border-amber-400 bg-amber-100 dark:bg-amber-900">
            <div className="text-xs text-amber-500 uppercase">{stat.label}</div>
            <div className="font-bold text-amber-900 dark:text-amber-100">
              {stat.label === "Volume" ? `$${stat.value.toFixed(1)}M` : formatValue(stat.label, stat.value)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========== NFT COMPONENTS ==========

// NFT Sample Data
const sampleNFTs = [
  { id: 1234, name: "Pixel Punk", collection: "CryptoPunks", price: 2.5, rarity: "Rare", image: "punk" },
  { id: 7842, name: "Bored Ape", collection: "BAYC", price: 45.2, rarity: "Epic", image: "ape" },
  { id: 3156, name: "Doodle", collection: "Doodles", price: 8.7, rarity: "Common", image: "doodle" },
  { id: 9021, name: "Azuki", collection: "Azuki", price: 12.3, rarity: "Legendary", image: "azuki" },
  { id: 5567, name: "Clone X", collection: "CloneX", price: 6.8, rarity: "Rare", image: "clone" },
  { id: 2289, name: "Pudgy", collection: "Pudgy Penguins", price: 4.2, rarity: "Common", image: "pudgy" },
];

// NFT Image Generator Component
function NFTImage({ type, id }: { type: string; id: number }) {
  const gradients: Record<string, string> = {
    punk: "from-pink-400 via-purple-500 to-indigo-500",
    ape: "from-amber-400 via-orange-500 to-red-500",
    doodle: "from-green-400 via-cyan-500 to-blue-500",
    azuki: "from-red-400 via-pink-500 to-purple-500",
    clone: "from-violet-400 via-purple-500 to-fuchsia-500",
    pudgy: "from-blue-400 via-cyan-500 to-teal-500",
  };

  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradients[type] || gradients.punk} flex items-center justify-center relative overflow-hidden`}>
      {/* Pixel art style decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-2 left-2 w-4 h-4 bg-white/50" />
        <div className="absolute top-2 right-2 w-4 h-4 bg-black/30" />
        <div className="absolute bottom-2 left-2 w-4 h-4 bg-black/30" />
        <div className="absolute bottom-2 right-2 w-4 h-4 bg-white/50" />
      </div>
      <div className="relative z-10 text-center">
        <div className="text-4xl mb-1">
          {type === "punk" && "👾"}
          {type === "ape" && "🦧"}
          {type === "doodle" && "🎨"}
          {type === "azuki" && "⛩️"}
          {type === "clone" && "🤖"}
          {type === "pudgy" && "🐧"}
        </div>
        <div className="text-white/80 text-xs font-bold">#{id}</div>
      </div>
    </div>
  );
}

// NFTCard Preview - IMPROVED WITH ANIMATION
export function NFTCardPreview() {
  const [liked, setLiked] = useState(false);
  const nft = sampleNFTs[0];

  return (
    <div className="w-full max-w-xs font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950 group hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-square border-b-4 border-amber-500 relative overflow-hidden">
        <NFTImage type={nft.image} id={nft.id} />
        <div className="absolute top-2 right-2">
          <button
            onClick={() => setLiked(!liked)}
            className={`w-8 h-8 border-2 border-amber-600 flex items-center justify-center transition-all ${
              liked ? "bg-red-500 text-white" : "bg-amber-100 dark:bg-amber-900 text-amber-600 hover:bg-amber-200"
            }`}
          >
            {liked ? "♥" : "♡"}
          </button>
        </div>
        <div className="absolute bottom-2 left-2">
          <span className={`px-2 py-0.5 text-xs font-bold uppercase ${
            nft.rarity === "Legendary" ? "bg-yellow-500 text-black" :
            nft.rarity === "Epic" ? "bg-purple-500 text-white" :
            nft.rarity === "Rare" ? "bg-blue-500 text-white" :
            "bg-gray-500 text-white"
          }`}>
            {nft.rarity}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="font-bold text-amber-900 dark:text-amber-100 group-hover:text-amber-600 transition-colors">
              {nft.name} #{nft.id}
            </div>
            <div className="text-xs text-amber-500">{nft.collection}</div>
          </div>
          <span className="px-2 py-0.5 bg-amber-500 text-white text-xs font-bold">#{nft.id}</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t-2 border-amber-400">
          <div>
            <div className="text-xs text-amber-500 uppercase">Price</div>
            <div className="font-bold text-amber-900 dark:text-amber-100 flex items-center gap-1">
              <div className="w-4 h-4">{TokenLogos.ETH}</div>
              {nft.price} ETH
            </div>
          </div>
          <button className="px-4 py-2 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

// NFTGallery Preview - NOW WITH ACTUAL NFTs
export function NFTGalleryPreview() {
  const [hoveredNft, setHoveredNft] = useState<number | null>(null);

  return (
    <div className="w-full max-w-md font-mono">
      <div className="grid grid-cols-3 gap-2">
        {sampleNFTs.map((nft) => (
          <div
            key={nft.id}
            className="border-4 border-amber-500 hover:border-amber-600 transition-all cursor-pointer group relative"
            onMouseEnter={() => setHoveredNft(nft.id)}
            onMouseLeave={() => setHoveredNft(null)}
          >
            <div className="aspect-square overflow-hidden">
              <div className={`w-full h-full transition-transform duration-300 ${hoveredNft === nft.id ? "scale-110" : ""}`}>
                <NFTImage type={nft.image} id={nft.id} />
              </div>
            </div>
            {hoveredNft === nft.id && (
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-2 text-center">
                <div className="text-white font-bold text-xs uppercase">{nft.name}</div>
                <div className="text-amber-400 text-xs">{nft.price} ETH</div>
                <button className="mt-2 px-2 py-1 border-2 border-amber-500 bg-amber-500 text-white text-xs font-bold uppercase">
                  View
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// NFTBid Preview
export function NFTBidPreview() {
  const [bid, setBid] = useState("2.5");
  const [bidHistory] = useState([
    { bidder: "0xabc...def", amount: 2.3, time: "5 min ago" },
    { bidder: "0x123...456", amount: 2.1, time: "1 hr ago" },
    { bidder: "0x789...012", amount: 1.8, time: "3 hr ago" },
  ]);

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800">
        <span className="font-bold uppercase text-amber-900 dark:text-amber-100">■ Place Bid</span>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <div className="flex justify-between text-xs text-amber-500 uppercase mb-1">
            <span>Current Highest</span>
            <span className="flex items-center gap-1">
              <div className="w-3 h-3">{TokenLogos.ETH}</div>
              2.3 ETH
            </span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={bid}
              onChange={(e) => setBid(e.target.value)}
              className="flex-1 px-3 py-2 border-4 border-amber-500 bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 font-bold text-xl focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(180,83,9,1)]"
            />
            <span className="px-3 py-2 border-4 border-amber-500 bg-amber-200 dark:bg-amber-800 font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1">
              <div className="w-5 h-5">{TokenLogos.ETH}</div>
              ETH
            </span>
          </div>
        </div>

        {/* Bid History */}
        <div className="border-t-2 border-amber-400 pt-3">
          <div className="text-xs text-amber-500 uppercase mb-2">Recent Bids</div>
          <div className="space-y-1">
            {bidHistory.map((h, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-amber-600 dark:text-amber-400">{h.bidder}</span>
                <span className="text-amber-900 dark:text-amber-100 font-bold">{h.amount} ETH</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full px-4 py-3 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
          Place Bid
        </button>
      </div>
    </div>
  );
}

// ========== BRIDGE COMPONENTS ==========

// BridgeInterface Preview
export function BridgeInterfacePreview() {
  const [fromChain, setFromChain] = useState("Ethereum");
  const [toChain, setToChain] = useState("Polygon");
  const [amount, setAmount] = useState("");

  const swapChains = () => {
    setFromChain(toChain);
    setToChain(fromChain);
  };

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
              <ChainLogo chain={fromChain} />
              <span className="font-bold text-amber-900 dark:text-amber-100">{fromChain}</span>
            </div>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-24 bg-transparent text-right text-xl font-bold text-amber-900 dark:text-amber-100 focus:outline-none"
              placeholder="0.0"
            />
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <button
            onClick={swapChains}
            className="p-2 border-4 border-amber-600 bg-amber-500 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:rotate-180 transition-all"
          >
            <ArrowLeftRight className="w-5 h-5" />
          </button>
        </div>

        {/* To Chain */}
        <div className="p-3 border-4 border-amber-400 bg-amber-100 dark:bg-amber-900">
          <div className="text-xs text-amber-500 uppercase mb-2">To</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChainLogo chain={toChain} />
              <span className="font-bold text-amber-900 dark:text-amber-100">{toChain}</span>
            </div>
            <span className="text-xl font-bold text-amber-900 dark:text-amber-100">
              {amount || "0.0"}
            </span>
          </div>
        </div>

        <div className="text-xs text-amber-500 flex justify-between">
          <span>Est. time: ~15 min</span>
          <span>Fee: ~$5.00</span>
        </div>

        <button className="w-full px-4 py-3 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
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
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <ChainLogo chain={from} size="sm" />
          </div>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border-4 border-amber-500 bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 font-bold uppercase focus:outline-none appearance-none cursor-pointer"
          >
            {chains.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <ArrowRight className="w-6 h-6 text-amber-500 mt-5" />
      <div className="flex-1">
        <div className="text-xs text-amber-500 uppercase mb-1">To</div>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <ChainLogo chain={to} size="sm" />
          </div>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border-4 border-amber-500 bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 font-bold uppercase focus:outline-none appearance-none cursor-pointer"
          >
            {chains.filter(c => c !== from).map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

// ========== GOVERNANCE ==========

// ProposalCard Preview
export function ProposalCardPreview() {
  const [voted, setVoted] = useState<"for" | "against" | null>(null);
  const [votes, setVotes] = useState({ for: 68, against: 32 });

  const handleVote = (vote: "for" | "against") => {
    if (voted) return;
    setVoted(vote);
    setVotes(prev => ({
      for: vote === "for" ? prev.for + 2 : prev.for,
      against: vote === "against" ? prev.against + 2 : prev.against,
    }));
  };

  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
      <div className="px-4 py-2 border-b-4 border-amber-500 bg-amber-200 dark:bg-amber-800 flex justify-between items-center">
        <span className="font-bold uppercase text-sm text-amber-900 dark:text-amber-100">■ Proposal #42</span>
        <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold animate-pulse">ACTIVE</span>
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
            <span className="text-green-600 font-bold">For: {votes.for.toFixed(0)}%</span>
            <span className="text-red-500 font-bold">Against: {votes.against.toFixed(0)}%</span>
          </div>
          <div className="flex h-4 border-2 border-amber-500 overflow-hidden">
            <div className="bg-green-500 transition-all duration-500" style={{ width: `${votes.for}%` }} />
            <div className="bg-red-500 transition-all duration-500" style={{ width: `${votes.against}%` }} />
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => handleVote("for")}
            disabled={voted !== null}
            className={`flex-1 px-3 py-2 border-4 font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
              voted === "for"
                ? "border-green-700 bg-green-600 text-white"
                : voted !== null
                ? "border-gray-400 bg-gray-300 text-gray-500 cursor-not-allowed"
                : "border-green-600 bg-green-500 text-white hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            }`}
          >
            <Vote className="w-4 h-4 inline mr-1" />
            {voted === "for" ? "Voted!" : "For"}
          </button>
          <button
            onClick={() => handleVote("against")}
            disabled={voted !== null}
            className={`flex-1 px-3 py-2 border-4 font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
              voted === "against"
                ? "border-red-700 bg-red-600 text-white"
                : voted !== null
                ? "border-gray-400 bg-gray-300 text-gray-500 cursor-not-allowed"
                : "border-red-600 bg-red-500 text-white hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            }`}
          >
            <Vote className="w-4 h-4 inline mr-1" />
            {voted === "against" ? "Voted!" : "Against"}
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
          <span className="font-bold text-green-600">+234.56</span>
        </div>
        <div className="flex justify-between pt-2 border-t-2 border-amber-400">
          <span className="text-amber-600 dark:text-amber-400">Proposals Voted</span>
          <span className="font-bold text-amber-900 dark:text-amber-100">12</span>
        </div>
      </div>
    </div>
  );
}

// DelegateCard Preview
export function DelegateCardPreview() {
  const [delegated, setDelegated] = useState(false);

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
        <button
          onClick={() => setDelegated(!delegated)}
          className={`w-full px-4 py-2 border-4 font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all ${
            delegated
              ? "border-green-600 bg-green-500 text-white"
              : "border-amber-600 bg-amber-500 text-white"
          }`}
        >
          {delegated ? "✓ Delegated" : "Delegate"}
        </button>
      </div>
    </div>
  );
}
