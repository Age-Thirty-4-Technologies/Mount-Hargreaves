import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, AlertCircle, Home, FileText, Upload, BedDouble, User, Phone, Shield } from 'lucide-react';

export const Boarding = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-20 flex items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="text-center p-10 sm:p-12 bg-white rounded-3xl shadow-2xl max-w-md"
        >
          <div className="w-20 h-20 bg-blue-100 text-school-green rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Boarding Application Submitted</h2>
          <p className="text-gray-600 mb-8">Thank you. Your boarding accommodation application has been received.</p>
          <a href="/" className="btn-primary w-full inline-block">Back to Home</a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Boarding Application</h1>

        <div className="mb-8 bg-white border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="font-bold text-gray-900">Important</div>
            <div className="text-sm text-gray-600">
              This form is for hostel accommodation only. Please also submit the general school application.
            </div>
          </div>
          <a href="/admissions" className="btn-primary inline-flex items-center justify-center gap-2">
            <User size={18} /> General application
          </a>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-school-green p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Boarding Accommodation Application</h2>
            <p className="text-white/80">Use this form if the learner is applying for a hostel bed.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-10">
            <section>
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                <BedDouble size={20} className="text-school-green" /> Boarding Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Learner First Name</label>
                  <input
                    required
                    type="text"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Learner Surname</label>
                  <input
                    required
                    type="text"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Grade</label>
                  <select
                    required
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                  >
                    <option value="">Select grade</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Boarding Type</label>
                  <select
                    required
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                  >
                    <option value="">Select</option>
                    <option>Weekly boarding</option>
                    <option>Full-time boarding</option>
                  </select>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                <Phone size={20} className="text-school-green" /> Parent/Guardian Contact
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Parent/Guardian Name</label>
                  <input
                    required
                    type="text"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Parent/Guardian Phone</label>
                  <input
                    required
                    type="tel"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Parent/Guardian Email</label>
                  <input
                    required
                    type="email"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Emergency Contact (alternative)</label>
                  <input
                    type="tel"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                    placeholder="Optional"
                  />
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                <Home size={20} className="text-school-green" /> Home Address
              </h3>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Physical Address</label>
                  <input
                    required
                    type="text"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                  />
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                <Shield size={20} className="text-school-green" /> Hostel Rules & Consent
              </h3>

              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="mt-1" />
                  <span className="text-sm text-gray-700">
                    I understand that hostel placement depends on availability and the hostel process.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="mt-1" />
                  <span className="text-sm text-gray-700">
                    I agree that the learner must follow hostel rules and school code of conduct.
                  </span>
                </label>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <Upload size={20} className="text-school-green" /> Boarding Documents (PDF)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Learner Birth Certificate / ID', icon: FileText },
                  { title: 'Latest Report Card', icon: FileText },
                  { title: 'Parent/Guardian ID Copy', icon: FileText },
                  { title: 'Proof of Residence', icon: Home },
                  { title: 'Medical / Clinic Card (if available)', icon: FileText },
                  { title: 'Social Worker / Supporting Letter (if applicable)', icon: FileText },
                ].map((doc) => (
                  <div
                    key={doc.title}
                    className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-school-green transition-colors cursor-pointer"
                  >
                    <doc.icon className="mx-auto text-gray-400 mb-2" />
                    <p className="text-sm font-medium">{doc.title}</p>
                    <p className="text-xs text-gray-400">Click to upload PDF</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-yellow-50 p-4 rounded-xl flex gap-3 items-start">
              <AlertCircle className="text-yellow-600 shrink-0" size={20} />
              <p className="text-sm text-yellow-800">
                Submitting this form does not guarantee accommodation. Allocation depends on availability and the school
                hostel process.
              </p>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-lg shadow-lg shadow-blue-900/20">
              Submit Boarding Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
