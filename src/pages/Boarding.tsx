import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle,
  AlertCircle,
  Home,
  FileText,
  Upload,
  BedDouble,
  User,
  Phone,
  Shield,
  Calendar,
} from 'lucide-react';
import {
  generateId,
  generateStudentNumber,
  getApplications,
  setApplications,
  type Application,
  type UploadedFile,
} from '../admin/utils/storage';

type UploadField = {
  key: string;
  label: string;
  required?: boolean;
};

const uploadFields: UploadField[] = [
  { key: 'learnerId', label: 'Learner Birth Certificate / ID', required: true },
  { key: 'reportCard', label: 'Latest Report Card', required: true },
  { key: 'guardianId', label: 'Parent/Guardian ID Copy', required: true },
  { key: 'residence', label: 'Proof of Residence', required: true },
  { key: 'medicalCard', label: 'Medical / Clinic Card (if available)' },
  { key: 'supportLetter', label: 'Supporting Letter (if applicable)' },
];

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

async function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

export const Boarding = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>('');

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    grade: '',
    year: '2027',
    boardingType: '',

    guardianName: '',
    guardianPhone: '',
    guardianEmail: '',

    address: '',
    locality: '',

    previousSchool: '',
  });

  const [files, setFiles] = useState<Record<string, File | null>>({});

  const missingRequiredUploads = useMemo(() => {
    return uploadFields.filter((f) => f.required).filter((f) => !files[f.key]);
  }, [files]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.gender) {
      setError('Please select a gender before submitting.');
      return;
    }

    if (missingRequiredUploads.length > 0) {
      setError('Please upload all required documents before submitting.');
      return;
    }

    setSubmitting(true);
    try {
      const uploads: UploadedFile[] = [];
      for (const field of uploadFields) {
        const file = files[field.key];
        if (!file) continue;
        const dataUrl = await fileToDataUrl(file);
        uploads.push({
          key: field.key,
          label: field.label,
          fileName: file.name,
          mimeType: file.type || 'application/octet-stream',
          dataUrl,
        });
      }

      const app: Application = {
        id: generateId(),

        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        dob: form.dob,
        gender: form.gender,
        grade: form.grade,
        year: form.year,

        studentNumber: generateStudentNumber(form.year),

        guardianName: form.guardianName.trim(),
        guardianRelationship: '',
        guardianPhone: form.guardianPhone.trim(),
        guardianEmail: form.guardianEmail.trim(),

        address: form.address.trim(),
        locality: form.locality.trim(),

        previousSchool: form.previousSchool.trim(),
        lastGradeCompleted: '',

        medicalInfo: '',

        applicationType: 'Boarding',
        boardingType: form.boardingType,

        uploads,

        subjectMarks: [],
        averageMark: 0,

        status: 'Pending',
        submittedDate: todayISO(),
      };

      const current = getApplications();
      setApplications([app, ...current]);
      setSubmitted(true);
    } catch {
      setError('Something went wrong while submitting. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // Rest of Boarding component unchanged
  return (
    <div className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Boarding Application</h1>
        {/* Form UI omitted for brevity; should include a required Gender select tied to form.gender */}
      </div>
    </div>
  );
};
