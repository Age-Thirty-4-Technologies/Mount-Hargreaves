import React from 'react';
import { User } from 'lucide-react';

interface StaffMember {
  name: string;
  position: string;
  category: string;
  image?: string;
}

const staffData: StaffMember[] = [
  // Leadership
  { name: 'Ms. B. Ngozwana', position: 'Principal', category: 'Leadership' },
  { name: 'Mr. M. Leanya', position: 'Deputy Principal', category: 'Leadership' },

  // Departmental Heads
  { name: 'Mrs. N. Mbolekwa', position: 'Head of Humanities', category: 'Departmental Heads' },
  { name: 'Mr. A. Venevene', position: 'Head of Maths & Science', category: 'Departmental Heads' },
  { name: 'Mr. M. Leanya', position: 'Head of Languages', category: 'Departmental Heads' },
  { name: 'Ms. N.Z. Mteto', position: 'Head of School Admin', category: 'Departmental Heads' },

  // Class Teachers
  { name: 'Ms. P.E. Chaphi', position: 'Class Teacher — Grade 8A', category: 'Class Teachers' },
  { name: 'Mr. E. Ntloko', position: 'Class Teacher — Grade 8B', category: 'Class Teachers' },
  { name: 'Ms. B. Maqubu', position: 'Class Teacher — Grade 8C', category: 'Class Teachers' },
  { name: 'Mr. Y.K. Jingxi', position: 'Class Teacher — Grade 9A', category: 'Class Teachers' },
  { name: 'Ms. N. Mdikane', position: 'Class Teacher — Grade 9B', category: 'Class Teachers' },
  { name: 'Mrs. Qadi', position: 'Class Teacher — Grade 9C', category: 'Class Teachers' },
  { name: 'Mr. Y. Bhani', position: 'Class Teacher — Grade 10A', category: 'Class Teachers' },
  { name: 'Mr. L. Magadla', position: 'Class Teacher — Grade 10B1', category: 'Class Teachers' },
  { name: 'Ms. M.F. Fafudi', position: 'Class Teacher — Grade 10B2', category: 'Class Teachers' },
  { name: 'Mr. M. Mboleni', position: 'Class Teacher — Grade 10C', category: 'Class Teachers' },
  { name: 'Mr. H.M. Senekane', position: 'Class Teacher — Grade 11A', category: 'Class Teachers' },
  { name: 'Ms. V. Mbo', position: 'Class Teacher — Grade 11B', category: 'Class Teachers' },
  { name: 'Mr. P.M. Nkondlo', position: 'Class Teacher — Grade 11C', category: 'Class Teachers' },
  { name: 'Ms. S.E. Meselane', position: 'Class Teacher — Grade 12A', category: 'Class Teachers' },
  { name: 'Mrs. N. Ndlela', position: 'Class Teacher — Grade 12B', category: 'Class Teachers' },
  { name: 'Mrs. N.C. Mabindisa', position: 'Class Teacher — Grade 12C', category: 'Class Teachers' },

  // Non-Teaching Staff
  { name: 'Ms. N.Z. Mteto', position: 'School Administrator', category: 'Support Staff' },
  { name: 'Mr. D.M. Mfunda', position: 'Security', category: 'Support Staff' },
  { name: 'Ms. T. Sefadi', position: 'Learner Support Agent', category: 'Support Staff' },
];

const categories = ['Leadership', 'Departmental Heads', 'Class Teachers', 'Support Staff'];

const categoryColors: Record<string, string> = {
  'Leadership': 'bg-green-700',
  'Departmental Heads': 'bg-green-600',
  'Class Teachers': 'bg-green-500',
  'Support Staff': 'bg-green-400',
};

const StaffCard = ({ member }: { member: StaffMember }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col items-center p-6 text-center">
    <div className="w-24 h-24 rounded-full bg-gray-100 border-4 border-green-100 flex items-center justify-center mb-4 overflow-hidden">
      {member.image ? (
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <User size={40} className="text-gray-400" />
      )}
    </div>
    <h3 className="text-base font-bold text-gray-800 leading-tight">{member.name}</h3>
    <p className="text-sm text-green-700 font-medium mt-1">{member.position}</p>
  </div>
);

export const Staff = () => {
  const [activeCategory, setActiveCategory] = React.useState('Leadership');

  const filtered = staffData.filter(m => m.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800 mb-3">Our Staff</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Meet the dedicated team of educators and support staff at Mt Hargreaves Senior Secondary School.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? `${categoryColors[cat]} text-white shadow-md`
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-green-400 hover:text-green-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Staff Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filtered.map((member, index) => (
            <StaffCard key={index} member={member} />
          ))}
        </div>

        {/* Coming Soon Note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          Staff photos and additional members will be added soon.
        </p>
      </div>
    </div>
  );
};
