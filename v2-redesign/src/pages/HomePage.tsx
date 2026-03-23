import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'

export function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollTo = (id: string) => {
        setMenuOpen(false)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <main className="min-h-screen bg-concrete-50 text-concrete-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference invert">
                <div className="font-bold text-xl uppercase tracking-[0.2em]">Aethereal</div>
                <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.3em] font-medium">
                    <button onClick={() => scrollTo('work')} className="hover:opacity-50 transition-opacity">Work</button>
                    <button onClick={() => scrollTo('studio')} className="hover:opacity-50 transition-opacity">Studio</button>
                    <button onClick={() => scrollTo('contact')} className="hover:opacity-50 transition-opacity">Contact</button>
                </div>
                <button
                    className="md:hidden uppercase text-xs tracking-widest font-bold"
                    onClick={() => setMenuOpen(true)}
                >
                    Menu
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-concrete-900 text-concrete-50 z-[100] flex flex-col items-center justify-center"
                    >
                        <button
                            className="absolute top-6 right-6 text-xs uppercase tracking-widest font-bold"
                            onClick={() => setMenuOpen(false)}
                        >
                            <X size={24} />
                        </button>
                        <nav className="flex flex-col items-center gap-10">
                            {['work', 'studio', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item)}
                                    className="text-4xl font-bold uppercase tracking-tighter hover:opacity-50 transition-opacity"
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-end p-8 md:p-20 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-8"
                >
                    <span className="text-sm uppercase tracking-[0.4em] text-concrete-400 font-medium">
                        Architectural Studio / 2025
                    </span>
                </motion.div>

                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[14vw] font-bold leading-[0.85] tracking-tighter uppercase"
                    >
                        Visionary<br />Design
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <p className="max-w-md text-lg md:text-xl text-concrete-600 leading-relaxed font-light">
                        Crafting bold brutalist architecture and minimalist living environments that redefine the essence of modern space.
                    </p>
                    <div className="flex flex-col items-start md:items-end gap-2 text-xs uppercase tracking-widest font-bold">
                        <div className="w-12 h-px bg-concrete-900 mb-2" />
                        <span>Scroll to explore</span>
                    </div>
                </motion.div>
            </section>

            {/* Work / Project Cards Section */}
            <section id="work" className="px-8 md:px-20 py-24 space-y-0">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </section>

            {/* Studio / About Section */}
            <section id="studio" className="px-8 md:px-20 py-32 bg-concrete-900 text-concrete-50">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs uppercase tracking-[0.4em] text-concrete-400 block mb-6">About the Studio</span>
                        <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
                            We Build Dreams
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-concrete-300 leading-relaxed mb-6">
                            Tipler Design is a luxury interior design studio specializing in transformative spaces. From resort-style pool environments to bespoke kitchen remodels, we bring vision and craft together.
                        </p>
                        <p className="text-lg text-concrete-300 leading-relaxed">
                            Every project is a collaboration — a careful dialogue between the client's aspirations and our mastery of materials, light, and form.
                        </p>
                        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-concrete-700 pt-10">
                            {[['15+', 'Years'], ['200+', 'Projects'], ['100%', 'Satisfaction']].map(([num, label]) => (
                                <div key={label}>
                                    <div className="text-3xl font-bold">{num}</div>
                                    <div className="text-xs uppercase tracking-widest text-concrete-400 mt-1">{label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer / Contact */}
            <footer id="contact" className="h-screen flex flex-col items-center justify-center bg-concrete-900 text-concrete-50 p-8 text-center relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="text-xs uppercase tracking-[0.5em] opacity-40 mb-8 block">Project Inquiry</span>
                    <h2 className="text-[12vw] font-bold uppercase tracking-tighter leading-none mb-12">
                        Let's<br />Talk
                    </h2>
                    <a
                        href="mailto:hello@tiplerdesign.com"
                        className="text-2xl md:text-4xl font-light border-b border-concrete-50/20 pb-4 hover:border-concrete-50 transition-colors"
                    >
                        hello@tiplerdesign.com
                    </a>
                </motion.div>

                <div className="absolute bottom-10 left-0 w-full px-8 md:px-20 flex justify-between items-end text-[10px] uppercase tracking-[0.3em] opacity-40">
                    <div>© 2025 Tipler Design</div>
                    <div className="flex gap-8">
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Houzz</a>
                    </div>
                </div>
            </footer>
        </main>
    )
}
