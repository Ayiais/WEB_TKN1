import React from "react";
import Navbar from "../landingpage/Navbar";
import { HiArrowLeft } from "react-icons/hi";
import MapsKontak from "./MapsKontak";

const HalamanKontakk = () => {
  return (
    <>
    <Navbar />
    <div className="py-16 px-4 md:px-20 bg-white">
      <div className="mb-6 mt-6">
        <a
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
          <HiArrowLeft className="mr-1 text-2xl" />
         </a>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-left text-2xl md:text-5xl font-extrabold text-[#064A8C] mb-8">
          Kontak Kami
        </h1>
        <p className="text-left text-2xl md:text-sm font-medium text-black mb-20">
          Hubungi kami jika memiliki pertanyaan, komentar dan saran  
        </p>

        <div className="flex flex-col md:flex-row gap-20">
        <div className="flex flex-col gap-4 md:w-1/4">
          <div className="bg-[#3C80C7] text-white rounded-md p-4">
            <h3 className="font-semibold mb-2 text-center text-xl">Telepon</h3>
            <p className="font-normal text-center text-sm">+628123456789</p>
            <p className="font-normal text-center text-sm">+628123456789</p>
          </div>
          <div className="bg-[#3C80C7] text-white rounded-md p-4">
            <h3 className="font-semibold mb-2 text-center text-xl">Facebook</h3>
            <p className="font-normal text-center text-sm">Tknsatu Sangattautara</p>
          </div>
          <div className="bg-[#3C80C7] text-white rounded-md p-4">
            <h3 className="font-semibold mb-2 text-center text-xl">Instagram</h3>
            <p className="font-normal text-center text-sm">@tkn1sangutbp</p>
          </div>
          <div className="bg-[#3C80C7] text-white rounded-md p-4">
            <h3 className="font-semibold mb-2 text-center text-xl">Email</h3>
            <p className="font-normal text-center text-sm">tkn1sangut@gmail.com</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-10">
          <div className="rounded-md overflow-hidden">
            <MapsKontak/>
          </div>

          <div className="bg-blue-100 rounded-md p-4">
            <h3 className="text-center text-2xl font-semibold mb-4">Kirim Pesan</h3>
            <form className="flex flex-col gap-3">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Nama"
                  className="flex-1 px-2 py-1 border border-gray-300 rounded"/>
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-2 py-1 border border-gray-300 rounded"/>
              </div>
              <textarea
                placeholder="Tulis pesan disini"
                className="px-2 py-1 border border-gray-300 rounded"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="self-end bg-[#6FBFF2] text-white px-4 py-1 rounded hover:bg-blue-600">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default HalamanKontakk;