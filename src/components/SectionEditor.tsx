import React, { useState } from 'react';

interface SectionEditorProps {
  sections: string[];
  onUpdate: (section: string, content: string) => void;
}

const SectionEditor: React.FC<SectionEditorProps> = ({ sections, onUpdate }) => {
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [content, setContent] = useState('');

  const handleEdit = (section: string) => {
    setEditingSection(section);
    setContent('');
  };

  const handleSave = () => {
    if (editingSection) {
      onUpdate(editingSection, content);
      setEditingSection(null);
      setContent('');
    }
  };

  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <div key={section} className="border p-4 rounded">
          <h3 className="font-semibold mb-2">{section}</h3>
          {editingSection === section ? (
            <>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-32 border rounded p-2 mb-2"
                placeholder={`Enter updated content for ${section}`}
              />
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditingSection(null)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => handleEdit(section)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionEditor;