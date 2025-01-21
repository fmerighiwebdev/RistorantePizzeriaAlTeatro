import styles from "./input.module.css";

export default function Input({ label, type, name, value, onChange, error, onFocus, placeholder }) {
  let Tag;

  if (type === "textarea") {
    Tag = "textarea";
  } else {
    Tag = "input";
  }

  if (type === "checkbox") {
    return (
      <>
        <div className={styles.inputGroupFlex}>
          <Tag type={type} name={name} checked={value} onChange={onChange} onFocus={onFocus} />
          <label>{label}</label>
        </div>
        {error && <p className={styles.inputError}>{error}</p>}
      </>
    );
  }

  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <Tag
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? styles.inputError : null}
        onFocus={onFocus}
        placeholder={placeholder}
      />
      {error && <p className={styles.inputTextError}>{error}</p>}
    </div>
  );
}
