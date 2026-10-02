import style from "./sectionTitle.module.css";

export default function SectionTitle({label, children}) {
  return (
    <>
      <mark className={style.label}>{label}</mark>
      <h2 className={style.title}>{children}</h2> {/* Use <strong> para destacar texto. */}
    </>
  );
}