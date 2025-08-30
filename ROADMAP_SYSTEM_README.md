# Roadmap System Implementation

This document describes the complete roadmap system implementation with localStorage storage, routing, and a clean, professional design.

## Features

### 🚀 Core Functionality

- **Create Roadmaps**: Generate personalized learning paths based on job descriptions
- **Save Roadmaps**: Store roadmaps locally and optionally sync with backend
- **View Saved Roadmaps**: Browse and manage all saved learning paths
- **Edit Roadmaps**: Modify existing roadmaps and update them
- **Delete Roadmaps**: Remove roadmaps with confirmation dialogs
- **Responsive Design**: Clean, professional UI that works on all devices

### 🔄 Data Storage

- **localStorage**: Persistent storage for roadmaps
- **Real-time Sync**: Automatic updates across browser tabs
- **No Backend Required**: Works completely offline

### 🎨 UI/UX Features

- **Dark/Light Mode**: Consistent theming with the rest of the application
- **Tabbed Interface**: Separate tabs for creating and viewing roadmaps
- **Loading States**: Skeleton loaders and smooth transitions
- **Interactive Elements**: Hover effects, animations, and responsive feedback

## Architecture

### Frontend Components

#### 1. RoadMapPage (`src/pages/RoadMapPage.jsx`)

- Main container with tabbed interface
- Manages state between create and view modes
- Handles roadmap generation and selection

#### 2. LoadedState (`src/components/RoadMap/LoadedState.jsx`)

- Displays roadmap items in a vertical timeline
- Handles saving and updating roadmaps
- Supports both new creation and editing modes

#### 3. SavedRoadmaps (`src/components/RoadMap/SavedRoadmaps.jsx`)

- Grid layout for displaying saved roadmaps
- CRUD operations with confirmation dialogs
- Responsive card design with preview information

#### 4. RoadmapDetailsPage (`src/pages/RoadmapDetailsPage.jsx`)

- Detailed view of individual roadmaps
- Full roadmap display with edit/delete options
- Navigation back to main roadmap page

### Backend Service

#### RoadmapService (`src/services/RoadmapService.js`)

- **API Integration**: RESTful endpoints for roadmap operations
- **Fallback Strategy**: localStorage when backend is unavailable
- **Error Handling**: Graceful degradation and user feedback
- **Real-time Updates**: Storage event handling for cross-tab sync

### API Endpoints

```
GET    /api/roadmaps          - Get all roadmaps for user
GET    /api/roadmaps/:id      - Get specific roadmap
POST   /api/roadmaps          - Create new roadmap
PUT    /api/roadmaps/:id      - Update existing roadmap
DELETE /api/roadmaps/:id      - Delete roadmap
```

## Data Structure

### Roadmap Object

```javascript
{
  id: "unique-identifier",
  title: "Roadmap Title",
  description: "Roadmap description",
  items: [
    {
      id: "item-id",
      title: "Item Title",
      description: "Item description",
      icon: "🎯",
      difficulty: "Beginner|Intermediate|Advanced|Expert",
      duration: "2-3 weeks",
      color: "#10b981",
      type: "course|project"
    }
  ],
  estimatedDuration: "8-12 weeks",
  savedAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z"
}
```

### Roadmap Item Types

- **Course**: Learning materials and tutorials
- **Project**: Hands-on practical applications

### Difficulty Levels

- **Beginner**: Green (#10b981)
- **Intermediate**: Orange (#f59e0b)
- **Advanced**: Red (#ef4444)
- **Expert**: Purple (#8b5cf6)

## Routing

### URL Structure

```
/roadmap                    - Main roadmap page with tabs
/roadmap/:id               - View specific roadmap details
/roadmap/edit/:id          - Edit specific roadmap (future enhancement)
```

### Navigation Flow

1. **Create Tab**: Generate new roadmaps
2. **Saved Tab**: Browse and manage existing roadmaps
3. **Details View**: Full roadmap display with actions
4. **Edit Mode**: Modify and update roadmaps

## State Management

### Local State

- `activeTab`: Current tab selection (0 = Create, 1 = Saved)
- `jobDescription`: User input for roadmap generation
- `isLoaded`: Whether roadmap is generated and displayed
- `selectedRoadmap`: Currently selected roadmap for editing

### Service State

- **Backend First**: Attempt API calls before falling back to localStorage
- **Real-time Sync**: Automatic updates across browser tabs
- **Error Handling**: Graceful degradation with user feedback

## Styling & Design

### Design System

- **Material-UI**: Consistent component library
- **Dark/Light Mode**: Theme-aware styling
- **Gradients**: Subtle background gradients for depth
- **Shadows**: Layered shadows for visual hierarchy
- **Animations**: Smooth transitions and hover effects

### Color Palette

- **Primary**: Blue (#3b82f6)
- **Success**: Green (#10b981)
- **Warning**: Orange (#f59e0b)
- **Error**: Red (#ef4444)
- **Info**: Purple (#8b5cf6)

### Responsive Breakpoints

- **xs**: 0px - 599px (Mobile)
- **sm**: 600px - 899px (Tablet)
- **md**: 900px - 1199px (Desktop)
- **lg**: 1200px+ (Large Desktop)

## Usage Examples

### Creating a New Roadmap

1. Navigate to `/roadmap`
2. Select "Create Roadmap" tab
3. Enter job description
4. Click "Generate Roadmap"
5. Review and save the generated roadmap

### Viewing Saved Roadmaps

1. Navigate to `/roadmap`
2. Select "Saved Roadmaps" tab
3. Browse through saved roadmaps
4. Click "View" to see full details
5. Use edit/delete actions as needed

### Editing an Existing Roadmap

1. View a saved roadmap
2. Click "Edit" button
3. Modify roadmap content
4. Save changes
5. Navigate back to saved roadmaps

## Backend Setup

### Prerequisites

- Node.js (v14+)
- Express.js
- JWT authentication
- CORS enabled

### Installation

```bash
npm install express cors jsonwebtoken
```

### Environment Variables

```env
PORT=3001
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:3000
```

### Running the Backend

```bash
node backend-example.js
```

## Future Enhancements

### Planned Features

- **Roadmap Templates**: Pre-built learning paths
- **Progress Tracking**: User progress through roadmap items
- **Collaboration**: Share roadmaps with team members
- **Analytics**: Learning progress insights
- **Export**: PDF/CSV export functionality

### Technical Improvements

- **Database Integration**: Replace in-memory storage
- **Real-time Updates**: WebSocket integration
- **Caching**: Redis for performance optimization
- **Search**: Full-text search across roadmaps
- **Filtering**: Advanced filtering and sorting options

## Troubleshooting

### Common Issues

#### Backend Connection Failed

- Check if backend server is running
- Verify API endpoint URLs
- Check CORS configuration
- Review authentication tokens

#### Roadmaps Not Loading

- Check localStorage for fallback data
- Verify API response format
- Check browser console for errors
- Ensure proper authentication

#### Save Operations Failing

- Verify backend connectivity
- Check authentication status
- Review data format requirements
- Check localStorage permissions

### Debug Mode

Enable debug logging by setting:

```javascript
localStorage.setItem("roadmapDebug", "true");
```

## Contributing

### Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Start backend server: `node backend-example.js`

### Code Style

- Follow existing component structure
- Use Material-UI components consistently
- Maintain dark/light mode compatibility
- Add proper error handling
- Include loading states

### Testing

- Test both create and view modes
- Verify responsive behavior
- Test backend fallback scenarios
- Validate error handling
- Check accessibility features

## License

This roadmap system is part of the Guidera Frontend application and follows the same licensing terms.
