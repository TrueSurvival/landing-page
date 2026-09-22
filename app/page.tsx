'use client'

import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, Copy, ExternalLink, Gamepad2, Gem, Map, MessageCircle, ShieldCheck, Store, Users, Zap } from 'lucide-react'

const serverIp = 'mc.sodops.uz'

const features = [
  { icon: ShieldCheck, title: 'Protected claims', text: 'Build with confidence. Your home and hard work stay yours.' },
  { icon: Store, title: 'Player economy', text: 'Trade, sell, and grow your fortune with a player-led marketplace.' },
  { icon: Users, title: 'Community first', text: 'Join events, team up with friends, and make the world yours.' },
  { icon: Zap, title: 'Fair & secure', text: 'Cracked-friendly access with active anti-cheat and smart moderation.' },
]

const rules = [
  'Respect every player — no harassment, hate speech, or discrimination.',
  'No griefing, stealing, or entering another player’s claim without permission.',
  'Keep chat friendly and appropriate for the whole community.',
  'No cheating, exploits, dupes, or unfair modifications.',
  'Build thoughtfully and leave the natural world better than you found it.',
]

export default function Page() {
  const [copied, setCopied] = useState(false)

  async function copyIp() {
    try {
      await navigator.clipboard.writeText(serverIp)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TrueSurvival home"><span className="brand-mark"><Gem size={18} /></span><span>True<span className="text-green">Survival</span></span></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a><a href="#features">Features</a><a href="#join">How to join</a><a href="#rules">Rules</a>
        </nav>
        <a className="header-discord" href="https://discord.com" target="_blank" rel="noreferrer">Discord <ExternalLink size={14} /></a>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Survival server · Online now</div>
          <h1>Make your mark<br /><span>in the wild.</span></h1>
          <p className="hero-lede">A true survival experience built for builders, explorers, and everyone in between. No shortcuts. Just your story.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={copyIp}>{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? 'IP copied' : 'Copy server IP'}</button>
            <a className="button button-ghost" href="https://discord.com" target="_blank" rel="noreferrer"><MessageCircle size={17} /> Join Discord <ArrowRight size={16} /></a>
          </div>
          <div className="server-address"><span className="mini-label">SERVER ADDRESS</span><code>{serverIp}</code><span className="version-pill">1.21.x</span></div>
        </div>
        <div className="hero-art" aria-label="Minecraft-inspired forest landscape illustration" role="img">
          <div className="moon" /><div className="star star-a" /><div className="star star-b" /><div className="star star-c" />
          <div className="mountain mountain-back" /><div className="mountain mountain-front" />
          <div className="tree tree-left"><i /><b /><em /></div><div className="tree tree-right"><i /><b /><em /></div>
          <div className="hero-grid" /><div className="art-caption"><Map size={15} /> Explore a world that is truly yours</div>
        </div>
      </section>

      <section className="about section-wrap" id="about"><div className="section-kicker">01 / THE WORLD</div><div className="about-grid"><div><h2>Simple rules.<br /><span>Endless stories.</span></h2></div><div><p className="large-copy">TrueSurvival is a community-driven Minecraft world where progress feels earned and every build has a story behind it.</p><p className="muted-copy">Settle down, team up, and shape a world that keeps evolving. Protected builds, a living economy, and a community that plays to stay.</p></div></div></section>

      <section className="features section-wrap" id="features"><div className="section-heading"><div><div className="section-kicker">02 / BUILT DIFFERENT</div><h2>Everything you need.<br /><span>Nothing you don&apos;t.</span></h2></div><p>Designed to keep the focus where it belongs:<br />on the adventure.</p></div><div className="feature-grid">{features.map(({ icon: Icon, title, text }, index) => <article className="feature-card" key={title}><div className="feature-number">0{index + 1}</div><div className="icon-box"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="join section-wrap" id="join"><div className="join-panel"><div className="section-kicker">03 / YOUR ADVENTURE STARTS HERE</div><h2>Three steps to<br /><span>your new home.</span></h2><div className="steps"><div className="step"><span>01</span><Gamepad2 size={20} /><div><h3>Open Minecraft</h3><p>Launch Java Edition on version 1.21.x.</p></div></div><div className="step"><span>02</span><ChevronDown size={20} /><div><h3>Find Multiplayer</h3><p>Select “Multiplayer” from the main menu.</p></div></div><div className="step"><span>03</span><Map size={20} /><div><h3>Enter the address</h3><p>Use <strong>{serverIp}</strong> and start exploring.</p></div></div></div><button className="button button-primary" onClick={copyIp}>{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? 'IP copied' : 'Copy server IP'}</button></div></section>

      <section className="rules section-wrap" id="rules"><div className="rules-head"><div className="section-kicker">04 / THE CODE</div><h2>Play fair.<br /><span>Build freely.</span></h2></div><ol className="rules-list">{rules.map((rule, index) => <li key={rule}><span>0{index + 1}</span><p>{rule}</p></li>)}</ol></section>

      <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark"><Gem size={18} /></span><span>True<span className="text-green">Survival</span></span></a><p>Built for the long haul.</p><div className="footer-links"><a href="https://discord.com" target="_blank" rel="noreferrer">Discord <ExternalLink size={13} /></a><a href="#top">Back to top <ArrowRight size={13} /></a></div><small>© 2026 TrueSurvival. All blocks reserved.</small></footer>
    </main>
  )
}
