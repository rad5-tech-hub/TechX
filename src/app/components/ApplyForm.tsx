import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAVY, RED, BLUE, MUTED, PANEL, FG } from "../constants";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    emailAddress: '',
    learningBackground: '',
    preferredProgram: '',
    expectations: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Replace with your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = (import.meta as any).env.VITE_GOOGLE_SCRIPT_WEB_APP_URL;

    try {
      // Note: Google Apps Script Web Apps often require 'no-cors' mode for simple POST requests
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: NAVY }}>
        <div className="max-w-md w-full text-center p-8 rounded-2xl border border-border" style={{ backgroundColor: PANEL }}>
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} style={{ color: BLUE }} />
          </div>
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Application Received!</h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: MUTED }}>
            Thank you for your interest in the RAD5 TechX Graduate Program. Our team will review your application and get back to you within 48 hours.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full cursor-pointer py-4 rounded-xl font-bold text-white transition-all hover:brightness-110"
            style={{ backgroundColor: BLUE }}
          >
            Return Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 min-h-screen" style={{ backgroundColor: NAVY }}>
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold transition-colors"
            style={{ color: MUTED }}
            onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
            onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: RED }}>
            Apply Now
          </span>
          <h2
            className="mt-3 text-[clamp(2.5rem,6vw,4rem)] font-black text-white leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            RAD5 TechX Graduate<br />Program Interest Form
          </h2>
          <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: MUTED }}>
            Fill out the form below to register your interest. Please ensure all details are correct.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white">First Name</label>
              <input
                required
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-border text-sm transition-all focus:outline-none"
                style={{ backgroundColor: PANEL, color: FG, borderColor: "rgba(255,255,255,0.08)" }}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white">Last Name</label>
              <input
                required
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-border text-sm transition-all focus:outline-none"
                style={{ backgroundColor: PANEL, color: FG, borderColor: "rgba(255,255,255,0.08)" }}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white">Gender</label>
              <select
                required
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-border text-sm appearance-none focus:outline-none"
                style={{ backgroundColor: PANEL, color: FG, borderColor: "rgba(255,255,255,0.08)" }}
              >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white">Phone Number</label>
              <input
                required
                type="tel"
                name="phoneNumber"
                placeholder="081 ..."
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-border text-sm focus:outline-none"
                style={{ backgroundColor: PANEL, color: FG, borderColor: "rgba(255,255,255,0.08)" }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-white">Email Address</label>
            <input
              required
              type="email"
              name="emailAddress"
              placeholder="name@example.com"
              value={formData.emailAddress}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-border text-sm focus:outline-none"
              style={{ backgroundColor: PANEL, color: FG, borderColor: "rgba(255,255,255,0.08)" }}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-white">Learning Background</label>
            <select
              required
              name="learningBackground"
              value={formData.learningBackground}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-border text-sm appearance-none focus:outline-none"
              style={{ backgroundColor: PANEL, color: FG, borderColor: "rgba(255,255,255,0.08)" }}
            >
              <option value="" disabled>Where did you learn?</option>
              <option value="Tech Hub">Tech Hub</option>
              <option value="Government Program">Government Program</option>
              <option value="YouTube">YouTube</option>
              <option value="Coursera">Coursera</option>
              <option value="Udemy">Udemy</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-white">Preferred Graduate Program</label>
            <select
              required
              name="preferredProgram"
              value={formData.preferredProgram}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-border text-sm appearance-none focus:outline-none"
              style={{ backgroundColor: PANEL, color: FG, borderColor: "rgba(255,255,255,0.08)" }}
            >
              <option value="" disabled>Select a track</option>
              <option value="Backend Web Engineering Mastery">Backend Web Engineering Mastery</option>
              <option value="AI Marketing & Automation Mastery">AI Marketing & Automation Mastery</option>
              <option value="GenAI for Data Analysis & BI Mastery">GenAI for Data Analysis & BI Mastery</option>
              <option value="Advanced Product Management & Strategy Mastery">Advanced Product Management & Strategy Mastery</option>
              <option value="Entrepreneurship & Startup Development Mastery">Entrepreneurship & Startup Development Mastery</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-white">What do you hope to gain from the RAD5 TechX Graduate Program?</label>
            <textarea
              required
              name="expectations"
              rows={4}
              placeholder="Tell us about your goals..."
              value={formData.expectations}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-border text-sm focus:outline-none resize-none"
              style={{ backgroundColor: PANEL, color: FG, borderColor: "rgba(255,255,255,0.08)" }}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full cursor-pointer flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all hover:brightness-110 disabled:opacity-50"
            style={{ backgroundColor: RED }}
          >
            {status === 'loading' ? 'Submitting...' : <>Submit Application <ArrowRight size={18} /></>}
          </button>

          {status === 'error' && (
            <p className="text-center text-xs" style={{ color: RED }}>
              Something went wrong. Please try again or contact support.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}