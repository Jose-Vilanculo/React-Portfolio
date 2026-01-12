import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaWhatsapp }  from "react-icons/fa";
import { cn } from "../lib/utils";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

export const ContactSection = () => {

    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    {/* Event listener for form */}
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    {/* Submit handler to send message */}
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
        const res = await fetch("/api/send-email", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error(`Server error: ${res.status}`);

        // Reset the form
        setFormData({ name: "", email: "", message: "" });
        setStatus("success");

        toast({
            title:"Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
        });
        } catch (error) {
            setFormData({ name: "", email: "", message: "" });
            setStatus("error");
            toast({
                title: "Failed to send message",
                description: "Something went wrong. Please try again later.",
            });
            console.error("Email send failed:", error);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                {/* Section heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                {/* Section description */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/*Part 1: Contact info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            {/* send email */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4> Email</h4>
                                    <a
                                        href="mailto:jozivilanculo@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        jozivilanculo@gmail.com
                                    </a>
                                </div>
                            </div>
                            {/* phone number */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4> Phone</h4>
                                    <a
                                        href="tel:+27677712850"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +27 67 771 2850
                                    </a>
                                </div>
                            </div>
                            {/* location */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4> Location</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Cape Town, South Africa
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Social Media Links */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/jose-vilanculo-22aa2b337"
                                    target="_blank"
                                >
                                    <Linkedin size={20}/>
                                </a>
                                <a
                                    href="https://wa.me/+27677712850"
                                    target="_blank"
                                >
                                    <FaWhatsapp size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Part 2: Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send A Message</h3>

                        {/* Form */}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Name input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name..."
                                />
                            </div>
                            {/* Email input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="example@gmail.com"
                                />
                            </div>
                            {/* Message text area */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>
                            {/* Submit button */}
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className={cn(
                                     "cosmic-button w-full flex items-center justify-center gap-2",
                                     status === "sending" && "opacity-70 cursor-not-allowed"
                                )}
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}