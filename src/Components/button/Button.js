import "./Button.css";

export default function Button(params) {
  return (
    <button className="button" onClick={params.handleonClick}>
      <span>{params.text}</span>
    </button>
  );
}
