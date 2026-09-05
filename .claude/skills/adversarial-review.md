---
name: adversarial-review
description: Adversarial code review — assume it's broken, try to break it, only report findings that survive an independent refutation pass. Concrete inputs → bad outcome, with file:line citations. No opinion-only findings.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/adversarial-review
---

# Adversarial Review

Adversarially review a code change — assume it's broken, try to break it, and only report findings that survive an independent refutation pass.

---

## Core Stance

Four hard rules:

1. **Assume it's broken until proven otherwise.** A review finding nothing is failed unless you demonstrated effort to break it.

2. **Distrust the tests.** Passing tests validate tested paths only. Identify untested scenarios.

3. **Distrust comments and commit messages.** Verify what code actually does, not what it claims.

4. **Every finding must be concrete.** Format: `inputs/sequence → observed bad outcome` with `file:line` citation. No opinions. No style notes.

---

## Workflow

### Step 1: Stabilize the Target
Pin the exact diff (branch, three-dot range, or snapshot) so findings stay stable as code changes.

### Step 2: Discover Invariants
Read project docs, recent commits, and tests to learn rules the codebase enforces. Don't invent generic ones.

### Step 3: Discover Domains
Split the diff into independent failure areas:
- Language/layer boundaries
- Brand-new code (no history to compare against)
- Cross-cutting concerns (auth, logging, error handling)

### Step 4: Verify Before Reporting
For each candidate finding, actively try to refute it:
- Is there a guard you missed?
- Is this code path actually reachable?
- Is the severity as bad as you initially thought?

**Only findings that survive refutation go in the report.**

### Step 5: Synthesize Honestly
Deliver:
- Verdict (pass / conditional pass / fail)
- Findings ranked by severity
- The most likely production failure
- Candid statement of coverage limits

---

## Scaling by Scope

- **Small diff (< 50 lines)**: one inline pass
- **Medium diff (50-200 lines)**: two passes (break + refute)
- **Large diff (200+ lines)**: domain-specific skeptic agents with independent verification

---

## Anti-Patterns to Avoid

- Padding reports with style nits or naming opinions
- Claiming coverage you didn't actually achieve
- Trusting test suites as proof of correctness
- Reporting plausible-sounding issues without a concrete inputs → failure scenario

---

## Output Format

```
[SEVERITY: Critical/High/Medium/Low]
File: path/to/file.html:42
Finding: [One sentence describing the defect]
Scenario: [Concrete inputs → observed bad outcome]
Verdict: CONFIRMED / PLAUSIBLE
```
