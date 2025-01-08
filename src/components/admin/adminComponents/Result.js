import React, { useState } from 'react';

const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    
    year: "numeric", // e.g., 2025
    month: "long",   // e.g., January
    day: "numeric",  // e.g., 8
  });

const results = [
  {
    id: 1,
    name: "John Doe",
    rollNumber: "12345",
    class: "Class 10",
    subject: "Mathematics",
    marks: 85,
    totalMarks: 100,
    grade: "A",
  },
  {
    id: 1,
    name: "John Doe",
    rollNumber: "12345",
    class: "Class 10",
    subject: "Mathematics",
    marks: 85,
    totalMarks: 100,
    grade: "A",
  },{
    id: 1,
    name: "John Doe",
    rollNumber: "12345",
    class: "Class 10",
    subject: "Mathematics",
    marks: 85,
    totalMarks: 100,
    grade: "A",
  },{
    id: 1,
    name: "John Doe",
    rollNumber: "12345",
    class: "Class 10",
    subject: "Mathematics",
    marks: 85,
    totalMarks: 100,
    grade: "A",
  },{
    id: 1,
    name: "John Doe",
    rollNumber: "12345",
    class: "Class 10",
    subject: "Mathematics",
    marks: 85,
    totalMarks: 100,
    grade: "A",
  },
  {
    id: 2,
    name: "Jane Smith",
    rollNumber: "12346",
    class: "Class 12",
    subject: "Science",
    marks: 78,
    totalMarks: 100,
    grade: "B",
  },
  {
    id: 3,
    name: "Mark Johnson",
    rollNumber: "12347",
    class: "Class 10",
    subject: "History",
    marks: 92,
    totalMarks: 100,
    grade: "A+",
  },
  {
    id: 4,
    name: "Emily Davis",
    rollNumber: "12348",
    class: "Class 8",
    subject: "English",
    marks: 68,
    totalMarks: 100,
    grade: "C",
  },
];

const ResultCard = ({ result }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col space-y-2">
    <h3 className="text-lg font-semibold">{result.name}</h3>
    <p className="text-sm text-gray-500">Roll No: {result.rollNumber}</p>
    <p className="text-sm text-gray-500">Class: {result.class}</p>
    <p className="text-sm text-gray-500">Subject: {result.subject}</p>
    <p className="text-sm text-gray-500">
      Marks: {result.marks}/{result.totalMarks}
    </p>
    <p className="text-sm text-gray-400">Grade: {result.grade}</p>
  </div>
);

function Results() {
  const [selectedClass, setSelectedClass] = useState("All");

  // Filter results based on the selected class
  const filteredResults =
    selectedClass === "All"
      ? results
      : results.filter((result) => result.class === selectedClass);

  // Sort the filtered results by roll number (ascending order)
  const sortedResults = filteredResults.sort(
    (a, b) => parseInt(a.rollNumber) - parseInt(b.rollNumber)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-bold">Student Results</h1>
        <div>
          <p className="text-gray-500 text-sm">{formattedDate}</p>
          
        </div>
      </div>

      {/* Class Filter Dropdown */}
      <div className="mt-4">
        <label htmlFor="classFilter" className="text-sm font-medium mr-2">
          Filter by Class:
        </label>
        <select
          id="classFilter"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="p-2 bg-white border rounded shadow-sm"
        >
          <option value="All">All Classes</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={`Class ${i + 1}`}>
              Class {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Results Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedResults.length > 0 ? (
          sortedResults.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No results found for the selected class.
          </p>
        )}
      </div>
    </div>
  );
}

export default Results;
