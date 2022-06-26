// create a new interface for prop types
interface InfoDisplayProps {
    label: string;
    information: string | undefined;
  }

function InfoDisplay({label, information}: InfoDisplayProps) {
  return (
    <span className="info-display">
        <label className="label-style">{label}:</label>
        <p>{information || "Unknown"}</p>
    </span>
  )
}

export default InfoDisplay