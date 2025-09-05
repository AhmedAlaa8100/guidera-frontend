import React from "react";
import { UserNavbar } from "./index";

// This is a wrapper component for backward compatibility
// It uses the new UserNavbar component
export default function Navbar() {
  return <UserNavbar />;
}
