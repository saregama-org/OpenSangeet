import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Indian Classical Music
      </h1>
      <p>
        You can start with{" "}
        <Link
          href="/docs"
          style={{
            fontWeight: "600",
            textDecoration: "underline",
          }}
        >
          Svar (musical notes).
        </Link>
      </p>
    </main>
  );
}
