"use client";

import Image from "next/image";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Languages,
  Mail,
  Menu,
  Phone,
  X
} from "lucide-react";
import { AnimatePresence, MotionConfig, motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { FormEvent, useEffect, useState } from "react";
import { certifications, content, languageScale, profile, spokenLanguages, type Lang, type Project } from "@/lib/content";
import { SectionReveal } from "@/components/section-reveal";
import { TechIcon } from "@/components/tech-icon";

const sectionIds = ["home", "about", "journey", "skills", "projects", "services", "contact"];

export function Portfolio() {
  const [lang, setLang] = useState<Lang>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reducedMotion = useReducedMotion();
  const t = content[lang];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-160, 160], [5, -5]);
  const rotateY = useTransform(mouseX, [-160, 160], [-6, 6]);

  useEffect(() => {
    const saved = window.localStorage.getItem("sidtaher-lang");
    if (saved === "fr" || saved === "en") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.22, 0.42, 0.62], rootMargin: "-12% 0px -58% 0px" }
    );

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  function switchLang(next: Lang) {
    window.localStorage.setItem("sidtaher-lang", next);
    setLang(next);
    setMenuOpen(false);
  }

  function handleMailForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const sender = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(lang === "fr" ? `Portfolio - message de ${name}` : `Portfolio - message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${sender}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="noise" aria-hidden="true" />
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-lg bg-white px-4 py-3 font-bold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {lang === "fr" ? "Aller au contenu" : "Skip to content"}
      </a>
      <Header
        lang={lang}
        activeSection={activeSection}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(value => !value)}
        onCloseMenu={() => setMenuOpen(false)}
        onSwitchLang={switchLang}
      />

      <main id="main-content">
        <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
          <div className="section-shell grid items-center gap-14 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.p
                className="mb-6 inline-flex min-h-11 items-center rounded-lg border border-emerald-300/25 bg-emerald-300/10 px-4 text-sm font-semibold text-emerald-200"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.45 }}
              >
                {t.hero.badge}
              </motion.p>
              <motion.h1
                className="max-w-4xl text-balance font-[Manrope] text-5xl font-extrabold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                {t.hero.title}
              </motion.h1>
              <motion.p
                className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.55 }}
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46, duration: 0.5 }}
              >
                <a
                  href="#projects"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-emerald-100"
                >
                  {t.hero.primary}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:border-emerald-300/50 hover:bg-white/10"
                >
                  {t.hero.secondary}
                </a>
                <a
                  href={profile.cv}
                  download="Siditaher-Oumar-CV.pdf"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-5 py-3 font-bold text-emerald-200 transition hover:border-emerald-300/60 hover:bg-emerald-300/20"
                >
                  <Download size={18} aria-hidden="true" />
                  {t.hero.downloadCv}
                </a>
              </motion.div>
              <motion.div
                className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap"
                initial={false}
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.07, delayChildren: 0.55 } }
                }}
              >
                {t.hero.stats.map(item => (
                  <motion.span
                    key={item}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 }
                    }}
                    className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm font-semibold text-slate-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-[560px]"
              onPointerMove={event => {
                if (reducedMotion) return;
                const rect = event.currentTarget.getBoundingClientRect();
                mouseX.set(event.clientX - rect.left - rect.width / 2);
                mouseY.set(event.clientY - rect.top - rect.height / 2);
              }}
              onPointerLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
              }}
              style={{ rotateX, rotateY, transformPerspective: 900 }}
              initial={false}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroPortrait alt={t.hero.portraitAlt} role={t.hero.portraitRole} />
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <SectionIntro eyebrow={t.about.eyebrow} title={t.about.title} />
            <SectionReveal>
              <div className="space-y-6 text-lg leading-8 text-slate-300">
                <p>{t.about.body}</p>
                <p>{t.about.body2}</p>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {t.about.cards.map(card => (
                  <article key={card.title} className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
                    <card.icon className="mb-4 text-emerald-300" size={24} aria-hidden="true" />
                    <h3 className="font-[Manrope] text-lg font-bold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{card.text}</p>
                  </article>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal className="border-t border-white/10 pt-10 lg:col-span-2">
              <h3 className="flex items-center gap-3 font-[Manrope] text-xl font-bold text-white">
                <Languages size={24} className="shrink-0 text-blue-300" aria-hidden="true" />
                {t.journey.languagesHeading}
                <span className="ml-auto text-sm font-semibold text-slate-400">{t.journey.languageScale}</span>
              </h3>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {spokenLanguages.map(language => (
                  <article key={language.id} className="min-w-0 rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-lg font-bold text-white">{language.name[lang]}</h4>
                      <span className="text-lg font-extrabold text-emerald-300">{language.level}</span>
                    </div>
                    <ol className="mt-5 grid grid-cols-6 gap-2" aria-hidden="true">
                      {languageScale.map((level, index) => {
                        const attained = index <= languageScale.indexOf(language.level);
                        const current = level === language.level;
                        return (
                          <li key={level} className="min-w-0 text-center">
                            <div className={`h-2 rounded-sm ${attained ? "bg-emerald-400" : "bg-white/15"}`} />
                            <span className={`mt-2 block text-xs leading-5 ${current ? "font-extrabold text-emerald-300" : "text-slate-400"}`}>{level}</span>
                          </li>
                        );
                      })}
                    </ol>
                  </article>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        <section id="journey" className="border-t border-white/10 py-20 sm:py-24">
          <div className="section-shell">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <SectionIntro eyebrow={t.journey.eyebrow} title={t.journey.title} />
              </div>
              <div className="flex flex-wrap gap-3 lg:shrink-0">
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  {t.journey.viewCv}
                  <ExternalLink size={18} aria-hidden="true" />
                </a>
                <a
                  href={profile.cv}
                  download="Siditaher-Oumar-CV.pdf"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 py-3 text-sm font-bold text-ink transition hover:bg-emerald-300"
                >
                  <Download size={18} aria-hidden="true" />
                  {t.hero.downloadCv}
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <SectionReveal>
                <h3 className="flex items-center gap-3 font-[Manrope] text-xl font-bold text-white">
                  <GraduationCap size={24} className="shrink-0 text-emerald-300" aria-hidden="true" />
                  {t.journey.educationHeading}
                </h3>
                <div className="mt-6 space-y-7 border-l border-white/15 pl-6">
                  {t.journey.education.map(item => (
                    <article key={item.school}>
                      <h4 className="font-semibold leading-6 text-white">{item.school}</h4>
                      <p className="mt-2 leading-7 text-slate-300">{item.degree}</p>
                    </article>
                  ))}
                </div>
              </SectionReveal>
              <SectionReveal delay={0.06}>
                <h3 className="flex items-center gap-3 font-[Manrope] text-xl font-bold text-white">
                  <BriefcaseBusiness size={24} className="shrink-0 text-blue-300" aria-hidden="true" />
                  {t.journey.experienceHeading}
                </h3>
                <article className="mt-6 border-l border-white/15 pl-6">
                  <p className="text-sm font-semibold leading-6 text-emerald-300">
                    {t.journey.experience.period} · {t.journey.experience.duration}
                  </p>
                  <h4 className="mt-3 text-lg font-bold text-white">{t.journey.experience.company}</h4>
                  <p className="mt-1 font-semibold text-slate-200">{t.journey.experience.role}</p>
                  <p className="mt-3 leading-7 text-slate-300">{t.journey.experience.description}</p>
                </article>
              </SectionReveal>
            </div>

            <SectionReveal className="mt-14 border-t border-white/10 pt-10">
              <h3 className="flex items-center gap-3 font-[Manrope] text-xl font-bold text-white">
                <Award size={24} className="shrink-0 text-amber-300" aria-hidden="true" />
                {t.journey.certificationsHeading}
              </h3>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {certifications.map(certificate => (
                  <article key={certificate.title} className="border-t border-white/15 pt-5">
                    <p className="text-sm font-semibold text-emerald-300">{certificate.issuer}</p>
                    <h4 className="mt-3 font-semibold leading-7 text-white">{certificate.title}</h4>
                    <time dateTime={certificate.date} className="mt-3 block text-sm leading-6 text-slate-400">
                      {new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", {
                        day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
                      }).format(new Date(`${certificate.date}T12:00:00Z`))}
                    </time>
                  </article>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        <section id="skills" className="border-y border-white/10 bg-white/[0.035] py-24">
          <div className="section-shell">
            <SectionIntro eyebrow={t.skills.eyebrow} title={t.skills.title} centered />
            <motion.div
              className="mt-12 grid gap-5 md:grid-cols-2"
              initial={false}
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >
              {t.skills.groups.map(group => (
                <motion.article
                  key={group.title}
                  variants={{
                    hidden: { opacity: 0, y: 18, scale: 0.98 },
                    show: { opacity: 1, y: 0, scale: 1 }
                  }}
                  className="rounded-lg border border-white/10 bg-ink/55 p-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-lg bg-blue-500/15 text-blue-200">
                      <group.icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="font-[Manrope] text-xl font-bold text-white">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.tech.map(tech => (
                      <TechIcon key={tech.name} tech={tech} />
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="section-shell">
            <SectionIntro eyebrow={t.projects.eyebrow} title={t.projects.title} description={t.projects.description} centered />
            <div className="mt-14 space-y-10">
              {t.projectItems.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  detailsLabel={t.projects.details}
                  noExternalLabel={t.projects.noExternal}
                  onDetails={() => setSelectedProject(project)}
                />
              ))}
            </div>
            <SectionReveal className="mt-14">
              <h3 className="font-[Manrope] text-2xl font-bold text-white">{t.projects.more}</h3>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {t.additionalProjectItems.map(project => (
                  <article key={project.title} className="flex min-w-0 flex-col rounded-lg border border-white/10 bg-white/[0.05] p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-emerald-300/10 text-emerald-200">
                        <project.icon size={24} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm leading-6 text-slate-400">{project.type}</p>
                        <h4 className="mt-1 font-[Manrope] text-2xl font-bold text-white">{project.title}</h4>
                      </div>
                    </div>
                    <p className="mb-6 mt-5 leading-7 text-slate-300">{project.summary}</p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tech.map(tech => <TechIcon key={tech.name} tech={tech} compact />)}
                    </div>
                  </article>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        <section id="services" className="border-y border-white/10 bg-white/[0.035] py-24">
          <div className="section-shell">
            <SectionIntro eyebrow={t.services.eyebrow} title={t.services.title} centered />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {t.services.items.map((service, index) => (
                <SectionReveal key={service.title} delay={index * 0.04}>
                  <article className="h-full rounded-lg border border-white/10 bg-ink/55 p-6 transition hover:-translate-y-1 hover:border-emerald-300/35">
                    <span className="grid size-11 place-items-center rounded-lg bg-emerald-300/12 text-emerald-200">
                      <service.icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-[Manrope] text-xl font-bold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
                  </article>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="section-shell">
            <SectionIntro eyebrow={t.process.eyebrow} title={t.process.title} centered />
            <div className="mt-12 grid gap-4 lg:grid-cols-4">
              {t.process.steps.map(([number, title, text], index) => (
                <SectionReveal key={number} delay={index * 0.04}>
                  <article className="relative h-full rounded-lg border border-white/10 bg-white/[0.05] p-6">
                    <span className="text-sm font-extrabold text-emerald-300">{number}</span>
                    <h3 className="mt-4 font-[Manrope] text-xl font-bold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                  </article>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="pb-20 pt-8">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionReveal>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">{t.contact.eyebrow}</p>
              <h2 className="mt-4 font-[Manrope] text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                {t.contact.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">{t.contact.subtitle}</p>
              <div className="mt-9 grid gap-3">
                <ContactLink icon={Mail} label={t.contact.email} value={profile.email} href={`mailto:${profile.email}`} />
                <ContactLink icon={Mail} label={t.contact.personalEmail} value={profile.personalEmail} href={`mailto:${profile.personalEmail}`} />
                <ContactLink icon={Phone} label={t.contact.phone} value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
                <ContactLink icon={GitBranch} label={t.contact.github} value="github.com/Sididaher" href={profile.github} />
                <ContactLink icon={BriefcaseBusiness} label={t.contact.linkedin} value="Sid'Taher Oumar" href={profile.linkedin} />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <form onSubmit={handleMailForm} className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-soft sm:p-7">
                <p className="mb-6 rounded-lg border border-blue-300/20 bg-blue-300/10 p-4 text-sm leading-6 text-blue-100">
                  {t.contact.formNote}
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={t.contact.name} name="name" placeholder={t.contact.placeholders.name} required />
                  <Field label={t.contact.emailField} name="email" type="email" placeholder={t.contact.placeholders.email} required />
                </div>
                <label className="mt-5 block">
                  <span className="text-sm font-semibold text-slate-200">{t.contact.message}</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder={t.contact.placeholders.message}
                    className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-ink/65 px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-emerald-300"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-emerald-300 sm:w-auto"
                >
                  {t.contact.submit}
                  <Mail size={18} aria-hidden="true" />
                </button>
              </form>
            </SectionReveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="section-shell flex flex-col gap-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-[Manrope] text-base font-bold text-white">{profile.name}</p>
            <p>{profile.role} · {t.footer.location}</p>
          </div>
          <p>© {new Date().getFullYear()} {profile.name}. {t.footer.rights}</p>
        </div>
      </footer>

      <ProjectModal project={selectedProject} closeLabel={t.projects.close} onClose={() => setSelectedProject(null)} />
    </MotionConfig>
  );

  function Header({
    lang,
    activeSection,
    menuOpen,
    onToggleMenu,
    onCloseMenu,
    onSwitchLang
  }: {
    lang: Lang;
    activeSection: string;
    menuOpen: boolean;
    onToggleMenu: () => void;
    onCloseMenu: () => void;
    onSwitchLang: (lang: Lang) => void;
  }) {
    return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
        <nav className="section-shell flex min-h-20 items-center justify-between gap-4">
          <a href="#home" onClick={onCloseMenu} className="font-[Manrope] text-base font-extrabold tracking-normal text-white sm:text-lg">
            {profile.name}
          </a>
          <div className="hidden items-center gap-1 xl:flex">
            {t.nav.links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative inline-flex min-h-11 items-center rounded-lg px-2 py-2 text-sm font-semibold transition hover:text-white ${
                  activeSection === id ? "text-white" : "text-slate-300"
                }`}
              >
                {label}
                {activeSection === id && (
                  <motion.span layoutId="active-nav" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-emerald-300" />
                )}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 xl:flex">
            <LanguageSwitch lang={lang} onSwitchLang={onSwitchLang} />
            <a href={profile.cv} download="Siditaher-Oumar-CV.pdf" title={t.hero.downloadCv} aria-label={t.hero.downloadCv} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-extrabold text-white transition hover:bg-blue-500">
              <Download size={18} aria-hidden="true" />
              CV
            </a>
          </div>
          <button
            type="button"
            className="inline-grid size-11 place-items-center rounded-lg border border-white/10 text-white xl:hidden"
            onClick={onToggleMenu}
            aria-label={t.nav.menu}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-ink/95 xl:hidden"
            >
              <div className="section-shell grid gap-2 py-4">
                {t.nav.links.map(([label, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={onCloseMenu}
                    className={`rounded-lg px-3 py-3 font-semibold ${activeSection === id ? "bg-white/10 text-white" : "text-slate-300"}`}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href={profile.cv}
                  download="Siditaher-Oumar-CV.pdf"
                  onClick={onCloseMenu}
                  className="inline-flex min-h-12 items-center gap-3 rounded-lg px-3 py-3 font-semibold text-emerald-200 transition hover:bg-white/10"
                >
                  <Download size={18} aria-hidden="true" />
                  {t.hero.downloadCv}
                </a>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <LanguageSwitch lang={lang} onSwitchLang={onSwitchLang} />
                  <a href="#contact" onClick={onCloseMenu} className="inline-flex min-h-11 items-center rounded-lg bg-blue-600 px-4 text-sm font-extrabold text-white">
                    {t.nav.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  }

  function LanguageSwitch({ lang, onSwitchLang }: { lang: Lang; onSwitchLang: (lang: Lang) => void }) {
    return (
      <div className="inline-flex min-h-11 items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-1" aria-label="Language selector">
        <Languages size={16} className="ml-2 text-slate-400" aria-hidden="true" />
        {(["fr", "en"] as Lang[]).map(option => (
          <button
            key={option}
            type="button"
            onClick={() => onSwitchLang(option)}
            className={`min-h-9 rounded-md px-3 text-sm font-extrabold transition ${
              lang === option ? "bg-white text-ink" : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
            aria-pressed={lang === option}
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  function SectionIntro({
    eyebrow,
    title,
    description,
    centered = false
  }: {
    eyebrow: string;
    title: string;
    description?: string;
    centered?: boolean;
  }) {
    return (
      <SectionReveal className={centered ? "mx-auto max-w-3xl text-center" : ""}>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">{eyebrow}</p>
        <h2 className="mt-4 text-balance font-[Manrope] text-4xl font-extrabold leading-tight text-white sm:text-5xl">{title}</h2>
        {description && <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>}
      </SectionReveal>
    );
  }

  function HeroPortrait({ alt, role }: { alt: string; role: string }) {
    return (
      <figure className="m-0">
        <Image
          src={profile.portrait}
          alt={alt}
          width={1254}
          height={1254}
          sizes="(min-width: 1024px) 520px, (min-width: 640px) 560px, calc(100vw - 32px)"
          preload
          className="aspect-[4/5] w-full rounded-lg object-cover object-top"
        />
        <figcaption className="mt-5 border-l-2 border-emerald-400 pl-4">
          <p className="font-[Manrope] text-xl font-extrabold text-white">{profile.name}</p>
          <p className="mt-1 text-sm leading-6 text-slate-300">{role}</p>
        </figcaption>
      </figure>
    );
  }

  function ProjectCard({
    project,
    index,
    detailsLabel,
    noExternalLabel,
    onDetails
  }: {
    project: Project;
    index: number;
    detailsLabel: string;
    noExternalLabel: string;
    onDetails: () => void;
  }) {
    const reverse = index % 2 === 1;
    const isNajah = project.accent === "najah";
    return (
      <SectionReveal>
        <article className={`grid gap-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-soft lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className={`relative min-h-[420px] p-5 sm:p-8 ${isNajah ? "bg-[#eef8ed]" : "bg-white"}`}>
            {project.id === "wathaqli" ? <WathaqliMockup project={project} /> : <NajahMockup project={project} />}
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-9">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-sm font-bold text-emerald-200">
                {project.type}
              </span>
              <span className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm font-bold text-slate-300">
                {project.category}
              </span>
            </div>
            <h3 className="font-[Manrope] text-4xl font-extrabold text-white">
              {project.title} <span className="text-slate-400" dir="rtl">{project.arabicName}</span>
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-300">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.tech.map(tech => (
                <TechIcon key={tech.name} tech={tech} compact />
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onDetails}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-emerald-100"
              >
                {detailsLabel}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <span className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-dashed border-white/15 px-5 py-3 text-sm font-bold text-slate-400">
                <ExternalLink size={17} aria-hidden="true" />
                {noExternalLabel}
              </span>
            </div>
          </div>
        </article>
      </SectionReveal>
    );
  }

  function WathaqliMockup({ project }: { project: Project }) {
    return (
      <div className="relative flex h-full min-h-[370px] items-center justify-center">
        <motion.div
          className="absolute left-2 top-8 hidden w-40 rotate-[-8deg] rounded-[32px] border border-slate-200 bg-slate-950 p-3 shadow-2xl sm:block"
          whileHover={{ y: -6, rotate: -5 }}
        >
          <div className="aspect-[9/16] rounded-[24px] bg-gradient-to-br from-blue-700 to-emerald-400 p-4 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.15em]">Wathaqli</p>
            <p className="mt-12 text-sm leading-5">Capture d'interface à ajouter</p>
          </div>
        </motion.div>
        <motion.div className="relative z-10 w-64 rounded-lg bg-white p-7 shadow-2xl" whileHover={{ scale: 1.02 }}>
          <Image
            src={project.image}
            alt="Logo Wathaqli"
            width={500}
            height={500}
            className="project-image h-auto w-full"
            priority
          />
        </motion.div>
        <motion.div
          className="absolute bottom-8 right-2 w-40 rotate-[8deg] rounded-[32px] border border-slate-200 bg-slate-950 p-3 shadow-2xl sm:w-44"
          whileHover={{ y: -6, rotate: 5 }}
        >
          <div className="aspect-[9/16] rounded-[24px] bg-white p-4 text-slate-900">
            <div className="grid size-12 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
              <CheckCircle2 size={24} aria-hidden="true" />
            </div>
            <p className="mt-10 text-sm font-bold">Placeholder UI</p>
            <p className="mt-2 text-xs leading-5 text-slate-600">{project.visualNote}</p>
          </div>
        </motion.div>
      </div>
    );
  }

  function NajahMockup({ project }: { project: Project }) {
    return (
      <div className="relative flex h-full min-h-[370px] items-center justify-center">
        <motion.div className="w-full max-w-[520px] rounded-lg bg-white p-3 shadow-2xl" whileHover={{ y: -5 }}>
          <div className="mb-3 flex gap-2">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-amber-400" />
            <span className="size-3 rounded-full bg-emerald-400" />
          </div>
          <div className="overflow-hidden rounded-lg bg-slate-100">
            <Image
              src={project.image}
              alt="Visuel Najah+ fourni"
              width={624}
              height={512}
              className="project-image h-auto w-full"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute -bottom-2 right-4 w-36 rounded-[28px] border border-slate-200 bg-slate-950 p-2 shadow-2xl sm:right-8 sm:w-40"
          whileHover={{ y: -6 }}
        >
          <div className="aspect-[9/16] rounded-[22px] bg-gradient-to-br from-emerald-300 via-sky-200 to-amber-200 p-4 text-slate-950">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em]">Najah+</p>
            <p className="mt-10 text-sm font-bold">Années · Semestres · Ressources</p>
          </div>
        </motion.div>
      </div>
    );
  }

  function ProjectModal({ project, closeLabel, onClose }: { project: Project | null; closeLabel: string; onClose: () => void }) {
    useEffect(() => {
      if (!project) return;
      const onKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [project, onClose]);

    return (
      <AnimatePresence>
        {project && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/80 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            onMouseDown={event => {
              if (event.target === event.currentTarget) onClose();
            }}
          >
            <motion.div
              className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-white/10 bg-[#0f172a] p-6 shadow-soft sm:p-8"
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">{project.category}</p>
                  <h3 className="mt-3 font-[Manrope] text-3xl font-extrabold text-white">
                    {project.title} <span className="text-slate-400" dir="rtl">{project.arabicName}</span>
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="grid size-11 shrink-0 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  aria-label={closeLabel}
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-300">{project.detail}</p>
              <div className="mt-7 grid gap-3">
                {project.bullets.map(bullet => (
                  <div key={bullet} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-4 text-sm leading-6 text-slate-300">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={18} aria-hidden="true" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {project.tech.map(tech => (
                  <TechIcon key={tech.name} tech={tech} compact />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  function ContactLink({
    icon: Icon,
    label,
    value,
    href
  }: {
    icon: typeof Mail;
    label: string;
    value: string;
    href: string;
  }) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="flex min-h-16 items-center gap-4 rounded-lg border border-white/10 bg-white/[0.05] p-4 transition hover:-translate-y-0.5 hover:border-emerald-300/35"
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-blue-500/15 text-blue-200">
          <Icon size={21} aria-hidden="true" />
        </span>
        <span>
          <span className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-400">{label}</span>
          <span className="mt-1 block break-all font-semibold text-white">{value}</span>
        </span>
      </a>
    );
  }

  function Field({
    label,
    name,
    type = "text",
    placeholder,
    required
  }: {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    required?: boolean;
  }) {
    return (
      <label className="block">
        <span className="text-sm font-semibold text-slate-200">{label}</span>
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="mt-2 min-h-12 w-full rounded-lg border border-white/10 bg-ink/65 px-4 text-white placeholder:text-slate-500 transition focus:border-emerald-300"
        />
      </label>
    );
  }
}
