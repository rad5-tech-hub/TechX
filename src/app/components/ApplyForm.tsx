import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import {Turnstile} from '@marsidev/react-turnstile';
import { NAVY, RED, BLUE, MUTED, PANEL, FG } from "../constants";

export default function ApplyForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    age_range: '',
    gender: '',
    phone: '',
    email: '',
    city: '',
    tech_duration: '',
    tech_skill: '',
    tech_area: '',
    prog_track: '',
    prog_reason: '',
    prog_goal: '',
    workedOnProject: '',
    workingLaptop: '',
    internetAccess: '',
    powerAccess: '',
    learningFormat: '',
    committment: '',
    availability: [] as string[],
    current_stage: '',
    personal_profile: [] as string[],
    application_statement: '',
    acknowledgment: false,
    portfolio_link: '',
    linkedin_link: '',
    github_link: '',
    source_of_lead: '',
  });

  const [turnstileToken, setTurnstileToken] = useState('');
  const [remoteIp, setRemoteIp] = useState('');
  const [apiMessage, setApiMessage] = useState('');

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Validation Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  const linkedinRegex = /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
  const githubBehanceRegex = /^https:\/\/(www\.)?(github\.com|behance\.net)\/[a-zA-Z0-9_-]+\/?$/;
  const urlRegex = /^https?:\/\/.+/;

  // Ensure the page scrolls to the top on initial load and when changing steps
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  useEffect(() => {
    // Retrieve client IP for the webhook payload
    fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(data => setRemoteIp(data.ip))
        .catch(() => setRemoteIp('0.0.0.0'));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        setFormData({ ...formData, [name]: checked });
    } else {
        setFormData({ ...formData, [name]: value });
    }
  };

  const handleArrayChange = (name: 'availability' | 'personal_profile', value: string) => {
    const currentValues = formData[name] as string[];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    setFormData({ ...formData, [name]: updatedValues });
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return (
          !!formData.firstname && !!formData.lastname && !!formData.age_range && !!formData.gender && 
          !!formData.phone && phoneRegex.test(formData.phone) && 
          !!formData.email && emailRegex.test(formData.email) && 
          !!formData.city
        );
      case 2:
        return formData.tech_duration && formData.tech_skill && formData.tech_area;
      case 3:
        return (
          formData.prog_track && formData.prog_reason && formData.prog_goal && 
          formData.workedOnProject && formData.workingLaptop && formData.internetAccess && formData.powerAccess
        );
      case 4:
        return formData.learningFormat && formData.committment && formData.availability.length > 0;
      case 5:
        return formData.current_stage && formData.personal_profile.length > 0;
      case 6:
        return (
          !!formData.application_statement && !!formData.acknowledgment && !!formData.source_of_lead &&
          (!formData.portfolio_link || urlRegex.test(formData.portfolio_link)) &&
          (!formData.linkedin_link || linkedinRegex.test(formData.linkedin_link)) &&
          (!formData.github_link || githubBehanceRegex.test(formData.github_link))
        );
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (isStepValid()) {
      setStep((prev) => Math.min(prev + 1, 6));
      setApiMessage('');
      if (status === 'error') setStatus('idle');
    } else {
      if (step === 1) {
        if (formData.email && !emailRegex.test(formData.email)) setApiMessage('Please enter a valid email address.');
        else if (formData.phone && !phoneRegex.test(formData.phone)) setApiMessage('Please enter a valid phone number.');
        else setApiMessage('Please complete all fields in this section.');
      } else if (step === 6) {
        if (formData.linkedin_link && !linkedinRegex.test(formData.linkedin_link)) setApiMessage('Invalid LinkedIn profile URL.');
        else if (formData.github_link && !githubBehanceRegex.test(formData.github_link)) setApiMessage('Invalid GitHub or Behance URL.');
        else if (formData.portfolio_link && !urlRegex.test(formData.portfolio_link)) setApiMessage('Invalid Portfolio URL.');
        else setApiMessage('Please complete all fields in this section.');
      } else {
        setApiMessage('Please complete all fields in this section to continue.');
      }
      setStatus('error');
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiMessage('');

    if (!isStepValid()) {
      if (formData.linkedin_link && !linkedinRegex.test(formData.linkedin_link)) 
        setApiMessage('Invalid LinkedIn profile URL.');
      else if (formData.github_link && !githubBehanceRegex.test(formData.github_link)) 
        setApiMessage('Invalid GitHub or Behance URL.');
      else if (formData.portfolio_link && !urlRegex.test(formData.portfolio_link)) 
        setApiMessage('Invalid Portfolio URL.');
      else 
        setApiMessage('Please complete all required fields.');
      setStatus('error');
      return;
    }

    if (!turnstileToken) {
      setStatus('error');
      setApiMessage('Please complete the Turnstile verification.');
      return;
    }

    setStatus('loading');

    try {
      const payload = {
        ...formData,
        turnstileToken,
        remoteIp
      };

      const response = await fetch(import.meta.env.VITE_TECHX_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': import.meta.env.VITE_TECHX_AUTH_TOKEN
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setApiMessage(result.message || 'Error submitting application.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setApiMessage('Connection failed. Please check your internet.');
    }
  };

  if (status === 'success') {
    return (
      <section className="min-h-[80vh] flex items-center justify-center px-4 pt-24 pb-12" style={{ backgroundColor: NAVY }}>
        <div className="max-w-md w-full text-center p-8 rounded-2xl border border-border" style={{ backgroundColor: PANEL }}>
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} style={{ color: BLUE }} />
          </div>
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Application Received!</h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: MUTED }}>
            Your application has been completed. You will receive an email shortly.
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
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3, 4, 5, 6].map((s) => (
              <div 
                key={s} 
                className="h-1.5 w-8 rounded-full transition-all duration-500"
                style={{ backgroundColor: step >= s ? RED : 'rgba(255,255,255,0.1)' }}
              />
            ))}
          </div>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: RED }}>Step {step} of 6</span>
          <h2
            className="mt-3 text-[clamp(2rem,5vw,3rem)] font-black text-white leading-tight uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Pre-Assessment &<br />Eligibility Form
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">A. Personal Information</h3>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField label="First Name" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="John" />
                  <InputField label="Last Name" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Doe" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <SelectField label="What is your age range?" name="age_range" value={formData.age_range} onChange={handleChange} options={["Below 18", "18 – 21", "22 – 25", "26 – 30", "31 – 35", "36 and Above"]} />
                  <SelectField label="What is your gender?" name="gender" value={formData.gender} onChange={handleChange} options={["Male", "Female", "Prefer not to say"]} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField label="What is your phone number?" name="phone" value={formData.phone} onChange={handleChange} placeholder="+23480 ..." type="tel" />
                  <InputField label="What is your email address?" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" type="email" />
                </div>
                <InputField label="Which city and country do you reside in?" name="city" value={formData.city} onChange={handleChange} placeholder="Lagos, Nigeria" />                
              
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">B. Tech Background</h3>
              <div className="space-y-4">
                <SelectField label="How long have you been learning or practicing tech?" name="tech_duration" value={formData.tech_duration} onChange={handleChange} options={["1 – 3 Months", "4 – 6 Months", "7 – 9 Months", "10 – 12 Months", "1 – 2 Years", "2 – 3 Years", "3 – 5 Years", "Above 5 years"]} />
                <SelectField label="Where did you learn your tech skill(s)?" name="tech_skill" value={formData.tech_skill} onChange={handleChange} options={["Tech Hub Bootcamp", "Government-Sponsored Digital Program (3MTT, TechRise, etc.)", "University / Polytechnic", "Self-Taught (YouTube, Coursera, Udemy, etc.)", "Internship / Workplace Experience", "Others"]} />
                <SelectField label="What area of tech are you currently focused on?" name="tech_area" value={formData.tech_area} onChange={handleChange} options={["Software Development", "Product Design", "Product Management", "Data Analysis", "AI / Automation", "Digital Marketing", "Entrepreneurship / Startup", "Others"]} />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">C. Program Readiness</h3>
              <div className="space-y-4">
                <SelectField label="Which RAD5 TechX Graduate Program are you applying for?" name="prog_track" value={formData.prog_track} onChange={handleChange} options={["Backend Web Engineering Mastery", "AI Marketing & Automation Mastery", "GenAI for Data Analysis & BI Mastery", "Advanced Product Management & Strategy Mastery", "Entrepreneurship & Startup Development Mastery"]} />
                <TextAreaField label="Why do you want to join this program?" name="prog_reason" value={formData.prog_reason} onChange={handleChange} />
                <TextAreaField label="What do you hope to achieve after this program?" name="prog_goal" value={formData.prog_goal} onChange={handleChange} />
                <SelectField label="Have you ever worked on any real project before?" name="workedOnProject" value={formData.workedOnProject} onChange={handleChange} options={["Yes", "No", "Currently-working"]} />
                <div className="grid grid-cols-1 gap-4">
                  <SelectField label="Do you have a working laptop for the program?" name="workingLaptop" value={formData.workingLaptop} onChange={handleChange} options={["Yes", "No"]} />
                  <SelectField label="Do you have access to a reliable internet connection?" name="internetAccess" value={formData.internetAccess} onChange={handleChange} options={["Yes", "No"]} />
                  <SelectField label="Do you have access to a stable power supply?" name="powerAccess" value={formData.powerAccess} onChange={handleChange} options={["Yes", "No"]} />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">D. Learning Preference</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <SelectField label="What is your preferred learning format?" name="learningFormat" value={formData.learningFormat} onChange={handleChange} options={["Physical", "Online", "Hybrid"]} />
                  <SelectField label="Are you able to commit to the 12-week intensive program?" name="committment" value={formData.committment} onChange={handleChange} options={["Yes", "No"]} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white">Are you available for:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Morning Classes", "Evening Classes", "Weekend Sessions", "Mentorship Sessions", "Group Projects", "Presentations & Demo Days"].map(opt => (
                      <Checkbox key={opt} label={opt} checked={formData.availability.includes(opt)} onChange={() => handleArrayChange('availability', opt)} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">E. Professional Readiness</h3>
              <div className="space-y-4">
                <SelectField label="Which best describes your current stage?" name="current_stage" value={formData.current_stage} onChange={handleChange} options={["I’m still learning basics", "I have beginner knowledge but lack confidence", "I can build basic projects", "I’m trying to become job-ready", "I’m already working but want to grow faster"]} />
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white">Do you currently have:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["A portfolio", "A CV/Resume", "LinkedIn profile", "GitHub/Behance account", "None yet"].map(opt => (
                      <Checkbox key={opt} label={opt} checked={formData.personal_profile.includes(opt)} onChange={() => handleArrayChange('personal_profile', opt)} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">F. Final Commitment & Profile</h3>
              <div className="space-y-4">
                <TextAreaField label="Why should you be selected for this program?" name="application_statement" value={formData.application_statement} onChange={handleChange} />
                <InputField label="Please provide your portfolio link (if any)" name="portfolio_link" value={formData.portfolio_link} onChange={handleChange} placeholder="https://..." type="url" required={false} />
                <InputField label="What is your LinkedIn profile URL?" name="linkedin_link" value={formData.linkedin_link} onChange={handleChange} placeholder="https://linkedin.com/in/..." type="url" required={false} />
                <InputField label="What is your GitHub or Behance profile URL?" name="github_link" value={formData.github_link} onChange={handleChange} placeholder="https://..." type="url" required={false} />
                <SelectField label="How did you hear about this program?" name="source_of_lead" value={formData.source_of_lead} onChange={handleChange} options={["Facebook Ad", "Facebook Post", "Google Search", "Handbill", "Instagram", "Radio", "Word-of-Mouth", "Billboard", "AI", "LinkedIn", "WhatsApp Group", "Blog Website", "Referral / Friend", "RAD5 Website", "Others"]} />
                
                <label className="flex items-start gap-3 p-4 rounded-xl border border-white/5" style={{ backgroundColor: PANEL }}>
                    <input 
                        name="acknowledgment" 
                        type="checkbox" 
                        checked={formData.acknowledgment}
                        onChange={handleChange} 
                        required 
                        className="mt-1"
                    />
                    <span className="text-xs text-white/70 font-bold uppercase tracking-wider">I understand that this is an intensive, practical, mentorship-driven graduate program and not a beginner bootcamp.</span>
                </label>
              </div>

              <div className="flex justify-center py-4">
                <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY} onSuccess={setTurnstileToken} />
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex-1 py-4 rounded-xl font-bold text-white border border-white/10 transition-all hover:bg-white/5 cursor-pointer text-sm lg:text-base"
              >
                Previous
              </button>
            )}
            
            {step < 6 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex-1 py-4 rounded-xl font-bold text-white transition-all hover:brightness-110 cursor-pointer text-sm lg:text-base"
                style={{ backgroundColor: BLUE }}
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-[2] flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all hover:brightness-110 disabled:opacity-50 cursor-pointer text-sm lg:text-base"
                style={{ backgroundColor: RED }}
              >
                {status === 'loading' ? 'Submitting...' : <>Submit Application <ArrowRight size={18} /></>}
              </button>
            )}
          </div>

          {status === 'error' && (
            <p className="text-center text-xs" style={{ color: RED }}>
              {apiMessage || 'Something went wrong. Please try again or contact support.'}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

const InputField = ({ label, name, value, onChange, placeholder, type = "text", required = true }: any) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-wider text-white/70">{label}</label>
    <input
      required={required}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-4 rounded-xl border border-border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      style={{ backgroundColor: PANEL, color: FG, borderColor: "rgba(255,255,255,0.08)" }}
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }: any) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-wider text-white/70">{label}</label>
    <select
      required
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-4 rounded-xl border border-border text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      style={{ backgroundColor: PANEL, color: FG, borderColor: "rgba(255,255,255,0.08)" }}
    >
      <option value="" disabled>Select an option</option>
      {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const TextAreaField = ({ label, name, value, onChange }: any) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-wider text-white/70">{label}</label>
    <textarea
      required
      name={name}
      rows={3}
      placeholder="Write here..."
      value={value}
      onChange={onChange}
      className="w-full p-4 rounded-xl border border-border text-sm focus:outline-none resize-none focus:ring-2 focus:ring-blue-500/50"
      style={{ backgroundColor: PANEL, color: FG, borderColor: "rgba(255,255,255,0.08)" }}
    />
  </div>
);

const Checkbox = ({ label, checked, onChange }: any) => (
  <label className="flex items-center gap-3 p-3 rounded-lg border border-white/5 cursor-pointer transition-colors hover:bg-white/5" style={{ backgroundColor: PANEL }}>
    <input 
      type="checkbox" 
      checked={checked} 
      onChange={onChange}
      className="w-4 h-4 rounded border-white/20 bg-transparent text-blue-500 focus:ring-blue-500" 
    />
    <span className="text-xs text-white/80">{label}</span>
  </label>
);