import Option from "../Option/Option";
import React from "react";

type TLabelProps = {
  value: string;
  title: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
};

const Label: React.FC<TLabelProps> = ({ value, onChange, title }) => {
  return (
    <div>
      <label>
        <div>{title}</div>
        <select value={value} onChange={onChange}>
          <Option currency="USD" />
          <Option currency="EURO" />
        </select>
      </label>
    </div>
  );
};


export default Label;
