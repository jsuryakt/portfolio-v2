"use client"

export default function Banner() {
  const text = "ship • code • workout • run • repeat • "

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16">
      <style>{`
        @keyframes scroll-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .banner-scroll {
          animation: scroll-loop 60s linear infinite;
          display: flex;
          gap: 8px;
        }
      `}</style>
      <div className="flex overflow-hidden">
        <div className="banner-scroll">
          <span className="text-2xl md:text-4xl font-bold opacity-20 text-primary-300 whitespace-nowrap">{text}</span>
          <span className="text-2xl md:text-4xl font-bold opacity-20 text-primary-300 whitespace-nowrap">{text}</span>
          <span className="text-2xl md:text-4xl font-bold opacity-20 text-primary-300 whitespace-nowrap">{text}</span>
          <span className="text-2xl md:text-4xl font-bold opacity-20 text-primary-300 whitespace-nowrap">{text}</span>
          <span className="text-2xl md:text-4xl font-bold opacity-20 text-primary-300 whitespace-nowrap">{text}</span>
          <span className="text-2xl md:text-4xl font-bold opacity-20 text-primary-300 whitespace-nowrap">{text}</span>
        </div>
        <div className="banner-scroll">
          <span className="text-2xl md:text-4xl font-bold opacity-20 text-primary-300 whitespace-nowrap">{text}</span>
          <span className="text-2xl md:text-4xl font-bold opacity-20 text-primary-300 whitespace-nowrap">{text}</span>
          <span className="text-2xl md:text-4xl font-bold opacity-20 text-primary-300 whitespace-nowrap">{text}</span>
          <span className="text-2xl md:text-4xl font-bold opacity-20 text-primary-300 whitespace-nowrap">{text}</span>
          <span className="text-2xl md:text-4xl font-bold opacity-20 text-primary-300 whitespace-nowrap">{text}</span>
          <span className="text-2xl md:text-4xl font-bold opacity-20 text-primary-300 whitespace-nowrap">{text}</span>
        </div>
      </div>
    </section>
  )
}
