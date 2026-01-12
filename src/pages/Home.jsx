import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { AboutMeSection } from "../components/AboutMeSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutMeSection />
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    ) 
}