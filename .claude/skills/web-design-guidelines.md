---
name: web-design-guidelines
description: Vercel's Web Interface Guidelines — dynamically fetched from the live ruleset for UI reviews, accessibility checks, and design audits. Use when reviewing any UI code for compliance.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/web-design-guidelines
---

# Web Design Guidelines

Reviews UI code for compliance with Web Interface Guidelines (Vercel v1.0.0).

## How to Use

When invoked for a UI review, accessibility check, design audit, or best practices validation:

1. **Fetch the current guidelines** from the live ruleset:
   `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`

2. **Analyze the specified files** against those rules.

3. **Report findings** in `file:line` format.

This ensures reviews always use the most up-to-date standards rather than static rules that go stale.

---

## When to Use This Skill

- Requested UI review or design audit
- Checking accessibility compliance
- Validating best practices for a page or component
- Before shipping any new page or significant UI change

---

## Output Format

Report issues as:
```
file.html:42 — [Rule violated]: [What to fix]
```

If no files are specified, ask which files to review before fetching guidelines.
