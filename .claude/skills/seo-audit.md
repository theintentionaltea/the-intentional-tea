---
name: seo-audit
description: SEO audit framework — crawlability, technical foundations, on-page optimization, content quality (E-E-A-T), authority. Covers Core Web Vitals, title tags, heading hierarchy, alt text, internal linking, site-type guidance.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/seo-audit
---

# SEO Audit Framework

Five priority areas for a complete SEO audit.

---

## 1. Crawlability & Indexation

- robots.txt validation — is anything accidentally blocked?
- XML sitemap — exists, is submitted, does it include all important pages?
- Site architecture — can search engines reach every page within 3 clicks?
- Indexation issues — `noindex` tags where they shouldn't be?
- Canonical tags — correct self-referencing canonicals?

## 2. Technical Foundations

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- INP (Interaction to Next Paint): < 200ms
- CLS (Cumulative Layout Shift): < 0.1

**Other technical checks:**
- Mobile-friendliness — Google's mobile-first index
- HTTPS — all pages served securely
- URL structure — clean, descriptive, no parameters where avoidable
- Page speed — compress images, minimize render-blocking resources

## 3. On-Page Optimization

| Element | Target |
|---|---|
| Title tag | 50-60 characters; primary keyword near the front |
| Meta description | 150-160 characters; includes keyword and a CTA |
| H1 | One per page; matches the topic |
| Heading hierarchy | H1 → H2 → H3, logical outline |
| Image alt text | Descriptive, not keyword-stuffed |
| Internal links | Anchor text describes destination, links to related pages |

## 4. Content Quality (E-E-A-T)

- **Experience** — does the content demonstrate real experience with the topic?
- **Expertise** — is the author's background relevant?
- **Authoritativeness** — are other sites linking to this content?
- **Trustworthiness** — is the content accurate, cited, up to date?

Content checks:
- Is the content depth sufficient for the search intent?
- Is the content fresh (updated within 12 months for evergreen topics)?
- Does the page fully answer what the searcher is looking for?

## 5. Authority & Links

- Do important pages have internal links pointing to them?
- Are there any orphan pages (no internal links)?
- Is the internal link anchor text descriptive?

---

## Critical Warning: Schema Validation

Many CMS plugins inject JSON-LD via client-side JavaScript — it won't appear in static HTML. Use Google Rich Results Test or browser DevTools for schema validation, not `view-source`.

---

## Output Format

For each finding:
1. Issue description
2. SEO impact level (High / Medium / Low)
3. Supporting evidence (page URL, element content)
4. Specific recommendation
5. Priority ranking

---

## For The Intentional Tea Specifically

Site type: **Content + E-commerce (digital products)**

Priority checks:
- Blog posts should have clear E-E-A-T signals (author expertise in intentional living)
- Product pages should have complete on-page optimization (title, description, structured data)
- All product images need descriptive alt text
- Internal linking from blog posts to relevant products
- `/blog` URL structure should be clean and consistent
