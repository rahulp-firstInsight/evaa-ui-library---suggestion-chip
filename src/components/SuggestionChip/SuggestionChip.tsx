import React from "react";
import { useReducer } from "react";
import { LocalTaxi } from "../LocalTaxi";
import "./style.scss";

interface Props {
  labelText: string;
  showFocusIndicator: boolean;
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
  className: any;
}

export const SuggestionChip = ({
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
      className={`suggestion-chip ${state.state} selected-${state.selected} ${state.style} show-icon-${state.showIcon} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="state-layer">
        {state.showIcon && (
          <LocalTaxi
            className="leading-icon"
            localTaxi={
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
