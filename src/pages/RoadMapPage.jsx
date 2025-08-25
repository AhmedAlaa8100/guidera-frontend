import React, { useState, useCallback } from 'react';
import { Container, Button, Box } from '@mui/material';
import { Lightbulb as LightbulbIcon } from '@mui/icons-material';
import { useDarkMode } from '../contexts/DarkModeContext';
import { Header, InputSection, TipsSection, EmptyState, LoadedState } from '../components/RoadMap';

export default function RoadmapPage() {
  const { darkMode } = useDarkMode();
  const [jobDescription, setJobDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showTips, setShowTips] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate roadmap data based on job description
  const generateRoadmap = useCallback(() => {
    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // For now, just show a console log since we removed the roadmap section
      console.log('Generating roadmap for:', jobDescription);
      setIsGenerating(false);
      setIsLoaded(true); // Set to loaded state after generation
    }, 1500);
  }, [jobDescription]);

  return (
    <Container maxWidth="xl" sx={{ py: 4, minHeight: '100vh' }}>
      <Header />
      
      <InputSection 
        jobDescription={jobDescription}
        setJobDescription={setJobDescription}
        generateRoadmap={generateRoadmap}
        isGenerating={isGenerating}
      />

      {/* Tips Toggle Button */}
      {/* <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => setShowTips(!showTips)}
          startIcon={<LightbulbIcon />}
          sx={{
            borderColor: darkMode ? '#60a5fa' : '#3b82f6',
            color: darkMode ? '#60a5fa' : '#3b82f6',
            px: 4,
            py: 1.5,
            borderRadius: 3,
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': {
              borderColor: darkMode ? '#3b82f6' : '#1e40af',
              backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'
            }
          }}
        >
          {showTips ? 'Hide Tips' : 'Show Tips'}
        </Button>
      </Box> */}

      <TipsSection showTips={showTips} />
      
      {/* Conditionally render EmptyState or LoadedState based on isLoaded */}
      {isLoaded ? <LoadedState /> : <EmptyState />}
    </Container>
  );
}
