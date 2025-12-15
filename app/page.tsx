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
        <div className="inline-flex items-center gap-2 px-4 py-2 border-4 border-amber-600 dark:border-amber-500 bg-amber-100 dark:bg-amber-900/30 shadow-[4px_4px_0px_0px_rgba(180,83,9,1)] dark:shadow-[4px_4px_0px_0px_rgba(245,158,11,0.5)] mb-4">
          <Monitor className="w-4 h-4 text-amber-700 dark:text-amber-400" />
          <span className="text-sm font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">Retro Style</span>
        </div>
        <h1 className="text-5xl font-black uppercase tracking-tight text-amber-900 dark:text-amber-100">
          UI Component Reference
        </h1>
        <p className="text-lg text-amber-700 dark:text-amber-300 max-w-2xl mx-auto">
          A comprehensive library of <span className="font-bold text-amber-900 dark:text-amber-100">{componentRegistry.length} UI components</span> in
          classic retro style. Browse, explore, and get inspired.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-amber-600 dark:text-amber-400 uppercase tracking-wide">
          <span className="flex items-center gap-1">
            <Layers className="w-4 h-4" />
            {categories.length - 1} Categories
          </span>
          <span className="text-amber-400">■</span>
          <span>{componentRegistry.length} Components</span>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600 dark:text-amber-400" />
          <input
            type="text"
            placeholder="SEARCH COMPONENTS..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950/50 text-amber-900 dark:text-amber-100 placeholder-amber-400 dark:placeholder-amber-600 font-mono uppercase tracking-wide focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(180,83,9,1)] dark:focus:shadow-[4px_4px_0px_0px_rgba(245,158,11,0.5)] transition-all"
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
                  ? "border-amber-600 dark:border-amber-400 bg-amber-500 dark:bg-amber-600 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  : "border-amber-300 dark:border-amber-700 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-800/50 hover:shadow-[2px_2px_0px_0px_rgba(180,83,9,0.5)]"
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
                  ? "border-amber-600 dark:border-amber-400 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200"
                  : "border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/50"
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
                    ? "border-amber-600 dark:border-amber-400 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200"
                    : "border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/50"
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
            <h2 className="text-lg font-bold uppercase tracking-wide text-amber-700 dark:text-amber-300 border-b-4 border-amber-300 dark:border-amber-700 pb-2">
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
                  <div className="group h-full p-5 border-4 border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-950/30 hover:shadow-[6px_6px_0px_0px_rgba(180,83,9,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(245,158,11,0.5)] hover:border-amber-600 dark:hover:border-amber-400 transition-all duration-200 cursor-pointer">
                    <div className="space-y-3">
                      {/* Component Icon */}
                      <div className="w-12 h-12 border-4 border-amber-500 dark:border-amber-500 bg-amber-200 dark:bg-amber-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]">
                        <Monitor className="w-6 h-6 text-amber-700 dark:text-amber-300" />
                      </div>

                      <div>
                        <h3 className="font-bold uppercase tracking-wide text-amber-900 dark:text-amber-100 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                          {component.name}
                        </h3>
                        {component.subcategory && (
                          <span className="text-xs uppercase tracking-wider text-amber-500 dark:text-amber-500">
                            {component.category} / {component.subcategory}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-amber-700 dark:text-amber-400 line-clamp-2">
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
          <p className="text-amber-600 dark:text-amber-400 uppercase tracking-wide">No components found matching your criteria.</p>
        </div>
      )}

      {/* Stats Footer */}
      <div className="text-center py-8 border-t-4 border-amber-300 dark:border-amber-700">
        <p className="text-sm text-amber-600 dark:text-amber-400 uppercase tracking-wide">
          Showing {filteredComponents.length} of {componentRegistry.length} components
        </p>
      </div>
    </div>
  );
}
