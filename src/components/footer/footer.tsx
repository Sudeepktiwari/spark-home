import { Facebook, Github, Instagram, Youtube } from "lucide-react";
import Branding from "../top-bar/branding";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <div className="bg-black mt-10 py-10 w-full text-white">
      <div className="flex flex-col lg:flex-row h-full lg:py-20 py-10">
        <div className="flex pb-10 lg:pb-0 pl-4 lg:justify-start w-full">
          <Branding />
        </div>
        <div className="lg:w-[50vw] lg:pr-10 lg:px-0 px-4 pt-4 lg:pt-0 ">
          <p className=" font-semibold pb-2">Receive our regular updates</p>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter your email address"
              className="bg-white"
              autoFocus={false}
            />
            <Button className="bg-[#5555ff]">Subscribe</Button>
          </div>
        </div>
      </div>
      <Separator decorative className="w-[80%] ml-[10%]" />
      {/*       
      <div className="hidden lg:flex flex-col pl-4 lg:pl-0">
        <p className="font-semibold pb-2">Menu</p>
        <p>Home</p>
        <p>Features</p>
        <p>Security</p>
        <p>Resources</p>
        <p>Contact Us</p>
      </div>
      <div className="lg:flex flex-col pl-4 lg:pl-0">
        <p className="font-semibold pb-2">Features</p>
        <p>Persona-based Chatbot</p>
        <p>AI Knowledge Base</p>
        <p>Brand Customization</p>
        <p>Q&A Management</p>
        <p>Conversation Analysis</p>
      </div> */}

      <div className="grid grid-cols-2 lg:flex lg:flex-row pt-10 px-6 justify-around w-full lg:w-auto items-center">
        <div className="footer-col navigation flex flex-col lg:pl-0 relative bottom-3 lg:bottom-0">
          <p className="font-semibold text-lg pb-4">Menu</p>
          <div className="footer-col-options">
            <p>Home</p>
            <p>Features</p>
            <p>Security</p>
            <p>Resources</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="footer-col features flex flex-col lg:pl-0">
          <p className="font-semibold text-lg pb-4">Features</p>
          <div className="footer-col-options">
            <p>Persona-based Chatbot</p>
            <p>AI Knowledge Base</p>
            <p>Brand Customization</p>
            <p>Q&A Management</p>
            <p>Conversation Analysis</p>
          </div>
        </div>
        <div className="footer-col features flex flex-col lg:pl-0 lg:relative lg:bottom-8">
          <p className="font-semibold text-lg pb-4 mt-5 lg:mt-0">Legal</p>
          <div className="footer-col-options">
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Usage policy</p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="footer-col social-media flex flex-col pt-4 lg:pl-4 justify-center lg:relative lg:bottom-7">
          <p className="font-semibold text-lg pb-4 mt-7 lg:mt-0">
            Social Media
          </p>
          <div className="footer-col-options">
            <div className="flex gap-2">
              <Instagram />
              <p>Instagram</p>
            </div>
            <div className="flex gap-2">
              <Youtube />
              <p>Youtube</p>
            </div>
            <div className="flex gap-2">
              <Facebook />
              <p>facebook</p>
            </div>
            <div className="flex gap-2">
              <Github />
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
      <Separator decorative className="w-[80%] ml-[10%] my-10" />
    </div>
  );
};

export default Footer;
