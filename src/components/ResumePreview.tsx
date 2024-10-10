import React from 'react';

interface ResumePreviewProps {
  originalResume: string | null;
  updatedSections: Record<string, string>;
  atsScore: number | null;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({
  originalResume,
  updatedSections,
  atsScore,
}) => {
  if (!originalResume) {
    return <div className="text-gray-500">Upload a resume to see the preview</div>;
  }

  const sections = originalResume.split('\n\n');
  const updatedResume = sections.map((section) => {
    const [sectionTitle, ...sectionContent] = section.split('\n');
    if (updatedSections[sectionTitle]) {
      return (
        <div key={sectionTitle} className="mb-4">
          <h3 className="font-bold">{sectionTitle}</h3>
          <div className="whitespace-pre-wrap">{updatedSections[sectionTitle]}</div>
        </div>
      );
    }
    return (
      <div key={sectionTitle} className="mb-4">
        <h3 className="font-bold">{sectionTitle}</h3>
        <div className="whitespace-pre-wrap">{sectionContent.join('\n')}</div>
      </div>
    );
  });

  return (
    <div className="border rounded p-4 bg-gray-50">
      <div className="font-sans">{updatedResume}</div>
      {atsScore !== null && (
        <div className="mt-4 font-semibold">
          ATS Score: {atsScore}%
        </div>
      )}
    </div>
  );
};

export default ResumePreview;