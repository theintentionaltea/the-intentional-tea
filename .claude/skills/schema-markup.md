---
name: schema-markup
description: Structured data implementation — JSON-LD format, common schema types (Organization, Product, Article, FAQ, BreadcrumbList), validation with Google Rich Results Test, static and dynamic site implementation.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/schema-markup
---

# Schema Markup

Implement structured data using schema.org markup to enable rich search results and improve how search engines understand your content.

## Core Rule

**Accuracy first.** Markup must genuinely represent your page content. Never add schema for information that isn't on the page.

Use **JSON-LD format** placed in the `<head>` or end of `<body>`.

---

## Common Schema Types for The Intentional Tea

### Organization (homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Intentional Tea",
  "url": "https://theintentionaltea.com",
  "logo": "https://theintentionaltea.com/images/logo.png",
  "sameAs": [
    "https://www.instagram.com/theintentionaltea",
    "https://www.tiktok.com/@theintentionaltea"
  ]
}
```

### Product (product pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Intentional Life Planner and Calendar",
  "description": "A digital planner built around how you actually live.",
  "offers": {
    "@type": "Offer",
    "price": "25.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

### Article (blog posts)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Post title here",
  "author": {
    "@type": "Person",
    "name": "Tiara"
  },
  "datePublished": "2026-08-01",
  "publisher": {
    "@type": "Organization",
    "name": "The Intentional Tea"
  }
}
```

### FAQPage (any page with Q&A section)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is the Intentional Life Reset?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A digital product that helps you..."
    }
  }]
}
```

---

## For Static HTML Sites (theintentionaltea.com)

Add JSON-LD directly to the `<head>` of each HTML file. No plugin needed.

---

## Validation

Before deploying:
1. **Google Rich Results Test** — tests if your markup qualifies for rich results
2. **schema.org Validator** — checks for invalid properties

**Critical:** Don't validate by viewing page source when JavaScript renders the schema — use the Google tool or browser DevTools.

---

## Priority Schema for The Intentional Tea

1. Organization on homepage (brand presence)
2. Product on each product page (rich results in search)
3. Article on each blog post (author credibility)
4. FAQPage on pages with Q&A sections (featured snippets)
5. BreadcrumbList for navigation structure
