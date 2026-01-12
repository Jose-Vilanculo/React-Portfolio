import { useState } from "react"
import { cn } from "../lib/utils";

const Skills = [
    // Frontend
    {name: "HTML/CSS", level: "75", category: "frontend"},
    {name: "Javascript", level: "85", category: "frontend"},
    {name: "React.js", level: "65", category: "frontend"},
    {name: "Tailwind CSS", level: "50", category: "frontend"},

    // Backend
    {name: "Python", level: "85", category: "backend"},
    {name: "Django", level: "70", category: "backend"},
    {name: "Node.js", level: "80", category: "backend"},
    {name: "MySQL", level: "75", category: "backend"},
    {name: "SQLite", level: "75", category: "backend"},
    {name: "MariaDB", level: "75", category: "backend"},

    // Tools
    {name: "Docker", level: "65", category: "tools"},
    {name: "Git/Github", level: "80", category: "tools"},
    {name: "RESTful API", level: "85", category: "tools"},
    {name: "Sphinx", level: "80", category: "tools"},
    {name: "PostMan", level: "85", category: "tools"},
    {name: "SHELL Scripting", level: "85", category: "tools"},
];

const categories = ["all", "frontend", "backend", "tools"];


export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = Skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Category selection buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            {/* Skill name */}
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            {/* Skill bar level */}
                            <div
                                className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin origin-left animate-[grow_1.5s_ease-out"
                                style={{ width: skill.level + "%" }}
                            />
                            </div>
                            {/* Skill percentage */}
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}