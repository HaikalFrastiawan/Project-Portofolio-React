import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/08136761485"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3.5 rounded-full hover:opacity-90 transition-opacity pulse-glow"
      aria-label="Contact on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
    >
      <MessageCircle size={24} />
    </motion.a>
  );
};

export default WhatsAppFloat;
