"use client";

import { useState } from "react";
import {
  ChevronUp, ChevronDown, Search, ChevronLeft, ChevronRight,
  TrendingUp, TrendingDown, MoreHorizontal, ArrowUpRight
} from "lucide-react";

// ========== TABLE COMPONENTS ==========

// DataTable Preview
export function DataTablePreview() {
  const [sortField, setSortField] = useState<string | null>("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const data = [
    { id: 1, name: "Alice", email: "alice@email.com", status: "Active", amount: "$1,234" },
    { id: 2, name: "Bob", email: "bob@email.com", status: "Pending", amount: "$567" },
    { id: 3, name: "Charlie", email: "charlie@email.com", status: "Active", amount: "$890" },
    { id: 4, name: "Diana", email: "diana@email.com", status: "Inactive", amount: "$2,345" },
  ];

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "status", label: "Status" },
    { key: "amount", label: "Amount" },
  ];

  const toggleSort = (field: string) => {
    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  return (
    <div className="w-full font-mono border-4 theme-border overflow-hidden">
      {/* Header */}
      <div className="px-4 py-2 border-b-4 theme-border theme-bg-header flex justify-between items-center">
        <span className="font-bold uppercase theme-text">■ Data Table</span>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 theme-text-subtle" />
          <input
            type="text"
            placeholder="SEARCH..."
            className="pl-8 pr-3 py-1 text-sm border-2 theme-border theme-bg-dark focus:outline-none uppercase"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="theme-bg-dark border-b-4 theme-border">
              {columns.map(col => (
                <th
                  key={col.key}
                  onClick={() => toggleSort(col.key)}
                  className="px-4 py-2 text-left text-xs uppercase font-bold theme-text-muted cursor-pointer hover:theme-bg-header hover:theme-bg-header"
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    {sortField === col.key && (
                      sortDir === "asc" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="theme-bg">
            {data.map((row, i) => (
              <tr
                key={row.id}
                className="border-b-2 theme-border-light hover:theme-bg-dark dark:hover:theme-bg-dark"
              >
                <td className="px-4 py-2 font-bold theme-text">{row.name}</td>
                <td className="px-4 py-2 theme-text-muted text-sm">{row.email}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-0.5 text-xs font-bold uppercase ${
                    row.status === "Active" ? "bg-green-200 text-green-700" :
                    row.status === "Pending" ? "bg-yellow-200 text-yellow-700" :
                    "bg-red-200 text-red-700"
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-2 font-bold theme-text">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t-4 theme-border-light theme-bg-dark flex justify-between items-center">
        <span className="text-xs theme-text-subtle uppercase">Showing 4 of 4</span>
        <div className="flex gap-1">
          <button className="p-1 border-2 theme-border hover:theme-bg-header">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="px-2 py-1 border-2 theme-border theme-accent-bg text-white text-xs font-bold">1</button>
          <button className="p-1 border-2 theme-border hover:theme-bg-header">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// VirtualizedList Preview
export function VirtualizedListPreview() {
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    value: Math.floor(Math.random() * 1000),
  }));

  return (
    <div className="w-full max-w-sm font-mono border-4 theme-border theme-bg">
      <div className="px-4 py-2 border-b-4 theme-border theme-bg-header">
        <span className="font-bold uppercase theme-text">■ Virtual List (100 items)</span>
      </div>
      <div className="h-64 overflow-y-auto">
        {items.slice(0, 20).map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between px-4 py-2 border-b-2 theme-border-light hover:theme-bg-dark dark:hover:theme-bg-dark"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 border-2 theme-border theme-bg-header flex items-center justify-center text-xs font-bold theme-text">
                {item.id}
              </span>
              <span className="theme-text font-bold uppercase">{item.name}</span>
            </div>
            <span className="theme-text-muted">${item.value}</span>
          </div>
        ))}
      </div>
      <div className="px-4 py-2 border-t-4 theme-border-light theme-bg-dark text-center">
        <span className="text-xs theme-text-subtle uppercase">Scroll for more...</span>
      </div>
    </div>
  );
}

// ========== CHART COMPONENTS ==========

// BarChart Preview
export function BarChartPreview() {
  const data = [
    { label: "Mon", value: 65 },
    { label: "Tue", value: 85 },
    { label: "Wed", value: 45 },
    { label: "Thu", value: 90 },
    { label: "Fri", value: 70 },
    { label: "Sat", value: 40 },
    { label: "Sun", value: 55 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="w-full max-w-md font-mono border-4 theme-border theme-bg p-4">
      <h3 className="font-bold uppercase theme-text mb-4">■ Weekly Sales</h3>
      <div className="flex items-end gap-2 h-40">
        {data.map(item => (
          <div key={item.label} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full theme-accent-bg border-2 theme-border transition-all hover:theme-bg-header"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            />
            <span className="text-xs theme-text-muted uppercase">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 pt-2 border-t-2 theme-border-light">
        <span className="text-xs theme-text-subtle uppercase">Total: $4,500</span>
        <span className="text-xs text-green-600">+12% vs last week</span>
      </div>
    </div>
  );
}

// LineChart Preview
export function LineChartPreview() {
  const data = [20, 45, 35, 60, 55, 80, 75];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  return (
    <div className="w-full max-w-md font-mono border-4 theme-border theme-bg p-4">
      <h3 className="font-bold uppercase theme-text mb-4">■ Growth Trend</h3>
      <div className="relative h-40">
        {/* Grid */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[100, 75, 50, 25, 0].map(v => (
            <div key={v} className="flex items-center gap-2">
              <span className="text-xs theme-text-subtle w-8">{v}</span>
              <div className="flex-1 border-b theme-border-light" />
            </div>
          ))}
        </div>
        {/* Data points */}
        <svg className="absolute inset-0 ml-10" viewBox="0 0 280 160" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke="#f59e0b"
            strokeWidth="4"
            points={data.map((v, i) => `${i * 40 + 20},${160 - v * 1.6}`).join(" ")}
          />
          {data.map((v, i) => (
            <rect
              key={i}
              x={i * 40 + 16}
              y={160 - v * 1.6 - 4}
              width="8"
              height="8"
              fill="#f59e0b"
              stroke="#92400e"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>
      {/* Labels */}
      <div className="flex justify-between mt-2 ml-10">
        {labels.map(l => (
          <span key={l} className="text-xs theme-text-subtle uppercase">{l}</span>
        ))}
      </div>
    </div>
  );
}

// PieChart Preview
export function PieChartPreview() {
  const data = [
    { label: "Desktop", value: 45, color: "#f59e0b" },
    { label: "Mobile", value: 35, color: "#d97706" },
    { label: "Tablet", value: 20, color: "#b45309" },
  ];

  // Simple pie chart representation
  let cumulative = 0;

  return (
    <div className="w-full max-w-sm font-mono border-4 theme-border theme-bg p-4">
      <h3 className="font-bold uppercase theme-text mb-4">■ Traffic Sources</h3>
      <div className="flex items-center gap-4">
        {/* Pie */}
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {data.map((item, i) => {
              const start = cumulative;
              cumulative += item.value;
              const startAngle = (start / 100) * 360;
              const endAngle = (cumulative / 100) * 360;
              const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
              const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
              const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
              const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
              const largeArc = item.value > 50 ? 1 : 0;

              return (
                <path
                  key={i}
                  d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
                  fill={item.color}
                  stroke="#000"
                  strokeWidth="2"
                />
              );
            })}
          </svg>
        </div>
        {/* Legend */}
        <div className="space-y-2">
          {data.map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 theme-border" style={{ backgroundColor: item.color }} />
              <span className="text-xs theme-text-muted uppercase">{item.label}</span>
              <span className="text-xs font-bold theme-text">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// AreaChart Preview
export function AreaChartPreview() {
  const data = [30, 50, 40, 70, 55, 85, 75, 90];

  return (
    <div className="w-full max-w-md font-mono border-4 theme-border theme-bg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold uppercase theme-text">■ Revenue</h3>
        <span className="text-green-600 font-bold flex items-center gap-1">
          <TrendingUp className="w-4 h-4" />
          +24%
        </span>
      </div>
      <div className="relative h-32">
        <svg className="w-full h-full" viewBox="0 0 320 130" preserveAspectRatio="none">
          {/* Area */}
          <path
            d={`M 0 130 ${data.map((v, i) => `L ${i * 40 + 20} ${130 - v}`).join(" ")} L 300 130 Z`}
            fill="url(#areaGradient)"
            stroke="#f59e0b"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Points */}
          {data.map((v, i) => (
            <rect
              key={i}
              x={i * 40 + 16}
              y={130 - v - 4}
              width="8"
              height="8"
              fill="#f59e0b"
              stroke="#92400e"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>
      <div className="flex justify-between mt-2 text-xs theme-text-subtle uppercase">
        <span>Q1</span>
        <span>Q2</span>
        <span>Q3</span>
        <span>Q4</span>
      </div>
    </div>
  );
}

// ========== STATS COMPONENTS ==========

// StatCard Preview
export function StatCardPreview() {
  const stats = [
    { label: "Total Users", value: "12,456", change: "+12%", up: true },
    { label: "Revenue", value: "$45,678", change: "+8%", up: true },
    { label: "Bounce Rate", value: "32.5%", change: "-5%", up: false },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 font-mono">
      {stats.map(stat => (
        <div key={stat.label} className="border-4 theme-border theme-bg p-4">
          <div className="text-xs theme-text-subtle uppercase mb-1">{stat.label}</div>
          <div className="text-2xl font-bold theme-text">{stat.value}</div>
          <div className={`flex items-center gap-1 text-sm font-bold mt-1 ${stat.up ? "text-green-600" : "text-red-500"}`}>
            {stat.up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
}

// LeaderboardTable Preview
export function LeaderboardTablePreview() {
  const users = [
    { rank: 1, name: "CryptoKing", points: 12500, change: 2 },
    { rank: 2, name: "DegenMaster", points: 11200, change: -1 },
    { rank: 3, name: "WhaleAlert", points: 10800, change: 1 },
    { rank: 4, name: "DiamondHands", points: 9500, change: 0 },
    { rank: 5, name: "MoonShot", points: 8900, change: -2 },
  ];

  return (
    <div className="w-full max-w-md font-mono border-4 theme-border theme-bg">
      <div className="px-4 py-2 border-b-4 theme-border theme-bg-header flex items-center justify-between">
        <span className="font-bold uppercase theme-text">■ Leaderboard</span>
        <MoreHorizontal className="w-5 h-5 theme-text-muted cursor-pointer" />
      </div>
      <div>
        {users.map(user => (
          <div
            key={user.rank}
            className="flex items-center gap-3 px-4 py-3 border-b-2 theme-border-light hover:theme-bg-dark dark:hover:theme-bg-dark"
          >
            <div className={`w-8 h-8 border-4 flex items-center justify-center font-bold ${
              user.rank === 1 ? "border-yellow-500 bg-yellow-400 text-yellow-900" :
              user.rank === 2 ? "border-gray-400 bg-gray-300 text-gray-700" :
              user.rank === 3 ? "border-orange-500 bg-orange-400 text-orange-900" :
              "theme-border theme-bg-header theme-text"
            }`}>
              {user.rank}
            </div>
            <div className="flex-1">
              <div className="font-bold theme-text uppercase">{user.name}</div>
              <div className="text-xs theme-text-subtle">{user.points.toLocaleString()} pts</div>
            </div>
            <div className={`text-xs font-bold ${
              user.change > 0 ? "text-green-600" : user.change < 0 ? "text-red-500" : "theme-text-subtle"
            }`}>
              {user.change > 0 ? `↑${user.change}` : user.change < 0 ? `↓${Math.abs(user.change)}` : "—"}
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 py-2 border-t-4 theme-border-light theme-bg-dark">
        <button className="w-full text-center text-sm theme-text-muted uppercase font-bold hover:theme-text flex items-center justify-center gap-1">
          View All <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
