// IconButton.jsx
export default function IconButton({ iconClass, onClick }) {
  return (
    <div className={`${iconClass}-icon`} onClick={onClick}>
      <i className={`fas ${iconClass}`}></i>
    </div>
  );
}
