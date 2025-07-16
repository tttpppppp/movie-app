/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from "react-hook-form";

const FormField = ({ control, label, name, Component }: any) => {
  return (
    <div>
      <p className="font-bold mb-1">{label}</p>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, name } }) => (
          <Component
            onChange={onChange}
            value={value}
            name={name}
            control={control}
          />
        )}
      />
    </div>
  );
};

export default FormField;
