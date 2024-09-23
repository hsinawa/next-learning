import { useState } from "react";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DevLink } from "@/constants";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); 
    setLoading(true); 

    const data = {
      name,
      email,
      message,
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false); 
      return; 
    }

    try {
      const response = await fetch(`${DevLink}contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if(response.status === 200){
        window.location.href = "/success";
      }

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Error:", errorMessage);
        setError("Failed to send message. Please try again.");
      } else {
        console.log("Message sent successfully");
       
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false); 
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
          disabled={loading}
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
          disabled={loading} 
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
          disabled={loading} 
          className="mt-1"
          placeholder="Your Message"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}

      <Button type="submit" className="w-full mt-4" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>

  
      {loading && (
        <div className="flex justify-center mt-4">
          <div className="loader"></div> 
        </div>
      )}
    </form>
  );
};

export default ContactForm;
