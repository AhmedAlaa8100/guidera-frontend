# Modular Navbar System

This directory contains a modular navbar system that allows you to create different navbar variants based on user roles and authentication states.

## Components

### BaseNavbar

The core navbar component that accepts configuration props to customize its appearance and behavior.

**Props:**

- `navigationItems` (array): Array of navigation items with `to`, `label`, `icon`, and `path` properties
- `brandName` (string): The brand name to display (default: "Guidera")
- `brandPath` (string): The path to navigate to when brand is clicked (default: "/user/dashboard")
- `showProfileMenu` (boolean): Whether to show the profile menu (default: true)
- `showDarkModeToggle` (boolean): Whether to show the dark mode toggle (default: true)
- `onLogout` (function): Function to call when logout is clicked
- `profileMenuItems` (array): Additional menu items for the profile menu
- `customActions` (element): Custom actions to display in the right side of the navbar

### Pre-built Variants

#### UserNavbar

For authenticated users with user-specific navigation items.

```jsx
import { UserNavbar } from "./components/Navbar";

<UserNavbar />;
```

#### CompanyNavbar

For company users with company-specific navigation items.

```jsx
import { CompanyNavbar } from "./components/Navbar";

<CompanyNavbar />;
```

#### PublicNavbar

For non-authenticated users with sign-in/sign-up buttons.

```jsx
import { PublicNavbar } from "./components/Navbar";

<PublicNavbar />;
```

### Custom Navbar

You can create custom navbars by using the BaseNavbar component:

```jsx
import { BaseNavbar } from "./components/Navbar";
import { Home, Settings } from "@mui/icons-material";

const customNavigationItems = [
  {
    to: "/home",
    label: "Home",
    icon: <Home />,
    path: "/home",
  },
  {
    to: "/settings",
    label: "Settings",
    icon: <Settings />,
    path: "/settings",
  },
];

const customProfileMenuItems = [
  {
    label: "Profile",
    icon: Person,
    onClick: () => navigate("/profile"),
  },
];

<BaseNavbar
  navigationItems={customNavigationItems}
  brandName="My App"
  brandPath="/home"
  onLogout={handleLogout}
  profileMenuItems={customProfileMenuItems}
/>;
```

## Navigation Item Structure

Each navigation item should have the following structure:

```javascript
{
  to: "/path",           // React Router path
  label: "Display Name", // Text to display
  icon: <IconComponent />, // Material-UI icon component
  path: "/path",         // Path for active state checking
}
```

## Profile Menu Item Structure

Profile menu items should have the following structure:

```javascript
{
  label: "Menu Item",    // Text to display
  icon: IconComponent,   // Material-UI icon component (optional)
  onClick: () => {},     // Function to call when clicked
}
```

## Usage Examples

### Conditional Navbar Based on User Role

```jsx
import { useContext } from "react";
import { UserNavbar, CompanyNavbar, PublicNavbar } from "./components/Navbar";
import { authContext } from "./contexts/authContext";

function App() {
  const { isLoggedIn, userRole } = useContext(authContext);

  if (!isLoggedIn) {
    return <PublicNavbar />;
  }

  if (userRole === "company") {
    return <CompanyNavbar />;
  }

  return <UserNavbar />;
}
```

### Custom Navbar with Custom Actions

```jsx
import { BaseNavbar } from "./components/Navbar";
import { Button, Box } from "@mui/material";

const customActions = (
  <Box sx={{ display: "flex", gap: 1 }}>
    <Button variant="outlined">Help</Button>
    <Button variant="contained">Upgrade</Button>
  </Box>
);

<BaseNavbar
  navigationItems={navigationItems}
  customActions={customActions}
  showProfileMenu={false}
/>;
```

## Styling

The navbar components use Material-UI's sx prop for styling and are fully responsive. They automatically adapt to dark/light mode based on the DarkModeContext.

## Mobile Support

All navbar variants include mobile support with:

- Responsive navigation buttons that collapse into a mobile menu
- Touch-friendly mobile menu drawer
- Consistent styling across all screen sizes
