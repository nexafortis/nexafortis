
import React from "react";

export default function NexaFortisLanding() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto">
          <img src="/logo.png" alt="NexaFortis Logo" className="mx-auto mb-6 w-24" />
          <h1 className="text-4xl font-bold mb-4">Secure. Modern. All-in-One.</h1>
          <p className="text-lg mb-6">Websites, hosting, and cybersecurity for small businesses.</p>
          <a
            href="#contact"
            className="bg-white text-blue-700 px-6 py-3 font-semibold rounded-xl shadow hover:bg-gray-100"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-10">What We Offer</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-bold text-lg mb-2">Web Design</h3>
            <p>Beautiful, mobile-ready websites that grow your brand.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-bold text-lg mb-2">Secure Hosting</h3>
            <p>SSL, backups, and uptime monitoring included in all plans.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-bold text-lg mb-2">Cyber Protection</h3>
            <p>Basic cybersecurity checkups and peace of mind reporting.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Pricing Plans</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="mb-4 text-sm">Perfect for new businesses</p>
            <p className="text-3xl font-bold mb-4">$499</p>
            <ul className="text-left text-sm mb-4">
              <li>- One-page website</li>
              <li>- Hosting & SSL</li>
              <li>- Contact form</li>
            </ul>
          </div>
          <div className="border p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="mb-4 text-sm">Most popular choice</p>
            <p className="text-3xl font-bold mb-4">$999</p>
            <ul className="text-left text-sm mb-4">
              <li>- 3-5 page website</li>
              <li>- Domain + SEO</li>
              <li>- Google Maps + Business Email</li>
            </ul>
          </div>
          <div className="border p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <p className="mb-4 text-sm">For serious businesses</p>
            <p className="text-3xl font-bold mb-4">$1,999</p>
            <ul className="text-left text-sm mb-4">
              <li>- Everything in Pro</li>
              <li>- Cybersecurity + Support</li>
              <li>- 3 Months Maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Why NexaFortis?</h2>
          <p className="mb-4">
            At NexaFortis, we believe that every small business — no matter how new or small —
            deserves a secure, professional digital presence. We offer everything you need to launch
            and grow online with confidence.
          </p>
          <p className="text-sm text-gray-500">Created by a cybersecurity-driven full-stack developer in Australia</p>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Let’s Talk</h2>
        <p className="mb-6">Ready to get started or need help choosing a plan?</p>
        <a
          href="https://wa.me/61412965244"
          className="bg-blue-700 text-white px-6 py-3 font-semibold rounded-xl shadow hover:bg-blue-800"
        >
          Chat on WhatsApp
        </a>
      </section>

      <footer className="text-center text-sm text-gray-400 py-6">
        &copy; {new Date().getFullYear()} NexaFortis. All rights reserved.
      </footer>
    </div>
  );
}
