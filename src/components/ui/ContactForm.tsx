"use client";

import React, { useState } from "react";
import { MessageSquare, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./Button";

export const ContactForm: React.FC<{ initialService?: string }> = ({
  initialService = "General Inquiry",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "Sales & Inquiries",
    service: initialService,
    budget: "₹25,000 - ₹50,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission state without pretending to have a remote DB
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-slate-900/90 border border-emerald-500/40 rounded-2xl p-8 text-center max-w-lg mx-auto shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Prepared</h3>
        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. For immediate response or urgent migration support, reach our team directly via WhatsApp or email.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="whatsapp"
            href={`https://wa.me/919582129099?text=${encodeURIComponent(
              `Hello ShrotiHost team, my name is ${formData.fullName}. Department: ${formData.department}. Project: ${formData.service}. Message: ${formData.message}`
            )}`}
            isExternal={true}
            leftIcon={<MessageSquare className="w-4 h-4" />}
          >
            Chat on WhatsApp
          </Button>
          <Button
            variant="secondary"
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Full Name <span className="text-indigo-400">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Rahul Sharma"
            className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Email Address <span className="text-indigo-400">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="rahul@example.com"
            className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Phone / WhatsApp Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Department Routing
          </label>
          <select
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          >
            <option value="Sales & Inquiries">Sales & Pre-Purchase</option>
            <option value="Free Website Migration">Free Website Migration</option>
            <option value="Technical Support">Technical Support (cPanel / DNS)</option>
            <option value="Custom Development">Custom Web / App Development</option>
            <option value="Billing & Invoicing">Billing & Accounts</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Service of Interest
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          >
            <option value="Custom Web Development">Custom Web Development</option>
            <option value="NVMe Shared Hosting">NVMe Shared Hosting</option>
            <option value="Managed WordPress Hosting">Managed WordPress Hosting</option>
            <option value="Reseller Hosting & WHM">Reseller Hosting & WHM</option>
            <option value="Cloud VPS Infrastructure">Cloud VPS Infrastructure</option>
            <option value="WHMCS Modules">WHMCS Custom Modules</option>
            <option value="E-Commerce Storefront">E-Commerce Storefront</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Estimated Budget
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          >
            <option value="Under ₹10,000">Under ₹10,000 (Hosting / Single Site)</option>
            <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000 (Starter Website)</option>
            <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (Business Portal)</option>
            <option value="₹50,000 - ₹1,50,000">₹50,000 - ₹1,50,000 (E-Commerce / Custom App)</option>
            <option value="₹1,50,000+">₹1,50,000+ (Full SaaS Architecture)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
          Project Details or Question <span className="text-indigo-400">*</span>
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly describe your requirements, current hosting provider, or questions..."
          className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          rightIcon={<Send className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          Submit Inquiry
        </Button>

        <a
          href="https://wa.me/919582129099"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Prefer quick chat? WhatsApp: +91 95821 29099</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </form>
  );
};

