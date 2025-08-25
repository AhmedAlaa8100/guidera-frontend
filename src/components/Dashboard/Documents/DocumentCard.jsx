import { Typography, Card, CardContent, Box, IconButton } from "@mui/material";
import { Description, Download, Delete, Visibility } from "@mui/icons-material";
import { useDarkMode } from "../../../contexts/DarkModeContext";

export default function DocumentCard({
  document,
  onView,
  onDownload,
  onDelete,
}) {
  const { darkMode } = useDarkMode();

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        border: `1px solid ${
          darkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(0, 0, 0, 0.1)"
        }`,
        backgroundColor: darkMode
          ? "rgba(30, 41, 59, 0.5)"
          : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: darkMode
            ? "0 8px 25px rgba(0, 0, 0, 0.3)"
            : "0 8px 25px rgba(0, 0, 0, 0.1)",
          borderColor: darkMode ? "#60a5fa" : "#1976d2",
        },
      }}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Description
            sx={{
              fontSize: "2rem",
              color: darkMode ? "#60a5fa" : "#1976d2",
            }}
          />
          <div className="flex-1">
            <Typography
              variant="body1"
              fontWeight="medium"
              sx={{
                color: darkMode ? "#e2e8f0" : "#424242",
                mb: 0.5,
              }}
            >
              {document.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: darkMode ? "#94a3b8" : "#757575",
                fontSize: "0.875rem",
              }}
            >
              {document.type} • {(document.size / 1024 / 1024).toFixed(2)} MB
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: darkMode ? "#94a3b8" : "#757575",
                fontSize: "0.875rem",
              }}
            >
              Uploaded {document.uploadDate}
            </Typography>
          </div>
          <div className="flex gap-1">
            <IconButton
              onClick={() => onView(document)}
              size="small"
              sx={{
                color: darkMode ? "#60a5fa" : "#1976d2",
                "&:hover": {
                  backgroundColor: darkMode
                    ? "rgba(96, 165, 250, 0.1)"
                    : "rgba(25, 118, 210, 0.1)",
                },
              }}
            >
              <Visibility />
            </IconButton>
            <IconButton
              onClick={() => onDownload(document)}
              size="small"
              sx={{
                color: darkMode ? "#22c55e" : "#4caf50",
                "&:hover": {
                  backgroundColor: darkMode
                    ? "rgba(34, 197, 94, 0.1)"
                    : "rgba(76, 175, 80, 0.1)",
                },
              }}
            >
              <Download />
            </IconButton>
            <IconButton
              onClick={() => onDelete(document)}
              size="small"
              sx={{
                color: darkMode ? "#ef4444" : "#d32f2f",
                "&:hover": {
                  backgroundColor: darkMode
                    ? "rgba(239, 68, 68, 0.1)"
                    : "rgba(211, 47, 47, 0.1)",
                },
              }}
            >
              <Delete />
            </IconButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
