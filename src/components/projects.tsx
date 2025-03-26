import TFT from "@/public/logos/tft.jpeg"
import Layudar from "@/public/logos/LAyudar_logo.png"
import Divvy from "@/public/logos/divvy.png"
import Wordle from "@/public/logos/wordle.png"
import Pokecoverage from "@/public/logos/Pokecoverage.webp";
import Layout from "@/components/global/layout"

import { tile } from "@/types";

const projects: tile[] = [
    {
      logo: Pokecoverage,
      link:"https://github.com/swooshoo/pokecoverage",
      group: "PokeCoverage",
      location: "Los Angeles, California",
      role: "Creator",
      start: "February 2025",
      end: "Present",
      alt: "Pokecoverage Logo",
      description: [
        "Developed PokeCoverage, a comprehensive Dash application that analyzes Pokémon team compositions to identify defensive weaknesses and recommend optimal team builds.",
        "Designed an intuitive interface allowing users to select Pokémon from a complete database, instantly visualizing type effectiveness across 18 different type matchups.",
        "Implemented advanced defensive coverage algorithms that calculate team-wide resistance and vulnerability scores, highlighting critical weaknesses requiring attention.",
        "Created a recommendation engine suggesting complementary Pokémon that address team vulnerabilities based on type matchups and defensive synergies.",
        "Built interactive visualization components displaying defensive coverage as heat maps and radar charts, enabling users to easily identify and address team composition gaps.",
        "Incorporated a team-building assistant that provides strategic advice on balancing offensive and defensive capabilities while maintaining competitive viability.",
        "Integrated a comprehensive Pokémon database with complete type information, abilities, and base stats to support informed team-building decisions.",
      ],
    },
    {
      logo: Layudar,
      link:"https://layudar.streamlit.app/",
      group: "LAyudar",
      location: "Los Angeles, California",
      role: "Creator",
      start: "January 2025",
      end: "Present",
      alt: "LAyudar Logo",
      description: [
        "Built and deployed a Streamlit platform to streamline fire relief efforts, connecting victims, volunteers, and shelters across Los Angeles.",
        "Consolidated shelter inventory from a directory of sites, with each site displayed as a card containing clickable Google Maps links for navigation.",
        "Integrated the Google Sheets API for real-time inventory updates, dynamically syncing changes from a Google Form to ensure accurate and timely data.",
        "Added a feature to visually highlight item statuses, marking in-stock or not-needed items with green/red messages for easy identification.",
        "Visualized supply trends through concise, interactive graphs displaying the last 7 days of inventory data to support resource allocation decisions.",
        "Implemented an automated webscraper to list a directory of Meal Distribution centers by World Central Kitchen.",
      ],
    },
    {
      logo: TFT,
      group: "TFT Carousel",
      location: "Remote California",
      role: "Creator",
      start: "September 2024",
      end: "December 2024",
      alt: "TFT Carousel Logo",
      description: [
        "Developed an interactive TFT unit carousel in Streamlit, visualizing over 60 units and 20+ traits, enabling real-time filtering and synergy exploration",
        "Implemented a card directory with skill and trait maps, displaying ability descriptions, unit costs, and ability costs to provide deeper gameplay insights",
        "Designed a dynamic UI with custom Streamlit components and HTML/CSS, improving user experience and data accessibility for players and analysts",
        "Optimized dataset reactivity, ensuring seamless updates as users interact with unit traits, abilities, and cost-based filters.",
        "Teamfight Tactics (TFT) is Riot Games’ popular auto-battler esports title, where players draft champions, build synergies, and compete in strategic battles.",
      ],
    },
    {
        logo: Divvy,
        group: "Divvy - Web-based Bill Splitting Application",
        location: "Remote California",
        role: "Creator",
        start: "January 2025",
        end: "January 2025",
        alt: "Divvy Logo",
        description: [
          "My first Streamlit project done in a 12 hour code sprint.",
          "Implemented a web-based bill-splitting tool using Streamlit, enabling users to divide expenses among multiple participants.",
          "Designed an interactive UI for inputting subtotal, tax, and tip amounts, with dynamic tax percentage calculation.",
          "Acted on feedback and applied a per-person share breakdown based on individual item totals.",
          "Deployed the app for public access, showcasing Python skills in data-driven web application development",
        ],
      },
      {
        logo: Wordle,
        group: "Wordle Unlimited",
        location: "Remote California",
        role: "Creator",
        start: "January 2024",
        end: "January 2024",
        alt: "Wordle Unlimited Logo",
        description: [
          "Developed a custom Wordle Unlimited game in Python using Pygame, my first personal Python project, which was downloaded by a few friends.",
          "Optimized gameplay for keyboard-only interaction, allowing players to start a new game with the Enter key instead of clicking, improving flow and efficiency.",
          "Designed a local, offline version with a compact window for easy Alt-Tab access, ensuring a seamless gaming experience without requiring an internet connection.",
          "Implemented an optional stats page, accessible on demand via click, rather than interrupting gameplay after each solve.",
        ],
      },
    
  ];
  
  const Experiences = () => {
    return <Layout title="personal projects." data={projects} />;
  };
  
  export default Experiences;