import React from "react";
import { Box } from "@mui/material";
import RoadmapCard from "./RoadmapCard";
import RoadmapArrow from "./RoadmapArrow";

export default function RoadmapGrid({ roadmapItems, onItemClick }) {
  return (
    <Box sx={{ maxWidth: "600px", margin: "0 auto" }}>
      {roadmapItems.map((item, index) => (
        <Box key={item.id}>
          <RoadmapCard item={item} index={index} onClick={onItemClick} />

          {/* Arrow between items (except after the last one) */}
          {index < roadmapItems.length - 1 && <RoadmapArrow />}
        </Box>
      ))}
    </Box>
  );
}
