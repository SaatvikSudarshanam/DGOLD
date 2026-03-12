import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";
import "./DGoldChatbot.css";

// ── Knowledge Base ──────────────────────────────────────────────────
const KB = {
  overview: {
    title: "🏆 What is dGold?",
    body: [
      "dGold is an AI-first Master Data Management (MDM) platform that delivers Trusted Master Data in 90 days.",
      "One unified platform to Onboard, Match & Govern — closing the gap between what your business needs and what your data estate delivers.",
      "Built on three pillars: Easier (no-code), Faster (90-day go-live), and SimplifAIed (AI in every layer).",
    ],
  },
  problem: {
    title: "⚠️ The MDM Problem",
    body: [
      "Today's MDM landscape suffers from Complex Platforms, Disparate Sources, Fragmented Tools, Manual Rules, Slow Outcomes, and AI Readiness Gaps.",
      "Missed matches, duplicates, and unmanaged masters burn millions per year in rework, risk, and wasted spend.",
      "Lakes & warehouses collect everything but don't resolve duplicates, hierarchies, or survivorship — dGold does.",
    ],
  },
  easier: {
    title: "✅ Easier — No Code. No Chaos.",
    body: [
      "No-Code Onboarding: drag, drop, connect — sources go live in minutes with built-in validation.",
      "One-Click Integrations: connect instantly to top databases, clouds, and data tools — no scripting.",
      "Prebuilt Models & Templates: start from best-practice entity structures instead of blank screens.",
      "One Interface: MDM, DQ, Compliance, and Marketplace — all in one clean workspace.",
    ],
  },
  faster: {
    title: "⚡ Faster — Value in Weeks, Not Quarters",
    body: [
      "90-Day Time-to-First-Value: prebuilt models, templates, and guided flows shorten setup dramatically.",
      "Automated Setup Workflows: AI-powered UI configuration for matching, survivorship, and quality rules — no manual rule-writing.",
      "Real-Time Synchronization: changes in source systems reflect in dGold immediately — no batch delays.",
      "Zero-Wait Governance: policy mapping, lineage, and classification update instantly as data flows.",
    ],
  },
  simplifaied: {
    title: "🤖 SimplifAIed — Intelligence at Every Layer",
    body: [
      "AI-Led Data Mapping: automatically understands your data structure, aligns attributes, and identifies relationships.",
      "Smart Rule Recommendations: generates and tunes quality, matching, and survivorship rules without manual scripting.",
      "Auto-Classification & Detection: identifies sensitive fields, semantic meanings, and policy requirements instantly.",
      "Agentic Capabilities: use your own LLM tokens or dGold's embedded LLM — intelligence stays under your control.",
    ],
  },
  features: {
    title: "🔧 Platform Features",
    body: [
      "Administration: Data Modeler, Graphical View, Matching & Survivorship Rules, Operational Metrics.",
      "Configuration & Rules: Connections, Reference Tables, DQ & Validation Rules, GUI for Data Mapping.",
      "MDM Processes: full lifecycle from ingestion to golden record publication.",
      "Data Quality: AI-powered assets, AI rule generation, Data Discovery, DQ Reports.",
      "Data Stewardship: Stewardship tool, DS Workbench for data owners.",
      "Data Browser, Journal & Audit Trail: Master Data Browser, journal entries, record-level audit trail.",
      "Platform Productivity: Role-based access, Workflow Management, Bulk Updates, Operational Dashboards.",
    ],
  },
  roi: {
    title: "💰 ROI & Business Impact",
    body: [
      "91.67% Purity of Data achieved on production deployments.",
      "58.3% Cost Optimization reported by customers.",
      "70% reduction in go-live time via self-learning workflows.",
      "Turn trusted data into measurable business impact: better forecasting, reporting, and decisions.",
      "One view of Customers, Products, and Partners — enabling better LTV tracking and fewer costly errors.",
    ],
  },
  bfsi: {
    title: "🏦 BFSI Use Case",
    body: [
      "Prebuilt BFSI templates for customer, account, policy, and claims entities.",
      "AI-powered matching & survivorship reduces manual exceptions by up to 80%.",
      "Faster KYC/AML onboarding with fewer manual checks.",
      "Unified entities reduce fraud exposure across accounts and products.",
      "Clean customer & policy data for better LTV, CX, underwriting, and retention.",
    ],
  },
  manufacturing: {
    title: "🏭 Manufacturing Use Case",
    body: [
      "Material, vendor, and BOM templates aligned with UNSPSC/eClass standards.",
      "AI-driven attribute inference for specs, units, alternates, and deduplication.",
      "Plug-and-play ERP integrations: SAP, Salesforce, Oracle Fusion, Dynamics, Infor.",
      "Reduced procurement spend through duplicate elimination and normalized pricing.",
      "Faster production planning powered by harmonized BOMs.",
    ],
  },
  retail: {
    title: "🛒 Retail Use Case",
    body: [
      "Product & taxonomy templates for instant structure across categories.",
      "AI-driven attribute extraction, dedupe, and category prediction.",
      "One-click integrations with ERP, POS, e-commerce, and marketplaces.",
      "Cleaner product data leads to higher conversions and fewer returns.",
      "Unified customer identity across loyalty, store, and digital touchpoints.",
    ],
  },
  deployment: {
    title: "🚀 Deployment & Licensing",
    body: [
      "Deployment Options: On-prem / Private Cloud, Hybrid, or SaaS (coming soon) — same platform, same experience.",
      "User-based licensing only — no volume, record, or transaction fees.",
      "AI included in license: use your own LLM tokens OR dGold's embedded LLM — no hidden AI surcharges.",
      "Modular: start with Data Quality, scale to Compliance, MDM, and Marketplace as maturity grows.",
      "One path. Four steps. Continuous ROI.",
    ],
  },
  comparison: {
    title: "📊 vs. Competitors",
    body: [
      "vs. SAP MDG: dGold wins on speed & TCO; SAP excels in deep SAP-estate governance.",
      "vs. Informatica: dGold is simpler, faster, and lower TCO; Informatica suits very large heterogeneous enterprises.",
      "vs. Ataccama: comparable modern UX; dGold adds native AI fabric and faster first-value.",
      "vs. Profisee / Semarchy: dGold adds broader AI, unified DQ+MDM+Governance vs. focused MDM.",
      "dGold sweet spot: teams needing fast wins without module sprawl, with AI built in — not bolted on.",
    ],
  },
  customers: {
    title: "🤝 Customer Success Stories",
    body: [
      "Middle Eastern Government: massive human capital data — up and running in less than 2 quarters.",
      "Insurance Giant (Krungthai/AXA): customer master during on-prem to cloud migration — scaled with ease.",
      "Bussan Auto Finance (BAF): mastered customer data in under a quarter, powering their mobile app with zero external consultants.",
      "Manufacturing Giant: multi-domain mastering in full DIY mode after training — 0 external consultants.",
    ],
  },
  contact: {
    title: "📬 Get in Touch",
    body: [
      "📞 Phone: +1 888 840 0098",
      "📧 Email: sales@amurta.com",
      "🌐 Website: www.amurta.com",
      "Ready to start your 90-day journey to trusted master data? Request a demo today!",
    ],
  },
};

// ── Menu topics ─────────────────────────────────────────────────────
const MENU = [
  { label: "What is dGold?", key: "overview" },
  { label: "Easier Platform", key: "easier" },
  { label: "Faster Delivery", key: "faster" },
  { label: "SimplifAIed", key: "simplifaied" },
  { label: "Features", key: "features" },
  { label: "ROI & Impact", key: "roi" },
  { label: "BFSI", key: "bfsi" },
  { label: "Manufacturing", key: "manufacturing" },
  { label: "Retail", key: "retail" },
  { label: "Deployment", key: "deployment" },
  { label: "vs Competitors", key: "comparison" },
  { label: "Customers", key: "customers" },
  { label: "Contact", key: "contact" },
];

// ── Semantic router ──────────────────────────────────────────────────
const ROUTES = [
  [["hello", "hi", "hey", "good morning", "start", "begin"], "greeting"],
  [["what is", "about", "overview", "who are", "what does", "dgold", "tell me"], "overview"],
  [["problem", "challenge", "pain", "why", "issue", "drain"], "problem"],
  [["easier", "no code", "nocode", "drag", "onboard", "template", "prebuilt"], "easier"],
  [["faster", "speed", "quick", "90 day", "90-day", "weeks", "rapid"], "faster"],
  [["ai", "simplif", "intelligent", "agentic", "llm", "mapping", "classification"], "simplifaied"],
  [["feature", "capability", "function", "module", "stewardship", "dq", "quality", "audit"], "features"],
  [["roi", "return", "cost", "saving", "impact", "business value", "purity", "metric"], "roi"],
  [["bfsi", "bank", "finance", "insurance", "kyc", "aml", "financial"], "bfsi"],
  [["manufactur", "bom", "vendor", "material", "erp", "sap", "procurement"], "manufacturing"],
  [["retail", "product", "catalog", "ecommerce", "pos", "customer loyalty"], "retail"],
  [["deploy", "cloud", "on-prem", "hybrid", "saas", "licens", "pricing", "cost model"], "deployment"],
  [["compare", "vs", "competitor", "informatica", "ataccama", "profisee", "semarchy"], "comparison"],
  [["customer", "client", "case study", "success", "story", "example", "baf", "krungthai"], "customers"],
  [["contact", "email", "phone", "sales", "demo", "reach", "talk", "get in touch"], "contact"],
  [["menu", "topics", "help", "options", "services", "list"], "menu"],
];

function findResponse(input) {
  const q = input.toLowerCase();
  for (const [patterns, key] of ROUTES) {
    if (patterns.some((p) => q.includes(p))) return key;
  }
  return "fallback";
}

const GREETINGS = [
  "Absolutely! Here's what I can help with:",
  "Great question! Let me guide you:",
  "Of course! Here's what's available:",
  "Happy to help! Here are my topics:",
];

export default function DGoldChatbot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-greet on first open
  useEffect(() => {
    if (open && !hasOpened) {
      setHasOpened(true);
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages([
          {
            role: "bot",
            isGreeting: true,
            title: "👋 Welcome to dGold Assistant!",
            text: "I can help you explore Trusted Master Data in 90 Days. Ask me anything, or pick a topic below:",
          },
        ]);
      }, 900);
    }
  }, [open, hasOpened]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open && !minimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, minimized]);

  function handleMenuClick(key) {
    handleQuery(MENU.find((m) => m.key === key)?.label || key, key);
  }

  function handleQuery(userText, forceKey) {
    const key = forceKey || findResponse(userText);
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      if (key === "greeting") {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
          },
        ]);
      } else if (key === "menu") {
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: "Here are all the topics I can help with:" },
        ]);
      } else if (key === "fallback") {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            title: "🤔 Hmm, let me help you better.",
            list: [
              "I didn't quite catch that — here are some things I know about:",
              "Type 'menu' to see all topics, or try asking about: features, ROI, BFSI, deployment, pricing, or contact.",
            ],
          },
        ]);
      } else {
        const item = KB[key];
        setMessages((prev) => [
          ...prev,
          { role: "bot", title: item.title, list: item.body },
        ]);
      }
    }, 700 + Math.random() * 300);
  }

  function handleSend() {
    if (!input.trim()) return;
    handleQuery(input.trim());
  }

  return (
    <>
      <div className="cb-widget">
        {!open && (
          <button
            onClick={() => { setOpen(true); setMinimized(false); }}
            className="cb-floating-btn"
            aria-label="Open dGold Assistant"
          >
            <MessageCircle size={26} className="cb-icon" />
            <span className="cb-online-dot" />
            <span className="cb-tooltip">Ask dGold AI ✦</span>
          </button>
        )}

        {open && (
          <div className={`cb-window ${minimized ? 'cb-window--minimized' : ''}`}>
            {/* Header */}
            <div
              className="cb-header"
              onClick={() => setMinimized(!minimized)}
            >
              <div className="cb-header-title">
                <div className="cb-avatar">
                  <span>dG</span>
                </div>
                <div>
                  <p className="cb-name">dGold Assistant</p>
                  <p className="cb-subtitle">Trusted Master Data · AI-Powered</p>
                </div>
              </div>
              <div className="cb-header-actions">
                <span className="cb-online-indicator" />
                <ChevronDown
                  size={16}
                  className={`cb-chevron ${minimized ? 'cb-chevron--flipped' : ''}`}
                />
                <button
                  onClick={(e) => { e.stopPropagation(); setOpen(false); }}
                  className="cb-close-btn"
                  aria-label="Close chat"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {!minimized && (
              <>
                {/* Messages */}
                <div className="cb-messages">
                  {messages.map((msg, i) => (
                    <div key={i} className={`cb-msg-row ${msg.role === "user" ? "cb-flex-end" : "cb-flex-start"}`}>
                      {msg.role === "bot" && !msg.isMenu && (
                        <div className="cb-msg-avatar-wrapper">
                          <div className="cb-msg-avatar">dG</div>
                        </div>
                      )}


                      {/* Bot message */}
                      {msg.role === "bot" && !msg.isMenu && (
                        <div className="cb-bubble-bot">
                          {msg.title && <p className="cb-bubble-title">{msg.title}</p>}
                          {msg.text && <p className="cb-bubble-text">{msg.text}</p>}
                          {msg.list && (
                            <ul className="cb-bubble-list">
                              {msg.list.map((item, j) => (
                                <li key={j}>
                                  <span className="cb-list-arrow">▸</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}

                      {/* User message */}
                      {msg.role === "user" && (
                        <div className="cb-bubble-user">
                          {msg.text}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {typing && (
                    <div className="cb-msg-row cb-flex-start align-center gap-2">
                       <div className="cb-msg-avatar">dG</div>
                      <div className="cb-typing-indicator">
                        {[0, 1, 2].map((j) => (
                          <span
                            key={j}
                            style={{ animationDelay: `${j * 0.2}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>

                {/* Fixed Menu Chips just above input */}
                <div className="cb-fixed-menu">
                  <div className="cb-fixed-menu-chips">
                    {MENU.map((m) => (
                      <button
                        key={m.key}
                        onClick={() => handleMenuClick(m.key)}
                        className="cb-menu-chip"
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="cb-input-area">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask about dGold…"
                    className="cb-input"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="cb-send-btn"
                    aria-label="Send message"
                  >
                    <Send size={14} className={input.trim() ? "cb-send-active" : "cb-send-inactive"} />
                  </button>
                </div>

                {/* Footer */}
                <div className="cb-footer">
                  Powered by dGold · amurta.com
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
