

// import React from 'react';

// interface NoteCardProps {
//   title: string;
//   content: string;
// }

// const NoteCard: React.FC<NoteCardProps> = ({ title, content }) => {
//   return (
//     <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
//       <h2 className="text-xl font-semibold mb-2">{title}</h2>
//       <p className="text-gray-700">{content}</p>
//     </div>
//   );
// };

// export default NoteCard;
import React from 'react';

interface NoteCardProps {
  title: string;
  content: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, content }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default NoteCard;