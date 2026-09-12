import React, { useState } from 'react';
import contactPhoto from '../assets/contact_photo.jpg';

const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    permission: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/daksh24kumar@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact Form Message',
          message: formData.message,
          _subject: `Portfolio Message from ${formData.firstName}: ${formData.subject || 'New Contact'}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      if (response.ok || result.success === 'true' || result.success === true) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
          permission: true
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Email submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      id: 'email',
      icon: '✉️',
      iconBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
      label: 'Email',
      value: 'daksh24kumar@gmail.com',
      copyValue: 'daksh24kumar@gmail.com',
      link: 'mailto:daksh24kumar@gmail.com'
    },
    {
      id: 'phone',
      icon: '📞',
      iconBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      label: 'Phone',
      value: '+91 77600 35801',
      copyValue: '+917760035801',
      link: 'tel:+917760035801'
    },
    {
      id: 'location',
      icon: '📍',
      iconBg: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      label: 'Location',
      value: 'Bangalore, Karnataka, India',
      copyValue: 'Bangalore, Karnataka, India',
      link: 'https://maps.google.com/?q=Bangalore,India'
    },
    {
      id: 'linkedin',
      icon: '💼',
      iconBg: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
      label: 'LinkedIn',
      value: 'linkedin.com/in/chhavi555111',
      copyValue: 'https://www.linkedin.com/in/chhavi555111/',
      link: 'https://www.linkedin.com/in/chhavi555111/'
    },
    {
      id: 'github',
      icon: '🐱',
      iconBg: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      label: 'GitHub',
      value: 'github.com/Kgotta-Contribute',
      copyValue: 'https://github.com/Kgotta-Contribute',
      link: 'https://github.com/Kgotta-Contribute'
    },
    {
      id: 'leetcode',
      icon: '💡',
      iconBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      label: 'LeetCode',
      value: 'leetcode.com/u/DidYouCode5',
      copyValue: 'https://leetcode.com/u/DidYouCode5/',
      link: 'https://leetcode.com/u/DidYouCode5/'
    }
  ];

  return (
    <section 
      id="contact" 
      className="bg-[#120705] pt-10 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans scroll-mt-16 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(160,35,25,0.15),rgba(18,7,5,1))]"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-5 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= MAIN 3-COLUMN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= COLUMN 1: HEADER, PHOTO & AVAILABILITY ================= */}
          <div data-aos="fade-right" className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-rose-400 uppercase mb-2">
                <span>&lt;/&gt;</span>
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                <span className="block">Let's Build</span>
                <span className="block">Something</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-400 to-amber-400">
                  Amazing ✨
                </span>
              </h2>
            </div>
            
            {/* Photo Card */}
            <div className="relative w-full rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-rose-500/30 via-transparent to-amber-500/20 shadow-[0_0_40px_rgba(244,63,94,0.15)]">
              <div className="w-full h-80 sm:h-96 rounded-[22px] overflow-hidden bg-[#160b09] relative">
                <img 
                  src={contactPhoto} 
                  alt="Chhavi in Ladakh" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Availability & Response Time Card */}
            <div className="bg-[#180d0b]/90 border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl flex items-center justify-between gap-4">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center text-lg shrink-0">
                  📅
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs sm:text-sm">Available for opportunities</h4>
                  <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5 leading-tight">
                    Full-time roles | Freelance projects | Collaboration
                  </p>
                </div>
              </div>

              <div className="h-10 w-px bg-white/10 hidden sm:block shrink-0" />

              <div className="flex items-center gap-3 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center text-lg shrink-0">
                  ⚡
                </div>
                <div className="text-right">
                  <h4 className="text-white font-bold text-xs sm:text-sm">Response Time</h4>
                  <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">
                    Within 24 hours
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ================= COLUMN 2: CONTACT DETAILS & CONNECT ================= */}
          <div data-aos="fade-up" className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Header */}
            <div>
              <h3 className="text-white font-black text-xl sm:text-2xl tracking-tight">
                Let's <span className="text-rose-400">Connect</span>
              </h3>
              <div className="w-12 h-1 bg-rose-500 rounded-full mt-1.5" />
            </div>

            {/* Details List */}
            <div className="space-y-2.5">
              {contactDetails.map((item) => (
                <div 
                  key={item.id}
                  className="bg-[#180d0b]/90 border border-white/10 hover:border-rose-500/40 rounded-2xl p-3.5 transition-all duration-200 group flex items-center justify-between gap-3 shadow-md"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-xl ${item.iconBg} border flex items-center justify-center text-sm shrink-0 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <span className="text-gray-400 text-[11px] font-medium block">
                        {item.label}
                      </span>
                      <a 
                        href={item.link} 
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        className="text-white font-bold text-xs sm:text-sm truncate block hover:text-rose-300 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={() => copyToClipboard(item.copyValue, item.id)}
                    title={`Copy ${item.label}`}
                    className="w-8 h-8 rounded-lg bg-[#241310] border border-white/10 hover:border-rose-400/50 flex items-center justify-center text-gray-400 hover:text-white transition-all shrink-0 cursor-pointer"
                  >
                    {copiedField === item.id ? (
                      <span className="text-emerald-400 text-xs font-bold">✓</span>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Connect With Me Strip */}
            <div className="space-y-2.5 pt-1">
              <div className="text-gray-400 font-mono text-xs font-bold tracking-wider uppercase">
                Connect With Me
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/chhavi555111/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1e1026] border border-sky-500/30 text-sky-400 hover:bg-sky-500 hover:text-white flex items-center justify-center font-bold text-xs transition-all shadow-md hover:scale-110"
                >
                  in
                </a>
                <a
                  href="https://github.com/Kgotta-Contribute"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1128] border border-purple-500/30 text-purple-400 hover:bg-purple-500 hover:text-white flex items-center justify-center text-base transition-all shadow-md hover:scale-110"
                >
                  🐱
                </a>
                <a
                  href="https://leetcode.com/u/DidYouCode5/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#261510] border border-orange-500/30 text-orange-400 hover:bg-orange-500 hover:text-white flex items-center justify-center text-sm transition-all shadow-md hover:scale-110"
                >
                  💡
                </a>
                <a
                  href="mailto:daksh24kumar@gmail.com"
                  className="w-10 h-10 rounded-full bg-[#261014] border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white flex items-center justify-center text-sm transition-all shadow-md hover:scale-110"
                >
                  ✉️
                </a>
              </div>
            </div>

            {/* Motivational Quote Box */}
            <div className="bg-[#180d0b]/80 border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <span className="text-2xl text-rose-400 font-serif leading-none">“</span>
              <p className="text-gray-300 text-xs font-medium italic leading-relaxed">
                Great things happen when we connect and create together. ✨
              </p>
            </div>

          </div>

          {/* ================= COLUMN 3: SEND ME A MESSAGE FORM ================= */}
          <div data-aos="fade-left" className="lg:col-span-4">
            
            <div className="bg-[#180d0b]/95 border border-white/10 hover:border-rose-500/40 transition-all duration-300 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl space-y-5">
              
              {/* Form Card Header */}
              <div className="flex items-start gap-3.5 pb-2">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center text-xl shrink-0 shadow-inner">
                  ✈️
                </div>
                <div>
                  <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-tight">
                    Send Me a Message
                  </h3>
                  <p className="text-gray-400 text-xs mt-0.5 leading-snug">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                  </p>
                </div>
              </div>

              {submitStatus === 'success' ? (
                <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3">
                  <span className="text-4xl block">🎉</span>
                  <h4 className="text-emerald-300 font-extrabold text-lg">Message Sent Successfully!</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Thank you for reaching out! Your message has been routed directly to <strong className="text-white">daksh24kumar@gmail.com</strong>. I'll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus(null)}
                    className="mt-2 px-5 py-2 rounded-xl bg-emerald-700/60 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-950/60 border border-red-500/40 rounded-xl p-3 text-xs text-red-200 flex flex-col gap-1">
                      <div className="font-bold flex items-center gap-1.5 text-red-300">
                        <span>⚠️</span>
                        <span>Direct send failed.</span>
                      </div>
                      <p className="text-[11px]">
                        Please email directly at{' '}
                        <a href="mailto:daksh24kumar@gmail.com" className="underline font-bold text-white">
                          daksh24kumar@gmail.com
                        </a>.
                      </p>
                    </div>
                  )}

                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-gray-300 text-xs font-bold mb-1.5">First Name</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3 text-gray-500 text-xs">👤</span>
                        <input 
                          type="text" 
                          required
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full bg-[#120705] border border-white/10 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-xs font-bold mb-1.5">Last Name</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3 text-gray-500 text-xs">👤</span>
                        <input 
                          type="text" 
                          required
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full bg-[#120705] border border-white/10 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-300 text-xs font-bold mb-1.5">Email</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3 text-gray-500 text-xs">✉️</span>
                      <input 
                        type="email" 
                        required
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#120705] border border-white/10 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-gray-300 text-xs font-bold mb-1.5">Subject</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3 text-gray-500 text-xs">🏷️</span>
                      <input 
                        type="text" 
                        required
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#120705] border border-white/10 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 text-xs font-bold mb-1.5">Message</label>
                    <div className="relative">
                      <textarea 
                        required
                        rows="4"
                        placeholder="Type your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#120705] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors shadow-inner resize-none leading-relaxed"
                      />
                    </div>
                  </div>

                  {/* Checkbox */}
                  <label className="flex items-center gap-2.5 cursor-pointer select-none pt-1">
                    <input 
                      type="checkbox" 
                      checked={formData.permission}
                      onChange={(e) => setFormData({ ...formData, permission: e.target.checked })}
                      className="rounded border-white/20 text-rose-500 focus:ring-rose-500 bg-[#120705] accent-rose-500 w-4 h-4 cursor-pointer"
                    />
                    <span className="text-gray-400 text-[11px] leading-tight">
                      I give permission to contact me at this email address.
                    </span>
                  </label>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 disabled:opacity-60 text-white font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(244,63,94,0.35)] hover:shadow-[0_6px_30px_rgba(244,63,94,0.5)] transition-all transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="text-base">✈️</span>
                      </>
                    )}
                  </button>

                  {/* Footer Protection Note */}
                  <div className="pt-2 flex items-center gap-2 text-[10px] text-gray-500 leading-tight">
                    <span className="text-xs">🛡️</span>
                    <span>
                      This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                    </span>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
