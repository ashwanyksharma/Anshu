import React from "react";

const creators = [
  {
    id: 1,
    name: "Anik jain",
    followers: "450K followers",
    image: "/Images/Anik Jain.png",
  },
  {
    id: 2,
    name: "Vir Saini", 
    followers: "150K followers",
    image: "/Images/Vir Saini.png",
  },
  {
    id: 3,
    name: "Surbhi Gandhi",
    followers: "66K followers",
    image: "/Images/Surbhi Gandhi.png",
  },
  {
    id: 4,
    name: "Amrit Talks",
    followers: "59K followers",
    image: "/Images/Amrit talks.png",
  },
  {
    id: 5,
    name: "Dinesh Thakkar",
    followers: "79K followers",
    image: "/Images/Dinesh Thakkar.png",
  },
];

function CreatorsSection() {
  return (
    <section
      className="py-16 sm:py-24 lg:py-32 bg-black"
      id="creators"
      aria-labelledby="creators-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            id="creators-heading"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-500 uppercase tracking-tight mb-2 px-2"
          >
            {"CREATORS WE'VE WORKED WITH".split("").map((letter, i) => (
              <span
                key={i}
                className="inline-block transition-transform duration-300 hover:scale-150 hover:-rotate-6 hover:text-white cursor-default"
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h2>
        </div>

        {/* Creator Cards - Mobile: Vertical List */}
<div className="flex flex-col space-y-6 lg:hidden max-w-md mx-auto">
  {creators.map((creator) => (
    <div key={creator.id} className="group">
      <div className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-zinc-900/80 border border-zinc-800/50 
                      flex flex-col items-center justify-between w-[318px] h-[400px] mx-auto">
        
        {/* Profile Image */}
        <div className="w-[200px] h-[250px] rounded-xl overflow-hidden shadow-lg mb-4">
          <img
            src={creator.image}
            alt={creator.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Creator Info */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-1 font-medium">
            {creator.followers}
          </p>
          <h3 className="text-white font-bold text-base leading-tight">
            {creator.name}
          </h3>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* Creator Cards - Desktop: Horizontal scroll */}
        <div className="hidden lg:flex justify-center items-center gap-6 max-w-7xl mx-auto overflow-x-auto pb-4">
          {creators.map((creator) => (
            <div key={creator.id} className="flex-shrink-0 group">
              <div className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-zinc-900/80 border border-zinc-800/50 h-96 min-w-[200px] max-w-[220px] flex items-center justify-center">
                <div className="text-center">
                  {/* Profile Image */}
                  <div className="relative mb-6 mx-auto">
                    <div className="w-40 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={creator.image}
                        alt={creator.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  </div>

                  {/* Creator Info */}
                  <div>
                    <p className="text-gray-400 text-sm mb-2 font-medium">
                      {creator.followers}
                    </p>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {creator.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button on Mobile */}
        <div className="lg:hidden text-center mt-6">
          <button className="text-orange-500 hover:text-orange-400 transition-colors duration-300 text-sm font-medium">
            View All Creators →
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreatorsSection;
