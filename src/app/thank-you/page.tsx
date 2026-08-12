import type { Metadata } from "next";
import { ThankYouContent } from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | Strategy Call Requested | ClickLab Marketing",
  description: "Your strategy call request has been received. Our senior rehab growth strategist will contact your admissions line shortly.",
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
