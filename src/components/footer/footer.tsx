import { Facebook, Github, Instagram, Youtube } from "lucide-react";
import Branding from "../top-bar/branding";

const Footer = () => {
  return (
    <div className="flex h-[50vh] bg-slate-200 mt-10 py-10 gap-20">
      <div className="flex flex-col justify-between h-full">
        <div className="relative bottom-2">
          <Branding />
        </div>
        <div className="flex pl-4 gap-2">
          <Instagram />
          <Youtube />
          <Facebook />
          <Github />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold pb-2">Menu</p>
        <p>Home</p>
        <p>Features</p>
        <p>Security</p>
        <p>Resources</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold pb-2">Features</p>
        <p>Persona-based Chatbot</p>
        <p>AI Knowledge Base</p>
        <p>Brand Customization</p>
        <p>Q&A Management</p>
        <p>Conversation Analysis</p>
      </div>
    </div>
  );
};

export default Footer;
