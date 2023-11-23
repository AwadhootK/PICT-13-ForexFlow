import React from "react";
import "./DurationSelector.css"; // Import the corresponding CSS file

const DurationSelector = ({
  durations,
  onSelectDuration,
  selectedDuration,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
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
      <input
        type="date"
        value={startDate}
        onChange={(e) => onStartDateChange(e.target.value)}
        placeholder="Start Date"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => onEndDateChange(e.target.value)}
        placeholder="End Date"
      />
    </div>
  );
};

export default DurationSelector;
