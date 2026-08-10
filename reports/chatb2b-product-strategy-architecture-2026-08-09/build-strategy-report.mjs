import { readFileSync, writeFileSync } from "node:fs";

const generatedAt = new Date().toISOString();

function markdown(id, body, sourceId) {
  return { id, type: "markdown", body: body.trim(), ...(sourceId ? { sourceId } : {}) };
}

const pricingSql = readFileSync(new URL("./api-pricing-snapshot.sql", import.meta.url), "utf8");

const apiPriceRows = [
  { model: "GPT-5.6 Luna", token_type: "Input", usd_per_million: 0.20, input_per_million: 0.20, output_per_million: 1.20 },
  { model: "GPT-5.6 Luna", token_type: "Output", usd_per_million: 1.20, input_per_million: 0.20, output_per_million: 1.20 },
  { model: "GPT-5.6 Terra", token_type: "Input", usd_per_million: 2.00, input_per_million: 2.00, output_per_million: 12.00 },
  { model: "GPT-5.6 Terra", token_type: "Output", usd_per_million: 12.00, input_per_million: 2.00, output_per_million: 12.00 },
  { model: "GPT-5.6 Sol", token_type: "Input", usd_per_million: 5.00, input_per_million: 5.00, output_per_million: 30.00 },
  { model: "GPT-5.6 Sol", token_type: "Output", usd_per_million: 30.00, input_per_million: 5.00, output_per_million: 30.00 },
];

const sources = [
  {
    id: "cloudflare_agentic_internet",
    label: "Cloudflare: the agentic Internet",
    href: "https://www.cloudflare.com/press/press-releases/2026/cloudflare-allows-the-agentic-internet-to-flourish-with-a-simple-philosophy-your-content-your-rules/",
    description: "Cloudflare's July 1, 2026 statement that automated agents and bots drive more than half of web requests, used as directional evidence that internet activity is becoming machine-operated."
  },
  {
    id: "cloudflare_ceo_forecast",
    label: "Yahoo Finance interview with Cloudflare CEO Matthew Prince",
    href: "https://ca.finance.yahoo.com/video/cloudflare-ceo-explains-ai-traffic-212147401.html",
    description: "June 24, 2026 interview containing Prince's conditional forecast that non-human traffic could reach 1,000 times human traffic within five years. This is an executive forecast, not an observed baseline."
  },
  {
    id: "openai_pricing",
    label: "OpenAI API pricing",
    href: "https://developers.openai.com/api/docs/pricing",
    path: "api-pricing-snapshot.sql",
    description: "Official standard short-context GPT-5.6 list prices reviewed on August 9, 2026. Prices are a point-in-time input, not ChatB2B unit economics.",
    query: {
      engine: "duckdb",
      language: "sql",
      sql: pricingSql,
      description: "Deterministic transcription of the official GPT-5.6 standard short-context input and output list prices.",
      executed_at: generatedAt,
      filters: ["Standard processing", "Short context", "Prices per 1M tokens", "Reviewed 2026-08-09"],
      metric_definitions: {
        usd_per_million: "Published US-dollar list price for one million input or output tokens under standard short-context processing."
      }
    }
  },
  {
    id: "a2a_enterprise",
    label: "A2A enterprise implementation guidance",
    href: "https://a2a-protocol.org/latest/topics/enterprise-ready/",
    description: "Primary protocol documentation describing A2A task transport, authentication advertisement, and receiver-owned authorization."
  },
  {
    id: "mcp_spec",
    label: "Model Context Protocol specification, July 28, 2026",
    href: "https://modelcontextprotocol.io/specification/2026-07-28",
    description: "Current MCP specification used to bound agent-to-tool and context integration."
  },
  {
    id: "agntcy",
    label: "AGNTCY documentation",
    href: "https://docs.agntcy.org/",
    description: "Primary documentation for federated discovery, identity, messaging, and evaluation capabilities."
  },
  {
    id: "agentgateway",
    label: "Linux Foundation agentgateway documentation",
    href: "https://agentgateway.dev/docs/standalone/latest/",
    description: "Primary documentation for A2A/MCP gateway, policy, authentication, observability, and routing capabilities."
  },
  {
    id: "aws_agentcore",
    label: "AWS Bedrock AgentCore documentation",
    href: "https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/",
    description: "AWS documentation for managed agent runtime, gateway, identity, and policy capabilities."
  },
  {
    id: "aws_ecs_iam",
    label: "AWS ECS IAM roles guidance",
    href: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-iam-roles.html",
    description: "AWS guidance supporting separate task and execution roles."
  },
  {
    id: "aws_passrole",
    label: "AWS PassRole guidance",
    href: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html",
    description: "AWS guidance on the security significance of iam:PassRole."
  },
  {
    id: "gcp_wif",
    label: "Google Cloud Workload Identity Federation",
    href: "https://docs.cloud.google.com/iam/docs/workload-identity-federation",
    description: "Google Cloud documentation supporting short-lived workload federation over long-lived service-account keys."
  },
  {
    id: "gcp_pubsub",
    label: "Google Cloud Run with authenticated Pub/Sub",
    href: "https://docs.cloud.google.com/run/docs/tutorials/pubsub",
    description: "Google Cloud documentation for authenticated Pub/Sub delivery to Cloud Run."
  },
  {
    id: "microsoft_agent365",
    label: "Microsoft Agent 365 overview",
    href: "https://learn.microsoft.com/en-us/microsoft-agent-365/overview",
    description: "Microsoft documentation for enterprise agent inventory, identity, governance, and cross-platform management."
  },
  {
    id: "oauth_device",
    label: "OAuth 2.0 Device Authorization Grant",
    href: "https://datatracker.ietf.org/doc/html/rfc8628",
    description: "IETF standard supporting browser-assisted CLI sign-in without copying a long-lived credential into the terminal."
  },
  {
    id: "oauth_security",
    label: "OAuth 2.0 Security Best Current Practice",
    href: "https://datatracker.ietf.org/doc/html/rfc9700",
    description: "IETF security guidance for modern OAuth deployments."
  },
  {
    id: "dpop",
    label: "OAuth Demonstrating Proof of Possession",
    href: "https://datatracker.ietf.org/doc/html/rfc9449",
    description: "IETF standard for sender-constrained access and refresh tokens."
  },
  {
    id: "scim",
    label: "SCIM Protocol",
    href: "https://www.rfc-editor.org/rfc/rfc7644.html",
    description: "IETF protocol for enterprise identity provisioning and deprovisioning."
  },
  {
    id: "openid_caep",
    label: "OpenID Continuous Access Evaluation Profile",
    href: "https://openid.net/specs/openid-caep-1_0-final.html",
    description: "OpenID specification for near-real-time access-state change events."
  },
  {
    id: "json_schema",
    label: "JSON Schema 2020-12",
    href: "https://json-schema.org/draft/2020-12",
    description: "Primary schema standard for typed artifact validation."
  },
  {
    id: "json_canonicalization",
    label: "JSON Canonicalization Scheme",
    href: "https://www.rfc-editor.org/rfc/rfc8785.html",
    description: "IETF standard supporting deterministic hashing and signing of JSON artifacts."
  },
  {
    id: "nist_zero_trust",
    label: "NIST SP 800-207 Zero Trust Architecture",
    href: "https://csrc.nist.gov/pubs/sp/800/207/final",
    description: "NIST guidance supporting explicit, resource-specific authorization and no implicit trust from network location."
  },
  {
    id: "anthropic_legal",
    label: "Anthropic Claude Code legal and compliance guidance",
    href: "https://code.claude.com/docs/en/legal-and-compliance",
    description: "Provider documentation addressing credential use and third-party routing."
  },
  {
    id: "gemini_terms",
    label: "Gemini CLI terms and privacy",
    href: "https://github.com/google-gemini/gemini-cli/blob/main/docs/resources/tos-privacy.md",
    description: "Google documentation addressing use of Gemini CLI OAuth by third-party software."
  },
  {
    id: "openai_terms",
    label: "OpenAI Terms of Use",
    href: "https://openai.com/policies/terms-of-use/",
    description: "OpenAI consumer terms relevant to credential sharing and automated extraction."
  },
  {
    id: "xai_aup",
    label: "xAI Acceptable Use Policy",
    href: "https://x.ai/legal/acceptable-use-policy",
    description: "xAI acceptable-use language reviewed for automated and third-party access boundaries."
  },
  {
    id: "doj_competition",
    label: "U.S. DOJ remarks on algorithms, LLMs, and competitor coordination",
    href: "https://www.justice.gov/opa/speech/acting-deputy-assistant-attorney-general-criminal-enforcement-daniel-gladd-delivers",
    description: "Primary government guidance supporting the caution that software and LLMs do not sanitize anticompetitive information exchange."
  },
  {
    id: "ftc_testimonials",
    label: "FTC endorsement and testimonial guidance",
    href: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking",
    description: "FTC guidance for permissions, truthful endorsements, and disclosure of material connections."
  }
];

const blocks = [
  markdown("title", `
# ChatB2B: A Practical Plan for Governed Agent Collaboration

**Investor-owner edition · August 10, 2026**
  `),

  markdown("executive_summary", `
## Executive Summary

### Page 1 of 3 — Investment Thesis and Owner Decision

**Recommendation: fund a bounded validation option—not a platform build.** ChatB2B is a credible option on the rise of company-operated agents, but it is not yet a proven investment case. Capital expands only if the company clears Gate 1, then the coupled Gate 2 and Gate 3 tests, then live operational improvement and cross-vendor repeatability.

**The thesis is that business relationships must become executable for agents.** As software increasingly requests information, exchanges artifacts, and acts for companies, it needs more than identity and transport. It needs a governed way to establish the represented legal organization, relationship, purpose, permitted data, approved runtime, release authority, and proof of outcome. ChatB2B should become **the governed handoff layer between independently operated company agents**.

**The timing is favorable, but machine traffic is context—not proof of demand.** Cloudflare says agents and bots already drive more than half of web requests, while its CEO has conditionally forecast a far larger machine-to-human ratio. The exact multiple should not underwrite the investment. The durable signal is that corporate identity, permission, purpose, and accountability must become machine-readable. [Cloudflare's current traffic claim](https://www.cloudflare.com/press/press-releases/2026/cloudflare-allows-the-agentic-internet-to-flourish-with-a-simple-philosophy-your-content-your-rules/) · [CEO forecast](https://ca.finance.yahoo.com/video/cloudflare-ceo-explains-ai-traffic-212147401.html)

**The initial wedge is vendor-to-customer technical support.** A customer submits a bounded SDK or API reproduction; the vendor agent applies approved private knowledge or authority; the customer validates the result locally. The vendor is the proposed buyer because it captures avoided L2/L3 work and owns the customer channel. First value is a correct disposition that the strongest local baseline missed—not an agent conversation.

**There are two adoption motions.** An email-simple CLI gives advanced users immediate local insight and binds their existing harnesses; a vendor-sponsored relationship workflow verifies both companies and produces governed outcomes. The free lane is an acquisition hypothesis, while the verified bilateral lane is the proposed business. Company compute stays in approved runtimes; ChatB2B never collects provider subscription credentials or pools personal limits.

**Do not build the broad vision first.** No public agent network, generic gateway, new runtime, shared memory, token marketplace, competitor rooms, or dual-cloud platform. Test one workflow, sponsor, customer cohort, runtime, cloud path, and typed exchange.

**The moat must be earned through reuse.** Multiple vendors must accept the same customer client, schema core, contract structure, release controls, and receipts. If the result stays bespoke, is reproducible in a vendor's own stack, or attracts no second paying vendor, it is a feature or services business—not neutral infrastructure.

> **Owner decision now:** authorize only the Day 0–30 Gate 1 tranche. Reserve—but do not release—Days 31–90 validation capital until Gate 1 passes. Production capital remains withheld until Gates 2 and 3 both clear.
  `),

  markdown("executive_summary_product", `
### Page 2 of 3 — Product, Distribution, Architecture, and Economics

**Individual discovery is frictionless; corporate authority is explicit.** A user runs a signed local readiness check without an account, uses only an email address to save results, binds an existing CLI harness without sharing its provider key, and experiences a synthetic handoff. The personal workspace may inspect, lint, and simulate; it may not claim an employer, disclose company data, reach a private counterparty, or act externally.

Private work begins only after three elevations:

1. **Verified organization:** legal entity, enterprise identity, expiring mandates, runtime rules, and company-controlled keys.
2. **Bilateral room:** both companies accept the same purpose, schema, recipient, provider, retention, and release terms.
3. **Task handoff:** both policies admit the exact typed artifact; source release and recipient validation remain local.

**The architecture separates coordination from authority.** ChatB2B coordinates verified organizations, contracts, schemas, encrypted routing, revocation, and receipts. Confidential content and execution stay in each company's approved environment. Typed artifacts cross only after local admission and release; returned content is quarantined and never auto-executes. Start with the design partner's existing AWS or GCP runtime and integrate existing identity, policy, ticketing, MCP, and A2A infrastructure.

**The commercial motion is vendor-sponsored B2B2B.** A vendor pays for a bounded design-partner engagement and invites named customers free. ChatB2B sits inside the vendor's documentation, portal, or ticket path. The CLI may generate champions, but it is not an enterprise channel until users request governed company access at a meaningful rate.

**Pricing and margins are tests.** The proposed **$25,000** pilot is a validation fee for a 90-day live engagement that begins only after Gates 1–3; it is not the recurring price. The separate **$3,000–$5,000+ monthly** hypothesis must be reset from observed value, implementation, security, support, acquisition, and renewal costs. Freeze the provisional annual contract value before Gate 2. Inference runs in a sanctioned customer/vendor account or passes through at cost; there is no token markup or consumer-subscription pooling.

**Measure verified outcomes, not network activity.** Weekly Verified Counterparty Resolutions count handoffs that passed both policies and ended in a customer-signed test or qualified disposition. Each proof packet shows the baseline, approved private advantage, customer validation, avoided work, and safety events. Tokens, messages, and registered agents do not establish value.

For this to become a scalable company, four things must all prove true:

- private knowledge creates material lift using safely releasable inputs;
- a vendor pays for the neutral handoff and distributes it;
- a second vendor reuses the common client, schema, contract, and receipt core;
- margins and onboarding outperform an embedded feature or services model.
  `),

  markdown("executive_summary_rollout", `
### Page 3 of 3 — Rollout Gates and Capital Release

**Release capital one evidence tranche at a time.** Because loaded costs are not yet validated, approve hard scope and team-time caps using actual costs. Each stage ends in **PASS, ONE RECYCLE, or STOP/PIVOT**.

#### Gate 1 — Paid buyer and owned distribution by Day 30

Interview at least five vendor support leaders and five customer integration leaders in one segment. Pass only if three vendors identify owned budget; three customers agree to test, including one in the proposed sponsor's named cohort; and one vendor executes a conditional 90-day commitment of at least **$25,000** with named placement in its docs, portal, or support UI. Service and production spend begin only after Gates 2 and 3.

**Tranche A:** founder-led discovery, contracting, historical-case access, one draft schema, a synthetic CLI, and time-boxed specialist support. No production relay, permanent platform team, or second cloud. No linked paid sponsor stops the platform build.

#### Gates 2 and 3 — Coupled efficacy and disclosure proof by Day 90

**Gate 2: unique private advantage.** Pre-register roughly 30 resolved cases, baselines, rubric, versions, limits, exclusions, and adjudicators. Pass with at least **50%** private-source resolution, **+25 points** over the strongest local ensemble, **+15 points** from sources on versus off, and either **+15 points** over incumbent support or **30% less expert preparation** without correctness loss. Freeze eligible annual volume, annualization, avoided-cost inputs, attribution, downside case, and provisional contract value before scoring. Residual value must be at least **5×** annual contract value with modeled gross margin of at least **70%**.

**Gate 3: safe disclosure.** One vendor and one named customer approve the same schema, data flow, prohibited fields, provider/region, retention, release process, and kill switch. At least **60%** of predeclared eligible incidents must be releasable, with median approval below **four business hours**, without prohibited data or exceptions. Rejections, missing data, abandonment, and timeouts stay in the denominator.

Gates 2 and 3 use one frozen schema. A **30%–59%** release result permits one iteration; below **30%** or dependence on prohibited data stops. A material schema change reruns the affected efficacy comparisons. Failed private lift stops the wedge; failed economics permits one redesigned fresh holdout.

#### Conditional Day 91–180 pilot

Only after all three gates pass, fund one small team for one supervised 90-day pilot and one cloud path. Build the minimum bilateral workflow and run 30 live handoffs with human release and tested kill switches.

Continue only with at least **40%** customer-validated resolution, post-release response below **two hours**, **25%** deflection, **2×** realized benefit over variable cost, and zero critical security events. This decision occurs around Day 180 at the earliest.

**Decision rights stay separated:** founder delivers; an independent evaluator certifies Gate 2; vendor/customer security owners sign Gate 3 and retain veto; finance certifies economics; the investor-owner releases capital.

Replication capital follows the live gate; scale capital waits for a second paying vendor reusing the common core, a third commitment, repeat customer use, and faster onboarding. Weak CLI-to-company conversion makes the CLI a utility; easy vendor internalization without a second payer makes ChatB2B a feature or service.
  `),

  markdown("full_report_boundary", `
## Full Product, Architecture, and Validation Plan

The three executive pages above state the owner decision and capital-release logic. The complete product, user experience, security, cloud, commercial, measurement, and validation plan follows without abridgment.
  `),

  markdown("thesis", `
## The Internet Is Becoming Machine-Operated; Business Relationships Must Become Executable

The human-facing web was built around pages, sessions, and people clicking buttons. The emerging machine-operated internet is built around agents issuing requests, exchanging artifacts, and taking actions at software speed. That shift makes the governance gap more urgent: companies need a way for non-human actors to recognize business relationships without silently inheriting trust.

Agents become materially more powerful when they can obtain facts, tools, or authority that exist outside their own company. The difficult part is not sending another prompt. It is deciding **who is acting for which legal organization, under which relationship, for what purpose, with what data, through which provider, for how long, and with whose approval**.

ChatB2B's durable promise should be:

> **The governed handoff layer between company agents.**

The platform turns an existing business relationship into a versioned collaboration contract and then applies that contract to each handoff. It lets each company keep its own agent runtime, credentials, data, tools, budgets, and veto. ChatB2B coordinates the exchange, records the evidence, and can deny invalid work; it cannot manufacture either party's permission.

The long-term vision is broader corporate agent collaboration across the same company, affiliates, portfolio companies, vendors, customers, and trusted partners. The product should earn that breadth by proving one narrow workflow at a time.
  `),

  markdown("product_model", `
## The Product Has Three Layers and Two Growth Motions

### Layer 1 — Individual Insight

An email-authenticated CLI performs local readiness checks, finds dangerous ambient authority, validates manifests, downloads public templates, and runs a synthetic demonstration. It creates value before procurement and does not claim company authority.

### Layer 2 — Verified Organization

An administrator verifies the legal entity, connects an identity provider, assigns mandates, sets data/provider/region rules, and enrolls approved workloads. Membership is explicit; a matching email domain is never sufficient.

### Layer 3 — Bilateral Relationship Room

Two verified organizations accept the same contract version, schemas, peer keys, retention, providers, recipients, incident contacts, and permitted purposes. Only then can they exchange private artifacts.

The bottom-up motion is **email → local insight → harness binding → internal champion**. The top-down motion is **paid sponsor → verified organization → named counterparties → governed outcomes**. They meet when an individual requests organizational elevation or accepts a sponsor's invite. Neither motion should depend on anonymous agent matching or donated compute.
  `),

  markdown("scope_boundaries", `
## Build the Relationship Exchange—Not Another Agent Runtime

**Build and own:**

- legal-organization verification and delegated corporate authority;
- directed, nontransitive relationship rooms;
- bilateral contract and policy negotiation;
- contract-to-policy compilation for specific workflows;
- typed artifact schemas, exact release preview, and recipient validation;
- short-lived task capability, revocation, and deterministic state;
- signed routing, release, and outcome receipts;
- thin CLI, SDK, MCP, A2A, ticketing, and cloud-runtime adapters;
- reusable policy and schema templates proven across multiple counterparties.

**Integrate or buy:**

- OIDC, SAML, SCIM, MFA, passkeys, workload identity, and KMS;
- managed databases, queues, object storage, WAF, observability, and SIEM export;
- Cedar, OPA, or an existing policy decision point;
- A2A for agent task transport and MCP for tools/context;
- the customer's existing Bedrock, Vertex, Microsoft, AGNTCY, agentgateway, or internal agent platform.

**Do not build:**

- a public agent community, generic chat network, universal gateway, or agent registry;
- personal-subscription pooling, quota harvesting, background token exhaust, credits, wallets, or bounties;
- remotely schedulable customer agents, arbitrary commands, dynamic images, or shared memory;
- a model router or token-markup business;
- competitor collaboration rooms in the initial product;
- a centralized warehouse of prompts, source code, raw logs, credentials, or cross-company memory.
  `),

  markdown("use_case_portfolio", `
## Start with Work Where the Counterparty Is Indispensable

The best ChatB2B use cases have four properties: the outside organization owns unique knowledge or authority; the task is recurring; the outcome can be checked; and both sides already have a business relationship.

**Start now — vendor-to-customer technical support.** A vendor has private known-issue data, unreleased fix status, compatibility matrices, fleet patterns, and authority to confirm a disposition. The customer can run a local acceptance test. The buyer and distribution channel are clear.

**Next — integration conformance and B2B data mapping.** A vendor, supplier, or customer can validate API contracts, schemas, EDI mappings, and implementation evidence without receiving a repository or production system. Outcomes are often testable.

**Later — security and procurement evidence.** A company can provide approved, current evidence against a named questionnaire or control request. This is valuable only if the workflow is frequent enough to avoid becoming bespoke compliance work.

**Later — affiliated-company research and operating coordination.** Portfolio relationships may make contracting and policy templates easier, but each company remains an independent legal and security boundary. This category needs a strong outcome test so it does not become generic multi-agent brainstorming.

**Disabled — competitor strategy, pricing, capacity, customers, wages, bids, or forward plans.** [Software and LLMs do not make otherwise problematic information exchange safe](https://www.justice.gov/opa/speech/acting-deputy-assistant-attorney-general-criminal-enforcement-daniel-gladd-delivers). A future clean-room product would be a separate counsel-led design, not a more permissive trust tier.
  `),

  markdown("initial_workflow", `
## The First Commercial Product Is a Vendor Support Handoff

**Customer user:** a platform or integration engineer blocked on a paid vendor SDK or API.<br>
**Vendor operator:** L2/L3 support or escalation engineering supervising the vendor agent.<br>
**Buyer:** VP Support, Customer Experience, or Support Operations.<br>
**Trigger:** a reproducible problem that survived normal debugging and a strong paid-model attempt against public documentation.

The customer packages a canonical evidence bundle containing product/runtime versions, operating environment, expected and actual behavior, error codes, bounded request/response shapes, minimal reproduction steps, prior attempts, and requested outputs. The initial schema excludes repositories, archives, binaries, images, external URLs, credentials, personal data, customer records, production dumps, active shell content, and competitively sensitive fields.

The vendor returns a typed, inert response containing diagnosis, root-cause hypothesis, acceptance test, expected result, workaround, patch status, confidence, release-approved evidence, and a receipt reference. ChatB2B never executes the response. The customer decides whether and how to test it locally.

The first-value moment is precise:

> **The vendor agent produces a correct, customer-validated disposition using private vendor knowledge or authority that the customer's strongest local baseline missed.**

The product should show that counterfactual: what public models concluded, what approved private evidence changed, whether the local test passed, and how much escalation work was avoided. If the vendor's existing support portal produces the same outcome with less friction, ChatB2B should integrate there rather than force a new destination.
  `),

  markdown("cli_experience", `
## An Advanced User Should Reach First Value in One CLI Session

The intended first session is:

1. **Install and inspect locally.** Run **chatb2b doctor --local** before creating an account; detect Codex, Claude Code/Fable, Gemini, Grok, MCP/A2A surfaces, declared tool names, policy files, and versions without reading secret values, prompts, repositories, or source files.
2. **Sign in only to save and synchronize.** Run **chatb2b login**; complete a browser device code with an email magic link or passkey. No password and no provider credential.
3. **Initialize locally.** Run **chatb2b init --local-only**; create a secret-free project manifest and **.chatb2bignore**. Upload remains off.
4. **Bind the workflow.** Run **chatb2b bind --harness detected**; create a signed local binding that contains only the harness type/version, declared capability names, configuration hash, policy version, and device public key.
5. **See useful insight.** Run **chatb2b insight**; receive a local report on ambient authority, unsigned cards, overbroad tools, stale policy, missing recipient/purpose binding, release separation, and provider/region incompatibility.
6. **Experience the exchange.** Run **chatb2b demo handoff --synthetic**; exercise a public, rate-limited example through ChatB2B-funded commercial APIs and see the contract, receipt, and outcome flow.

Ship signed standalone binaries and common package-manager installs with checksums, release signatures, an SBOM, transparent update behavior, and a no-administrator-rights path. Installation trust is part of conversion for this audience.

The individual workspace is visibly labeled **Individual / organization unverified**. It can inspect, lint, simulate, pull public templates, and view its own content-free receipts. It is cryptographically ineligible to administer a company, access private counterparties, release employer data, or perform autonomous external actions.

Email signup is successful only when the user reaches a useful readiness insight. An account record alone is not activation.
  `),

  markdown("organization_elevation", `
## Company Authority Is a Separate, Explicit Elevation

When a user needs a private handoff, **chatb2b org request-access** should generate a concise packet for the company's security or platform owner: requested workflow, data flow, providers, regions, retention, permissions, local components, and exact controls. The user's local binding can survive the elevation, but none of its authority changes until an administrator accepts it.

Verified Organization Mode requires:

- legal-entity verification and approved administrators;
- enterprise OIDC, optional SCIM, MFA, and deprovisioning;
- named human and workload mandates with expiry;
- an offline or dual-control organization signing trust root, bootstrapped under independent administration and pinned to the legal-organization record; it is never runtime-accessible;
- approved runtime, providers, models, regions, tools, and budgets;
- a customer-local release role and incident contact;
- bilateral acceptance of a room contract before private exchange.

Use [SCIM](https://www.rfc-editor.org/rfc/rfc7644.html) for provisioning where appropriate and continuous access signals such as [CAEP](https://openid.net/specs/openid-caep-1_0-final.html) for fast state changes. Neither an IdP assertion nor an email domain proves that a person may disclose a specific artifact. The local mandate and room policy still decide.
  `),

  markdown("credentials_bindings", `
## Credentials Should Be Short-Lived, Scoped, and Bound to Their Use

Interactive CLI authentication should follow the [OAuth device authorization flow](https://datatracker.ietf.org/doc/html/rfc8628), modern [OAuth security guidance](https://datatracker.ietf.org/doc/html/rfc9700), and sender-constraining where practical through [DPoP](https://datatracker.ietf.org/doc/html/rfc9449). The CLI generates a device key locally and stores it in the operating-system keychain. A magic link carries only a short-lived, one-use verification value and never an access, identity, refresh, capability, or API token. Access tokens are short-lived and audience-bound; refresh tokens rotate with reuse detection and family revocation. ID tokens never authorize APIs.

**Personal session credential:** short-lived, device-bound, and limited to the individual's own profile, templates, local validation, binding status, synthetic demos, and content-free receipts.

**Personal access token:** optional fallback for non-interactive local scripts; shown once, expires in no more than 30 days, and cannot gain organization, room, or release scopes.

**Organization human session:** established only through the organization's configured enterprise OIDC connection and an explicitly selected organization context. Bind it to issuer, immutable subject, organization, audience, live membership, and mandate. Require step-up MFA or a passkey for administration, room activation, key changes, and every initial human release. A personal session cannot be upgraded in place.

**Organization workload credential:** created only by a verified admin; prefer workload federation or a KMS-backed client assertion over a static secret. Bind it to organization, environment, audience, workflow, actions, and expiry.

**Counterparty task capability:** short-lived, task-specific, recipient-bound, and issued only after both sides' current policies accept the room contract. It is not a general API key.

Effective permission is always the intersection of credential scope, verified membership, principal mandate, project policy, bilateral contract, customer-local policy, and current task state. A credential cannot create authority by itself. Workload credentials can request or execute only their approved workflow; they can never satisfy a human step-up, organization administration, contract acceptance, or release approval.

Each organization's offline or dual-control trust root certifies purpose-constrained leaf keys: an admin/contract key for **PrincipalMandate** and room acceptance, a release key for **ReleaseGrant**, and a separate outcome/attestation key where needed. Verifiers reject the wrong key purpose for an artifact type. The runtime admission/release PEP receives only its release leaf—never the organization root, admin/contract key, or outcome key. Normal leaf rotation may use the prior authorized key; compromise recovery requires dual-control out-of-band re-verification. ChatB2B's platform signing key can attest to routing and state transitions, but cannot mint company authority.

ChatB2B never reads or stores the user's OpenAI, Anthropic, Google, xAI, Bedrock, Vertex, or internal-provider credential. The local harness calls its already sanctioned runtime.
  `),

  markdown("sync_model", `
## Harnesses Stay Closely Synchronized Without Becoming Remotely Controlled

The binding protocol should be outbound-only and content-minimized:

- A project-local manifest declares binding ID, harness type/version, agent-card hash, capability names, local policy version, and execution-profile hash. The CLI signs the manifest hash.
- ChatB2B publishes content-addressed, signed policy and schema bundles. Each bundle binds issuer, scope, key ID, monotonic epoch, digest, creation time, and expiry; clients reject rollback, unknown signers, expiry, and scope mismatch. Clients use ETags at login, CLI start, agent-session start, and immediately before a governed handoff.
- Foreground sessions may keep an outbound SSE or long-poll stream for revocation, minimum-version, contract, and task-state events. When no session runs, nothing executes in the background.
- The harness sends content-free drift receipts when its declared capability, client, or policy hash changes. It never syncs prompts, source code, filenames, secrets, ambient tool configuration, provider credentials, or exact quota.
- **chatb2b sync plan** displays the exact outbound field diff, destination, purpose, provider, region, retention, and policy version before upload.
- Verified server runtimes may receive replay-safe, audience-bound webhooks containing event IDs and minimal routing metadata. Webhooks can notify or deny; they cannot widen the local execution profile.
- Stale policy is harmless in Individual Insight Mode but fails closed for a verified handoff. Local policy may always deny; remote state may never create a local allow.
- Offline mode permits drafting, linting, and packaging only. Organization upload, private execution, and release require a fresh online check of membership, mandate, room, contract, key, lease, policy, and revocation state.

Expose a session-scoped sidecar over a Unix socket or loopback connection with read-only functions such as status, capability search, schema fetch, handoff lint, and draft preparation. Deliberately omit **release** from the agent-facing surface; release remains a step-up CLI or web action.

Initial integration surfaces should be a versioned REST API, TypeScript and Python SDKs, a read-only MCP server, A2A-compatible task/artifact adapters, stdin/stdout JSON for any CLI harness, and signed webhooks for managed services.
  `),

  markdown("permission_model", `
## Relationship Context Selects a Policy Template—It Never Grants Permission

The safe relationship ladder is:

1. **Same legal entity, approved information domain.** Lowest default friction, but purpose, data class, principal mandate, and recipient still apply.
2. **Controlled affiliate covered by an explicit agreement.** Reusable policy templates may be available; each handoff remains scoped.
3. **Portfolio-related company.** External by default. Shared ownership can accelerate verification or contracting, not create access. Morning Brew and Business Insider would remain separate legal and security principals.
4. **Contracted vendor, customer, or noncompeting partner.** Allow only the named workflow, data fields, recipient roles, providers, regions, and retention.
5. **Ordinary external party.** Public or explicitly released artifacts only.
6. **Potential competitor.** Disabled initially. Pricing, discounts, costs, margins, wages, bids, capacity, customers, territories, procurement, and forward strategy are prohibited across all rooms.

Relationships are directional, revocable, purpose-bound, and nontransitive. The actual local decision is conjunctive:

**verified legal organization ∩ valid principal mandate ∩ active bilateral contract ∩ exact purpose and workflow ∩ allowed data class ∩ named recipient ∩ approved provider/region/retention ∩ current schema and keys ∩ unexpired lease ∩ local budget ∩ source release policy ∩ recipient admission policy**

Unknown, stale, revoked, mismatched, or missing means deny. ChatB2B can reject a handoff but cannot create a local allow.
  `),

  markdown("artifact_protocol", `
## Collaboration Is a Typed Artifact Exchange, Not Shared Mutable Memory

Every handoff should use a small set of versioned artifacts validated with [JSON Schema](https://json-schema.org/draft/2020-12) and canonicalized before signing using a standard such as [RFC 8785](https://www.rfc-editor.org/rfc/rfc8785.html):

- **PrincipalMandate** — who may request, admit, approve, release, or attest, for which company, workflow, and period; signed only by the organization's admin/contract leaf;
- **RoomContract** — the two legal entities, purpose, schemas, fields, providers, regions, retention, peer keys, and prohibited content;
- **TaskRequest** — requested outcome, constraints, lease, budget, and acceptance definition;
- **EvidenceBundle** — minimal approved facts, provenance, and classification;
- **ResponseArtifact** — structured answer, evidence references, uncertainty, and safe human-readable tests;
- **ReleaseGrant** — exact artifact digest, recipient, signer, policy version, and expiry; signed only by the organization's purpose-constrained release leaf;
- **OutcomeReceipt** — recipient-confirmed result, test status, classification, and timing; signed by the designated outcome/attestation leaf, never by the release worker by default.

Every signed envelope binds tenant, room, task, sender, recipient, purpose, contract version, schema version, payload digest, key version, creation time, expiry, and idempotency key.

The response is inert data. Active markup, terminal controls, executable payloads, remote URLs, and tool instructions are escaped or rejected. No returned command or patch runs automatically. No chain-of-thought, agent scratchpad, shared filesystem, or long-lived cross-company conversation becomes the coordination substrate.
  `),

  markdown("technical_architecture", `
## The Architecture Preserves Four Independent Trust Boundaries

**Source company:** creates, minimizes, previews, approves, signs, and encrypts the artifact. It owns source selection, disclosure authority, and final execution.

**ChatB2B control plane and relay:** verifies organizations, room state, contract/schema versions, expiry, replay protection, routing, and receipt indexes. It can route or deny. In blind-relay mode it stores ciphertext briefly and cannot read the body.

**Recipient company:** verifies, decrypts, admits into a fixed local workflow, invokes its approved agent runtime, quarantines output, performs a separate release decision, signs, and encrypts the response.

**Model provider:** is explicitly named in the contract with its region, retention, training, and subprocessor terms. Provider behavior is not implicit in the phrase “customer cloud.”

The end-to-end flow is:

**source packager → local release decision → encrypted relay → recipient connector → local admission/decrypt PEP → fixed guarded runtime → recipient release decision → encrypted relay → source verifier → local acceptance test → signed outcome receipt**

Disclosure, execution, verification, and release remain independent authorities. Organization mandates, room acceptances, releases, and outcomes require organization-held signatures pinned in the bilateral contract. A ChatB2B signature attests to routing and platform state only; a compromised ChatB2B signer cannot create a source release grant, recipient mandate, or customer outcome.
  `),

  markdown("control_plane_api", `
## A Small Control Plane Is Enough for the First Product

The initial SaaS can be a single-region modular service with managed Postgres, a durable delivery queue, short-retention object storage for ciphertext, KMS for ChatB2B routing receipts, OIDC integration, and append-only audit events. Each bilateral room has one authoritative home region; avoid active-active writes.

Core records are **LegalOrganization**, **RelationshipRoom**, **ContractVersion**, **PrincipalMandate**, **Binding**, **Handoff**, **ReleaseGrant**, **Artifact**, **Receipt**, and **Outcome**. A graph database is unnecessary; versioned relationship edges in Postgres are sufficient.

The minimal versioned API surface is:

- **/v1/device-authorizations** and **/v1/token**;
- **/v1/bindings** create, inspect, rotate, and revoke;
- **/v1/bundles** index and conditional fetch;
- **/v1/organizations**, memberships, mandates, and connectors;
- **/v1/rooms**, invitations, contracts, and peer keys;
- **/v1/handoffs**, artifacts, releases, and state transitions;
- **/v1/receipts** and **/v1/outcomes**;
- **/v1/events** cursor reads and signed webhook subscriptions.

Use monotonically increasing room cursors, idempotency keys, short leases, compare-and-swap state transitions, audience-bound events, and explicit schema versioning. Cross-tenant object access must always bind the authenticated organization and room; a raw object ID is never sufficient.
  `),

  markdown("customer_runtime", `
## Confidential Work Requires Three Local Privilege Domains

**Transport connector:** initiates outbound HTTPS only, verifies routing metadata, and places verified-but-unopened ciphertext into a customer-controlled transport inbox. It has no source-data, model, tool, plaintext, decryption-key, or release-key access.

**Execution adapter:** invokes the company's existing Bedrock, Vertex, GKE, internal agent, or approved commercial API using a locally pinned profile. Remote input cannot select a command, image, role, model, plugin, environment variable, tool, URL, egress destination, token budget, or daily spend ceiling. The adapter cannot release externally.

**Local admission and release policy-enforcement point:** receives the transport inbox, unwraps the per-task decryption key, decrypts and admits a typed artifact, and then writes only admitted work to a separate execution queue. On return, it quarantines output, rechecks recipient/purpose/contract/schema/mandate/lease/key/revocation immediately before release, runs local schema and leakage checks, requires human approval initially, and alone can use the release-signing key. The worker can consume admitted plaintext but never holds artifact encryption or signing keys.

The most important invariant is simple:

> **Remote input may narrow a fixed local execution profile. It may never widen it.**

Public and synthetic demonstrations may collapse these roles. Every confidential production handoff must separate execution from release authority before the first live transfer, regardless of volume.
  `),

  markdown("cloud_architecture", `
## AWS and GCP Use the Same Security Model with Native Primitives

Supporting customers in both clouds does not require ChatB2B to operate its own control plane in both clouds. Start with the design partner's approved runtime and one deployment path; provide a portable local adapter contract.

### AWS reference

- Fixed ECS Fargate connector service in the customer's account.
- SQS transport inbox containing task metadata and ciphertext references, consumed only by the local admission/release service.
- A separate SQS execution queue receives the typed artifact only after local decryption and admission.
- DynamoDB conditional-write ledger for replay, leases, bytes, tokens, concurrency, and hard daily budget.
- S3 quarantine only for artifacts that cannot remain in the queue.
- Separate connector, execution, and admission/release task roles; the admission/release service alone can use narrowly scoped KMS artifact-unwrapping and release-leaf signing keys, never the organization root or admin/contract key.
- Customer-mirrored, signed, digest-pinned ECR images; CloudWatch and CloudTrail export to the customer's SIEM.
- No ChatB2B cross-account role, gateway **ecs:RunTask**, runtime **iam:PassRole**, dynamic task definition, image/command/environment override, or release-key access from execution.
- Customer-controlled deployment CI may use **iam:PassRole** only for the exact connector, execution, and admission/release role ARNs, constrained by **iam:PassedToService = ecs-tasks.amazonaws.com**; that permission never enters the runtime data plane.

[AWS ECS IAM guidance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-iam-roles.html) supports distinct role boundaries; [PassRole](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html) is confined to the customer deployment principal because giving it to a runtime could attach broader permissions.

### GCP reference

- Fixed Cloud Run connector pulling outbound from ChatB2B.
- Pub/Sub transport inbox with authenticated push to a fixed Cloud Run admission/decrypt service.
- A separate Pub/Sub execution topic invokes the fixed Cloud Run execution service only after admission.
- Firestore or an existing durable store for replay, leases, bytes, tokens, concurrency, and hard budget.
- GCS quarantine only when asynchronous artifact storage is necessary.
- Separate connector, execution, and admission/release service accounts; admission/release alone receives narrow Cloud KMS artifact-unwrapping and release-leaf signing permissions, never the organization root or admin/contract key.
- Customer-mirrored, digest-pinned Artifact Registry images; Cloud Audit Logs export to the customer's SIEM.
- Cloud Run services use native attached service identities. Use [Workload Identity Federation](https://docs.cloud.google.com/iam/docs/workload-identity-federation) only for authorized external or non-GCP workloads instead of service-account keys. Use existing GKE when stronger isolation is required.
- Customer-controlled deployment CI may receive **iam.serviceAccounts.actAs** only for the exact connector, execution, and admission/release service accounts. ChatB2B and runtime identities receive no service-account impersonation or revision-mutation authority.
- No **run.jobs.runWithOverrides**, runtime service-account impersonation, remote Cloud Run revision mutation, or worker-pool baseline for this request-driven product.

PrivateLink, Private Service Connect, dedicated regional cells, and a second SaaS cloud should follow a contracted customer requirement—not precede it.
  `),

  markdown("security_governance", `
## Security Depends on Local Authority, Typed Data, and Honest Claims

The highest-priority controls are:

- **Compromised ChatB2B:** local deny authority, fixed profiles, peer-key pinning, end-to-end encryption, and an independent release key limit the blast radius.
- **Tenant mix-up:** tenant, room, sender, recipient, purpose, and artifact digest appear in every signature and authenticated-encryption context; identifiers are fuzz-tested.
- **Replay and retry abuse:** nonces, expiry, monotonic cursors, idempotency keys, and a customer-local dedupe/budget ledger.
- **Ambient credentials:** no home-directory, repository, global MCP/plugin, or broad workload-IAM inheritance in a fixed worker.
- **Result injection:** typed inert output, quarantine, safe rendering, no active links or terminal controls, and no automatic execution.
- **Semantic leakage:** minimal schemas, cumulative-disclosure views, local scanners, and human release. Pattern matching does not prove declassification.
- **Key substitution:** recipient keys are pinned in the dual-signed room contract; rotation requires the old key or bilateral out-of-band reapproval.
- **Spend griefing:** local immutable caps for jobs, turns, tokens, bytes, retries, concurrency, and daily spend survive control-plane compromise.
- **Revocation races:** short leases, immediate event notification when connected, and an online check before key unwrap and release. A fresh per-task data-encryption key is wrapped to the recipient's organization-controlled encryption key; only its local admission PEP may unwrap it. Revocation can block a not-yet-unwrapped task, but cannot recall plaintext or ciphertext for which the recipient already holds the decryption capability.

Choose one honest content mode. **Blind relay mode** keeps private artifact bodies end-to-end encrypted; DLP, declassification, search, and semantic verification occur locally. **Named processor mode** permits central inspection but makes ChatB2B a plaintext processor with additional DPA, residency, access, logging, deletion, and breach obligations. Never promise both blind E2EE and central content inspection.

Long-lived records should contain hashes, signatures, policy versions, routing events, and outcome classifications—not prompts or transcripts. Raw ciphertext retention should be measured in days. Metadata is sensitive and receives its own classification and regional policy.
  `),

  markdown("standards_position", `
## Existing Standards Carry the Traffic; ChatB2B Carries the Business Meaning

[A2A](https://a2a-protocol.org/latest/topics/enterprise-ready/) can carry opaque agent tasks, messages, artifacts, and advertised authentication. Authorization remains receiver-specific. [MCP](https://modelcontextprotocol.io/specification/2026-07-28) connects agents to tools and context. [AGNTCY](https://docs.agntcy.org/), [agentgateway](https://agentgateway.dev/docs/standalone/latest/), [AWS AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/), and [Microsoft Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview) already cover substantial identity, discovery, gateway, policy, runtime, and governance territory.

ChatB2B should therefore not claim protocol or gateway novelty. Its differentiated unit is the **verified, policy-compliant exchange between two legal organizations**:

- who is authorized to bind each company;
- what both companies accepted for the relationship;
- how contracts, DPAs, security schedules, purpose, data classes, providers, regions, retention, and incident terms become executable policy;
- which exact artifact was released to which recipient;
- what result the recipient validated;
- how those templates and outcomes are reused across counterparties.

Transport protocols speak. Identity systems authenticate. Policy engines evaluate. ChatB2B should decide and prove what this named business relationship allows for this exact handoff.
  `),

  markdown("compute_strategy_intro", `
## Treat Model Inference as a Purchasable Input, Not the Moat

Official OpenAI API list prices illustrate the strategic point: standard short-context inference is directly purchasable at transparent rates—currently **$0.20/$1.20 per 1M input/output tokens for GPT-5.6 Luna, $2/$12 for Terra, and $5/$30 for Sol**. These prices do not establish ChatB2B's unit economics, but they make access to generic model calls a weak foundation for a defensible exchange.

The chart shows the current list-price snapshot. It excludes cached input, batch or flex discounts, long-context rates, regional uplifts, human review, orchestration, storage, security, and failed handoffs.
  `, "openai_pricing"),

  { id: "api_pricing_chart_block", type: "chart", chartId: "api_pricing_chart", layout: "full" },

  markdown("compute_strategy", `
## CLI Subscriptions Are an Access Surface, Not Shared Supply

Do not depend on unused weekly limits, consumer OAuth routing, background draining, or rewarded third-party execution. Providers control the entitlement, automation rights, telemetry, quota behavior, and commercial terms. [Anthropic](https://code.claude.com/docs/en/legal-and-compliance) and [Gemini CLI](https://github.com/google-gemini/gemini-cli/blob/main/docs/resources/tos-privacy.md) state explicit third-party credential boundaries; [OpenAI's consumer terms](https://openai.com/policies/terms-of-use/) and [xAI's acceptable-use policy](https://x.ai/legal/acceptable-use-policy) do not provide affirmative authorization for the proposed pooled model.

The product rule is straightforward: use the vendor's or customer's sanctioned API, Bedrock, Vertex, or internal runtime for private work. Use ChatB2B-funded commercial APIs only for public, synthetic, or properly contracted processing. If a provider someday exposes an explicit compute-donation API with clear commercial and data terms, evaluate it as a separate optional experiment—not as a dependency of the platform.

This preserves the useful part of the original insight: advanced users already live in CLIs and have established agent workflows. ChatB2B should meet them there, synchronize governance around those workflows, and leave their model entitlement where it belongs.
  `),

  markdown("business_model", `
## The Vendor Pays for Verified Support Outcomes

Use a vendor-sponsored B2B2B model. The vendor has the concentrated economic benefit and the distribution channel, so it pays and invites its customers at no charge for the initial workflow.

**Initial commercial structure:**

1. paid 90-day design-partner pilot of at least **$25,000** for one product line, one workflow, and a bounded customer cohort;
2. inference passed through at cost or executed in the vendor's approved account;
3. conversion to an annual base platform fee plus a tier based on active bilateral relationships or verified handoffs;
4. target conversion hypothesis of **$3,000–$5,000+ MRR** or economically equivalent per-verified-resolution pricing;
5. no token markup, subscription resale, contribution credit, or message-volume incentive.

Price against fewer L2/L3 escalations, lower time to verified resolution, fewer vendor engineering hours per issue, and improved customer implementation outcomes. Professional services may fund the first contract mapping and integration, but the recurring product must be the policy runtime, evidence exchange, and audit layer—not bespoke support consulting.

The free individual CLI is a product-led acquisition surface. It should create awareness and qualified internal champions, but the paid motion should remain sponsor-led until measured conversion proves otherwise.
  `),

  markdown("growth_lifecycle", `
## Growth and Retention Should Follow the Outcome Loop

### Sign-up

Individual: email/device login, local-only initialization, no procurement.<br>
Enterprise: vendor sponsor signs, names one product/workflow/runtime/owner, and invites known customer accounts. ChatB2B verifies each legal entity; portfolio affiliation alone changes nothing.

### Activation

Individual activation is a completed local readiness insight or synthetic handoff—not an account. Enterprise activation requires both entities on the same contract/schema, one synthetic dry run, demonstrated release and kill switches, and a ready vendor knowledge source.

### First value

Individual first value is a precise local governance finding the user can fix. Enterprise first value is a correct counterparty result the local baseline missed, with a customer-validated outcome and time saved.

### Contribution

Contribution is a bounded, company-authorized artifact and signed outcome—not donated model quota. Users may later contribute public schemas, policy templates, compatibility tests, or threat cases under explicit licenses. No party must perform work or earn credits to receive service.

### Retention

Retention comes from repeated operational value: incident → authorized handoff → verified resolution → signed outcome → reused schema. The weekly surface is a queue of released, answered, blocked, and verified handoffs. The monthly surface is avoided escalations, resolution time, vendor engineering hours saved, release friction, and repeat use.

### Preventing churn

Embed the entry point in the vendor's docs, portal, or support UI; preserve the normal ticket path; keep the CLI foreground-only and removable; explain policy failures; provide deterministic delivery states and human escalation; never invent an answer when the vendor agent lacks evidence; keep the schema stable to avoid repeated security review.
  `),

  markdown("proof_and_testimonials", `
## Highlight Value with Counterfactuals and Cohort Evidence

Every successful result should show four things: the local/public baseline, the additional counterparty evidence or authority, the customer's validation, and the avoided time or escalation. That is more persuasive than token counts, agent counts, or model agreement.

The strongest proof is an authorized cohort case study reporting:

- eligible incidents and release rate;
- local-baseline and incumbent-support performance;
- customer-validated resolution rate;
- median and p90 turnaround;
- deflection and expert hours saved;
- false-answer, rework, unauthorized-release, and disclosure incidents;
- exact workflow, cohort, period, and limitations.

Send the same neutral feedback request to every eligible participant after the cohort. Separate product feedback from marketing permission. Require the person to approve the exact quote and an authorized company signatory to approve the company name, title, or logo. Disclose free beta access or other material connections in line with [FTC endorsement guidance](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking). Never convert an agent-generated summary into a person's testimonial.
  `),

  markdown("metrics", `
## Measure Verified Counterparty Value, Not Platform Activity

The proposed north-star metric is **Weekly Verified Counterparty Resolutions (WVCR)**: a named bilateral handoff that passed both parties' policy, produced a result inside its expected window, and ended in either a customer-signed passing test or a signed correct-disposition confirmation from a customer-designated qualified reviewer. Vendor-only or model-consensus confirmation never counts.

The metric tree is:

**eligible incidents × customer release rate × vendor answer rate × schema-valid response rate × customer-validated resolution rate × signed-outcome capture rate**

Primary outcome KPIs:

- WVCR and verified-resolution rate;
- deflection versus the strongest matched support baseline;
- median and p90 time to verified resolution.

Driver metrics:

- time to first CLI readiness insight and successful harness binding;
- invited-to-linked customer conversion;
- release rate and approval time;
- vendor answer rate and response time;
- repeat eligible handoffs per linked customer;
- vendor engineering hours saved and fully loaded cost per verified resolution.

Provisional CLI acquisition targets are also unmeasured: at least 75% device-login completion; at least 60% of completed signups reaching a useful artifact, with p50 under three minutes and p90 under ten; at least 80% unaided harness binding under five minutes; and at least 25% returning for a second meaningful action within 14 days. Among activated users with a named outside-company workflow, target at least 20% initiating an organization or counterparty action. If that rate stays below 10% after 100 matured qualified activations, treat the CLI as a standalone utility rather than assuming it is an enterprise acquisition channel.

Guardrails are zero-tolerance for cross-tenant disclosure, credential exposure, unauthorized release, prohibited competitive content, automatic execution of returned content, post-revocation release, content retained past contract, and provider enforcement notices on the affected path.

Do not optimize tokens used, agents connected, tasks attempted, registered companies, or reviewer agreement. Those are activity, not customer value.
  `),

  markdown("validation_plan", `
## Build Through Five Evidence Gates

All figures below are **proposed, unmeasured validation thresholds**. They are decision criteria, not achieved traction or forecasts.

### Gate 1 — Buyer and distribution

Interview at least five vendor support leaders and five customer integration leaders. Proceed only if three vendors name owned budget, three customers agree to change the bounded support process—including at least one customer in the proposed sponsor's named cohort—and one vendor executes a conditional paid 90-day pilot commitment of at least $25,000 while committing placement in its docs, portal, or support UI. Its service clock and production spend begin only after Gates 2 and 3 pass.

### Gate 2 — Unique private advantage

Blindly compare roughly 30 resolved cases across: strongest single public-doc model; two- or three-provider local ensemble; identical vendor runtime with approved private sources off and on; vendor's strongest incumbent support surface; and historical human resolution. Count only a correct executable test or authoritative customer-validated disposition. Require at least 50% vendor-private resolution, at least +25 percentage points over the local ensemble, at least +15 points from sources on versus off, and at least +15 points over incumbent support or 30% less expert preparation with no correctness loss. Before testing, freeze eligible annual incident volume, annualization method, avoided-cost inputs, attribution rate, downside case, and provisional annual contract value. The residual eligible annual value after public-model substitution must be at least 5× that annual contract value, with a modeled steady-state gross margin of at least 70%.

### Gate 3 — Safe, usable disclosure

Require one vendor and at least one named customer to approve the same schema and data flow in writing, with no production dump, secret, personal data, or prohibited field required. At least 60% of eligible incidents must be releasable and median approval must remain under four business hours. One schema/redaction iteration is allowed for a 30%–59% initial release rate; below 30% stops immediately.

### Gate 4 — Live operational improvement

Run 30 real supervised handoffs. Require at least 40% locally validated resolution, median response below two hours, at least 25% deflection against the strongest matched support baseline, zero disclosure/credential/authorization incidents, and at least 2.0× realized vendor benefit over fully loaded variable cost including human review. One schema iteration is allowed.

### Gate 5 — Paid repeatability and neutrality

Require the design partner to convert to paid recurring use, a second vendor to sign a paid $25,000 pilot using the same customer client, receipt format, and 100% common schema core with only explicitly namespaced extensions, and a third vendor to sign an LOI worth at least $25,000 on substantially equivalent pilot terms. Require vendor-led acquisition, at least 30% of invited customers activated within 30 days, 50 handoffs within 60 days, at least 40% customer-confirmed resolution, at least 70% reuse of substantive data-flow, security, and retention clauses, at least 50% repeat use among accounts with one verified resolution within six weeks, and second-vendor onboarding in no more than 50% of the first vendor's elapsed time and customer effort. If a vendor can reproduce the value inside its existing stack in roughly six engineer-weeks or less and no second vendor pays for neutrality, treat the result as an incumbent feature or services tool—not the platform thesis.
  `),

  markdown("phased_plan", `
## Recommended Build Sequence

### Days 0–30 — prove the problem before infrastructure

- Run buyer and user interviews; secure the conditional paid sponsor.
- Build the historical-case evaluation harness and source-on/source-off ablation.
- Draft one JSON schema, bilateral schedule, data-flow map, and threat model.
- Prototype the individual CLI readiness flow locally with synthetic data only.
- Choose one vendor runtime and one cloud path.

### Days 31–90 — clear the disclosure and benchmark gates

- Complete the roughly 30-case blind benchmark, including incumbent support.
- Run customer/vendor legal and security review on the exact schema and data flow.
- Measure eligible-incident release rate and approval time.
- Test the email-first CLI experiment separately: time to insight, binding completion, synthetic demo, four-week return, and qualified organization-access requests.
- Build no production relay if the buyer, private advantage, or release threshold fails.

### Conditional 90-day paid pilot

- Ship one packager/linter, one vendor adapter, one bilateral room, one schema, one encrypted relay, signed release/outcome receipts, and one IdP/runtime path.
- Separate connector, execution, and release identities before any confidential handoff.
- Run 30 live handoffs with human release and tested kill switches.
- Instrument WVCR, matched-baseline deflection, turnaround, cost, repeat use, and every safety guardrail.

### Expansion only after paid repeatability

- Prove the common customer client and schema core with the second paid vendor and the third-vendor commitment before scaling the first vendor's customer base.
- Then expand the same support workflow across more customers and counterparties.
- Reusable policy/schema bundles and existing-platform adapters.
- One adjacent workflow using the same primitives.
- Regional or private-network features only for contracted demand.

The first engineering unit should be a small modular team: product/technical founder, one senior backend/security engineer, one CLI/integration engineer, fractional design, and embedded vendor/customer security owners. Avoid separate cloud-platform teams until live demand requires them.
  `),

  markdown("moat", `
## The Moat Must Be Earned Through Repeated Accepted Workflows

A defensible asset can emerge from:

- verified corporate authority and active bilateral edges;
- reusable contract, purpose, schema, and release templates accepted by both sides;
- approved integrations and local enforcement already cleared by customer security;
- private per-pair outcome history showing which counterparty capabilities create customer-validated value;
- signed lineage, incident-response patterns, and audit exports reused across vendors;
- a common customer client and schema core that reduce each new integration's time and cost.

The registered-agent count, generic identity, model access, gateway policy, orchestration, public capability passports, global reputation, and observability are not moats. They are crowded infrastructure layers.

The expansion staircase is: **first bilateral workflow → same workflow/second paid vendor → third-vendor commitment → more customers → reusable cross-vendor integrations → one adjacent workflow → broader relationship plane**. Every step requires measured reuse and paid demand. Architecture alone never triggers expansion.
  `),

  markdown("next_steps", `
## Recommended Next Steps

1. Recruit one vendor support leader with a recurring SDK/API escalation problem and budget authority.
2. Identify five named customer accounts willing to test a bounded evidence bundle.
3. Collect roughly 30 resolved historical cases with outcome labels and private-source eligibility.
4. Run the full public-model, private-source ablation, incumbent-support, and human baseline comparison.
5. Draft the **support-handoff-v1** schema, contract schedule, release flow, and threat model; measure what percentage of real incidents can cross.
6. Prototype the email-only local CLI experience with no project upload and no company authority; measure actual time to insight and four-week return.
7. Select the vendor's existing runtime and one cloud deployment path; do not create a parallel orchestration platform.
8. Sign the paid pilot only around the exact workflow, cohort, success thresholds, and stop conditions.
  `),

  markdown("further_questions", `
## Questions That Could Change the Plan

- Which vendor category has the highest recurring integration-escalation volume and the clearest private-knowledge advantage?
- Will advanced users install the local CLI under employer policy, and which diagnostics are useful enough to drive a second session?
- What exact company-admin packet makes bottom-up elevation easiest without weakening authority?
- What percentage of real incidents can be expressed without repositories, production dumps, personal data, or active executable content?
- Does the neutral handoff outperform the vendor's best portal or support agent enough to justify a separate product?
- What is the conservative value of one verified resolution, including vendor engineering time and customer implementation delay?
- Does the common schema and contract core survive a second vendor without a fork?
- Which party should operate the room's home region, retention policy, and incident process for each customer segment?
  `),

  markdown("caveats", `
## Caveats and Assumptions

- There is no live ChatB2B usage, activation, retention, outcome, or revenue dataset. Every funnel, price point, threshold, and timing target in this report is a proposed test criterion.
- Email-only signup, readiness insight, individual-to-enterprise conversion, and the vendor-support wedge are product hypotheses that require measured validation.
- Provider terms and prices change. Consumer-subscription capacity is excluded unless a provider gives explicit written authorization for the complete third-party commercial flow.
- A2A, MCP, identity, signatures, encryption, policy engines, DLP, and logs reduce specific risks; none proves that an agent, artifact, or company is trustworthy.
- End-to-end encryption prevents central body inspection. Named-processor mode changes the privacy and contracting model.
- Relationship categories are not legal conclusions. Portfolio and competitor treatment requires company-specific counsel.
- Exact-byte preview cannot reveal hidden provider context or guarantee informed disclosure. A current mandate, named recipient/purpose/provider/region/retention, and local checks remain necessary.
- Revocation blocks future use. It cannot recall plaintext—or ciphertext for which the recipient already holds the decryption capability—after delivery; per-task wrapped keys can only stop work that has not yet been unwrapped.
- AWS and GCP mappings are reference architectures. The first design partner's existing runtime, policies, and cloud standards should determine the initial implementation.
  `),
];

const artifact = {
  surface: "report",
  manifest: {
    version: 1,
    surface: "report",
    title: "ChatB2B: A Practical Plan for Governed Agent Collaboration",
    description: "A direct product, experience, business, security, and AWS/GCP architecture plan for a relationship-aware corporate agent collaboration platform.",
    generatedAt,
    blocks,
    charts: [
      {
        id: "api_pricing_chart",
        title: "GPT-5.6 standard short-context API prices",
        subtitle: "Official list prices reviewed August 9, 2026; USD per 1M tokens. This is a market-input snapshot, not ChatB2B unit economics.",
        type: "bar",
        dataset: "api_prices",
        sourceId: "openai_pricing",
        valueFormat: "number",
        encodings: {
          x: { field: "model", type: "nominal", label: "Model" },
          y: { field: "usd_per_million", type: "quantitative", label: "USD per 1M tokens" },
          color: { field: "token_type", type: "nominal", label: "Token type" },
          tooltip: [
            { field: "usd_per_million", type: "quantitative", label: "USD per 1M tokens", format: "number" },
            { field: "input_per_million", type: "quantitative", label: "Input price", format: "number" },
            { field: "output_per_million", type: "quantitative", label: "Output price", format: "number" }
          ]
        },
        yAxisTitle: "USD per 1M tokens",
        layout: "full"
      }
    ],
    sources
  },
  snapshot: {
    version: 1,
    status: "ready",
    generatedAt,
    datasets: {
      api_prices: apiPriceRows
    }
  },
  sources
};

writeFileSync(new URL("./artifact.json", import.meta.url), `${JSON.stringify(artifact, null, 2)}\n`);
