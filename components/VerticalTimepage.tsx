import VerticalTimeline02 from './verticaltimeline2'

export function VerticalTimelinePage() {
  const timelineItems = [
    {
      title: "Quick Fundamentals",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Quickly grasp essential editing concepts without getting stuck in theory.
          </p>
        </div>
      ),
      completed: true, // Added property
      date: "2024-10-01", // Added property
    },
    {
      title: "Mastering Trending Styles",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Learn and practice the latest trends to create standout content.
          </p>
        </div>
      ),
      completed: false,
      date: "2024-10-05",
    },
    {
      title: "Practice for Perfection",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Refine your edits through tasks focused on speed, precision, and creativity.
          </p>
        </div>
      ),
      completed: true,
      date: "2024-10-10",
    },
    {
      title: "Skill Marketing and Personal Branding",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Learn to market yourself, attract clients, and build a personal brand.
          </p>
        </div>
      ),
      completed: false,
      date: "2024-10-15",
    },
    {
      title: "Performance Review & Growth",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-lg font-normal mb-8">
            Get feedback, improve, and ensure you're ready to succeed confidently.
          </p>
        </div>
      ),
      completed: true,
      date: "2024-10-20",
    },
  ];

  return (
    <>
      <main className="relative h-full -mt-20 flex flex-col justify-center bg-black overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex flex-col justify-center divide-y  [&>*]:py-16">
            <h1 className="text-6xl md:text-8xl font-bold  text-center text-white ">
              Students Road Map
            </h1>
            <div className="w-full max-w-3xl mx-auto">
              <VerticalTimeline02 items={timelineItems} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
