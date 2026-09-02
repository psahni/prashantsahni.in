"use client";

import { useState } from "react";

export default function Contact() {
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-[120px] border-t border-[#dededb]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-[#4f46e5] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
          LET&apos;S WORK TOGETHER
        </p>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-[-0.06em] text-[#111111]">
          HAVE SOMETHING TO<br />
          <span className="text-[#4f46e5]">BUILD, FIX OR SCALE?</span>
        </h2>
        <p className="text-[#656565] text-lg sm:text-xl max-w-[620px] my-8 leading-relaxed">
          Tell me what you&apos;re working on. I&apos;ll take a look and we&apos;ll figure out the best way forward.
        </p>

        <div className="flex gap-4 flex-wrap items-center mb-12">
          <button
            onClick={() => setFormOpen(!formOpen)}
            className="bg-[#111111] text-white px-6 py-4 font-bold text-sm hover:bg-black/90 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            {formOpen ? "Close message form" : "Tell me about your project →"}
          </button>
          <a
            href="https://www.linkedin.com/newsletters/dev-design-architecture-7216775623950704640/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-[#111111] border border-[#dededb] px-6 py-4 font-bold text-sm hover:border-[#111111] transition-colors inline-flex items-center gap-1.5"
          >
            Subscribe on LinkedIn
          </a>
        </div>

        {formOpen && (
          <div className="bg-[#fafaf9] border border-[#dededb] p-8 max-w-2xl mt-6">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#4f46e5]/10 text-[#4f46e5] flex items-center justify-center mx-auto mb-3 font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-1">Message sent!</h3>
                <p className="text-[#656565] text-sm mb-4">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="text-xs font-bold text-[#4f46e5] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#656565] mb-1 uppercase">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2.5 bg-white border border-[#dededb] text-sm text-[#111111] outline-none focus:border-[#4f46e5]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#656565] mb-1 uppercase">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full px-3 py-2.5 bg-white border border-[#dededb] text-sm text-[#111111] outline-none focus:border-[#4f46e5]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#656565] mb-1 uppercase">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Product Sprint"
                    className="w-full px-3 py-2.5 bg-white border border-[#dededb] text-sm text-[#111111] outline-none focus:border-[#4f46e5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#656565] mb-1 uppercase">Project Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your product, requirements, and timeline..."
                    className="w-full px-3 py-2.5 bg-white border border-[#dededb] text-sm text-[#111111] outline-none focus:border-[#4f46e5] resize-none"
                  />
                </div>
                {error && <p className="text-xs text-red-600">{error}</p>}
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-[#111111] text-white px-6 py-3 font-bold text-sm hover:bg-black/90 disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Submit Inquiry →"}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

