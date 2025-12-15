"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Box, Code, Copy, Check, ExternalLink } from "lucide-react";
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
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold">Component not found</h1>
        <Link href="/" className="text-primary hover:underline mt-4 inline-block">
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
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <Box className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{component.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {component.category}
                </span>
                {component.subcategory && (
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    {component.subcategory}
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-green-500">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Component</span>
              </>
            )}
          </button>
        </div>

        <p className="text-lg text-muted-foreground max-w-3xl">
          {component.description}
        </p>
      </motion.div>

      {/* Component Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl border border-border overflow-hidden"
      >
        <div className="px-4 py-3 bg-muted/50 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-muted-foreground font-mono">3D Illustration Style</span>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 min-h-[400px] flex items-center justify-center p-8 relative overflow-hidden">
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
        <div className="rounded-xl border border-border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Usage</h3>
          </div>
          <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
            <code className="text-sm font-mono">
{`import { ${component.name} } from '@/components/ui';

<${component.name} />
`}
            </code>
          </pre>
        </div>

        {/* Features */}
        <div className="rounded-xl border border-border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Box className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Features</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              3D Illustration visual style
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Smooth animations & transitions
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Dark & light mode support
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Fully responsive
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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
          <h3 className="text-lg font-semibold">Related Components</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedComponents.map((related) => (
              <Link key={related.id} href={`/component/${related.id}`}>
                <div className="p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-2">
                    <Box className="w-5 h-5 text-purple-500" />
                  </div>
                  <h4 className="font-medium text-sm">{related.name}</h4>
                  <p className="text-xs text-muted-foreground">{related.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
