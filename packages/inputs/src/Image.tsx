import { z } from "zod";
import { Input } from ".";

export const image: Input<string> = {
  zod: z.string().url(),
  component: ({ disabled, value, onChange, props: { placeholder, label, tooltip } }) => {
    return (
      <div>
        <label>{label}</label>
        <input
          disabled={disabled}
          placeholder={placeholder}
          type="text"
          className="checkbox checkbox-primary"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  },
};
