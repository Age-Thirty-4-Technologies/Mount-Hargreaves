import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Upload,
  CheckCircle,
  AlertCircle,
  FileText,
  BedDouble,
  User,
  Phone,
  MapPin,
  Calendar,
  HeartPulse,
} from 'lucide-react';

export const Admissions = () => {
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
          <div className="w-20 h-20 bg-green-100 text-school-green rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted</h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying to Mount Hargreaves SSS. We have received your general application and the school will
            contact you.
          </p>
          <a href="/" className="btn-primary w-full inline-block">Back to Home</a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Applications</h1>

        <div className="mb-8 bg-white border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="font-bold text-gray-900">Need boarding accommodation?</div>
            <div className="text-sm text-gray-600">
              General admissions and boarding applications are separate. If the learner needs a hostel bed, submit the
              boarding form as well.
            </div>
          </div>
          <a href="/boarding" className="btn-primary inline-flex items-center justify-center gap-2">
            <BedDouble size={18} /> Boarding application
          </a>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-school-green p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">General School Application</h2>
            <p className="text-white/80">Please complete the form below. Fields marked required must be filled in.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-10">
            {/* Learner details */}
            <section>
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                <User size={20} className="text-school-green" /> Learner Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">First Name</label>
                  <input
                    required
                    type="text"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                    placeholder="Enter first name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Surname</label>
                  <input
                    required
                    type="text"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                    placeholder="Enter surname"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Date of Birth</label>
                  <input
                    required
                    type="date"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Gender</label>
                  <select className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none">
                    <option value="">Select</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Applying for Grade</label>
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
                  <label className="text-sm font-bold text-gray-700">Applying for Year</label>
                  <select
                    required
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                  >
                    <option value="">Select year</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Parent/Guardian */}
            <section>
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                <Phone size={20} className="text-school-green" /> Parent/Guardian Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Parent/Guardian Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                    placeholder="Full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Relationship to Learner</label>
                  <select className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none">
                    <option value="">Select</option>
                    <option>Parent</option>
                    <option>Guardian</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                    placeholder="012 345 6789"
                  />
                </div>
              </div>
            </section>

            {/* Address */}
            <section>
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                <MapPin size={20} className="text-school-green" /> Home Address
              </h3>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Physical Address</label>
                  <input
                    required
                    type="text"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                    placeholder="Street, village / location, town"
                  />
                </div>
              </div>
            </section>

            {/* Previous school */}
            <section>
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                <Calendar size={20} className="text-school-green" /> Previous School (if applicable)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Previous School Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                    placeholder="School name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Last Grade Completed</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none"
                    placeholder="e.g. Grade 7"
                  />
                </div>
              </div>
            </section>

            {/* Medical */}
            <section>
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                <HeartPulse size={20} className="text-school-green" /> Medical Information
              </h3>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Medical Conditions / Allergies (optional)</label>
                  <textarea
                    rows={3}
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-school-green/20 outline-none resize-none"
                    placeholder="List any medical conditions, allergies, or medication"
                  />
                </div>
              </div>
            </section>

            {/* Uploads */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <Upload size={20} className="text-school-green" /> Required Documents (PDF)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Learner Birth Certificate / ID', icon: FileText },
                  { title: 'Latest Report Card', icon: FileText },
                  { title: 'Parent/Guardian ID Copy', icon: FileText },
                  { title: 'Proof of Residence', icon: FileText },
                  { title: 'Transfer Letter (if transferring)', icon: FileText },
                  { title: 'Immunisation Card (if available)', icon: FileText },
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
                By submitting this form, you confirm that the information provided is true and correct. Incomplete
                applications may not be processed.
              </p>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-lg shadow-lg shadow-blue-900/20">
              Submit General Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
