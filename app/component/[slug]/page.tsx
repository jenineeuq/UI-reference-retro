"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Box, Code, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { componentRegistry } from "@/lib/component-registry";
import ComponentPreview from "@/components/shared/ComponentPreview";

export default function ComponentPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const component = componentRegistry.find((c) => c.id === slug);
  const [copied, setCopied] = useState(false);

  if (!component) {
    return (
      <div className="text-center py-12 font-mono">
        <h1 className="text-2xl font-bold uppercase theme-text">Component not found</h1>
        <Link href="/" className="theme-text-muted hover:theme-text mt-4 inline-block uppercase">
          Back to home
        </Link>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(`<${component.name} />`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Find related components (same category/subcategory)
  const relatedComponents = componentRegistry
    .filter(c => c.id !== component.id && (c.category === component.category || c.subcategory === component.subcategory))
    .slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto space-y-8 font-mono">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm theme-text-muted hover:theme-text transition-colors uppercase tracking-wide"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to all components
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 border-4 theme-border theme-bg-header flex items-center justify-center theme-shadow">
              <Box className="w-8 h-8 theme-text" />
            </div>
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tight theme-text">{component.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-3 py-1 border-2 theme-border theme-btn text-white text-sm font-bold uppercase">
                  {component.category}
                </span>
                {component.subcategory && (
                  <span className="px-3 py-1 border-2 theme-border-light theme-bg theme-text-muted text-sm font-bold uppercase">
                    {component.subcategory}
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 border-4 theme-border theme-bg hover:theme-bg-dark transition-colors uppercase font-bold text-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 theme-text" />
                <span className="theme-text">Copy Component</span>
              </>
            )}
          </button>
        </div>

        <p className="text-lg theme-text-muted max-w-3xl">
          {component.description}
        </p>
      </motion.div>

      {/* Component Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="border-4 theme-border overflow-hidden theme-shadow"
      >
        <div className="px-4 py-3 theme-bg-header border-b-4 theme-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 border-2 border-red-700" />
            <div className="w-3 h-3 bg-yellow-500 border-2 border-yellow-700" />
            <div className="w-3 h-3 bg-green-500 border-2 border-green-700" />
          </div>
          <span className="text-xs theme-text-muted uppercase font-bold tracking-wider">Retro Style</span>
        </div>

        <div className="theme-bg min-h-[400px] flex items-center justify-center p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }} />
          </div>

          {/* Component Preview */}
          <div className="relative z-10">
            <ComponentPreview componentId={component.id} />
          </div>
        </div>
      </motion.div>

      {/* Component Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Usage */}
        <div className="border-4 theme-border theme-bg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 theme-text-muted" />
            <h3 className="font-bold uppercase tracking-wide theme-text">Usage</h3>
          </div>
          <pre className="theme-bg-dark border-2 theme-border-light p-4 overflow-x-auto">
            <code className="text-sm font-mono theme-text">
{`import { ${component.name} } from '@/components/ui';

<${component.name} />
`}
            </code>
          </pre>
        </div>

        {/* Features */}
        <div className="border-4 theme-border theme-bg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Box className="w-5 h-5 theme-text-muted" />
            <h3 className="font-bold uppercase tracking-wide theme-text">Features</h3>
          </div>
          <ul className="space-y-2 text-sm theme-text-muted">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 theme-accent-bg" />
              Retro visual style with pixel borders
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 theme-accent-bg" />
              Smooth animations & transitions
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 theme-accent-bg" />
              Dark & light mode support
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 theme-accent-bg" />
              Multiple color theme options
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 theme-accent-bg" />
              Accessible (ARIA compliant)
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Related Components */}
      {relatedComponents.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold uppercase tracking-wide theme-text">Related Components</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedComponents.map((related) => (
              <Link key={related.id} href={`/component/${related.id}`}>
                <div className="p-4 border-4 theme-border-light theme-bg hover:theme-border hover:theme-shadow transition-all">
                  <div className="w-10 h-10 border-2 theme-border theme-bg-header flex items-center justify-center mb-2">
                    <Box className="w-5 h-5 theme-text-muted" />
                  </div>
                  <h4 className="font-bold text-sm uppercase theme-text">{related.name}</h4>
                  <p className="text-xs theme-text-muted uppercase">{related.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
