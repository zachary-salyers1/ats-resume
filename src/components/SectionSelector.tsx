import React, { useState } from 'react';

interface SectionSelectorProps {
  onSelect: (sections: string[]) => void;
}

const SectionSelector: React.FC<SectionSelectorProps> = ({ onSelect }) => {
  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  const sections = [
    'Summary',
    'Work Experience',
    'Education',
    'Skills',
    'Projects',
    'Certifications',
  ];

  const handleSectionToggle = (section: string) => {
    setSelectedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleSubmit = () => {
    onSelect(selectedSections);
  };

  return (
    <div className="flex flex-col space-y-4">
      {sections.map((section) => (
        <label key={section} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selectedSections.includes(section)}
            onChange={() => handleSectionToggle(section)}
            className="form-checkbox"
          />
          <span>{section}</span>
        </label>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Update Selected Sections
      </button>
    </div>
  );
};

export default SectionSelector;