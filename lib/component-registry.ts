export interface Component {
  id: string;
  name: string;
  category: string;
  subcategory: string | null;
  description: string;
}

export const componentRegistry: Component[] = [
  // ============ Web3 - Wallet ============
  { id: "connect-wallet-button", name: "ConnectWalletButton", category: "Web3", subcategory: "Wallet", description: "Connected: avatar + truncated address + balance + dropdown. Disconnected: Connect Wallet" },
  { id: "network-switcher", name: "NetworkSwitcher", category: "Web3", subcategory: "Wallet", description: "Dropdown to switch chains with icons, current chain display, testnet indicator" },
  { id: "gas-button", name: "GasButton", category: "Web3", subcategory: "Wallet", description: "Navbar button with popover showing gas prices, congestion status, USD estimates" },

  // ============ Web3 - Tokens ============
  { id: "token-input", name: "TokenInput", category: "Web3", subcategory: "Tokens", description: "Amount input with token selector modal, balance, max button, USD conversion" },
  { id: "token-list", name: "TokenList", category: "Web3", subcategory: "Tokens", description: "Searchable list with icon, symbol, balance, USD value per row" },
  { id: "token-pair", name: "TokenPair", category: "Web3", subcategory: "Tokens", description: "Overlapping icons for LP/pairs display" },

  // ============ Web3 - Transactions ============
  { id: "tx-progress-modal", name: "TxProgressModal", category: "Web3", subcategory: "Transactions", description: "Multi-step modal: Approve → Sign → Processing → Done/Failed with hash link" },
  { id: "tx-toast", name: "TxToast", category: "Web3", subcategory: "Transactions", description: "Toast with status icon, message, hash link, auto-dismiss on success" },
  { id: "tx-history-list", name: "TxHistoryList", category: "Web3", subcategory: "Transactions", description: "List of transactions with type, amount, status badge, timestamp, explorer link" },

  // ============ Web3 - DeFi ============
  { id: "swap-card", name: "SwapCard", category: "Web3", subcategory: "DeFi", description: "Complete swap UI: two TokenInputs, swap direction button, rate display, slippage settings" },
  { id: "stake-card", name: "StakeCard", category: "Web3", subcategory: "DeFi", description: "Stake/Unstake tabs, amount input, APY display, lock duration selector, rewards summary" },
  { id: "lending-metrics", name: "LendingMetrics", category: "Web3", subcategory: "DeFi", description: "Health factor gauge, collateral ratio bar, borrow limit bar, liquidation warning" },
  { id: "position-card", name: "PositionCard", category: "Web3", subcategory: "DeFi", description: "User position: value, PnL, earnings, action buttons" },

  // ============ Web3 - Perps Trading ============
  { id: "trading-interface", name: "TradingInterface", category: "Web3", subcategory: "Perps Trading", description: "Full TradingView-style layout: candlestick chart, order book, trade history, positions panel" },
  { id: "trading-chart", name: "TradingChart", category: "Web3", subcategory: "Perps Trading", description: "TradingView candlestick chart with indicators, drawing tools, timeframe selector" },
  { id: "order-book", name: "OrderBook", category: "Web3", subcategory: "Perps Trading", description: "Live order book with bid/ask depth, spread display, click-to-fill price" },
  { id: "order-form", name: "OrderForm", category: "Web3", subcategory: "Perps Trading", description: "Long/Short tabs, Market/Limit/Stop types, leverage slider, size input, margin display" },
  { id: "positions-table", name: "PositionsTable", category: "Web3", subcategory: "Perps Trading", description: "Open positions with entry price, mark price, PnL, liquidation price, close actions" },
  { id: "trade-history", name: "TradeHistory", category: "Web3", subcategory: "Perps Trading", description: "Recent trades feed with price, size, side, timestamp" },

  // ============ Web3 - Prediction Markets ============
  { id: "market-card", name: "MarketCard", category: "Web3", subcategory: "Prediction Markets", description: "Question, Yes/No odds, volume, resolution date, outcome bar, quick bet buttons" },
  { id: "bet-panel", name: "BetPanel", category: "Web3", subcategory: "Prediction Markets", description: "Yes/No selection, amount input, potential payout calculator, shares display" },
  { id: "odds-display", name: "OddsDisplay", category: "Web3", subcategory: "Prediction Markets", description: "Dynamic odds with implied probability %, price movement indicator" },
  { id: "market-chart", name: "MarketChart", category: "Web3", subcategory: "Prediction Markets", description: "Price/probability chart over time for market outcomes" },
  { id: "positions-list", name: "PositionsList", category: "Web3", subcategory: "Prediction Markets", description: "User bets with outcome, shares, avg price, current value, PnL, sell option" },
  { id: "resolution-banner", name: "ResolutionBanner", category: "Web3", subcategory: "Prediction Markets", description: "Market status: Open/Pending/Resolved with countdown or final outcome" },

  // ============ Web3 - NFT ============
  { id: "nft-card", name: "NFTCard", category: "Web3", subcategory: "NFT", description: "Image/media, name, collection, price, rarity badge" },
  { id: "nft-detail", name: "NFTDetail", category: "Web3", subcategory: "NFT", description: "Full view: media viewer, attributes grid, history, actions" },
  { id: "nft-grid", name: "NFTGrid", category: "Web3", subcategory: "NFT", description: "Responsive grid with virtualization, lazy loading, filters" },

  // ============ Web3 - Bridge ============
  { id: "bridge-card", name: "BridgeCard", category: "Web3", subcategory: "Bridge", description: "From/To chain selectors, amount input, quote display, route options" },
  { id: "bridge-progress", name: "BridgeProgress", category: "Web3", subcategory: "Bridge", description: "Multi-step tracker: Initiated → Confirming → Bridging → Complete" },

  // ============ Web3 - Governance ============
  { id: "proposal-card", name: "ProposalCard", category: "Web3", subcategory: "Governance", description: "Title, status badge, vote bar, quorum progress, deadline" },
  { id: "vote-panel", name: "VotePanel", category: "Web3", subcategory: "Governance", description: "Voting power display, For/Against/Abstain buttons, delegation option" },

  // ============ AI - Chat ============
  { id: "chat-interface", name: "ChatInterface", category: "AI", subcategory: "Chat", description: "Full chat: message list, input with attachments, conversation sidebar, model selector" },
  { id: "chat-message", name: "ChatMessage", category: "AI", subcategory: "Chat", description: "User/Assistant bubble with avatar, markdown/code rendering, actions" },
  { id: "streaming-text", name: "StreamingText", category: "AI", subcategory: "Chat", description: "Typewriter effect with cursor, thinking indicator" },

  // ============ AI - Code ============
  { id: "code-block", name: "CodeBlock", category: "AI", subcategory: "Code", description: "Syntax highlighted code with language badge, copy button, line numbers" },
  { id: "code-diff", name: "CodeDiff", category: "AI", subcategory: "Code", description: "Side-by-side or inline diff view with additions/deletions highlighted" },
  { id: "terminal-output", name: "TerminalOutput", category: "AI", subcategory: "Code", description: "Monospace output with ANSI color support" },

  // ============ AI - Generation ============
  { id: "image-generator", name: "ImageGenerator", category: "AI", subcategory: "Generation", description: "Prompt input, style/size selectors, generation progress, result grid" },
  { id: "audio-player", name: "AudioPlayer", category: "AI", subcategory: "Generation", description: "Waveform visualization, playback controls, speed adjustment, transcript" },

  // ============ AI - Agents ============
  { id: "agent-panel", name: "AgentPanel", category: "AI", subcategory: "Agents", description: "Execution status, tool calls list, reasoning steps, source citations" },
  { id: "tool-call-card", name: "ToolCallCard", category: "AI", subcategory: "Agents", description: "Tool name, parameters, result, execution time" },

  // ============ Data - Tables ============
  { id: "data-table", name: "DataTable", category: "Data", subcategory: "Tables", description: "Sortable, filterable, paginated table with column customization, row selection" },
  { id: "virtualized-list", name: "VirtualizedList", category: "Data", subcategory: "Tables", description: "Performant scrolling for large datasets with variable row heights" },

  // ============ Data - Charts ============
  { id: "line-chart", name: "LineChart", category: "Data", subcategory: "Charts", description: "Time series with multiple datasets, zoom, tooltips, legend" },
  { id: "bar-chart", name: "BarChart", category: "Data", subcategory: "Charts", description: "Vertical/horizontal bars, stacked/grouped variants" },
  { id: "pie-chart", name: "PieChart", category: "Data", subcategory: "Charts", description: "Pie/donut with labels, legend, interactive segments" },
  { id: "candlestick-chart", name: "CandlestickChart", category: "Data", subcategory: "Charts", description: "OHLC with volume, zoom, crosshair" },
  { id: "sparkline", name: "Sparkline", category: "Data", subcategory: "Charts", description: "Inline mini chart for tables/stats" },

  // ============ Data - Stats ============
  { id: "stat-card", name: "StatCard", category: "Data", subcategory: "Stats", description: "Value, label, trend arrow with %, optional sparkline" },
  { id: "progress-gauge", name: "ProgressGauge", category: "Data", subcategory: "Stats", description: "Circular or linear progress with value, label, color zones" },

  // ============ Forms - Inputs ============
  { id: "input", name: "Input", category: "Forms", subcategory: "Inputs", description: "Text input with label, error, helper text, prefix/suffix icons" },
  { id: "textarea", name: "Textarea", category: "Forms", subcategory: "Inputs", description: "Multi-line with auto-resize, character counter" },
  { id: "select", name: "Select", category: "Forms", subcategory: "Inputs", description: "Single select with search, groups, custom rendering" },
  { id: "multi-select", name: "MultiSelect", category: "Forms", subcategory: "Inputs", description: "Multi-select with tags, search, select all" },
  { id: "date-picker", name: "DatePicker", category: "Forms", subcategory: "Inputs", description: "Single date, range, time picker variants" },
  { id: "file-upload", name: "FileUpload", category: "Forms", subcategory: "Inputs", description: "Drag-drop zone, file list, progress, preview" },
  { id: "rich-text-editor", name: "RichTextEditor", category: "Forms", subcategory: "Inputs", description: "WYSIWYG with toolbar, markdown mode toggle" },
  { id: "otp-input", name: "OTPInput", category: "Forms", subcategory: "Inputs", description: "PIN/code input with auto-focus, paste support" },

  // ============ Forms - Controls ============
  { id: "checkbox", name: "Checkbox", category: "Forms", subcategory: "Controls", description: "Checkbox with label, indeterminate state" },
  { id: "radio-group", name: "RadioGroup", category: "Forms", subcategory: "Controls", description: "Radio buttons with descriptions, horizontal/vertical" },
  { id: "switch", name: "Switch", category: "Forms", subcategory: "Controls", description: "Toggle with label, loading state" },
  { id: "slider", name: "Slider", category: "Forms", subcategory: "Controls", description: "Range slider with marks, tooltip, range selection" },

  // ============ Forms - Structure ============
  { id: "form", name: "Form", category: "Forms", subcategory: "Structure", description: "Form wrapper with validation, error summary, submit handling" },
  { id: "multi-step-form", name: "MultiStepForm", category: "Forms", subcategory: "Structure", description: "Phased form with step indicator, navigation, validation per phase" },
  { id: "multi-step-form-dialog", name: "MultiStepFormDialog", category: "Forms", subcategory: "Structure", description: "Dialog version: modal with phased form, step indicator in header" },
  { id: "field-array", name: "FieldArray", category: "Forms", subcategory: "Structure", description: "Dynamic add/remove fields with reordering" },

  // ============ Navigation ============
  { id: "navbar", name: "Navbar", category: "Navigation", subcategory: null, description: "Top bar with logo, nav links, actions area with responsive mobile menu" },
  { id: "sidebar", name: "Sidebar", category: "Navigation", subcategory: null, description: "Collapsible side nav with groups, icons, nested items, badges" },
  { id: "tabs", name: "Tabs", category: "Navigation", subcategory: null, description: "Horizontal/vertical tabs with icons, badges, lazy loading" },
  { id: "breadcrumbs", name: "Breadcrumbs", category: "Navigation", subcategory: null, description: "Path navigation with truncation, dropdown for long paths" },
  { id: "pagination", name: "Pagination", category: "Navigation", subcategory: null, description: "Page controls with size selector, total count, jump to page" },
  { id: "command-palette", name: "CommandPalette", category: "Navigation", subcategory: null, description: "Cmd+K searchable command menu with categories, shortcuts" },

  // ============ Feedback ============
  { id: "toast", name: "Toast", category: "Feedback", subcategory: null, description: "Notification with variants, action button, dismiss" },
  { id: "alert", name: "Alert", category: "Feedback", subcategory: null, description: "Inline message with icon, title, description, dismiss" },
  { id: "dialog", name: "Dialog", category: "Feedback", subcategory: null, description: "Modal with header, body, footer, sizes, scroll behavior" },
  { id: "sheet", name: "Sheet", category: "Feedback", subcategory: null, description: "Slide-out panel from any edge" },
  { id: "popover", name: "Popover", category: "Feedback", subcategory: null, description: "Floating content anchored to trigger element" },
  { id: "tooltip", name: "Tooltip", category: "Feedback", subcategory: null, description: "Hover hint with arrow, placement options" },
  { id: "skeleton", name: "Skeleton", category: "Feedback", subcategory: null, description: "Loading placeholder matching content shape" },
  { id: "progress", name: "Progress", category: "Feedback", subcategory: null, description: "Linear/circular progress with indeterminate mode" },

  // ============ Layout ============
  { id: "card", name: "Card", category: "Layout", subcategory: null, description: "Container with header, body, footer, variants" },
  { id: "accordion", name: "Accordion", category: "Layout", subcategory: null, description: "Collapsible sections, single/multi expand modes" },
  { id: "scroll-area", name: "ScrollArea", category: "Layout", subcategory: null, description: "Custom scrollbar with fade edges" },
  { id: "resizable-panels", name: "ResizablePanels", category: "Layout", subcategory: null, description: "Draggable resize handles between panels" },
  { id: "carousel", name: "Carousel", category: "Layout", subcategory: null, description: "Sliding content with dots, arrows, autoplay" },
  { id: "masonry", name: "Masonry", category: "Layout", subcategory: null, description: "Pinterest-style grid layout" },

  // ============ Display ============
  { id: "avatar", name: "Avatar", category: "Display", subcategory: null, description: "Image with fallback initials/icon, sizes, status dot" },
  { id: "badge", name: "Badge", category: "Display", subcategory: null, description: "Label with color variants, icon, removable" },
  { id: "tag", name: "Tag", category: "Display", subcategory: null, description: "Removable pill with close button" },
  { id: "timestamp", name: "Timestamp", category: "Display", subcategory: null, description: "Relative or absolute time with tooltip" },
  { id: "copy-button", name: "CopyButton", category: "Display", subcategory: null, description: "Click to copy with success feedback" },
  { id: "qr-code", name: "QRCode", category: "Display", subcategory: null, description: "Generate QR from string with download option" },
  { id: "empty-state", name: "EmptyState", category: "Display", subcategory: null, description: "Illustration, title, description, action button" },
  { id: "error-state", name: "ErrorState", category: "Display", subcategory: null, description: "Error display with retry button" },

  // ============ Actions ============
  { id: "button", name: "Button", category: "Actions", subcategory: null, description: "Variants (solid/outline/ghost), sizes, loading state, icon support" },
  { id: "dropdown-menu", name: "DropdownMenu", category: "Actions", subcategory: null, description: "Menu with items, groups, sub-menus, shortcuts, icons" },
  { id: "context-menu", name: "ContextMenu", category: "Actions", subcategory: null, description: "Right-click menu" },
  { id: "action-bar", name: "ActionBar", category: "Actions", subcategory: null, description: "Floating toolbar for selected items with actions" },

  // ============ Auth ============
  { id: "auth-card", name: "AuthCard", category: "Auth", subcategory: null, description: "Login/signup form with social buttons, forgot password link, terms" },
  { id: "user-menu", name: "UserMenu", category: "Auth", subcategory: null, description: "Avatar dropdown with profile link, settings, logout" },

  // ============ Commerce ============
  { id: "product-card", name: "ProductCard", category: "Commerce", subcategory: null, description: "Image, title, price, rating, add to cart/wishlist" },
  { id: "cart-drawer", name: "CartDrawer", category: "Commerce", subcategory: null, description: "Slide-out cart with items, quantity controls, totals, checkout" },
  { id: "checkout-form", name: "CheckoutForm", category: "Commerce", subcategory: null, description: "Multi-step: shipping, payment, review with order summary" },
  { id: "pricing-table", name: "PricingTable", category: "Commerce", subcategory: null, description: "Plan comparison with features, highlighted plan, CTA" },

  // ============ 3D & Interactive ============
  { id: "interactive-globe", name: "InteractiveGlobe", category: "3D & Interactive", subcategory: null, description: "3D globe with rotation, zoom, click-to-select locations, markers, arcs" },
  { id: "globe-marker", name: "GlobeMarker", category: "3D & Interactive", subcategory: null, description: "Customizable pin/marker on globe with pulse animation, popup content" },
  { id: "globe-arc", name: "GlobeArc", category: "3D & Interactive", subcategory: null, description: "Animated arc connecting two points on globe" },
  { id: "world-map", name: "WorldMap", category: "3D & Interactive", subcategory: null, description: "2D interactive map with country selection, heatmap overlay, markers" },
];

export const categories = [
  "All",
  "Web3",
  "AI",
  "Data",
  "Forms",
  "Navigation",
  "Feedback",
  "Layout",
  "Display",
  "Actions",
  "Auth",
  "Commerce",
  "3D & Interactive"
];

export const subcategories: Record<string, string[]> = {
  "Web3": ["Wallet", "Tokens", "Transactions", "DeFi", "Perps Trading", "Prediction Markets", "NFT", "Bridge", "Governance"],
  "AI": ["Chat", "Code", "Generation", "Agents"],
  "Data": ["Tables", "Charts", "Stats"],
  "Forms": ["Inputs", "Controls", "Structure"]
};
