"use client";

import { FormEvent } from "react";
import Button from "../generic/button";

const Contact = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex items-center justify-between pt-4 bg-gray-200">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14130.946795029693!2d85.34463115!3d27.694531700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1736607451247!5m2!1sen!2snp"
          width="850"
          height="650"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Send Us a Message
        </h1>
        <p className="text-gray-600 mb-8">
          Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non
          neque ullamcorper id.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Full name*"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 text-gray-800 bg-white"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Active email*"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 text-gray-800 bg-white"
            />
          </div>

          <div>
            <textarea
              placeholder="Your message here*"
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 text-gray-800 bg-white resize-none"
            />
          </div>

          <div>
            <Button title="Send Message" href="/" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
