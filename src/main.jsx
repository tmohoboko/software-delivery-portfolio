import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
const github = "https://github.com/tmohoboko";
const capabilities = [
  [
    "Requirements & Scope",
    "acceptance criteria · feasibility · task decomposition",
    "Jira · Confluence",
  ],
  [
    "Frontend",
    "responsive UI · state management · user flows",
    "React · HTML · CSS · VS Code",
  ],
  [
    "Backend / API",
    "REST APIs · validation · integrations",
    "FastAPI · REST · Postman",
  ],
  [
    "QA",
    "functional testing · exploratory testing · regression testing · defect lifecycle",
    "Playwright · Postman",
  ],
  ["Source Control", "commits · branches · releases", "Git · GitHub · GitLab"],
  ["Containers", "reproducible environments", "Docker"],
  ["Systems", "CLI · logs · troubleshooting", "Linux"],
  ["Analysis", "defect trends · SLA · KPI · RCA", "Excel · Python"],
  [
    "Documentation",
    "requirements · test plans · release notes · handover",
    "Shared understanding",
  ],
  ["Deployment", "build · production release · validation", "Vercel"],
  [
    "Maintenance",
    "defects · regression · root-cause analysis · release improvement",
    "Continuous improvement",
  ],
];
const lifecycle = [
  ["Problem", "Define the stakeholder outcome"],
  ["Discovery", "Explore context & feasibility"],
  ["Scope", "WBS & task decomposition"],
  ["Requirements", "Measurable acceptance criteria"],
  ["Design", "User flows & system decisions"],
  ["Build", "Source code & Git commits"],
  ["Test", "Playwright & Postman"],
  ["Defect / Fix", "Defect log & fix verification"],
  ["Deploy", "Build & release evidence"],
  ["Verify", "Production smoke checks"],
  ["Maintain", "Maintenance notes & regression"],
  ["Improve", "Root cause & next iteration"],
];
const qa = [
  "Requirements",
  "Risk Analysis",
  "Test Design",
  "Manual / Exploratory Testing",
  "Automation",
  "Defect Reporting",
  "Fix Verification",
  "Regression",
  "Release Assessment",
];
const ops = [
  "Code",
  "Git",
  "Build",
  "Automated Tests",
  "Deployment",
  "Production Verification",
  "Defect Monitoring",
  "Maintenance",
];
const manifesto = [
  "Every project starts with a problem, a scope, and measurable acceptance criteria.",
  "Development turns requirements into working software.",
  "Quality assurance verifies that the software behaves as intended, identifies risk, documents defects, and protects the release.",
  "DevOps makes the process repeatable through version control, reproducible environments, automation, deployment, monitoring, and evidence.",
  "I use tools according to the problem rather than treating tools as the objective.",
  "Frontend work focuses on usable interfaces and stakeholder outcomes.",
  "Backend work focuses on APIs, data, validation, reliability, and integration.",
  "QA focuses on requirements, risk, test design, defect management, regression, and release confidence.",
  "DevOps focuses on repeatability, environment consistency, Git workflows, deployment, automation, and operational evidence.",
  "Analysis focuses on understanding systems through data, root-cause thinking, KPIs, SLAs, and measurable outcomes.",
  "Documentation exists so that another developer, tester, stakeholder, or maintainer can understand the system without depending on the original author.",
  "Automation accelerates repetitive work. It does not replace engineering judgment.",
];
function External({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}
function Heading({ n, label, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          {n} / {label}
        </div>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header>
        <a className="brand" href="#home">
          <span className="brand-icon">&gt;_</span>
          <span>
            TSHEPO MOHOBOKO<small>SOFTWARE DELIVERY & QA</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#lifecycle">Process</a>
          <a href="#qa">QA evidence</a>
        </nav>
        <External href={github} className="header-link">
          GitHub
        </External>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="dot" /> BUILD. VERIFY. SHIP.
            </div>
            <h1>
              Software Delivery,
              <br />
              QA & DevOps
              <br />
              <span>Portfolio</span>
            </h1>
            <h2>From Requirement to Release</h2>
            <p>
              Development, Quality Assurance, Testing, DevOps and Delivery
              Evidence.
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">
                View Projects <span>↗</span>
              </a>
              <a className="button" href="#qa">
                View QA Evidence <span>→</span>
              </a>
            </div>
            <div className="text-links">
              <a href="#lifecycle">View Delivery Process →</a>
              <External href={github}>GitHub</External>
              <External href="https://www.linkedin.com/in/tshepo-undefined-594170330/">
                LinkedIn
              </External>
            </div>
          </div>
          <aside className="release-panel" aria-label="Delivery approach">
            <div className="panel-top">
              <span>DELIVERY SYSTEM</span>
              <span className="mono">v.01</span>
            </div>
            <div className="terminal-mark">
              &gt; ship with confidence<span>_</span>
            </div>
            <div className="pipeline">
              {[
                ["01", "Understand", "Problem → acceptance criteria"],
                ["02", "Build", "Requirements → working software"],
                ["03", "Verify", "Risk → evidence"],
                ["04", "Release", "Deployment → production checks"],
              ].map(([n, t, d]) => (
                <div className="pipeline-row" key={n}>
                  <span>{n}</span>
                  <div>
                    <strong>{t}</strong>
                    <small>{d}</small>
                  </div>
                  <b aria-hidden="true">↗</b>
                </div>
              ))}
            </div>
            <div className="panel-bottom">
              <span className="dot" /> Evidence is part of the deliverable.
            </div>
          </aside>
        </section>
        <div className="principle-strip">
          <span>WORKING SOFTWARE</span>
          <b>+</b>
          <span>VERIFIED BEHAVIOR</span>
          <b>+</b>
          <span>DOCUMENTED EVIDENCE</span>
          <b>+</b>
          <span>REPRODUCIBLE DELIVERY</span>
        </div>
        <section id="projects">
          <Heading
            n="01"
            label="SELECTED WORK"
            title="Delivery in practice."
            description="A shipped release and the next problems to solve. Each project has an honest delivery status."
          />
          <article className="featured" data-testid="moya-card">
            <div className="project-art">
              <div className="commerce-label">
                MOYA
                <br />
                <em>GLOW</em>
                <small>COMMERCE / 001</small>
              </div>
              <div className="art-circle" />
              <div className="art-caption">From storefront to production ↗</div>
            </div>
            <div className="project-detail">
              <span className="badge shipped">
                <span className="dot" /> SHIPPED
              </span>
              <h3>Moya Glow Commerce</h3>
              <p>Create and release a functional ecommerce prototype.</p>
              <dl>
                <div>
                  <dt>Development</dt>
                  <dd>React + Vite</dd>
                </div>
                <div>
                  <dt>Delivery</dt>
                  <dd>GitHub + Vercel</dd>
                </div>
                <div>
                  <dt>QA</dt>
                  <dd>10 Playwright smoke tests</dd>
                </div>
                <div>
                  <dt>Result</dt>
                  <dd>Production deployment validated.</dd>
                </div>
              </dl>
              <div className="actions">
                <External
                  className="button dark"
                  href="https://moya-glow-commerce.vercel.app"
                >
                  View live project
                </External>
                <External href={`${github}/moya-glow-commerce`}>
                  Repository
                </External>
              </div>
            </div>
          </article>
          <div className="planned-grid">
            {[
              [
                "API Testing Project",
                "API contracts, validation and negative paths.",
              ],
              [
                "Booking Workflow",
                "State transitions and end-to-end user journeys.",
              ],
              [
                "Data / SLA Analysis",
                "Service performance and measurable outcomes.",
              ],
              [
                "Dockerized Service",
                "Repeatable environments and release setup.",
              ],
              ["RBAC Testing", "Role boundaries and permission coverage."],
              [
                "Blender Automation",
                "Repeatable creative workflows through scripting.",
              ],
            ].map(([t, d], i) => (
              <article className="planned" key={t}>
                <div className="planned-top">
                  <span className="mono">0{i + 2}</span>
                  <span className="badge">PLANNED</span>
                </div>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="manifesto" className="manifesto">
          <Heading
            n="02"
            label="WORKING PHILOSOPHY"
            title="Beyond code written."
          />
          <div className="manifesto-layout">
            <div>
              <h3>
                I build software as a delivery system, not as isolated code.
              </h3>
              <p className="working-model">My working model is:</p>
              <p className="model">
                Understand → Scope → Build → Test → Fix → Deploy → Verify →
                Maintain → Improve
              </p>
            </div>
            <div className="manifesto-body">
              {manifesto.map((t) => (
                <p key={t}>{t}</p>
              ))}
              <div className="completion">
                The standard for completion is not "code written."
                <br />
                The standard is:
                <strong>
                  working software + verified behavior + documented evidence +
                  reproducible delivery.
                </strong>
              </div>
            </div>
          </div>
        </section>
        <section id="capabilities">
          <Heading
            n="03"
            label="CAPABILITY MATRIX"
            title="The complete delivery toolkit."
            description="Tools follow the problem. Every discipline contributes to a reliable, maintainable release."
          />
          <div className="capability-grid">
            {capabilities.map(([t, d, tools], i) => (
              <article className="capability" key={t}>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                <h3>{t}</h3>
                <p>{d}</p>
                <div className="tools">{tools}</div>
              </article>
            ))}
          </div>
        </section>
        <section id="lifecycle">
          <Heading
            n="04"
            label="DELIVERY LIFECYCLE"
            title="A release is a process."
            description="Traceable decisions, useful artifacts and verification at every step."
          />
          <ol className="lifecycle">
            {lifecycle.map(([t, d], i) => (
              <li key={t}>
                <span className="step-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{t}</h3>
                <p>{d}</p>
                <span className="step-arrow" aria-hidden="true">
                  →
                </span>
              </li>
            ))}
          </ol>
        </section>
        <section id="qa" className="qa-section">
          <Heading
            n="05"
            label="QA PRACTICE & EVIDENCE"
            title="Confidence needs evidence."
            description="Start with requirements. Investigate risk. Verify the fix. Protect the release."
          />
          <div className="qa-layout">
            <ol className="flow">
              {qa.map((t, i) => (
                <li key={t}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </li>
              ))}
            </ol>
            <div>
              <h3>Test with intent.</h3>
              <p className="muted">
                Use the technique that reveals the risk, then document what was
                actually observed.
              </p>
              <div className="test-tags">
                {[
                  "Positive testing",
                  "Negative testing",
                  "Boundary values",
                  "Equivalence classes",
                  "State transitions",
                  "Exploratory testing",
                  "API testing",
                  "UI automation",
                  "Regression testing",
                ].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="evidence-box">
                <div className="eyebrow">RELEASE ARTIFACTS</div>
                <h3>Checks you can inspect.</h3>
                <p>
                  This portfolio uses a focused 10-test MVP smoke suite. The
                  repository holds the executed results, defect log and release
                  acceptance record.
                </p>
                <External
                  href={`${github}/software-delivery-portfolio/tree/main/qa`}
                >
                  View QA evidence
                </External>
                <External
                  href={`${github}/software-delivery-portfolio/tree/main/tests`}
                >
                  View automated tests
                </External>
              </div>
            </div>
          </div>
        </section>
        <section id="operations">
          <Heading
            n="06"
            label="DEVOPS / OPERATIONS"
            title="Make delivery repeatable."
            description="A clear path from source code to production, with verification and maintenance built in."
          />
          <ol className="ops-flow">
            {ops.map((t, i) => (
              <li key={t}>
                <span className="mono">0{i + 1}</span>
                <strong>{t}</strong>
                <span aria-hidden="true">→</span>
              </li>
            ))}
          </ol>
          <div className="tool-bar">
            {[
              "Linux",
              "Git",
              "GitHub",
              "GitLab",
              "Docker",
              "Vercel",
              "Playwright",
              "Postman",
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </section>
        <section id="stakeholders">
          <Heading
            n="07"
            label="STAKEHOLDER VALUE"
            title="Engineering that serves people."
          />
          <div className="stakeholder-grid">
            {[
              [
                "Product Owner",
                "scope",
                "acceptance criteria",
                "release confidence",
              ],
              [
                "Developer",
                "reproducible defects",
                "regression coverage",
                "Git traceability",
              ],
              ["QA Lead", "test evidence", "defect metrics", "risk assessment"],
              [
                "Operations",
                "deployment process",
                "environment documentation",
                "recovery procedure",
              ],
              [
                "Business",
                "working software",
                "measurable quality",
                "maintenance visibility",
              ],
            ].map(([t, ...items]) => (
              <article key={t}>
                <h3>{t}</h3>
                <ul>
                  {items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section className="contact">
          <div className="eyebrow">LET'S BUILD SOMETHING THAT WORKS.</div>
          <h2>
            Good software.
            <br />
            Thoughtful delivery.
          </h2>
          <div className="actions">
            <External
              className="button primary"
              href="https://www.linkedin.com/in/tshepo-undefined-594170330/"
            >
              Connect on LinkedIn
            </External>
            <External className="button" href={github}>
              Explore GitHub
            </External>
          </div>
        </section>
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Tshepo Mohoboko</span>
        <span>Software Delivery & QA Portfolio</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
