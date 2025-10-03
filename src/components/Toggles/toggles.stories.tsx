import React from "react";
import { Toggles } from "./Toggles";

export default {
  title: "Components/Toggles",
  component: Toggles,
};

export const AllVariants = () => {
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2>Selected Toggles</h2>
      
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Toggles
          labelText="Enabled Elevated"
          selected
          showIcon
          stateProp="enabled"
          style="elevated"
        />
        <Toggles
          labelText="Enabled Outlined"
          selected
          showIcon
          stateProp="enabled"
          style="outlined"
        />
        <Toggles
          labelText="Hovered Elevated"
          selected
          showIcon
          stateProp="hovered"
          style="elevated"
        />
        <Toggles
          labelText="Hovered Outlined"
          selected
          showIcon
          stateProp="hovered"
          style="outlined"
        />
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Toggles
          labelText="Focused Elevated"
          selected
          showIcon
          stateProp="focused"
          style="elevated"
        />
        <Toggles
          labelText="Focused Outlined"
          selected
          showIcon
          stateProp="focused"
          style="outlined"
        />
        <Toggles
          labelText="Pressed Elevated"
          selected
          showIcon
          stateProp="pressed"
          style="elevated"
        />
        <Toggles
          labelText="Pressed Outlined"
          selected
          showIcon
          stateProp="pressed"
          style="outlined"
        />
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Toggles
          labelText="Dragged Elevated"
          selected
          showIcon
          stateProp="dragged"
          style="elevated"
        />
        <Toggles
          labelText="Dragged Outlined"
          selected
          showIcon
          stateProp="dragged"
          style="outlined"
        />
        <Toggles
          labelText="Disabled Elevated"
          selected
          showIcon
          stateProp="disabled"
          style="elevated"
        />
        <Toggles
          labelText="Disabled Outlined"
          selected
          showIcon
          stateProp="disabled"
          style="outlined"
        />
      </div>

      <h2>Unselected Toggles</h2>
      
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Toggles
          labelText="Enabled Elevated"
          selected={false}
          showIcon
          stateProp="enabled"
          style="elevated"
        />
        <Toggles
          labelText="Enabled Outlined"
          selected={false}
          showIcon
          stateProp="enabled"
          style="outlined"
        />
        <Toggles
          labelText="Hovered Elevated"
          selected={false}
          showIcon
          stateProp="hovered"
          style="elevated"
        />
        <Toggles
          labelText="Hovered Outlined"
          selected={false}
          showIcon
          stateProp="hovered"
          style="outlined"
        />
      </div>

      <h2>Without Icon</h2>
      
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Toggles
          labelText="No Icon Elevated"
          selected
          showIcon={false}
          stateProp="enabled"
          style="elevated"
        />
        <Toggles
          labelText="No Icon Outlined"
          selected
          showIcon={false}
          stateProp="enabled"
          style="outlined"
        />
        <Toggles
          labelText="No Icon Elevated"
          selected={false}
          showIcon={false}
          stateProp="enabled"
          style="elevated"
        />
        <Toggles
          labelText="No Icon Outlined"
          selected={false}
          showIcon={false}
          stateProp="enabled"
          style="outlined"
        />
      </div>
    </div>
  );
};

export const Interactive = () => {
  return (
    <div style={{ padding: "20px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Toggles
        labelText="Hover Me"
        selected={false}
        showIcon
        stateProp="enabled"
        style="elevated"
      />
      <Toggles
        labelText="Hover Me"
        selected={false}
        showIcon
        stateProp="enabled"
        style="outlined"
      />
      <Toggles
        labelText="Selected"
        selected
        showIcon
        stateProp="enabled"
        style="elevated"
      />
      <Toggles
        labelText="Selected"
        selected
        showIcon
        stateProp="enabled"
        style="outlined"
      />
    </div>
  );
};
