import React from "react";
import "./DurationSelector.css"; // Import the corresponding CSS file

const DurationSelector = ({
  durations,
  onSelectDuration,
  selectedDuration,
}) => {
  return (
    <div className="duration-selector-container">
      <label className="duration-label" htmlFor="durationSelector">
        Select Duration:
      </label>
      <select
        id="durationSelector"
        value={selectedDuration}
        onChange={(e) => onSelectDuration(e.target.value)}
        className="duration-select"
      >
        {durations.map((duration) => (
          <option key={duration} value={duration}>
            {duration}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DurationSelector;
