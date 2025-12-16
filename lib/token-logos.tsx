// Token and Chain Logo SVGs - separated for better code splitting
export const TokenLogos: Record<string, React.ReactNode> = {
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
      <path fill="#fff" d="M16 6C10.48 6 6 10.48 6 16s4.48 10 10 10 10-4.48 10-10S21.52 6 16 6zm3.5 15.5c-1 1-2.2 1.5-3.5 1.5s-2.5-.5-3.5-1.5c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 .8.8 1.8 1.2 2.8 1.2s2-.4 2.8-1.2c.2-.2.5-.2.7 0 .2.2.2.5 0 .7zM12.5 14c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm5.5 1.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
    </svg>
  ),
  USDT: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle fill="#26A17B" cx="16" cy="16" r="16"/>
      <path fill="#fff" d="M17.9 17.4v0c-.1 0-.7 0-1.9 0s-1.7 0-2 0v0c-3.9-.2-6.8-.8-6.8-1.7s2.9-1.5 6.8-1.7v2.6c.3 0 1 .1 2 .1 1.2 0 1.8-.1 1.9-.1v-2.6c3.9.2 6.8.9 6.8 1.7s-2.9 1.5-6.8 1.7m0-3.6v-2.4h5.4V7.8H8.6v3.6h5.4v2.4c-4.4.2-7.7 1.1-7.7 2.1s3.3 1.9 7.7 2.1v7.6h3.9V18c4.4-.2 7.7-1.1 7.7-2.1s-3.3-1.9-7.7-2.1"/>
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
      <path fill="#fff" d="M12 11c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V11zm3 1v8h2v-8h-2z"/>
    </svg>
  ),
  SOL: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="sol-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FFA3"/>
          <stop offset="100%" stopColor="#DC1FFF"/>
        </linearGradient>
      </defs>
      <circle fill="url(#sol-grad)" cx="16" cy="16" r="16"/>
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
      <path fill="#fff" d="M16 8l-2 2 2 2 2-2-2-2zm-5 5l-2 2 2 2 2-2-2-2zm10 0l-2 2 2 2 2-2-2-2zm-5 5l-2 2 2 2 2-2-2-2zm-5 5l-2 2 2 2 2-2-2-2zm10 0l-2 2 2 2 2-2-2-2z"/>
    </svg>
  ),
};

// Chain name to token mapping
export const chainToToken: Record<string, string> = {
  "Ethereum": "ETH",
  "Polygon": "MATIC",
  "Arbitrum": "ARB",
  "Optimism": "OP",
  "BSC": "BSC",
  "Solana": "SOL",
};

// Wallet icons
export const WalletIcons = {
  MetaMask: (
    <svg viewBox="0 0 40 40" className="w-8 h-8">
      <circle fill="#E2761B" cx="20" cy="20" r="18"/>
      <path fill="#fff" d="M28 14l-8 6 1.5-3.5L28 14zm-16 0l6.5 2.5L20 20l-8-6z"/>
    </svg>
  ),
  WalletConnect: (
    <svg viewBox="0 0 40 40" className="w-8 h-8">
      <circle fill="#3B99FC" cx="20" cy="20" r="18"/>
      <path fill="#fff" d="M13 17c3.9-3.9 10.1-3.9 14 0l.5.5-1.5 1.5-.6-.6c-2.7-2.7-7.1-2.7-9.8 0l-.7.7-1.5-1.5.6-.6zm17.3 3.3l1.3 1.3-5.9 5.9-4.2-4.2-4.2 4.2-5.9-5.9 1.3-1.3 4.2 4.2 4.2-4.2 4.2 4.2 4.2-4.2z"/>
    </svg>
  ),
  Coinbase: (
    <svg viewBox="0 0 40 40" className="w-8 h-8">
      <circle fill="#0052FF" cx="20" cy="20" r="18"/>
      <rect fill="#fff" x="12" y="12" width="16" height="16" rx="3"/>
      <rect fill="#0052FF" x="16" y="16" width="8" height="8" rx="1"/>
    </svg>
  ),
  Phantom: (
    <svg viewBox="0 0 40 40" className="w-8 h-8">
      <defs>
        <linearGradient id="phantom-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#534BB1"/>
          <stop offset="100%" stopColor="#AB9FF2"/>
        </linearGradient>
      </defs>
      <circle fill="url(#phantom-g)" cx="20" cy="20" r="18"/>
      <ellipse fill="#fff" cx="15" cy="18" rx="2.5" ry="3.5"/>
      <ellipse fill="#fff" cx="25" cy="18" rx="2.5" ry="3.5"/>
    </svg>
  ),
};

// Token Logo Component
export function TokenLogo({ token, size = "md" }: { token: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = { sm: "w-5 h-5", md: "w-8 h-8", lg: "w-10 h-10" };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden flex-shrink-0`}>
      {TokenLogos[token] || (
        <div className="w-full h-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs">
          {token.charAt(0)}
        </div>
      )}
    </div>
  );
}

// Chain Logo Component
export function ChainLogo({ chain, size = "md" }: { chain: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = { sm: "w-5 h-5", md: "w-8 h-8", lg: "w-10 h-10" };
  const tokenKey = chainToToken[chain] || chain;

  return (
    <div className={`${sizeClasses[size]} rounded-sm overflow-hidden flex-shrink-0`}>
      {TokenLogos[tokenKey] || (
        <div className="w-full h-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs">
          {chain.charAt(0)}
        </div>
      )}
    </div>
  );
}
