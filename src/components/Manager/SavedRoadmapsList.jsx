import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../contexts/DarkModeContext";
import RoadmapCard from "./RoadmapCard";
import EmptySavedRoadmaps from "./EmptySavedRoadmaps";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

export default function SavedRoadmapsList({ savedRoadmaps, onRoadmapDelete }) {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [roadmapToDelete, setRoadmapToDelete] = useState(null);

  const handleRoadmapClick = (roadmap) => {
    navigate(`/project-manager/${roadmap.id}`);
  };

  const handleDeleteClick = (roadmap) => {
    setRoadmapToDelete(roadmap);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (roadmapToDelete && onRoadmapDelete) {
      onRoadmapDelete(roadmapToDelete.id);
    }
    setDeleteDialogOpen(false);
    setRoadmapToDelete(null);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setRoadmapToDelete(null);
  };

  if (!savedRoadmaps || savedRoadmaps.length === 0) {
    return <EmptySavedRoadmaps />;
  }

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            color: darkMode ? "#ffffff" : "#1f2937",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Your Learning Roadmaps ({savedRoadmaps.length})
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: darkMode ? "#9ca3af" : "#6b7280",
            lineHeight: 1.6,
          }}
        >
          Click on any roadmap to view the complete learning path with projects
          and courses.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {savedRoadmaps.map((roadmap) => (
          <Grid item xs={12} md={6} lg={4} key={roadmap.id}>
            <RoadmapCard
              roadmap={roadmap}
              onClick={() => handleRoadmapClick(roadmap)}
              onDelete={() => handleDeleteClick(roadmap)}
            />
          </Grid>
        ))}
      </Grid>

      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        roadmapTitle={roadmapToDelete?.title || ""}
      />
    </>
  );
}
