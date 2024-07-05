import Image from "next/image";

// five pastel colors
const colors = ["#FFD700", "#FF69B4", "#00FF00", "#87CEEB", "#FFA500"];
export default function Home() {
  return (
    <main>
      {colors.map((col, index) => (
        <section
          key={col}
          className="w-screen h-screen flex items-center justify-center"
          style={{ backgroundColor: col }}
        >
          <h1 className="text-black font-bold text-[60px] opacity-75">{index + 1}</h1>
        </section>
      ))}
    </main>
  );
}
