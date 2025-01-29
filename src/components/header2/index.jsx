import React from "react";

const index = () => {
  return 
  <>
    <!-- Hero Section -->
    <section class="min-h-screen bg-cover bg-center flex items-center justify-center" style="background-image: url('https://source.unsplash.com/1600x900/?workspace');">
        <div class="text-center">
            <h1 class="text-4xl font-bold">JASON <span class="text-blue-500">MARTIN</span></h1>
            <p class="text-lg mt-4">Graphic Designer</p>
            <div class="mt-8 flex justify-center gap-4">
                <button class="px-6 py-2 bg-blue-500 text-white rounded-full">Resume</button>
                <button class="px-6 py-2 bg-transparent border border-blue-500 text-blue-500 rounded-full">Portfolio</button>
            </div>
            <div class="mt-6 flex justify-center gap-4">
                <a href="#" class="text-xl"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-xl"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="text-xl"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-xl"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </section>
  </>;
};

export default index;
