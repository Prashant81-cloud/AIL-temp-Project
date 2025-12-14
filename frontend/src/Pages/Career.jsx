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
    <div className='min-h-screen px-15  flex gap-27'>
        <div className='w-1/2'>
                    <h1 className='nunito-sans font-extrabold text-5xl  '>Careers at  AIL India</h1>
                    <p className='nunito-sans text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti error dolore exercitationem voluptatum obcaecati nam perferendis similique delectus cupiditate dolorem amet illo velit, nostrum nobis odit beatae in totam!</p>
            <form
      onSubmit={handleSubmit}
      className="  p-6 space-y-4 mt-10"
    >


      {/* Name */}
      <div className='flex flex-col gap-8 '>
                <label className="text-2xl font-normal text-black">
          Your Name
        </label>
      <input
        type="text"
        name="name"
        placeholder=""
        value={formData.name}
        onChange={handleChange}
        required
        className=" w-full bg-transparent border-b border-black pb-4 text-xl focus:outline-none"
      />
</div>

      {/* Email */}
      <div className='flex flex-col gap-8'>
                <label className="text-2xl font-normal text-black">
          Your Email
        </label>
      <input
        type="email"
        name="email"
        placeholder=""
        value={formData.email}
        onChange={handleChange}
        required
        className=" w-full bg-transparent border-b border-black pb-4 text-xl focus:outline-none"
      />
</div>

      {/* Phone */}
      <div className='flex flex-col gap-8'>
                <label className="text-2xl font-normal text-black">
          Your Number
        </label>
      <input
        type="tel"
        name="phone"
        placeholder=""
        value={formData.phone}
        onChange={handleChange}
        required
        className=" w-full bg-transparent border-b border-black pb-4 text-xl focus:outline-none"
      />
</div>

      {/* Cover Letter */}
      <div className='flex flex-col gap-8'>
                <label className="text-2xl font-normal text-black">
          Cover Letter - Upto 1500 words
        </label>
      <textarea
        name="coverLetter"
        placeholder=""
        rows="5"
        value={formData.coverLetter}
        onChange={handleChange}
        required
        className=" w-full bg-transparent border-b border-black pb-4 text-xl focus:outline-none"
      />
</div>

      {/* Google Drive Link */}
      <div className='flex flex-col gap-8'>
                <label className="text-2xl font-normal text-black">
Google Drive Link (Resume / Portfolio)
        </label>
      <input
        type="url"
        name="driveLink"
        placeholder=""
        value={formData.driveLink}
        onChange={handleChange}
        className=" w-full bg-transparent border-b border-black pb-4 text-xl focus:outline-none "
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
  {status === "loading" ? "Submitting..." : "Submit Application"}
</button>

    </form>
    {status !== "idle" && (
  <div
    className={`mt-6 rounded-lg px-4 py-3 text-lg ${
      status === "success"
        ? "bg-green-100 text-green-800"
        : status === "error"
        ? "bg-red-100 text-red-800"
        : ""
    }`}
  >
    {message}
  </div>
)}

        </div>

{/* div for images */}
<div className='w-1/2 flex flex-col gap-5'>
<img className='w-150' src="https://media.istockphoto.com/id/2113787906/vector/abstract-liquid-shapes-organic-flat-blobs-irregular-fluid-bubbles-random-wavy-spots-and.jpg?s=612x612&w=0&k=20&c=-PTL2ldv2qQ_40GgO9YV8z_m8YBn8ABCzzT0AD3pnds=" alt="" />
<img className='w-150' src="https://thumbs.dreamstime.com/b/colorful-abstract-image-showcases-geometric-pattern-triangles-squares-random-pleasing-arrangement-vibrant-323340484.jpg" alt="" />
<img className='w-150' src="https://www.shutterstock.com/image-illustration/abstract-colorful-geometrical-artworkabstract-graphical-260nw-1734175796.jpg" alt="" />
</div>




    </div>
  )
}

export default Career