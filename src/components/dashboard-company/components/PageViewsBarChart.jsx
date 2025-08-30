import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';

export default function PageViewsBarChart() {
  const theme = useTheme();
  const colorPalette = [
    (theme.vars || theme).palette.primary.dark,
    (theme.vars || theme).palette.primary.main,
    (theme.vars || theme).palette.primary.light,
  ];

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Talent pool skills distribution
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h4" component="p">
              80%
            </Typography>
            {/* <Chip size="small" color="error" label="-8%" /> */}
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Percentage of candidates with in-demand skills
          </Typography>
        </Stack>
        <BarChart
          borderRadius={8}
          colors={colorPalette}
          xAxis={[
            {
              scaleType: 'band',
              categoryGapRatio: 0.5,
              data: ['Python', 'React', 'Java', 'OOP', 'Django', 'Flutter', 'OpenCV'],
              height: 24,
            },
          ]}
          yAxis={[{ width: 50 }]}
          series={[
            {
              id: 'page-views',
              label: 'Page views',
              data: [22.34, 38.72, 29.98, 41.25, 33.57, 27.89, 29.98],
              stack: 'A',
            },
            {
              id: 'downloads',
              label: 'Downloads',
              data: [30.98, 42.15, 23.84, 21.01, 47.52, 35.93, 23.84],
              stack: 'A',
            },
            {
              id: 'conversions',
              label: 'Conversions',
              data: [40.51, 22.75, 31.29, 46.93, 39.04, 20.38, 22.75],
              stack: 'A',
            },
          ]}
          
          height={400}
          margin={{ left: 0, right: 0, top: 20, bottom: 0 }}
          grid={{ horizontal: true }}
          hideLegend
        />
      </CardContent>
    </Card>
  );
}
