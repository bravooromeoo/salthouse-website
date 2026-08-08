function About() {
  return (
    <section
      id="about"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#111111]"
    >
      {/* Image side */}
      <div
        className="min-h-[60vh] lg:min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about-coast.jpg')",
        }}
      ></div>

      {/* Story side */}
      <div className="flex items-center px-8 py-20 md:px-16 lg:px-20">
        <div className="max-w-2xl text-[#d8bd8a]">

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-10">
            A different standard
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Some homes deserve more than management.
            </p>

            <p>
              They deserve stewardship.
            </p>

            <p>
              Salt House was born from a vision to bring the refinement of
              luxury hospitality and the uncompromising standards of the
              world's finest superyachts to exceptional homes across Devon and
              Cornwall.
            </p>

            <p>
              Every detail is considered.
            </p>

            <p>
              Every arrival is anticipated.
            </p>

            <p>
              Every property is cared for with precision, discretion and an
              unwavering commitment to excellence.
            </p>

            <p>
              Our role is quietly behind the scenes, so that every time you
              unlock the door, your home feels exactly as it should beautifully
              prepared, effortlessly welcoming and ready to enjoy.
            </p>

            <p>
              Because true luxury isn't about extravagance.
            </p>

            <p>
              It's about knowing everything has already been taken care of.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;