import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { getProjectById } from '../data/projects'

export function ProjectDetailPage() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const project = getProjectById(id || '')
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    if (!project) {
        return (
            <div className="min-h-screen bg-concrete-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button onClick={() => navigate('/')} className="text-sm uppercase tracking-widest border-b border-concrete-900 pb-1">
                        Back to Home
                    </button>
                </div>
            </div>
        )
    }

    const validImages = project.gallery.filter(img => !img.startsWith('special://'))

    const prev = () => setLightboxIndex(i => i !== null ? (i - 1 + validImages.length) % validImages.length : null)
    const next = () => setLightboxIndex(i => i !== null ? (i + 1) % validImages.length : null)

    return (
        <main className="min-h-screen bg-concrete-50 text-concrete-900">
            {/* Header */}
            <div className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 bg-concrete-50/90 backdrop-blur-sm border-b border-concrete-200">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:opacity-50 transition-opacity"
                >
                    <ArrowLeft size={14} />
                    Back
                </button>
                <div className="font-bold text-xl uppercase tracking-[0.2em]">Aethereal</div>
            </div>

            {/* Hero */}
            <section className="pt-32 pb-16 px-8 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm uppercase tracking-[0.4em] text-concrete-400 font-medium block mb-4">
                        {project.category} / {project.location}
                    </span>
                    <h1 className="text-[8vw] font-bold uppercase tracking-tighter leading-none mb-8">
                        {project.title}
                    </h1>
                    <p className="max-w-xl text-xl text-concrete-600 leading-relaxed font-light">
                        {project.description}
                    </p>
                </motion.div>
            </section>

            {/* Cover Image */}
            <section className="px-8 md:px-20 mb-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full h-[60vh] overflow-hidden cursor-pointer"
                    onClick={() => setLightboxIndex(0)}
                >
                    <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>
            </section>

            {/* Gallery Grid */}
            <section className="px-8 md:px-20 py-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {validImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                            className="aspect-square overflow-hidden cursor-pointer group"
                            onClick={() => setLightboxIndex(i)}
                        >
                            <img
                                src={img}
                                alt={`${project.title} ${i + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center"
                        onClick={() => setLightboxIndex(null)}
                    >
                        {/* Close */}
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
                            onClick={() => setLightboxIndex(null)}
                        >
                            <X size={28} />
                        </button>

                        {/* Prev */}
                        <button
                            className="absolute left-6 text-white/70 hover:text-white transition-colors z-10"
                            onClick={(e) => { e.stopPropagation(); prev() }}
                        >
                            <ChevronLeft size={40} />
                        </button>

                        {/* Image */}
                        <motion.img
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            src={validImages[lightboxIndex]}
                            alt={`${project.title} ${lightboxIndex + 1}`}
                            className="max-h-[85vh] max-w-[85vw] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Next */}
                        <button
                            className="absolute right-6 text-white/70 hover:text-white transition-colors z-10"
                            onClick={(e) => { e.stopPropagation(); next() }}
                        >
                            <ChevronRight size={40} />
                        </button>

                        {/* Counter */}
                        <div className="absolute bottom-6 text-white/40 text-xs uppercase tracking-widest">
                            {lightboxIndex + 1} / {validImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}
