import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDarkMode } from "../../../contexts/DarkModeContext";

export default function JobPagination({
  currentPage,
  totalPages,
  onPageChange,
  darkMode,
}) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show smart pagination with ellipsis
      if (currentPage <= 3) {
        // Near start: show 1, 2, 3, 4, 5, ..., last
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near end: show 1, ..., last-4, last-3, last-2, last-1, last
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Middle: show 1, ..., current-1, current, current+1, ..., last
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        mt: 3,
      }}
    >
      {/* Previous Button */}
      <Button
        variant="outlined"
        size="small"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        sx={{
          borderColor: darkMode ? "#6b7280" : "#d1d5db",
          color: darkMode ? "#9ca3af" : "#6b7280",
          "&:hover": {
            borderColor: darkMode ? "#9ca3af" : "#9ca3af",
            backgroundColor: darkMode
              ? "rgba(107, 114, 128, 0.08)"
              : "rgba(107, 114, 128, 0.04)",
          },
          "&:disabled": {
            borderColor: darkMode ? "#374151" : "#e5e7eb",
            color: darkMode ? "#4b5563" : "#9ca3af",
          },
        }}
      >
        Previous
      </Button>

      {/* Page Numbers */}
      {pageNumbers.map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <Typography
              variant="body2"
              sx={{
                color: darkMode ? "#6b7280" : "#9ca3af",
                px: 1,
              }}
            >
              ...
            </Typography>
          ) : (
            <Button
              variant={currentPage === page ? "contained" : "outlined"}
              size="small"
              onClick={() => onPageChange(page)}
              sx={{
                minWidth: "40px",
                height: "40px",
                ...(currentPage === page
                  ? {
                      backgroundColor: darkMode ? "#3b82f6" : "#2563eb",
                      color: "white",
                      "&:hover": {
                        backgroundColor: darkMode ? "#2563eb" : "#1d4ed8",
                      },
                    }
                  : {
                      borderColor: darkMode ? "#6b7280" : "#d1d5db",
                      color: darkMode ? "#9ca3af" : "#6b7280",
                      "&:hover": {
                        borderColor: darkMode ? "#9ca3af" : "#9ca3af",
                        backgroundColor: darkMode
                          ? "rgba(107, 114, 128, 0.08)"
                          : "rgba(107, 114, 128, 0.04)",
                      },
                    }),
              }}
            >
              {page}
            </Button>
          )}
        </React.Fragment>
      ))}

      {/* Next Button */}
      <Button
        variant="outlined"
        size="small"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        sx={{
          borderColor: darkMode ? "#6b7280" : "#d1d5db",
          color: darkMode ? "#9ca3af" : "#6b7280",
          "&:hover": {
            borderColor: darkMode ? "#9ca3af" : "#9ca3af",
            backgroundColor: darkMode
              ? "rgba(107, 114, 128, 0.08)"
              : "rgba(107, 114, 128, 0.04)",
          },
          "&:disabled": {
            borderColor: darkMode ? "#374151" : "#e5e7eb",
            color: darkMode ? "#4b5563" : "#9ca3af",
          },
        }}
      >
        Next
      </Button>
    </Box>
  );
}
