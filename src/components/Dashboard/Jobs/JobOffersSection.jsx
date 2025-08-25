import React from "react";
import { Typography, Box, Button, Grid, Divider } from "@mui/material";
import { useDarkMode } from "../../../contexts/DarkModeContext";
import { useJobManagement } from "../../../hooks/useJobManagement";
import JobCard from "./JobCard";
import JobDetailsModal from "./JobDetailsModal";
import JobStatusSummary from "./JobStatusSummary";
import JobPagination from "./JobPagination";
import NoJobsMessage from "./NoJobsMessage";

export default function JobOffersSection({ jobs = [] }) {
  const { darkMode } = useDarkMode();

  const {
    // State
    currentPage,
    selectedJob,
    isModalOpen,
    acceptedJobs,
    rejectedJobs,

    // Computed values
    totalPages,
    currentJobs,
    availableJobs,
    canLoadMore,
    hasReviewedJobs,

    // Counts
    totalJobsCount,
    availableJobsCount,
    acceptedJobsCount,
    rejectedJobsCount,

    // Actions
    handleViewDetails,
    handleCloseModal,
    handleAcceptJob,
    handleRejectJob,
    handlePageChange,
    handleLoadMore,
    handleResetAllFilters,
  } = useJobManagement(jobs, 5);

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: darkMode ? "#e5e7eb" : "#1f2937",
            fontWeight: 600,
          }}
        >
          Job Offers
        </Typography>

        {hasReviewedJobs && (
          <Button
            variant="outlined"
            size="small"
            onClick={handleResetAllFilters}
            sx={{
              borderColor: darkMode ? "#6b7280" : "#d1d5db",
              color: darkMode ? "#9ca3af" : "#6b7280",
              "&:hover": {
                borderColor: darkMode ? "#9ca3af" : "#9ca3af",
                backgroundColor: darkMode
                  ? "rgba(107, 114, 128, 0.08)"
                  : "rgba(107, 114, 128, 0.04)",
              },
            }}
          >
            Reset All
          </Button>
        )}
      </Box>

      {/* Status Summary */}
      <JobStatusSummary
        total={totalJobsCount}
        available={availableJobsCount}
        accepted={acceptedJobsCount}
        rejected={rejectedJobsCount}
      />

      <Divider sx={{ my: 3, borderColor: darkMode ? "#374151" : "#e5e7eb" }} />

      {/* Jobs Grid */}
      {availableJobsCount > 0 ? (
        <>
          <Grid
            container
            spacing={3}
            sx={{ mb: 3 }}
            wrap="nowrap"
            direction="column"
          >
            {currentJobs.map((job) => (
              <Grid item xs={12} key={job.id} sx={{ width: "100%" }}>
                <JobCard
                  job={job}
                  onViewDetails={handleViewDetails}
                  darkMode={darkMode}
                />
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          {totalPages > 1 && (
            <JobPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              darkMode={darkMode}
            />
          )}
        </>
      ) : (
        <NoJobsMessage
          hasReviewedJobs={hasReviewedJobs}
          onReset={handleResetAllFilters}
          darkMode={darkMode}
        />
      )}

      {/* Job Details Modal */}
      <JobDetailsModal
        job={selectedJob}
        open={isModalOpen}
        onClose={handleCloseModal}
        onAccept={handleAcceptJob}
        onReject={handleRejectJob}
        darkMode={darkMode}
      />
    </Box>
  );
}
