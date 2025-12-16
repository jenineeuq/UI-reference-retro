"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Layers, Monitor } from "lucide-react";
import { componentRegistry, categories, subcategories } from "@/lib/component-registry";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const filteredComponents = componentRegistry.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || component.category === selectedCategory;

    const matchesSubcategory =
      !selectedSubcategory || component.subcategory === selectedSubcategory;

    return matchesSearch && matchesCategory && matchesSubcategory;
  });

  const currentSubcategories = selectedCategory !== "All" && subcategories[selectedCategory]
    ? subcategories[selectedCategory]
    : [];

  // Group components by subcategory for display
  const groupedComponents = filteredComponents.reduce((acc, component) => {
    const key = component.subcategory || "General";
    if (!acc[key]) acc[key] = [];
    acc[key].push(component);
    return acc;
  }, {} as Record<string, typeof filteredComponents>);

  return (
    <div className="max-w-7xl mx-auto space-y-8 font-mono">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 py-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 border-4 theme-border theme-bg-dark theme-shadow mb-4">
          <Monitor className="w-4 h-4 theme-text-muted" />
          <span className="text-sm font-bold uppercase tracking-wider theme-text">Retro Style</span>
        </div>
        <h1 className="text-5xl font-black uppercase tracking-tight theme-text">
          UI Component Reference
        </h1>
        <p className="text-lg theme-text-muted max-w-2xl mx-auto">
          A comprehensive library of <span className="font-bold theme-text">{componentRegistry.length} UI components</span> in
          classic retro style. Browse, explore, and get inspired.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm theme-text-muted uppercase tracking-wide">
          <span className="flex items-center gap-1">
            <Layers className="w-4 h-4" />
            {categories.length - 1} Categories
          </span>
          <span className="theme-text-subtle">■</span>
          <span>{componentRegistry.length} Components</span>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 theme-text-muted" />
          <input
            type="text"
            placeholder="SEARCH COMPONENTS..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-4 theme-border theme-bg theme-text placeholder:theme-text-subtle font-mono uppercase tracking-wide focus:outline-none focus:theme-shadow transition-all"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedSubcategory(null);
              }}
              className={`px-4 py-2 border-4 text-sm font-bold uppercase tracking-wide transition-all ${
                selectedCategory === category
                  ? "theme-border theme-btn text-white theme-shadow"
                  : "theme-border-light theme-bg theme-text-muted hover:theme-bg-dark"
              }`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-1 opacity-70">
                  ({componentRegistry.filter(c => c.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Subcategory Filter */}
        {currentSubcategories.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedSubcategory(null)}
              className={`px-3 py-1.5 border-2 text-xs font-bold uppercase tracking-wide transition-all ${
                !selectedSubcategory
                  ? "theme-border theme-bg-header theme-text"
                  : "theme-border-light theme-bg theme-text-muted hover:theme-bg-dark"
              }`}
            >
              All {selectedCategory}
            </button>
            {currentSubcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-3 py-1.5 border-2 text-xs font-bold uppercase tracking-wide transition-all ${
                  selectedSubcategory === sub
                    ? "theme-border theme-bg-header theme-text"
                    : "theme-border-light theme-bg theme-text-muted hover:theme-bg-dark"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Component Grid */}
      {Object.entries(groupedComponents).map(([group, components]) => (
        <div key={group} className="space-y-4">
          {selectedCategory !== "All" && Object.keys(groupedComponents).length > 1 && (
            <h2 className="text-lg font-bold uppercase tracking-wide theme-text-muted border-b-4 theme-border-light pb-2">
              {group}
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {components.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
              >
                <Link href={`/component/${component.id}`}>
                  <div className="group h-full p-5 border-4 theme-border-light theme-bg hover:theme-shadow hover:theme-border transition-all duration-200 cursor-pointer">
                    <div className="space-y-3">
                      {/* Component Icon */}
                      <div className="w-12 h-12 border-4 theme-border theme-bg-header flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform retro-shadow-sm">
                        <Monitor className="w-6 h-6 theme-text-muted" />
                      </div>

                      <div>
                        <h3 className="font-bold uppercase tracking-wide theme-text group-hover:theme-text-muted transition-colors">
                          {component.name}
                        </h3>
                        {component.subcategory && (
                          <span className="text-xs uppercase tracking-wider theme-text-subtle">
                            {component.category} / {component.subcategory}
                          </span>
                        )}
                      </div>

                      <p className="text-sm theme-text-muted line-clamp-2">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {filteredComponents.length === 0 && (
        <div className="text-center py-12">
          <p className="theme-text-muted uppercase tracking-wide">No components found matching your criteria.</p>
        </div>
      )}

      {/* Stats Footer */}
      <div className="text-center py-8 border-t-4 theme-border-light">
        <p className="text-sm theme-text-muted uppercase tracking-wide">
          Showing {filteredComponents.length} of {componentRegistry.length} components
        </p>
      </div>
    </div>
  );
}
