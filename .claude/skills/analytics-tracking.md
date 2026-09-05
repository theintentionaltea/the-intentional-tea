---
name: analytics-tracking
description: Analytics implementation — event naming conventions, GA4 setup, GTM data layer patterns, UTM strategy, privacy/consent, and debugging. Use when setting up, auditing, or improving any tracking implementation.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/analytics-tracking
---

# Analytics Tracking

Expert analytics implementation and measurement setup.

## Core Principles

1. **Track for Decisions, Not Data** — every event should inform a decision; avoid vanity metrics
2. **Start with the Questions** — work backwards from what you need to know
3. **Name Things Consistently** — establish patterns before implementing
4. **Maintain Data Quality** — clean data beats more data

---

## Event Naming Convention: Object-Action

Format: `object_action`

Examples:
- `signup_completed`
- `cta_clicked`
- `form_submitted`
- `purchase_completed`
- `download_initiated`

Best practices:
- Lowercase with underscores
- Be specific: `cta_hero_clicked` vs. `button_clicked`
- Include context in properties, not event names
- No spaces or special characters

---

## Essential Events for The Intentional Tea

### Marketing Site

| Event | Properties |
|---|---|
| `cta_clicked` | button_text, location |
| `form_submitted` | form_type (email_signup, contact) |
| `email_signup_completed` | source (homepage, blog, popup) |
| `product_viewed` | product_name, product_price |
| `purchase_completed` | product_name, revenue, source |
| `download_initiated` | product_name (for free products) |
| `blog_post_read` | title, category, time_on_page |

---

## GA4 Implementation

### Quick Setup

1. Create GA4 property and data stream
2. Install gtag.js or GTM
3. Enable enhanced measurement
4. Configure custom events
5. Mark key events as conversions in Admin

### Custom Event Example

```javascript
gtag('event', 'purchase_completed', {
  'product_name': 'Intentional Life Planner',
  'value': 25,
  'currency': 'USD'
});
```

---

## Google Tag Manager

### Data Layer Pattern

```javascript
dataLayer.push({
  'event': 'email_signup_completed',
  'form_location': 'homepage_hero',
  'signup_source': 'email_form'
});
```

---

## UTM Parameter Strategy

| Parameter | Purpose | Example |
|---|---|---|
| utm_source | Traffic source | instagram, newsletter, tiktok |
| utm_medium | Marketing medium | social, email, organic |
| utm_campaign | Campaign name | life_planner_launch |
| utm_content | Differentiate versions | hero_cta, sidebar_link |

Naming conventions:
- Lowercase everything
- Use underscores or hyphens consistently
- Document all UTMs in a spreadsheet

---

## Validation Checklist

- [ ] Events firing on correct triggers
- [ ] Property values populating correctly
- [ ] No duplicate events
- [ ] Works on mobile
- [ ] Conversions recorded correctly
- [ ] No PII leaking into analytics

---

## Privacy and Compliance

- Cookie consent required for EU visitors
- No PII (name, email, phone) in analytics event properties
- IP anonymization enabled
- Only collect what you need
