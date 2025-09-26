import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Mockup } from "@/components/ui/mockup"
import { Glow } from "@/components/ui/glow"
import { PlayCircle } from "lucide-react"
import { AutoplyMockup } from "@/components/ui/autoply-mockup"

interface HeroWithMockupProps {
  title: string
  description: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
    icon?: React.ReactNode
  }
  trustMicrocopy?: string
  mockupImage: {
    src: string
    alt: string
    width: number
    height: number
  }
  className?: string
}

export function HeroWithMockup({
  title,
  description,
  primaryCta = {
    text: "Start Auto-Applying",
    href: "/get-started",
  },
  secondaryCta = {
    text: "See How It Works",
    href: "/demo",
    icon: <PlayCircle className="mr-2 h-4 w-4" />,
  },
  trustMicrocopy,
  mockupImage,
  className,
}: HeroWithMockupProps) {
  return (
    <section
      className={cn(
        "relative text-foreground",
        "py-12 px-4 md:py-24 lg:py-32",
        "overflow-hidden",
        "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
        "dark:from-gray-950 dark:via-indigo-950/20 dark:to-purple-950/20",
        className,
      )}
    >
      <div className="relative mx-auto max-w-[1280px] flex flex-col gap-12 lg:gap-24">
        <div className="relative z-10 flex flex-col items-center gap-6 pt-8 md:pt-16 text-center lg:gap-12">
          {/* Headline */}
          <h1
            className={cn(
              "inline-block animate-appear",
              "bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground",
              "bg-clip-text text-transparent",
              "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
              "leading-[1.1] sm:leading-[1.1]",
              "drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]",
            )}
          >
            {title}
          </h1>

          {/* Subheadline */}
          <p
            className={cn(
              "max-w-[650px] animate-appear opacity-0 [animation-delay:150ms]",
              "text-base sm:text-lg md:text-xl",
              "text-muted-foreground",
              "font-medium",
            )}
          >
            {description}
          </p>

          {/* CTAs */}
          <div
            className="relative z-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 
            animate-appear opacity-0 [animation-delay:300ms]"
          >
            <Button
              asChild
              size="lg"
              className={cn(
                "bg-gradient-to-b from-brand to-brand/90 dark:from-brand/90 dark:to-brand/80",
                "hover:from-brand/95 hover:to-brand/85 dark:hover:from-brand/80 dark:hover:to-brand/70",
                "text-white shadow-lg",
                "transition-all duration-300",
              )}
            >
              <a href={primaryCta.href}>{primaryCta.text}</a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className={cn(
                "text-foreground/80 dark:text-foreground/70",
                "transition-all duration-300",
              )}
            >
              <a href={secondaryCta.href}>
                {secondaryCta.icon}
                {secondaryCta.text}
              </a>
            </Button>
          </div>

          {/* Trust microcopy */}
          {trustMicrocopy && (
            <p
              className={cn(
                "text-sm text-muted-foreground/70",
                "animate-appear opacity-0 [animation-delay:450ms]",
                "max-w-[450px]",
              )}
            >
              {trustMicrocopy}
            </p>
          )}

          {/* Mockup */}
          <div className="relative w-full pt-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div
              className={cn(
                "animate-appear opacity-0 [animation-delay:700ms]",
                "shadow-[0_0_50px_-12px_rgba(0,0,0,0.3)] dark:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]",
                "rounded-lg overflow-hidden",
                "border border-gray-200 dark:border-gray-800",
              )}
            >
              <AutoplyMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Background Watercolor Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large indigo blur - top left */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        
        {/* Blue blur - top right */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-400/25 dark:bg-blue-500/15 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        
        {/* Purple blur - bottom left */}
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-purple-300/25 dark:bg-purple-600/15 rounded-full blur-3xl animate-pulse animation-delay-4000" />
        
        {/* Center indigo glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        
        {/* Original Glow component for additional effect */}
        <Glow
          variant="above"
          className="animate-appear-zoom opacity-0 [animation-delay:1000ms]"
        />
      </div>
    </section>
  )
}