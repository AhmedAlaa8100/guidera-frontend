import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";

function AreaGradient({ color, id }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.5} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

AreaGradient.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

function getDaysInMonth(month, year) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString("en-US", {
    month: "short",
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

export default function SessionsChart() {
  const theme = useTheme();
  const data = getDaysInMonth(4, 2024);

  const colorPalette = [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark,
  ];

  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Candidate progress trends
        </Typography>
        <Stack sx={{ justifyContent: "space-between" }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: "center", sm: "flex-start" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="h4" component="p">
              68
            </Typography>
            <Chip size="small" color="success" label="+25%" />
          </Stack>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Current overall average user skill level
          </Typography>
        </Stack>
        <LineChart
          colors={colorPalette}
          xAxis={[
            {
              scaleType: "point",
              data,
              tickInterval: (index, i) => (i + 1) % 5 === 0,
              height: 24,
            },
          ]}
          yAxis={[{ width: 50 }]}
          series={[
            {
              id: "direct",
              label: "Direct",
              showMark: false,
              curve: "linear",
              stack: "total",
              area: true,
              stackOrder: "ascending",
              data: [
                3, 9, 6, 12, 15, 18, 24, 21, 27, 30, 18, 33, 36, 39, 42, 45, 39,
                48, 51, 54, 48, 57, 60, 63, 66, 69, 72, 75, 78, 81,
              ],
            },
            {
              id: "referral",
              label: "Referral",
              showMark: false,
              curve: "linear",
              stack: "total",
              area: true,
              stackOrder: "ascending",
              data: [
                5, 9, 7, 14, 11, 17, 23, 20, 26, 29, 23, 32, 35, 38, 41, 44, 29,
                47, 50, 53, 56, 59, 62, 65, 56, 68, 71, 74, 77, 80,
              ],
            },
            {
              id: "organic",
              label: "Organic",
              showMark: false,
              curve: "linear",
              stack: "total",
              stackOrder: "ascending",
              data: [
                10, 15, 12, 17, 13, 20, 24, 22, 26, 28, 25, 30, 34, 37, 32, 39,
                41, 35, 43, 45, 40, 47, 50, 52, 48, 54, 56, 59, 61, 63,
              ],
              area: true,
            },
          ]}
          height={400}
          margin={{ left: 0, right: 20, top: 20, bottom: 0 }}
          grid={{ horizontal: true }}
          sx={{
            "& .MuiAreaElement-series-organic": {
              fill: "url('#organic')",
            },
            "& .MuiAreaElement-series-referral": {
              fill: "url('#referral')",
            },
            "& .MuiAreaElement-series-direct": {
              fill: "url('#direct')",
            },
          }}
          hideLegend
        >
          <AreaGradient color={theme.palette.primary.dark} id="organic" />
          <AreaGradient color={theme.palette.primary.main} id="referral" />
          <AreaGradient color={theme.palette.primary.light} id="direct" />
        </LineChart>
      </CardContent>
    </Card>
  );
}
