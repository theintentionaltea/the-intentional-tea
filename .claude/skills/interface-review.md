---
name: interface-review
description: Interface code review orchestrator — determines scope (uncommitted work, branch, or PR), expands to affected surfaces, classifies findings as Introduced/Regression/Pre-existing, hands off to domain skills for verdicts.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/interface-review
---

# Interface Review

Specialized code review focused on interface quality — not correctness, tests, or security.

## Core Approach

Review the change, not just the code it left behind. The lines a change deletes matter as much as the lines it adds, and the file it touches is rarely the whole of what it affects.

---

## Eight Guiding Principles

### 1. Scope Resolution First
Determine what's being reviewed before starting analysis:
- Uncommitted working-tree changes?
- Current branch vs. main?
- A specific PR number?

### 2. Ask When There's No Change
If the repository is clean, clarify what the user intended to review rather than defaulting to the last commit.

### 3. Expand Beyond Changed Files
Review affected surfaces one hop away (direct importers/callers of changed code), two hops for design tokens. Limit to five consumers maximum.

### 4. Read Removals Carefully
Examine deleted lines for accessibility, focus, and text signals that might indicate regressions. A deleted `aria-label` is a regression even if the element still renders.

### 5. Classify All Findings
Tag each discovery as:
- **Introduced** — new problem added by this diff
- **Regression** — something that worked before, now broken
- **Pre-existing** — was already there before this diff

### 6. Verify Stated Intent
Confirm the interface delivers what PR titles, descriptions, and commits claim. Catch incomplete implementations early.

### 7. Hand Off to Domain Skills
This skill owns scope only. For UI polish details → `better-ui`. For typography → `better-typography`. For accessibility → `better-accessibility`. For layout → `better-layout`. For color → `better-colors`.

### 8. Preserve Author's Workspace
Never mutate the working tree. Fetch PR refs rather than checking them out.

---

## Output Structure

Reports include:
1. **Scope block** — target, base/head refs, commit count, files in scope, exclusions, expanded surfaces
2. **Findings** — each tagged as Introduced / Regression / Pre-existing with file:line citation and a concrete inputs → bad outcome description
