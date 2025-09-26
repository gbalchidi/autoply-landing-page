import { HeroWithMockup } from "@/components/ui/hero-with-mockup"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroWithMockup
        title="Stop applying. Start interviewing."
        description="Our AI finds the right roles, tailors your resume and cover letter, and applies for you—ATS‑ready, 24/7, under your control."
        primaryCta={{
          text: "Start Auto-Applying",
          href: "#preorder",
        }}
        secondaryCta={{
          text: "Skip the waitlist ($54)",
          href: "#demo",
        }}
        trustMicrocopy="Relevant roles only. Review or autopilot. Pause anytime."
        mockupImage={{
          alt: "Autoply Dashboard - Job Matching Interface",
          width: 1440,
          height: 900,
          src: "/autoply-dashboard.png"
        }}
      />
    </main>
  );
}