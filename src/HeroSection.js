import React, { useEffect, useState } from "react";
import { ShoppingBag, Menu, ChevronRight, ArrowDown } from "lucide-react";
import bgImage from "./assets/bg.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  const [bgSize, setBgSize] = useState(100); // %
  const [bgPositionY, setBgPositionY] = useState("center");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const newSize = 100 - scrollTop / 10; // Zoom out
      const newPosition = 50 + scrollTop / 10; // Move down (start from center, go to bottom)

      setBgSize(newSize > 80 ? newSize : 80);
      setBgPositionY(`${newPosition}%`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: `${bgSize}%`,
        backgroundPosition: `center ${bgPositionY}`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* rest of your content untouched */}

      <div className="hero-overlay"></div>

      {/* Navbar */}
      <nav className="hero-nav">
        <div className="hero-brand">
          MR.<span>POPS</span>
        </div>

        <div className="hero-buttons">
          <button>
            <ShoppingBag size={16} />
              0
          </button>
          <button>Flavours</button>
          <button>
            Menu
            <Menu size={16} />
          </button>
        </div>
      </nav>

      {/* Hero Text */}
<div className="hero-content">
  <h1 className="hero-title">
    TRUE <br /> ICE <br /> CREAM
  </h1>
</div>

{/* Right-side Text + Circle Button */}
<div className="hero-right-text">
  <p>
    No, girl, I don't like all these ice creams and frozen juices... When I was a kid I liked it,
    of course, but I don't know what else I liked... let's have the usual, white chocolate-covered...
    And what's that lilac soap you have? mr.pops? I'll take the bright yellow one, what's that?
    Mango-maracuya? Oh, it's cold! And what's that crunching on your teeth? Bones... cool! And can
    I bring this pink one, too!
  </p>
  <div className="hero-circle-button">
    <ChevronRight size={20} />
  </div>
  <div className="hero-flavour-text">FLAVOURS</div>
</div>

{/* Scroll Down Icon */}
<div className="hero-scroll-down">
  <ArrowDown size={32} />
</div>

    </div>
  );
};

export default HeroSection;
