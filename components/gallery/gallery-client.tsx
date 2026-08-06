"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryItems, galleryCategories, getGalleryItem } from "@/data/gallery";

export function GalleryClient() {
  const [filter, setFilter] = useState<string>("All");
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((g) => g.category === filter),
    [filter]
  );

  const activeIndex = useMemo(
    () => visible.findIndex((g) => g.src === activeSrc),
    [activeSrc, visible]
  );

  const active = activeIndex >= 0 ? visible[activeIndex] : null;

  const step = (dir: number) => {
    if (visible.length === 0) return;
    setActiveSrc(visible[(activeIndex + dir + visible.length) % visible.length].src);
  };

  return (
    <>
      <PageHeader
        eyebrow="// gallery"
        title="Moments &"
        highlight="Studio"
        description="A filtered, fullscreen-previewable gallery. Click any image to zoom in and browse with the arrow keys."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 flex flex-wrap items-center gap-2">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                  filter === c
                    ? "border-primary-500/50 text-primary-400"
                    : "border-white/10 text-mist-400 hover:border-white/25 hover:text-mist-100"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Masonry via CSS columns */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {visible.map((item, i) => (
                <motion.button
                  key={item.src}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  onClick={() => setActiveSrc(item.src)}
                  className={`group relative mb-5 block w-full overflow-hidden rounded-xl border border-white/10 text-left transition-colors hover:border-primary-500/40 ${
                    item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                  aria-label={`Open ${item.title}`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="font-display text-base font-bold text-mist-100">
                      {item.title}
                    </div>
                    <div className="text-xs text-mist-400">{item.category}</div>
                  </div>
                  <div className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-lg border border-white/20 bg-ink-950/60 text-mist-100 opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                    <ZoomIn className="size-4" />
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* Lightbox */}
          <Dialog open={!!active} onOpenChange={(o) => !o && setActiveSrc(null)}>
            <DialogContent
              className="max-w-5xl border-white/10 bg-ink-950/95 p-0"
              hideClose
            >
              <DialogTitle className="sr-only">{active?.title}</DialogTitle>
              <div className="relative">
                <AnimatePresence mode="wait">
                  {active && (
                    <motion.div
                      key={active.src}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col"
                    >
                      <div className="relative flex h-[70vh] items-center justify-center bg-ink-950 p-6">
                        <Image
                          src={active.src}
                          alt={active.title}
                          fill
                          sizes="90vw"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-between border-t border-white/8 px-6 py-4">
                        <div>
                          <div className="font-display text-base font-bold text-mist-100">
                            {active.title}
                          </div>
                          <div className="text-xs text-mist-400">{active.caption}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => step(-1)}
                            className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-mist-100 transition-colors hover:border-primary-500/50 hover:text-primary-400"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="size-4" />
                          </button>
                          <button
                            onClick={() => step(1)}
                            className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-mist-100 transition-colors hover:border-primary-500/50 hover:text-primary-400"
                            aria-label="Next image"
                          >
                            <ChevronRight className="size-4" />
                          </button>
                          <button
                            onClick={() => setActiveSrc(null)}
                            className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-mist-100 transition-colors hover:border-primary-500/50 hover:text-primary-400"
                            aria-label="Close"
                          >
                            <X className="size-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </>
  );
}
