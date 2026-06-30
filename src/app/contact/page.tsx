import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mohamed Al-Sadig Ibnouf — Software Engineer & SaaS Product Builder based in Riyadh, Saudi Arabia.",
};

export default function Contact() {
  return <ContactPage />;
}
