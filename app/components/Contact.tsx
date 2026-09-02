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
    <section id="contact" className="py-24 lg:py-[120px] bg-[#17372D] text-[#F5F3ED]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-[#C8F04A] font-mono text-[12px] font-bold tracking-[0.18em] uppercase mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
          LET&apos;S WORK TOGETHER
        </p>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-[-0.06em] text-[#F5F3ED]">
          HAVE SOMETHING TO<br />
          <span className="text-[#C8F04A]">BUILD, FIX OR SCALE?</span>
        </h2>
        <p className="text-[#D9D8D0]/80 text-lg sm:text-xl max-w-[620px] my-8 leading-relaxed">
          Tell me what you&apos;re working on. I&apos;ll take a look and we&apos;ll figure out the best way forward.
        </p>

        <div className="flex gap-4 flex-wrap items-center mb-12">
          <button
            onClick={() => setFormOpen(!formOpen)}
            className="bg-[#C8F04A] text-[#17372D] px-6 py-4 font-bold text-sm hover:bg-[#C8F04A]/90 transition-colors inline-flex items-center gap-2 cursor-pointer rounded shadow-sm"
          >
            {formOpen ? "Close message form" : "Tell me about your project →"}
          </button>
          <a
            href="https://www.linkedin.com/newsletters/dev-design-architecture-7216775623950704640/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-[#F5F3ED] border border-[#F5F3ED]/25 px-6 py-4 font-bold text-sm hover:border-[#C8F04A] hover:text-[#C8F04A] transition-colors inline-flex items-center gap-2 rounded"
          >
            Subscribe on LinkedIn →
          </a>
        </div>

        {formOpen && (
          <div className="bg-[#FFFDF8] border border-[#D9D8D0] p-8 max-w-2xl mt-6 rounded-lg text-[#17372D] shadow-lg">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#C8F04A] text-[#17372D] flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#17372D] mb-1">Message sent!</h3>
                <p className="text-[#66706A] text-sm mb-4">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="text-xs font-bold text-[#17372D] underline hover:opacity-80"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#66706A] mb-1 uppercase font-bold">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 bg-[#F5F3ED] border border-[#D9D8D0] text-sm text-[#17372D] outline-none focus:border-[#17372D] rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#66706A] mb-1 uppercase font-bold">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 bg-[#F5F3ED] border border-[#D9D8D0] text-sm text-[#17372D] outline-none focus:border-[#17372D] rounded"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#66706A] mb-1 uppercase font-bold">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Product Sprint"
                    className="w-full px-3.5 py-2.5 bg-[#F5F3ED] border border-[#D9D8D0] text-sm text-[#17372D] outline-none focus:border-[#17372D] rounded"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#66706A] mb-1 uppercase font-bold">Project Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your product, requirements, and timeline..."
                    className="w-full px-3.5 py-2.5 bg-[#F5F3ED] border border-[#D9D8D0] text-sm text-[#17372D] outline-none focus:border-[#17372D] resize-none rounded"
                  />
                </div>
                {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-[#17372D] text-[#F5F3ED] px-6 py-3.5 rounded font-bold text-sm hover:bg-[#17372D]/90 disabled:opacity-50 inline-flex items-center gap-2 cursor-pointer"
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


