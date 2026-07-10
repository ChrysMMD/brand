import { Navbar } from "@/components/ui/Navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "var(--color-background)",
        }}
      />
    </>
  );
}
