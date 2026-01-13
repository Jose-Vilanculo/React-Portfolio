import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Swift Basket",
        description: "A multi-vendor Django e-commerce website which allows buyers and vendors to trade.",
        image: "/projects/ecommerce_store.jpg",
        tags: ["Python", "Django", "RESTful API"],
        demoUrl: "#",
        githubUrl: "https://github.com/Jose-Vilanculo/Django-eCommerce-Application",
    },

    {
        id: 2,
        title: "Django News Application",
        description: "A Django-based news platform for independent journalism and curated publications.",
        image: "/projects/news_application.jpg",
        tags: ["Python", "Django", "Docker", "Sphinx"],
        demoUrl: "#",
        githubUrl: "https://github.com/Jose-Vilanculo/Django_News_Application",
    },

    {
        id: 3,
        title: "Sticky Notes Application",
        description: "A Django based Sticky Notes application for users to create,read update and delete notes",
        image: "/projects/sticky-notes-hero.png",
        tags: ["Python", "Django", "Bootstrap"],
        demoUrl: "#",
        githubUrl: "https://github.com/Jose-Vilanculo/Django-Sticky-Notes-App",
    },

    {
        id: 4,
        title: "React Portfolio",
        description: "A React portfolio where I display myself as a developer and show off some of my projects",
        image: "/projects/portfolio-home.png",
        tags: ["Javascript", "React", "Tailwind"],
        demoUrl: "https://react-portfolio-seven-pi-84.vercel.app/#hero",
        githubUrl: "https://github.com/Jose-Vilanculo/React-Portfolio",
    },
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/* Section header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                {/* Section description */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                {/* project tiles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            {/* project image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div> 
                             
                             {/* project tags */}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/50 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                                {/* project title and description */}
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                {/* icon links */}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            {" "}
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        href={"https://github.com/Jose-Vilanculo"}
                        target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}