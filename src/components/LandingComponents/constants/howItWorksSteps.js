import AID from "../../../../src/assets/F-AI-D.png";
import AIL from "../../../../src/assets/F-AI-L.png";
import PRD from "../../../../src/assets/PR-D.png";
import PRL from "../../../../src/assets/PRL.png";
import DRUGD from "../../../../src/assets/DRUG-D.png";
import DRUGL from "../../../../src/assets/DRUG-L.png";
import OID from "../../../../src/assets/OID.png";
import OIL from "../../../../src/assets/OIL.png";

export const howItWorksSteps = [
  {
    title: "AI Drug Finder",
    description: "Use artificial intelligence to find the exact drug you need.",
    content: [
      {
        title: "Search by Active Ingredient",
        description:
          "Just type the active substance, and the AI will suggest matching medications with detailed info.",
      },
      {
        title: "Search by Image",
        description:
          "Upload a photo of the drug, and our AI will identify it instantly.",
      },
      {
        title: "Voice or Smart Text",
        description:
          "Ask naturally and let the AI understand what you're looking for.",
      },
    ],
    imageDark: AID,
    imageLight: AIL,
  },
  {
    title: "Smart Prescription Reader",
    description: "Let AI read and extract drug info from prescriptions.",
    content: [
      {
        title: "Upload Prescription",
        description:
          "Easily upload a handwritten or printed prescription image.",
      },
      {
        title: "AI Recognition",
        description:
          "The system automatically detects drug names, dosage, and instructions.",
      },
      {
        title: "Add to Order in One Click",
        description:
          "Directly add all recognized items to your shopping cart or order.",
      },
    ],
    imageDark: PRD,
    imageLight: PRL,
  },
  {
    title: "All Medicines in One Place",
    description: "Explore and manage a complete list of available drugs.",
    content: [
      {
        title: "Smart Filters",
        description:
          "Filter medicines by availability, category, or expiration date.",
      },
      {
        title: "Detailed Information",
        description:
          "View price, usage, active substance, stock, and more in a simple layout.",
      },
      {
        title: "Stay Updated",
        description:
          "Track stock levels and receive low-inventory notifications.",
      },
    ],
    imageDark: DRUGD,
    imageLight: DRUGL,
  },
  {
    title: "Efficient Order Management",
    description: "Streamline all your order processes with ease.",
    content: [
      {
        title: "Fast Order Creation",
        description:
          "Create orders in seconds with smart suggestions based on demand.",
      },
      {
        title: "Track Order Status",
        description:
          "Follow every order from creation to delivery and get real-time updates.",
      },
      {
        title: "Automatic Inventory Sync",
        description:
          "Stock updates automatically after each order is placed or fulfilled.",
      },
    ],
    imageDark: OID,
    imageLight: OIL,
  },
];
