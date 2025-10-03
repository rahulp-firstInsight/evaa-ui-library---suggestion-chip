import React from "react";
import { useReducer } from "react";
import "./toggles.scss";

interface Props {
  labelText: string;
  showFocusIndicator?: boolean;
  style: "outlined" | "elevated";
  stateProp:
    | "enabled"
    | "focused"
    | "pressed"
    | "hovered"
    | "dragged"
    | "disabled";
  selected: boolean;
  showIcon: boolean;
  className?: string;
}

export const Toggles = ({
  labelText = "Label",
  showFocusIndicator = false,
  style,
  stateProp,
  selected,
  showIcon,
  className,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "outlined",
    state: stateProp || "enabled",
    selected: selected,
    showIcon: showIcon,
  });

  return (
    <div
      className={`toggles ${state.state} selected-${state.selected} ${state.style} show-icon-${state.showIcon} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="state-layer">
        {state.showIcon && (
          <img
            className="leading-icon"
            alt="Leading icon"
            src={
              state.state === "disabled"
                ? "https://c.animaapp.com/bSDqsV5Y/img/leading-icon-37.svg"
                : "https://c.animaapp.com/bSDqsV5Y/img/leading-icon-47.svg"
            }
          />
        )}

        <div className="label-text">{labelText}</div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "enabled",
      };
  }

  return state;
}
