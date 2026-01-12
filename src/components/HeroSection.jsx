import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}José</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "}Vilanculo</span>
                    </h1>

                    {/* Intro Text */}
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I create stellar web experiences with modern technologies.
                        Specializing in full-stack development, I build interfaces that are
                        both beautiful and functional.
                    </p>

                    {/* View Projects Button */}
                    <div className="flex items-center justify-center">
                        <a
                            href="#projects"
                            className="pt-2 cosmic-button opacity-0 animate-fade-in-delay-4"
                        >
                            View My Work
                        </a>
                    </div>

                    {/* Scroll button */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                        <ArrowDown className="h-5 w-5 text-primary" />
                    </div>

                </div>
            </div>

        </section>
    )
}