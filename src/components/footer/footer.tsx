import { Facebook, Github, Instagram, Youtube } from "lucide-react";
import Branding from "../top-bar/branding";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row h-[50vh] bg-slate-200 mt-10 py-10 gap-20 w-full">
      <div className="flex flex-col justify-between h-full">
        <div className="relative bottom-2 flex justify-center lg:justify-start w-full">
          <Branding />
        </div>
        <div className="flex pl-0 lg:pl-4 gap-8 justify-center">
          <Instagram />
          <Youtube />
          <Facebook />
          <Github />
        </div>
      </div>
      <div className="hidden lg:flex flex-col pl-4 lg:pl-0">
        <p className="font-semibold pb-2">Menu</p>
        <p>Home</p>
        <p>Features</p>
        <p>Security</p>
        <p>Resources</p>
        <p>Contact Us</p>
      </div>
      <div className="hidden lg:flex flex-col pl-4 lg:pl-0">
        <p className="font-semibold pb-2">Features</p>
        <p>Persona-based Chatbot</p>
        <p>AI Knowledge Base</p>
        <p>Brand Customization</p>
        <p>Q&A Management</p>
        <p>Conversation Analysis</p>
      </div>
      <div className="flex lg:hidden justify-around">
        <div className="flex flex-col lg:pl-0">
          <p className="font-semibold pb-2">Menu</p>
          <p>Home</p>
          <p>Features</p>
          <p>Security</p>
          <p>Resources</p>
          <p>Contact Us</p>
        </div>
        <div className="flex flex-col lg:pl-0">
          <p className="font-semibold pb-2">Features</p>
          <p>Persona-based Chatbot</p>
          <p>AI Knowledge Base</p>
          <p>Brand Customization</p>
          <p>Q&A Management</p>
          <p>Conversation Analysis</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
