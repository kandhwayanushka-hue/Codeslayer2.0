# Sunwai - Public Health Accountability Platform

## Prototype for Yuva Bharat Energy Hackathon 2026

### Concept
Sunwai is a privacy-preserving public-health accountability platform where verified residents can anonymously report recurring problems at public health facilities, trigger a community-level case, and verify whether the issue was actually resolved.

### Core Idea
- Residents report issues anonymously using privacy-preserving technology
- When community threshold is reached, a public accountability case is opened
- Officials respond but residents verify if the issue is actually resolved
- If not resolved or deadline expires, case is escalated

### Screens (12-screen mobile-first PWA)
1. **Home Screen** - Hero section with feature cards (Private, Community Verified, Resident Verified)
2. **Resident Verification** - QR credential scan or enter credential (simulated)
3. **Report Issue** - Select facility, issue category (medicine, doctor, referral, service, waiting), confirm experience
4. **ZK Proof Submission** - Identity protection animation, hidden identity, verified membership, report ID
5. **Community Threshold** - Progress indicator showing reports needed (e.g., 3/5 or 5/5)
6. **Case Created** - Public accountability case opened with response deadline
7. **Public Case Dashboard** - Top statistics, case cards with status
8. **Official Response** - Official dashboard to submit response (case NOT auto-resolved)
9. **Resident Verification** - Residents confirm if issue is actually resolved (YES/NO)
10. **Resolved** - Case resolved with green success state
11. **Escalation** - Deadline expired, case escalated to authorities
12. **Impact Dashboard** - Statistics, issue breakdown, map/heatmap of recurring issues

### Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Design**: Mobile-first, responsive PWA layout
- **Styling**: Deep navy/white/electric blue/amber/red color palette
- **Animations**: Progress bars, counter animations, transitions
- **No backend required** - Fully client-side prototype

### How to Run
1. Open `index.html` in any modern browser
2. Navigate through screens using the interactive elements
3. Follow the complete story flow from reporting to resolution/escalation

### Demo Story Flow
For hackathon presentations, show one complete story:
1. Resident reports medicine unavailable
2. 5/5 verified reports trigger public case
3. Official responds "medicine restocked"
4. Residents verify: YES → RESOLVED, or NO/timeout → ESCALATED

### Visual Style
- **Deep navy/ dark blue** → trust + technology
- **White** → healthcare/cleanliness
- **Electric blue** → Web3/privacy
- **Green** → verified/resolved
- **Amber** → pending
- **Red** → escalated
- Rounded cards, clean typography, subtle gradients, minimal medical icons
- Feels like government/public-service dashboard + modern fintech app

### Hackathon Ready
- Designed for Schneider Electric Yuva Yodha Energy Tech Hackathon 2026
- Aligns with challenge area: "Feeding a billion people cleanly, efficiently, and resiliently" (agriculture/health focus)
- Demonstrates problem understanding, impact & measurability, feasibility, and sustainability
- 12 well-structured screens show complete user journey
- Quantifiable impact metrics available for PPT presentation