class RoadmapService {
  static STORAGE_KEY = "savedRoadmaps";

  static saveRoadmap(roadmap) {
    try {
      const existingRoadmaps = this.getSavedRoadmaps();

      // Check if this is an update to an existing roadmap
      const existingIndex = existingRoadmaps.findIndex(
        (r) => r.id === roadmap.id
      );

      let updatedRoadmaps;
      if (existingIndex !== -1) {
        // Update existing roadmap
        updatedRoadmaps = [...existingRoadmaps];
        updatedRoadmaps[existingIndex] = roadmap;
      } else {
        // Add new roadmap
        updatedRoadmaps = [...existingRoadmaps, roadmap];
      }

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedRoadmaps));

      // Trigger storage event for other tabs
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: this.STORAGE_KEY,
          newValue: JSON.stringify(updatedRoadmaps),
        })
      );

      return true;
    } catch (error) {
      console.error("Error saving roadmap:", error);
      return false;
    }
  }

  static getSavedRoadmaps() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error loading saved roadmaps:", error);
      return [];
    }
  }

  static deleteRoadmap(roadmapId) {
    try {
      const existingRoadmaps = this.getSavedRoadmaps();
      const updatedRoadmaps = existingRoadmaps.filter(
        (roadmap) => roadmap.id !== roadmapId
      );
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedRoadmaps));

      // Trigger storage event for other tabs
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: this.STORAGE_KEY,
          newValue: JSON.stringify(updatedRoadmaps),
        })
      );

      return true;
    } catch (error) {
      console.error("Error deleting roadmap:", error);
      return false;
    }
  }

  static clearAllRoadmaps() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);

      // Trigger storage event for other tabs
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: this.STORAGE_KEY,
          newValue: null,
        })
      );

      return true;
    } catch (error) {
      console.error("Error clearing roadmaps:", error);
      return false;
    }
  }
}

export default RoadmapService;
