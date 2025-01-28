const HeroHead = () => {
  const rotatingTexts = [
    "win more RFPs.",
    "crush InfoSec questionnaires.",
    "draft new proposals.",
    "speed up DDQs.",
  ];

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Hero Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto pt-20 px-4">
        <div className="text-center">
          {/* Hero Title */}
          <h1 className="text-5xl font-bold mb-4">
            AI&nbsp;agents to
            {/* Rotating Text Container */}
            <div className="relative h-20 mt-2">
              {rotatingTexts.map((text, index) => (
                <div
                  key={index}
                  className="absolute w-full animate-fade-in-down opacity-0"
                  style={{
                    animationDelay: `${index * 3}s`,
                    animationDuration: "12s",
                    animationIterationCount: "infinite",
                  }}
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </h1>

          {/* Hero Description */}
          <p className="text-xl text-gray-600 mb-8">
            A digital teammate to get you to a great first draft — enabling you
            to win more, faster.
          </p>

          {/* Form Section */}
          <div className="max-w-lg mx-auto">
            <form
              id="contact-form"
              name="contact-form"
              className="flex flex-col sm:flex-row gap-4"
              aria-label="Contact Form"
            >
              <div className="flex-1">
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength={256}
                  name="email"
                  placeholder="Enter your email..."
                  title="Please enter a business email address."
                  type="email"
                  required
                  pattern="((?!@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|icloud\.com)).)*"
                />
              </div>

              {/* Hidden UTM Fields */}
              <input type="hidden" name="utm_source" value="" />
              <input type="hidden" name="utm_medium" value="" />
              <input type="hidden" name="utm_campaign" value="" />
              <input type="hidden" name="gclid_field" value="" />

              {/* Submit Button */}
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn more
              </button>
            </form>

            {/* Form Messages */}
            <div className="mt-4 space-y-2">
              <div
                className="hidden success-message text-green-600"
                role="region"
                aria-label="Success"
              >
                Thank you. We will reach out shortly.
              </div>
              <div
                className="hidden error-message text-red-600"
                role="region"
                aria-label="Error"
              >
                Oops! Something went wrong while submitting the form.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Video Section */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full max-w-6xl mx-auto opacity-50">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://cdn.prod.website-files.com/65625582dcbd1d3b7f329f98%2F67021a862c41968af5d32485_Website%20Demo%20Video%20-%20Oct%202024-poster-00001.jpg"
          >
            <source
              src="https://cdn.prod.website-files.com/65625582dcbd1d3b7f329f98%2F67021a862c41968af5d32485_Website%20Demo%20Video%20-%20Oct%202024-transcode.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.prod.website-files.com/65625582dcbd1d3b7f329f98%2F67021a862c41968af5d32485_Website%20Demo%20Video%20-%20Oct%202024-transcode.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroHead;
