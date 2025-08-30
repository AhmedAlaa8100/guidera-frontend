import React, { useState } from "react";
import { Paper, Snackbar, Alert } from "@mui/material";
import { useDarkMode } from "../../contexts/DarkModeContext";
import SubjectModal from "./SubjectModal";
import RoadmapService from "../../services/RoadmapService";
import RoadmapHeader from "./RoadmapHeader";
import RoadmapGrid from "./RoadmapGrid";
import { sampleRoadmapItems } from "./roadmapConstants";

export default function LoadedState({ roadmapTitle, onSave, roadmapData }) {
  const { darkMode } = useDarkMode();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Use provided roadmap data or fall back to sample data
  const roadmapItems = roadmapData?.items || sampleRoadmapItems.items;
  const roadmapId = roadmapData?.id || sampleRoadmapItems.id;
  const isEditing = !!roadmapData?.id;

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedSubject(null);
  };

  const handleSaveRoadmap = () => {
    try {
      // Create new roadmap object or update existing one
      const roadmapToSave = {
        id: roadmapId,
        title: roadmapTitle || sampleRoadmapItems.title,
        description: "Personalized learning path with projects and courses",
        items: roadmapItems,
        estimatedDuration: "8-12 weeks",
        savedAt: new Date().toISOString(),
      };

      // Save using the service
      const success = RoadmapService.saveRoadmap(roadmapToSave);

      if (success) {
        // Show success message
        setSaveSuccess(true);

        // Call onSave callback if provided
        if (onSave) {
          onSave(roadmapToSave);
        }
      }
    } catch (error) {
      console.error("Error saving roadmap:", error);
    }
  };

  return (
    <>
      {/* Featured Subjects Grid */}
      <Paper
        elevation={0}
        sx={{
          p: 6,
          mb: 6,
          background: darkMode
            ? "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          border: `2px solid ${darkMode ? "#374151" : "#e2e8f0"}`,
          borderRadius: 3,
          boxShadow: darkMode
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
            : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >
        <RoadmapHeader
          isEditing={isEditing}
          onSave={handleSaveRoadmap}
          roadmapTitle={roadmapTitle || sampleRoadmapItems.title}
        />

        <RoadmapGrid
          roadmapItems={roadmapItems}
          onItemClick={handleSubjectClick}
        />
      </Paper>

      {/* Subject Modal */}
      <SubjectModal
        open={modalOpen}
        onClose={handleCloseModal}
        subject={selectedSubject}
      />

      {/* Success Snackbar */}
      <Snackbar
        open={saveSuccess}
        autoHideDuration={4000}
        onClose={() => setSaveSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSaveSuccess(false)}
          severity="success"
          sx={{
            background: darkMode ? "#10b981" : "#10b981",
            color: "#ffffff",
            fontWeight: 600,
          }}
        >
          {isEditing
            ? "Roadmap updated successfully!"
            : "Roadmap saved successfully! You can view it in the Project Manager."}
        </Alert>
      </Snackbar>
    </>
  );
}
