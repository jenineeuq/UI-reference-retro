"use client";

import { componentRegistry } from "@/lib/component-registry";

// Form Previews
import {
  InputPreview,
  TextareaPreview,
  SelectPreview,
  MultiSelectPreview,
  DatePickerPreview,
  FileUploadPreview,
  RichTextEditorPreview,
  OtpInputPreview,
  CheckboxPreview,
  RadioGroupPreview,
  SwitchPreview,
  SliderPreview,
  FormPreview,
  MultiStepFormPreview,
  MultiStepFormDialogPreview,
  FieldArrayPreview,
} from "@/components/previews/FormsPreviews";

// Navigation Previews
import {
  NavbarPreview,
  SidebarPreview,
  TabsPreview,
  BreadcrumbsPreview,
  PaginationPreview,
  CommandPalettePreview,
} from "@/components/previews/NavigationPreviews";

// Feedback Previews
import {
  ToastPreview,
  AlertPreview,
  DialogPreview,
  SheetPreview,
  PopoverPreview,
  TooltipPreview,
  SkeletonPreview,
  ProgressPreview,
} from "@/components/previews/FeedbackPreviews";

// Actions Previews
import {
  ButtonPreview,
  DropdownMenuPreview,
  ContextMenuPreview,
  ActionBarPreview,
} from "@/components/previews/ActionsPreviews";

// Web3 Previews
import {
  WalletConnectPreview,
  WalletBalancePreview,
  NetworkSwitcherPreview,
  TokenListPreview,
  TokenInputPreview,
  TokenApprovalPreview,
  TokenPricePreview,
  TransactionHistoryPreview,
  TransactionStatusPreview,
  GasEstimatorPreview,
  SwapInterfacePreview,
  LiquidityPoolPreview,
  StakingCardPreview,
  YieldFarmPreview,
  PerpPositionCardPreview,
  OrderBookPreview,
  LeverageSliderPreview,
  TradingPairPreview,
  FundingRatePreview,
  PredictionCardPreview,
  OutcomeBarPreview,
  MarketStatsPreview,
  NFTCardPreview,
  NFTGalleryPreview,
  NFTBidPreview,
  BridgeInterfacePreview,
  ChainSelectorPreview,
  ProposalCardPreview,
  VotingPowerPreview,
  DelegateCardPreview,
} from "@/components/previews/Web3Previews";

// AI Previews
import {
  ChatInterfacePreview,
  ChatMessagePreview,
  StreamingTextPreview,
  PromptInputPreview,
  CodeEditorPreview,
  CodeCompletionPreview,
  ImageGenerationPreview,
  ModelSelectorPreview,
  AgentCardPreview,
  AgentStatusPreview,
} from "@/components/previews/AIPreviews";

// Data Previews
import {
  DataTablePreview,
  VirtualizedListPreview,
  BarChartPreview,
  LineChartPreview,
  PieChartPreview,
  AreaChartPreview,
  StatCardPreview,
  LeaderboardTablePreview,
} from "@/components/previews/DataPreviews";

// Layout Previews
import {
  CardPreview,
  AccordionPreview,
  ScrollAreaPreview,
  ResizablePanelsPreview,
  CarouselPreview,
  MasonryPreview,
} from "@/components/previews/LayoutPreviews";

// Display Previews
import {
  AvatarPreview,
  BadgePreview,
  TagPreview,
  TimestampPreview,
  CopyButtonPreview,
  QRCodePreview,
  EmptyStatePreview,
  ErrorStatePreview,
} from "@/components/previews/DisplayPreviews";

// Auth Previews
import {
  AuthCardPreview,
  UserMenuPreview,
} from "@/components/previews/AuthPreviews";

// Commerce Previews
import {
  ProductCardPreview,
  CartDrawerPreview,
  CheckoutFormPreview,
  PricingTablePreview,
} from "@/components/previews/CommercePreviews";

// Interactive Previews
import {
  InteractiveGlobePreview,
  GlobeMarkerPreview,
  GlobeArcPreview,
  WorldMapPreview,
} from "@/components/previews/InteractivePreviews";

interface ComponentPreviewProps {
  componentId: string;
}

// Map component IDs to their preview components
const previewComponents: Record<string, React.ComponentType> = {
  // Forms - Inputs
  "input": InputPreview,
  "textarea": TextareaPreview,
  "select": SelectPreview,
  "multi-select": MultiSelectPreview,
  "date-picker": DatePickerPreview,
  "file-upload": FileUploadPreview,
  "rich-text-editor": RichTextEditorPreview,
  "otp-input": OtpInputPreview,

  // Forms - Controls
  "checkbox": CheckboxPreview,
  "radio-group": RadioGroupPreview,
  "switch": SwitchPreview,
  "slider": SliderPreview,

  // Forms - Structure
  "form": FormPreview,
  "multi-step-form": MultiStepFormPreview,
  "multi-step-form-dialog": MultiStepFormDialogPreview,
  "field-array": FieldArrayPreview,

  // Navigation
  "navbar": NavbarPreview,
  "sidebar": SidebarPreview,
  "tabs": TabsPreview,
  "breadcrumbs": BreadcrumbsPreview,
  "pagination": PaginationPreview,
  "command-palette": CommandPalettePreview,

  // Feedback
  "toast": ToastPreview,
  "alert": AlertPreview,
  "dialog": DialogPreview,
  "sheet": SheetPreview,
  "popover": PopoverPreview,
  "tooltip": TooltipPreview,
  "skeleton": SkeletonPreview,
  "progress": ProgressPreview,

  // Actions
  "button": ButtonPreview,
  "dropdown-menu": DropdownMenuPreview,
  "context-menu": ContextMenuPreview,
  "action-bar": ActionBarPreview,

  // Web3 - Wallet
  "connect-wallet-button": WalletConnectPreview,
  "wallet-balance": WalletBalancePreview,
  "network-switcher": NetworkSwitcherPreview,
  "gas-button": GasEstimatorPreview,

  // Web3 - Tokens
  "token-input": TokenInputPreview,
  "token-list": TokenListPreview,
  "token-pair": TokenPricePreview,
  "token-approval": TokenApprovalPreview,

  // Web3 - Transactions
  "tx-progress-modal": TransactionStatusPreview,
  "tx-toast": TransactionStatusPreview,
  "tx-history-list": TransactionHistoryPreview,

  // Web3 - DeFi
  "swap-card": SwapInterfacePreview,
  "stake-card": StakingCardPreview,
  "lending-metrics": YieldFarmPreview,
  "position-card": PerpPositionCardPreview,
  "liquidity-pool": LiquidityPoolPreview,

  // Web3 - Perps Trading
  "trading-interface": TradingPairPreview,
  "trading-chart": TradingPairPreview,
  "order-book": OrderBookPreview,
  "order-form": LeverageSliderPreview,
  "positions-table": PerpPositionCardPreview,
  "trade-history": TransactionHistoryPreview,
  "funding-rate": FundingRatePreview,

  // Web3 - Prediction Markets
  "market-card": PredictionCardPreview,
  "bet-panel": PredictionCardPreview,
  "odds-display": OutcomeBarPreview,
  "market-chart": MarketStatsPreview,
  "positions-list": MarketStatsPreview,
  "resolution-banner": OutcomeBarPreview,

  // Web3 - NFT
  "nft-card": NFTCardPreview,
  "nft-detail": NFTBidPreview,
  "nft-grid": NFTGalleryPreview,

  // Web3 - Bridge
  "bridge-card": BridgeInterfacePreview,
  "bridge-progress": ChainSelectorPreview,

  // Web3 - Governance
  "proposal-card": ProposalCardPreview,
  "vote-panel": VotingPowerPreview,
  "delegate-card": DelegateCardPreview,

  // AI - Chat
  "chat-interface": ChatInterfacePreview,
  "chat-message": ChatMessagePreview,
  "streaming-text": StreamingTextPreview,
  "prompt-input": PromptInputPreview,

  // AI - Code
  "code-block": CodeEditorPreview,
  "code-diff": CodeEditorPreview,
  "terminal-output": CodeEditorPreview,
  "code-completion": CodeCompletionPreview,

  // AI - Generation
  "image-generator": ImageGenerationPreview,
  "audio-player": ModelSelectorPreview,
  "model-selector": ModelSelectorPreview,

  // AI - Agents
  "agent-panel": AgentCardPreview,
  "tool-call-card": AgentStatusPreview,
  "agent-status": AgentStatusPreview,

  // Data - Tables
  "data-table": DataTablePreview,
  "virtualized-list": VirtualizedListPreview,

  // Data - Charts
  "line-chart": LineChartPreview,
  "bar-chart": BarChartPreview,
  "pie-chart": PieChartPreview,
  "candlestick-chart": BarChartPreview,
  "sparkline": LineChartPreview,
  "area-chart": AreaChartPreview,

  // Data - Stats
  "stat-card": StatCardPreview,
  "progress-gauge": StatCardPreview,
  "leaderboard": LeaderboardTablePreview,

  // Layout
  "card": CardPreview,
  "accordion": AccordionPreview,
  "scroll-area": ScrollAreaPreview,
  "resizable-panels": ResizablePanelsPreview,
  "carousel": CarouselPreview,
  "masonry": MasonryPreview,

  // Display
  "avatar": AvatarPreview,
  "badge": BadgePreview,
  "tag": TagPreview,
  "timestamp": TimestampPreview,
  "copy-button": CopyButtonPreview,
  "qr-code": QRCodePreview,
  "empty-state": EmptyStatePreview,
  "error-state": ErrorStatePreview,

  // Auth
  "auth-card": AuthCardPreview,
  "user-menu": UserMenuPreview,

  // Commerce
  "product-card": ProductCardPreview,
  "cart-drawer": CartDrawerPreview,
  "checkout-form": CheckoutFormPreview,
  "pricing-table": PricingTablePreview,

  // 3D & Interactive
  "interactive-globe": InteractiveGlobePreview,
  "globe-marker": GlobeMarkerPreview,
  "globe-arc": GlobeArcPreview,
  "world-map": WorldMapPreview,
};

// Fallback placeholder for components not yet implemented
function PlaceholderPreview({ componentId }: { componentId: string }) {
  const component = componentRegistry.find(c => c.id === componentId);

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center font-mono">
      <div className="w-16 h-16 border-4 border-amber-600 bg-amber-500 flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <span className="text-2xl text-white font-bold">
          {component?.name?.charAt(0) || "?"}
        </span>
      </div>
      <h3 className="text-lg font-bold uppercase text-amber-900 dark:text-amber-100">{component?.name || componentId}</h3>
      <p className="text-sm text-amber-600 dark:text-amber-400 mt-1 uppercase">Preview coming soon</p>
    </div>
  );
}

export default function ComponentPreview({ componentId }: ComponentPreviewProps) {
  const PreviewComponent = previewComponents[componentId];

  if (PreviewComponent) {
    return (
      <div className="flex items-center justify-center p-6">
        <PreviewComponent />
      </div>
    );
  }

  return <PlaceholderPreview componentId={componentId} />;
}
