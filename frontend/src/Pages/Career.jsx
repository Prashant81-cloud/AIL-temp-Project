import React from 'react'
import { useState } from 'react'

function Career() {

  const [status, setStatus] = useState("idle"); 
  const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    driveLink: "",
  })

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  try {
    const res = await fetch("/api/send-email-career", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      setMessage("Application submitted successfully!");

      // ✅ CLEAR FORM
      setFormData({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
        driveLink: "",
      });

      // Optional: auto-hide message
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 4000);
    } else {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  } catch (err) {
    setStatus("error");
    setMessage("Server error. Please try later.");
  }
};





  return (
    <div className="min-h-screen px-6 md:px-16 py-12 flex flex-col md:flex-row gap-12">
      {/* LEFT: FORM */}
      <div className="w-full md:w-1/2">
        <h1 className="nunito-sans font-extrabold text-3xl md:text-5xl">
          Careers at AIL India
        </h1>

        <p className="nunito-sans text-base md:text-xl mt-5 md:mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          corrupti error dolore exercitationem voluptatum obcaecati nam
          perferendis similique delectus cupiditate dolorem amet illo velit,
          nostrum nobis odit beatae in totam!
        </p>

        <form onSubmit={handleSubmit} className="mt-8 md:mt-10 space-y-8">
          {/* Name */}
          <div className="flex flex-col gap-6">
            <label className="text-lg md:text-2xl">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-black pb-4 text-base md:text-xl focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-6">
            <label className="text-lg md:text-2xl">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-black pb-4 text-base md:text-xl focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-6">
            <label className="text-lg md:text-2xl">Your Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-black pb-4 text-base md:text-xl focus:outline-none"
            />
          </div>

          {/* Cover Letter */}
          <div className="flex flex-col gap-6">
            <label className="text-lg md:text-2xl">
              Cover Letter – Upto 1500 words
            </label>
            <textarea
              name="coverLetter"
              rows="5"
              value={formData.coverLetter}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-black pb-4 text-base md:text-xl focus:outline-none resize-none"
            />
          </div>

          {/* Drive Link */}
          <div className="flex flex-col gap-6">
            <label className="text-lg md:text-2xl">
              Google Drive Link (Resume / Portfolio)
            </label>
            <input
              type="url"
              name="driveLink"
              value={formData.driveLink}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-black pb-4 text-base md:text-xl focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-3 rounded-lg transition ${
              status === "loading"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:opacity-90"
            }`}
          >
            {status === "loading" ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        {/* Status Message */}
        {status !== "idle" && (
          <div
            className={`mt-6 rounded-lg px-4 py-3 text-lg ${
              status === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}
      </div>

      {/* RIGHT: IMAGES (HIDDEN BELOW MD) */}
      <div className="hidden md:flex md:w-1/2 flex-col gap-6">
        <img
          className="w-full rounded-lg"
          src="https://media.istockphoto.com/id/2113787906/vector/abstract-liquid-shapes-organic-flat-blobs-irregular-fluid-bubbles-random-wavy-spots-and.jpg"
          alt=""
        />
        <img
          className="w-full rounded-lg"
          src="https://thumbs.dreamstime.com/b/colorful-abstract-image-showcases-geometric-pattern-triangles-squares-random-pleasing-arrangement-vibrant-323340484.jpg"
          alt=""
        />
        <img
          className="w-full rounded-lg"
          src="https://www.shutterstock.com/image-illustration/abstract-colorful-geometrical-artworkabstract-graphical-260nw-1734175796.jpg"
          alt=""
        />
      </div>
    </div>

  )
}

export default Career