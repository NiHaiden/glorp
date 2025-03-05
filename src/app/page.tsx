"use client";

export default function Home() {
  const elements = Array.from({ length: 24 }, (_, index) => index + 1);
  return (
    <div className="flex flex-col h-dvh w-dvw gap-10 p-10">
      <h1 className="text-4xl font-bold">GLORP IS EVERYWHERE</h1>
      <h1 className="text-4xl font-bold">ALL HAIL GLORP</h1>

      <div className="flex flex-wrap gap-10">
        {elements.map((element) => {
          return (
            <>
              <div key={element + 2} className={`relative h-65 ${element % 2 === 0 ? "animate-bounce": "animate-spin"}`}>
                <img
                  src={"/glorp_alien.png"}
                  alt="Image"
                />
              </div>

              <div key={element + 1} className="relative w-50 h-50 animate-spin">
                <img
                  src={"/glorp.webp"}
                  alt="Image"
                />
              </div>
            </>
          );
        }
        )}
      </div>
    </div>
  );
}
