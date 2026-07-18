type PageTitleProps = {
  title: string;
  subtitle: string;
};

export default function PageTitle({
  title,
  subtitle,
}: PageTitleProps) {
  return (
    <div
      style={{
        marginBottom: 24,
      }}
    >
      <h1
        style={{
          margin: 0,
          color: "#ffffff",
          fontSize: 30,
          fontWeight: 700,
        }}
      >
        {title}
      </h1>

      <p
        style={{
          marginTop: 8,
          color: "#94A3B8",
          fontSize: 15,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}