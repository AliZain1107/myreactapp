import React, { useEffect, useState, useRef } from "react";

const Timeline = () => {
  const [scrollLinePosition, setScrollLinePosition] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      // Get the bounding box of the timeline section
      const { top, bottom, height } = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if the timeline section is in the viewport
      if (top <= viewportHeight && bottom >= 0) {
        // Calculate scroll position relative to the timeline section
        const scrolledInSection =
          ((viewportHeight - Math.max(top, 0)) / height) * 100;
        setScrollLinePosition(Math.min(Math.max(scrolledInSection, 0), 100));
      } else {
        // Reset if section is out of the viewport
        setScrollLinePosition(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Start Your Journey",
      description:
        "Unlock the door to newer opportunities in less than a minute. Submit your application from anywhere around the globe.",
    },
    {
      id: 2,
      title: "Browse Opportunities",
      description:
        "Connect through a collaborative marketplace and synergize with businesses and individuals alike.",
    },
    {
      id: 3,
      title: "Collaborate With Trust",
      description:
        "TIIR connects investors with a wide array of opportunities and links SMEs to forward-thinking investors.",
    },
    {
      id: 4,
      title: "Achieve Success",
      description:
        "Work together in real-time to achieve real profits. Let’s build the future together!",
    },
  ];

  return (
    <div className="bg-black text-white p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">How We Turn Ideas Into Reality?</h2>
        <p className="text-gray-400">Step by step, we bring ideas to life.</p>
      </div>

      <div ref={timelineRef} className="relative">
        {/* Fixed Center Line */}
        <div className="fixed left-1/2 -translate-x-1/2 w-[4px] h-screen bg-gray-600 z-10"></div>

        {/* Dynamic Moving Small Line */}
        <div
          className="fixed left-1/2 -translate-x-1/2 w-[4px] bg-orange-500 z-20"
          style={{
            top: `${scrollLinePosition}%`,
            height: "50px",
          }}
        ></div>

        {/* Timeline Steps */}
        <div className="space-y-20 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center justify-between`}
            >
              <div className="w-1/2 p-4">
                <div className="bg-gray-800 border-2 border-orange-500 rounded-lg p-6">
                  <h3 className="text-orange-500 text-2xl font-bold mb-2">
                    {step.id}
                  </h3>
                  <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
