"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Coffee, Droplet, Flame, Heart, TrendingUp, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="largeSizeExtraLargeSpacing"
      background="noiseGradient"
      cardStyle="neon-glow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Reserve Now",
            href: "contact"
          }}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765902646747-d585b13i.jpg"
          logoAlt="SantoMonic Coffeeshop Logo"
          brandName="SantoMonic"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="SantoMonic"
          description="Discover the finest specialty coffee experience in town. Handcrafted espresso drinks, artisan pastries, and a warm atmosphere."
          buttons={[
            { text: "Explore Menu", href: "menu" },
            { text: "Visit Us", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765902647927-6t9n5iiz.jpg"
          imageAlt="SantoMonic Coffeeshop Interior"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Story"
          title="Crafted with Passion"
          description="SantoMonic was founded with a simple mission: to serve the world's finest coffee in a space where people feel at home. Every cup is made with precision, every moment cherished. From our carefully selected beans to our passionate baristas, we believe coffee is more than a beverage—it's an experience."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765902648995-uiqosvhk.jpg",
            imageAlt: "Barista making coffee with latte art"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765902650316-l8ugp2ad.jpg",
            imageAlt: "Coffee beans roasting close up"
          }}
          textboxLayout="default"
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardFour
          title="Our Signature Menu"
          description="Handcrafted coffee creations made with premium beans and expert technique"
          tag="Coffee Selection"
          features={[
            {
              title: "Espresso",
              description: "Rich, concentrated coffee with bold flavor and perfect crema. The foundation of all our specialty drinks.",
              icon: Zap
            },
            {
              title: "Cappuccino",
              description: "Smooth blend of espresso, steamed milk, and velvety foam. A true Italian classic.",
              icon: Coffee
            },
            {
              title: "Americano",
              description: "Pure espresso shots topped with hot water. Simple, elegant, and powerful.",
              icon: Droplet
            },
            {
              title: "Macchiato",
              description: "Espresso marked with a small amount of foam. Strong yet refined.",
              icon: Flame
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="SantoMonic by Numbers"
          description="Our commitment to excellence reflected in our community"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Happy Customers",
              value: "15K+"
            },
            {
              id: "2",
              icon: Award,
              title: "Coffee Awards",
              value: "8"
            },
            {
              id: "3",
              icon: TrendingUp,
              title: "Coffee Cups Served",
              value: "250K+"
            },
            {
              id: "4",
              icon: Heart,
              title: "Daily Regulars",
              value: "500+"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Customers Say"
          description="Hear from the people who make SantoMonic their daily destination"
          tag="Customer Reviews"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahmitchell",
              testimonial: "The best espresso in the city. I come here every morning before work. The baristas are friendly and remember my order. Absolutely love it!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765902655541-ztvqsz78.jpg",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@jameschen",
              testimonial: "SantoMonic has become my creative space. The atmosphere is perfect for working, and the cappuccino is consistently excellent.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765902656577-v5ckvxwx.jpg",
              imageAlt: "James Chen portrait"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emmarod",
              testimonial: "I visited during my trip and it was the highlight of my morning. The pastries are fresh and the coffee is exceptional. Will definitely come back!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765902657695-7ppxrocr.jpg",
              imageAlt: "Emma Rodriguez portrait"
            },
            {
              id: "4",
              name: "Marcus Johnson",
              handle: "@marcusj",
              testimonial: "Been a customer for three years. Never disappoints. Great coffee, great people, great vibes. This is a real coffeeshop.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765902658677-lb960jzl.jpg",
              imageAlt: "Marcus Johnson portrait"
            },
            {
              id: "5",
              name: "Lisa Wang",
              handle: "@lisawang",
              testimonial: "The attention to detail is remarkable. Every coffee is made with care. I appreciate the quality and consistency.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765902659631-o9gkkm28.jpg",
              imageAlt: "Lisa Wang portrait"
            },
            {
              id: "6",
              name: "David Brown",
              handle: "@davidbrown",
              testimonial: "Best coffee shop in town without question. Professional baristas, quality ingredients, and a welcoming environment. Highly recommended!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765902660638-bditp1g1.jpg",
              imageAlt: "David Brown portrait"
            }
          ]}
          showRating={true}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Visit SantoMonic"
          description="Join us for an exceptional coffee experience. Get in touch to reserve a table or learn more about our offerings."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your visit or ask a question...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Navigation",
              items: [
                { label: "Home", href: "hero" },
                { label: "About", href: "about" },
                { label: "Menu", href: "menu" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Hours",
              items: [
                { label: "Monday - Friday: 7AM - 7PM" },
                { label: "Saturday: 8AM - 8PM" },
                { label: "Sunday: 8AM - 6PM" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Email", href: "mailto:info@santomonic.com" }
              ]
            }
          ]}
          logoText="SantoMonic"
          copyrightText="© 2025 SantoMonic Coffeeshop. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}