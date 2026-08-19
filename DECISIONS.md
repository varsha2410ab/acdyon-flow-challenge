# Design Decisions

## 1. Why this product direction over the obvious alternative?

Instead of building a generic SaaS landing page filled with marketing copy, I chose to design **Acdyon Flow**—a self-healing deployment and infrastructure platform. I selected this direction because the challenge explicitly forbade fabricated testimonials, fake logos, or false user counts. The most credible way to sell a developer tool without social proof is to demonstrate its actual value immediately. The interactive deployment console was chosen as the core product demonstration because it instantly communicates the "aha moment" of detecting a regression and automatically rolling back, respecting the user's time.

## 2. One trade-off made under the time limit

The hero deployment experience is implemented as a client-side deterministic simulation (a React state machine) rather than being backed by a real production backend. This trade-off was intentionally made to guarantee that the reviewer can experience the complete product story—build, deploy, regression, and automated recovery—instantly and reliably without external dependencies. 

If I had one real development week, I would connect this state machine to an actual backend or event stream to consume and render real observability and deployment data dynamically.

## 3. AI tools and personal verification

AI tools were leveraged during development to brainstorm and refine the core product concept, assist with structural scaffolding (Vite/React/Tailwind boilerplate), and suggest UI polish for the dark-mode palette. 

However, the final implementation was rigorously reviewed, tested, and adjusted personally. Specifically, I personally verified and refined:
- The exact deterministic flow of the deployment state machine.
- The precise visual state changes representing regression and automated rollback.
- Responsive behaviors to ensure strict 390px mobile layout integrity without horizontal scrolling.
- Navigation anchors and interactive component logic.
- Visual consistency across the dark/violet brand system.
- The complete removal of any fake claims or social proof.
