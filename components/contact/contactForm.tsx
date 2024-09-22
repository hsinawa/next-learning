import { useState } from "react";
import { Input } from "@/components/ui/input"; // Assuming you have a custom Input component
import { Button } from "@/components/ui/button"; // Assuming you have a custom Button component
import { Label } from "@/components/ui/label"; // Assuming you have a custom Label component
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a custom Textarea component
import { DevLink } from "@/constants";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    console.log(name, email, message);
    const data = {
      name,
      email,
      message,
    };
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return; 
    }
  
    const response = await fetch(`${DevLink}contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    console.log(response);
    if (!response.ok) {
      const errorMessage = await response.text();
      console.error("Error:", errorMessage);
    }
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 bg-white shadow-lg rounded-lg "
    >
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1"
          placeholder="Your Name"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1"
          placeholder="Your Email"
        />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mt-1"
          placeholder="Your Message"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}

      <Button type="submit" className="w-full mt-4">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
