import Option from "../Option/Option";

const Label = ({ value, onChange, title }) => {
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
