import React, { useState } from "react";

function UpcomingSeries() {

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    brandName: "",
    email: "",
    phone: "",
  });

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
      const res = await fetch("/api/send-email-upcomingSeries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage("Details submitted successfully!");

        // Clear form
        setFormData({
          brandName: "",
          email: "",
          phone: "",
        });

        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 4000);
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Server error. Please try later.");
    }
  };

  return (
    <div className="min-h-screen px-6 md:px-16 py-12 flex flex-col">
      <div className="w-full max-w-3xl">
        <h1 className="nunito-sans font-extrabold text-3xl md:text-5xl">
          Upcoming Series
        </h1>

        <p className="nunito-sans text-base md:text-xl mt-5 md:mt-7">
          Partner with AIL India by submitting your brand details for our
          upcoming series.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">

          {/* Brand Name */}
          <div className="flex flex-col gap-6">
            <label className="text-lg md:text-2xl">
              Name of Brand 
            </label>
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-black pb-4 text-base md:text-xl focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-6">
            <label className="text-lg md:text-2xl">
              Email 
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-black pb-4 text-base md:text-xl focus:outline-none"
            />
          </div>

          {/* Phone (Optional) */}
          <div className="flex flex-col gap-6">
            <label className="text-lg md:text-2xl">
              Phone (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-black pb-4 text-base md:text-xl focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-3 rounded-lg transition ${
              status === "loading"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:opacity-90"
            }`}
          >
            {status === "loading" ? "Submitting..." : "Submit"}
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
    </div>
  );
}

export default UpcomingSeries;
