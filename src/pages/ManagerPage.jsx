import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";
import { ManagerHeader, SavedRoadmapsList } from "../components/Manager";
import { LoadedState } from "../components/RoadMap";
import RoadmapService from "../services/RoadmapService";

export default function ProjectManger() {
  const { id } = useParams();
  const { darkMode } = useDarkMode();
  const [savedRoadmaps, setSavedRoadmaps] = useState([]);
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

  const handleRoadmapDelete = (roadmapId) => {
    const success = RoadmapService.deleteRoadmap(roadmapId);
    if (success) {
      setSavedRoadmaps((prev) =>
        prev.filter((roadmap) => roadmap.id !== roadmapId)
      );
    }
  };

  // Load saved roadmaps from localStorage on component mount
  useEffect(() => {
    const loadSavedRoadmaps = () => {
      const roadmaps = RoadmapService.getSavedRoadmaps();
      setSavedRoadmaps(roadmaps);

      // If we have an ID, find the corresponding roadmap
      if (id) {
        const foundRoadmap = roadmaps.find((r) => r.id === id);
        setSelectedRoadmap(foundRoadmap);
      }
    };

    loadSavedRoadmaps();

    // Listen for storage changes (in case another tab saves a roadmap)
    const handleStorageChange = (e) => {
      if (e.key === RoadmapService.STORAGE_KEY) {
        try {
          if (e.newValue) {
            const roadmaps = JSON.parse(e.newValue);
            setSavedRoadmaps(roadmaps);

            // Update selected roadmap if we have an ID
            if (id) {
              const foundRoadmap = roadmaps.find((r) => r.id === id);
              setSelectedRoadmap(foundRoadmap);
            }
          } else {
            setSavedRoadmaps([]);
            setSelectedRoadmap(null);
          }
        } catch (error) {
          console.error("Error parsing saved roadmaps:", error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [id]);

  // If we have an ID and a selected roadmap, show the LoadedState component
  if (id && selectedRoadmap) {
    return (
      <Container maxWidth="xl" sx={{ py: 4, minHeight: "100vh" }}>
        <LoadedState
          roadmapTitle={selectedRoadmap.title}
          onSave={(updatedRoadmap) => {
            // Update the roadmap in the list
            setSavedRoadmaps((prev) =>
              prev.map((r) => (r.id === updatedRoadmap.id ? updatedRoadmap : r))
            );
          }}
          roadmapData={selectedRoadmap}
        />
      </Container>
    );
  }

  // Otherwise show the normal saved roadmaps list
  return (
    <Container maxWidth="xl" sx={{ py: 4, minHeight: "100vh" }}>
      <ManagerHeader />
      <SavedRoadmapsList
        savedRoadmaps={savedRoadmaps}
        onRoadmapDelete={handleRoadmapDelete}
      />
    </Container>
  );
}
