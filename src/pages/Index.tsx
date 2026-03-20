import { LiquidMetalBackground } from "@/components/LiquidMetalBackground"
import { FloatingNavbar } from "@/components/FloatingNavbar"
import { ShinyButton } from "@/components/ui/shiny-button"
import { Feature } from "@/components/ui/feature-with-advantages"
import { BentoPricing } from "@/components/ui/bento-pricing"
import { ContactCard } from "@/components/ui/contact-card"
import { AboutQuote } from "@/components/ui/about-quote"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

export default function Index() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const pricingSectionRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY
      const currentScroll = scrollContainer.scrollLeft
      const containerWidth = scrollContainer.offsetWidth
      const currentSection = Math.round(currentScroll / containerWidth)

      if (currentSection === 2 && pricingSectionRef.current) {
        const pricingSection = pricingSectionRef.current
        const isAtTop = pricingSection.scrollTop === 0
        const isAtBottom = pricingSection.scrollTop + pricingSection.clientHeight >= pricingSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 1 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 3 * containerWidth,
            behavior: "smooth",
          })
          return
        }
      }

      if (currentSection === 3 && aboutSectionRef.current) {
        const aboutSection = aboutSectionRef.current
        const isAtTop = aboutSection.scrollTop === 0
        const isAtBottom = aboutSection.scrollTop + aboutSection.clientHeight >= aboutSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 2 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 4 * containerWidth,
            behavior: "smooth",
          })
          return
        }
      }

      if (currentSection === 4 && contactSectionRef.current) {
        const contactSection = contactSectionRef.current
        const isAtTop = contactSection.scrollTop === 0
        const isAtBottom = contactSection.scrollTop + contactSection.clientHeight >= contactSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 3 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          return
        }
      }

      e.preventDefault()

      if (Math.abs(delta) > 10) {
        let targetSection = currentSection
        if (delta > 0) {
          targetSection = Math.min(currentSection + 1, 4)
        } else {
          targetSection = Math.max(currentSection - 1, 0)
        }

        scrollContainer.scrollTo({
          left: targetSection * containerWidth,
          behavior: "smooth",
        })
      }
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
    return () => scrollContainer.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <main className="relative h-screen overflow-hidden">
      <LiquidMetalBackground />

      <div className="fixed inset-0 z-[5] bg-black/50" />

      <FloatingNavbar />

      <div
        ref={scrollContainerRef}
        className="relative z-10 flex h-screen w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory hide-scrollbar wave-scroll-container"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <section id="home" className="relative flex min-w-full snap-start items-center justify-center px-4 py-20">
          {/* Animated wave background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <svg className="absolute bottom-0 w-full opacity-15" style={{animation: "wave-float 9s ease-in-out infinite"}} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(255,255,255,0.12)" d="M0,140 C360,260 1080,40 1440,140 L1440,320 L0,320 Z" />
            </svg>
            <svg className="absolute bottom-0 w-full opacity-10" style={{animation: "wave-float 13s ease-in-out infinite reverse"}} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(255,255,255,0.07)" d="M0,200 C480,100 960,300 1440,200 L1440,320 L0,320 Z" />
            </svg>
          </div>
          <div className="relative z-10 mx-auto max-w-4xl wave-float">
            <div className="text-center px-0 leading-5">
              <h1 className="mb-8 text-balance text-5xl tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] md:text-6xl lg:text-8xl">
                <span className="font-open-sans-custom not-italic">Самооценка.</span>{" "}
                <span className="font-serif italic">Мышление.</span>{" "}
                <span className="font-open-sans-custom not-italic">Успех.</span>
              </h1>

              <p className="mb-8 mx-auto max-w-2xl text-pretty leading-relaxed text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-thin font-open-sans-custom tracking-wide leading-7 text-xl">
                исследование взаимосвязи самооценки, типа мышления и академической успеваемости{" "}
                <span className="font-serif italic">учащихся 5–9 классов</span>
              </p>

              <div className="flex justify-center">
                <ShinyButton className="px-8 py-3 text-base">читать исследование</ShinyButton>
              </div>
            </div>
          </div>

          {/* Wave divider right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none">
            <svg viewBox="0 0 120 900" preserveAspectRatio="none" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 C60,150 80,300 40,450 C0,600 80,750 0,900 L120,900 L120,0 Z" fill="rgba(0,0,0,0.18)" />
              <path d="M20,0 C80,120 100,280 60,450 C20,620 90,760 20,900 L120,900 L120,0 Z" fill="rgba(255,255,255,0.03)" />
            </svg>
          </div>
        </section>

        <section id="features" className="relative flex min-w-full snap-start items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-7xl w-full">
            <Feature />
          </div>

          {/* Wave divider right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none">
            <svg viewBox="0 0 120 900" preserveAspectRatio="none" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 C60,150 80,300 40,450 C0,600 80,750 0,900 L120,900 L120,0 Z" fill="rgba(0,0,0,0.18)" />
              <path d="M20,0 C80,120 100,280 60,450 C20,620 90,760 20,900 L120,900 L120,0 Z" fill="rgba(255,255,255,0.03)" />
            </svg>
          </div>
        </section>

        <section
          id="pricing"
          ref={pricingSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Animated wave background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <svg className="absolute bottom-0 w-full opacity-10" style={{animation: "wave-float 8s ease-in-out infinite"}} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(255,255,255,0.15)" d="M0,160 C360,260 1080,60 1440,160 L1440,320 L0,320 Z" />
            </svg>
            <svg className="absolute bottom-0 w-full opacity-10" style={{animation: "wave-float 11s ease-in-out infinite reverse"}} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(255,255,255,0.08)" d="M0,200 C480,100 960,300 1440,200 L1440,320 L0,320 Z" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                Структура исследования
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Исследование охватывает три ключевых блока: диагностику самооценки, оценку типа мышления
                и анализ академической успеваемости учащихся.
              </p>
            </div>
            <BentoPricing />
          </div>
        </section>

        <section
          id="about"
          ref={aboutSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Animated wave background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <svg className="absolute top-0 w-full opacity-10" style={{animation: "wave-float 9s ease-in-out infinite"}} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(255,255,255,0.12)" d="M0,80 C480,200 960,0 1440,80 L1440,0 L0,0 Z" />
            </svg>
            <svg className="absolute bottom-0 w-full opacity-10" style={{animation: "wave-float 12s ease-in-out infinite reverse"}} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(255,255,255,0.08)" d="M0,220 C360,120 1080,320 1440,220 L1440,320 L0,320 Z" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                Об исследовании
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Цель, методология и практическая значимость работы.
              </p>
            </div>
            <AboutQuote />
          </div>
        </section>

        <section
          id="contact"
          ref={contactSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20"
        >
          {/* Animated wave background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <svg className="absolute top-0 w-full opacity-10" style={{animation: "wave-float 10s ease-in-out infinite"}} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(255,255,255,0.15)" d="M0,100 C360,220 1080,20 1440,100 L1440,0 L0,0 Z" />
            </svg>
            <svg className="absolute bottom-0 w-full opacity-10" style={{animation: "wave-float 7s ease-in-out infinite reverse"}} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(255,255,255,0.1)" d="M0,180 C480,80 960,280 1440,180 L1440,320 L0,320 Z" />
            </svg>
          </div>
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl mt-[5vh]">
            <ContactCard
              title="Связаться с автором"
              description="Есть вопросы по исследованию, хотите принять участие или обсудить результаты? Напишите — отвечу в течение дня."
              contactInfo={[
                {
                  icon: MailIcon,
                  label: "Email",
                  value: "research@school.ru",
                },
                {
                  icon: PhoneIcon,
                  label: "Телефон",
                  value: "+7 (900) 000-00-00",
                },
                {
                  icon: MapPinIcon,
                  label: "Организация",
                  value: "Общеобразовательная школа",
                  className: "col-span-2",
                },
              ]}
            >
              <form action="" className="w-full space-y-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Имя
                  </Label>
                  <Input
                    type="text"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Email
                  </Label>
                  <Input
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Телефон
                  </Label>
                  <Input
                    type="tel"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Сообщение
                  </Label>
                  <Textarea className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]" />
                </div>
                <Button
                  className="w-full bg-white text-black hover:bg-gray-100 [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)] font-open-sans-custom"
                  type="button"
                >
                  Отправить
                </Button>
              </form>
            </ContactCard>
          </div>
        </section>
      </div>
    </main>
  )
}