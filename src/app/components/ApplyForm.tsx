import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAVY, RED, BLUE, MUTED, PANEL, FG } from "../constants";

export default function ApplyForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    ageRange: '',
    gender: '',
    phoneNumber: '',
    emailAddress: '',
    cityCountry: '',
    experienceDuration: '',
    learningSource: '',
    techFocus: '',
    preferredProgram: '',
    whyJoin: '',
    goals: '',
    realProject: '',
    laptop: '',
    internet: '',
    power: '',
    learningFormat: '',
    commitment: '',
    availability: [] as string[],
    currentStage: '',
    assets: [] as string[],
    whySelected: '',
    understanding: '',
    portfolioLink: '',
    linkedinLink: '',
    githubLink: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Ensure the page scrolls to the top on initial load and when changing steps
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (name: 'availability' | 'assets', value: string) => {
    const currentValues = formData[name];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    setFormData({ ...formData, [name]: updatedValues });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Save to local storage for now
      localStorage.setItem('techx_application', JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString()
      }));
      
      // Simulate a small delay for UX
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
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
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s} 
                className="h-1.5 w-12 rounded-full transition-all duration-500"
                style={{ backgroundColor: step >= s ? RED : 'rgba(255,255,255,0.1)' }}
              />
            ))}
          </div>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: RED }}>Step {step} of 4</span>
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
              <h3 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">A. Personal Information & B. Tech Background</h3>
              <div className="space-y-4">
                <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <SelectField label="Age Range" name="ageRange" value={formData.ageRange} onChange={handleChange} options={["Below 18", "18 – 21", "22 – 25", "26 – 30", "31 – 35", "36 and Above"]} />
                  <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={["Male", "Female", "Prefer not to say"]} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="081 ..." type="tel" />
                  <InputField label="Email Address" name="emailAddress" value={formData.emailAddress} onChange={handleChange} placeholder="name@example.com" type="email" />
                </div>
                <InputField label="City, Country" name="cityCountry" value={formData.cityCountry} onChange={handleChange} placeholder="Lagos, Nigeria" />
                <SelectField label="How long have you been learning or practicing tech?" name="experienceDuration" value={formData.experienceDuration} onChange={handleChange} options={["1 – 3 Months", "3 – 6 Months", "6 – 9 Months", "9 – 12 Months", "12 – 18 Months", "18 – 24 Months", "2 – 3 Years", "3 – 4 Years", "4 – 5 Years", "5 Years and Above"]} />
                <SelectField label="Where did you learn your tech skill(s)?" name="learningSource" value={formData.learningSource} onChange={handleChange} options={["Tech Hub Bootcamp", "Government-Sponsored Digital Program", "University / Polytechnic", "Self-Taught (YouTube, Coursera, Udemy, etc.)", "Internship / Workplace Experience", "Others"]} />
                <SelectField label="What area of tech are you currently focused on?" name="techFocus" value={formData.techFocus} onChange={handleChange} options={["Software Development", "Product Design", "Product Management", "Data Analysis", "AI / Automation", "Digital Marketing", "Entrepreneurship / Startup", "Others"]} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">C. Program Readiness</h3>
              <div className="space-y-4">
                <SelectField label="Which RAD5 TechX Graduate Program are you applying for?" name="preferredProgram" value={formData.preferredProgram} onChange={handleChange} options={["Backend Web Engineering Mastery", "AI Marketing & Automation Mastery", "GenAI for Data Analysis & BI Mastery", "Advanced Product Management & Strategy Mastery", "Entrepreneurship & Startup Development Mastery"]} />
                <TextAreaField label="Why do you want to join this program?" name="whyJoin" value={formData.whyJoin} onChange={handleChange} />
                <TextAreaField label="What do you hope to achieve after this program?" name="goals" value={formData.goals} onChange={handleChange} />
                <SelectField label="Have you ever worked on any real project before?" name="realProject" value={formData.realProject} onChange={handleChange} options={["Yes", "No", "Currently Working on One"]} />
                <div className="grid sm:grid-cols-3 gap-4">
                  <SelectField label="Working Laptop?" name="laptop" value={formData.laptop} onChange={handleChange} options={["Yes", "No"]} />
                  <SelectField label="Reliable Internet?" name="internet" value={formData.internet} onChange={handleChange} options={["Yes", "No", "Sometimes"]} />
                  <SelectField label="Stable Power?" name="power" value={formData.power} onChange={handleChange} options={["Yes", "No", "Sometimes"]} />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">D. Learning Preference & E. Professional Readiness</h3>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <SelectField label="Preferred Learning Format" name="learningFormat" value={formData.learningFormat} onChange={handleChange} options={["Physical", "Online", "Hybrid"]} />
                  <SelectField label="12-week intensive commitment?" name="commitment" value={formData.commitment} onChange={handleChange} options={["Yes", "No"]} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white">Are you available for:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Evening Classes", "Weekend Sessions", "Mentorship Sessions", "Group Projects", "Presentations & Demo Days"].map(opt => (
                      <Checkbox key={opt} label={opt} checked={formData.availability.includes(opt)} onChange={() => handleCheckboxChange('availability', opt)} />
                    ))}
                  </div>
                </div>
                <SelectField label="Which best describes your current stage?" name="currentStage" value={formData.currentStage} onChange={handleChange} options={["I’m still learning basics", "I have beginner knowledge but lack confidence", "I can build basic projects", "I’m trying to become job-ready", "I’m already working but want to grow faster"]} />
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white">Do you currently have:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["A portfolio", "A CV/Resume", "LinkedIn profile", "GitHub/Behance account", "None yet"].map(opt => (
                      <Checkbox key={opt} label={opt} checked={formData.assets.includes(opt)} onChange={() => handleCheckboxChange('assets', opt)} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">E. Final Commitment & F. Profile</h3>
              <div className="space-y-4">
                <TextAreaField label="Why should you be selected for this program?" name="whySelected" value={formData.whySelected} onChange={handleChange} />
                <SelectField label="Understand this is an intensive graduate program?" name="understanding" value={formData.understanding} onChange={handleChange} options={["Yes", "No"]} />
                <InputField label="Portfolio Link" name="portfolioLink" value={formData.portfolioLink} onChange={handleChange} placeholder="https://..." />
                <InputField label="LinkedIn Profile" name="linkedinLink" value={formData.linkedinLink} onChange={handleChange} placeholder="https://linkedin.com/in/..." />
                <InputField label="GitHub/Behance Link" name="githubLink" value={formData.githubLink} onChange={handleChange} placeholder="https://..." />
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
            
            {step < 4 ? (
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
              Something went wrong. Please try again or contact support.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

const InputField = ({ label, name, value, onChange, placeholder, type = "text" }: any) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-wider text-white/70">{label}</label>
    <input
      required
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-4 rounded-xl border border-border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-500/50"
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
      className="w-full p-4 rounded-xl border border-border text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-red-500/50"
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
      className="w-full p-4 rounded-xl border border-border text-sm focus:outline-none resize-none focus:ring-2 focus:ring-red-500/50"
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
      className="w-4 h-4 rounded border-white/20 bg-transparent text-red-500 focus:ring-red-500" 
    />
    <span className="text-xs text-white/80">{label}</span>
  </label>
);