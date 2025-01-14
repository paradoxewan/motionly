import { z } from "zod";
import { getColspan, Input } from ".";

export const checkbox: Input<boolean> = {
  zod: z.boolean(),
  component: ({ disabled, value, onChange, props: { placeholder, label, tooltip, colspan } }) => {
    return (
      <div className="form" style={getColspan(colspan)}>
        <label>{label}</label>
        <input
          disabled={disabled}
          placeholder={placeholder}
          type="checkbox"
          checked={value || false}
          className="checkbox checkbox-primary"
          onChange={(e) => onChange(e.target.checked)}
        />
      </div>
    );
  },
};
