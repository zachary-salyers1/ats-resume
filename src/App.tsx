import React, { useState } from 'react';
import { Upload, FileText, Edit, CheckSquare } from 'lucide-react';
import ResumeUpload from './components/ResumeUpload';
import SectionSelector from './components/SectionSelector';
import SectionEditor from './components/SectionEditor';
import ATSScore from './components/ATSScore';
import ResumePreview from './components/ResumePreview';

function App() {
  const [resume, setResume] = useState<string | null>(null);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [updatedSections, setUpdatedSections] = useState<Record<string, string>>({});
  const [atsScore, setAtsScore] = useState<number | null>(null);

  const handleResumeUpload = (content: string) => {
    setResume(content);
  };

  const handleSectionSelect = (sections: string[]) => {
    setSelectedSections(sections);
  };

  const handleSectionUpdate = (section: string, content: string) => {
    setUpdatedSections({ ...updatedSections, [section]: content });
  };

  const handleATSScoreUpdate = (score: number) => {
    setAtsScore(score);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">ATS Resume Updater</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Upload className="mr-2" /> Upload Resume
            </h2>
            <ResumeUpload onUpload={handleResumeUpload} />

            {resume && (
              <>
                <h2 className="text-xl font-semibold mt-6 mb-4 flex items-center">
                  <FileText className="mr-2" /> Select Sections
                </h2>
                <SectionSelector onSelect={handleSectionSelect} />

                <h2 className="text-xl font-semibold mt-6 mb-4 flex items-center">
                  <Edit className="mr-2" /> Edit Sections
                </h2>
                <SectionEditor
                  sections={selectedSections}
                  onUpdate={handleSectionUpdate}
                />

                <h2 className="text-xl font-semibold mt-6 mb-4 flex items-center">
                  <CheckSquare className="mr-2" /> ATS Score
                </h2>
                <ATSScore onScoreUpdate={handleATSScoreUpdate} />
              </>
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Resume Preview</h2>
            <ResumePreview
              originalResume={resume}
              updatedSections={updatedSections}
              atsScore={atsScore}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;