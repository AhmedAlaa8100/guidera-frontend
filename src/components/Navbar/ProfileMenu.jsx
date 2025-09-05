import React, { useState } from "react";
import { IconButton, Avatar, Menu, MenuItem } from "@mui/material";
import { Person, Logout } from "@mui/icons-material";

export default function ProfileMenu({ onLogout, menuItems = [] }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleProfileMenuOpen}
        sx={{
          p: 1,
          border: "2px solid",
          borderColor: "transparent",
          "&:hover": {
            borderColor: "primary.main",
            backgroundColor: "rgba(25, 118, 210, 0.08)",
          },
          transition: "all 0.2s ease-in-out",
        }}
      >
        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: "primary.main",
            fontSize: "1rem",
          }}
        >
          <Person />
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
            borderRadius: 2,
            boxShadow: "0px 8px 32px rgba(0,0,0,0.12)",
          },
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => handleMenuItemClick(item)}>
            {item.icon && <item.icon sx={{ mr: 2 }} />}
            {item.label}
          </MenuItem>
        ))}
        {onLogout && (
          <MenuItem onClick={handleLogout}>
            <Logout sx={{ mr: 2 }} />
            Logout
          </MenuItem>
        )}
      </Menu>
    </>
  );
}
