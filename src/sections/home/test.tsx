import { Zap } from "lucide-react";

const scheduleData = [
  {
    date: "02 September, 2023",
    items: [
      {
        title: "Freezing Edge 2023",
        desc: "The edge isn’t bleeding, it’s freezing!",
      },
      {
        title: "Design systems for beginners",
        desc: "The workshop will provide you with all the basics",
      },
      {
        title: "Web Components – Write once & run",
        desc: "The edge isn’t bleeding, it’s freezing!",
      },
    ],
  },
  {
    date: "03 September, 2023",
    items: [
      {
        title: "Accessibility testing for developers",
        desc: "The workshop is split into several modules.",
      },
      {
        title: "The weird things about React",
        desc: "Conditional rendering issues in JSX, forwardRef",
      },
    ],
  },
];

export default function ConferenceTimeline() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Conferences
      </h1>
      <div className="relative pl-6">
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gray-200 z-0" />

        {scheduleData.map((day, i) => (
          <div key={i} className="mb-16 relative z-10">
            {day.items.map((item, j) => {
              const isLeft = (i + j) % 2 === 0;
              return (
                <div
                  key={j}
                  className={`flex items-start justify-between gap-6 mb-8  ${
                    isLeft
                      ? "flex-row-reverse relative right-[7%] "
                      : "  relative left-[5.5%]"
                  }`}
                >
                  <div className="w-1/2">
                    <div className="bg-[#F9FAFB] shadow-md p-4 rounded-lg border-t-4 border-[#CDCDCD]">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                        <h3 className="text-[#111D5E] font-medium text-[18px]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center w-10">
                    <div
                      className={`rounded-full border-1 p-1.5 bg-white z-10  ${
                        i === 0 && j === 0
                          ? "border-yellow-400"
                          : "border-gray-300"
                      }`}
                    >
                      <Zap
                        size={16}
                        className={`${
                          i === 0 && j === 0
                            ? "text-yellow-400 "
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </div>
                  <span className="text-xs mt-2 text-gray-500 whitespace-nowrap">
                    {day.date}
                  </span>
                  <div className="w-1/2"></div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
