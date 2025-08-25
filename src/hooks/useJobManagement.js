import { useState, useMemo } from "react";

export function useJobManagement(jobs = [], jobsPerPage = 5) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [acceptedJobs, setAcceptedJobs] = useState(new Set());
  const [rejectedJobs, setRejectedJobs] = useState(new Set());

  // First, filter out accepted and rejected jobs from the original jobs array
  const availableJobs = useMemo(() => {
    return jobs.filter(
      (job) => !acceptedJobs.has(job.id) && !rejectedJobs.has(job.id)
    );
  }, [jobs, acceptedJobs, rejectedJobs]);

  // Then apply pagination to the filtered jobs
  const totalPages = Math.ceil(availableJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;

  // Get current page jobs from the filtered available jobs
  const currentJobs = useMemo(() => {
    return availableJobs.slice(startIndex, endIndex);
  }, [availableJobs, startIndex, endIndex]);

  // Job actions
  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleAcceptJob = (job) => {
    setAcceptedJobs((prev) => new Set([...prev, job.id]));
    // Remove from rejected if it was there
    setRejectedJobs((prev) => {
      const newRejected = new Set(prev);
      newRejected.delete(job.id);
      return newRejected;
    });
    handleCloseModal();

    // Reset to first page if current page becomes empty
    if (currentJobs.length === 1 && currentPage > 1) {
      setCurrentPage(1);
    }
  };

  const handleRejectJob = (job) => {
    setRejectedJobs((prev) => new Set([...prev, job.id]));
    // Remove from accepted if it was there
    setAcceptedJobs((prev) => {
      const newAccepted = new Set(prev);
      newAccepted.delete(job.id);
      return newAccepted;
    });
    handleCloseModal();

    // Reset to first page if current page becomes empty
    if (currentJobs.length === 1 && currentPage > 1) {
      setCurrentPage(1);
    }
  };

  // Pagination actions
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleResetAllFilters = () => {
    setAcceptedJobs(new Set());
    setRejectedJobs(new Set());
    setCurrentPage(1);
  };

  // Check if we can load more
  const canLoadMore = currentPage < totalPages;

  // Check if user has reviewed any jobs
  const hasReviewedJobs = acceptedJobs.size > 0 || rejectedJobs.size > 0;

  // Get counts for status summary
  const totalJobsCount = jobs.length;
  const availableJobsCount = availableJobs.length;
  const acceptedJobsCount = acceptedJobs.size;
  const rejectedJobsCount = rejectedJobs.size;

  return {
    // State
    currentPage,
    selectedJob,
    isModalOpen,
    acceptedJobs,
    rejectedJobs,

    // Computed values
    totalPages,
    startIndex,
    endIndex,
    currentJobs,
    availableJobs,
    canLoadMore,
    hasReviewedJobs,

    // Counts for status summary
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
  };
}
