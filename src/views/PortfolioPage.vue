<script setup>
import {onMounted} from "vue";
onMounted(() => {
  window.scroll(0, 0)
})
</script>
<template>
  <div class="container mx-auto">
    <div class=" py-[3rem]">
      <div class="text-center text-[#333e48] font-[600] leading-[20px]">
        OUR PROJECTS
      </div>
      <div class="text-center line my-[1rem] text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]">
        Check Out Our Latest Project
      </div>

      <div class="flex justify-center">
        <div class="bg-[#333e48] mb-[1rem] w-[8rem] h-[4px]">
        </div>
      </div>
      <div class="text-center text-[#6a7c92]    text-[0.938rem] leading-[1.75rem]">
        <div class="lg:px-[20rem]">
          Business solution company sit our any how site used the our company any site us it-solve theme is very
          professional theme business & corporate, finance, advisor
        </div>
      </div>
    </div>

    <div class="md:flex lg:gap-4 gap-2  items-center justify-center mb-[3rem]">
      <div class="w-full md:w-auto">
        <button
            class="text-[#ffffff] w-full h-full bg-[#0076be] border-[#0076be]  text-[#ffffff] border border-dashed  font-[500] lg:px-5 md:px-2 py-1">
          All Works
        </button>
      </div>
      <div class="w-200px md:w-auto mt-2 md:mt-0">
        <button
            class="text-[#0076be] w-full h-full hover:bg-[#0076be] hover:text-[#ffffff] border border-dashed border-[#0076be] font-[500] lg:px-5 md:px-2 py-1">
          Branding
        </button>
      </div>
      <div class="w-200px md:w-auto my-2 md:my-0">
        <button
            class="text-[#0076be] w-full h-full hover:bg-[#0076be] hover:text-[#ffffff] border border-dashed border-[#0076be] font-[500] lg:px-5 md:px-2 py-1">
          Desing
        </button>
      </div>
      <div class="w-200px md:w-auto">
        <button
            class="text-[#0076be] w-full h-full hover:bg-[#0076be]  hover:text-[#ffffff] border border-dashed border-[#0076be] font-[500] lg:px-5 md:px-2 py-1">
          Development
        </button>
      </div>
      <div class="w-200px md:w-auto my-2 md:my-0">
        <button
            class="text-[#0076be] w-full h-full hover:bg-[#0076be] hover:text-[#ffffff] border border-dashed border-[#0076be] font-[500] lg:px-5 md:px-2 py-1">
          Graphice
        </button>
      </div>
      <div class="w-200px md:w-auto">
        <button
            class="text-[#0076be] w-full h-full hover:bg-[#0076be] hover:text-[#ffffff] border border-dashed border-[#0076be] font-[500] lg:px-5 md:px-2 py-1">
          Portfolio
        </button>
      </div>
    </div>
  </div>


 <div class="container mx-auto">
   <div class="grid md:grid-cols-3 grid-cols-1 gap-10  mx mb-10">
     <div class=" image-container relative  overflow-hidden col-span-1">
       <img src="../assets/images/portfolio/pt1-510x560.jpg" alt=""
            class="w-full lg:h-[30rem] h-[18rem] object-cover">
       <div class="absolute left-0 bottom-[10%] right-0">
         <div class="text-[#ffffff] text-container text-center text-[15px] leading-[18px]">
           design
         </div>
         <div class="text-[#ffffff] text-container my-[1rem] text-center font-[700] text-[20px] leading-[28px] ">
           Lorem ipsum dolor sit amet, consectetur
         </div>
         <div class="text-center">
           <button
               class="text-[#2513d1] bg-[#FFFFFF] text-container text-[#0c5adb]  rounded-[30px]  font-[500] px-2 text-[14px] py-1">
             Read More
           </button>
         </div>
       </div>
     </div>
     <div class=" image-container relative  overflow-hidden col-span-1">
       <img src="../assets/images/portfolio/pt2-510x560.jpg" alt=""
            class="w-full lg:h-[30rem] h-[18rem] object-cover">
       <div class="absolute left-0 bottom-[10%] right-0">
         <div class="text-[#ffffff] text-container text-center text-[15px] leading-[18px]">
           design
         </div>
         <div class="text-[#ffffff] text-container my-[1rem] text-center font-[700] text-[20px] leading-[28px] ">
           Lorem ipsum dolor sit amet, consectetur
         </div>
         <div class="text-center">
           <button
               class="text-[#2513d1] bg-[#FFFFFF] text-container text-[#0c5adb]  rounded-[30px]  font-[500] px-2 text-[14px] py-1">
             Read More
           </button>
         </div>
       </div>
     </div>
     <div class=" image-container relative  overflow-hidden col-span-1">
       <img src="../assets/images/portfolio/pt3-510x560.jpg" alt=""
            class="w-full lg:h-[30rem] h-[18rem] object-cover">
       <div class="absolute left-0 bottom-[10%] right-0">
         <div class="text-[#ffffff] text-container text-center text-[15px] leading-[18px]">
           design
         </div>
         <div class="text-[#ffffff] text-container my-[1rem] text-center font-[700] text-[20px] leading-[28px] ">
           Lorem ipsum dolor sit amet, consectetur
         </div>
         <div class="text-center">
           <button
               class="text-[#2513d1] bg-[#FFFFFF] text-container text-[#0c5adb]  rounded-[30px]  font-[500] px-2 text-[14px] py-1">
             Read More
           </button>
         </div>
       </div>
     </div>


     <div class=" image-container relative  overflow-hidden col-span-1">
       <img src="../assets/images/portfolio/pt4-510x560.jpg" alt=""
            class="w-full lg:h-[30rem] h-[18rem] object-cover">
       <div class="absolute left-0 bottom-[10%] right-0">
         <div class="text-[#ffffff] text-container text-center text-[15px] leading-[18px]">
           design
         </div>
         <div class="text-[#ffffff] text-container my-[1rem] text-center font-[700] text-[20px] leading-[28px] ">
           Lorem ipsum dolor sit amet, consectetur
         </div>
         <div class="text-center">
           <button
               class="text-[#2513d1] bg-[#FFFFFF] text-container text-[#0c5adb]  rounded-[30px]  font-[500] px-2 text-[14px] py-1">
             Read More
           </button>
         </div>
       </div>
     </div>


     <div class=" image-container relative  overflow-hidden col-span-1">
       <img src="../assets/images/portfolio/pt5-510x560.jpg" alt=""
            class="w-full lg:h-[30rem] h-[18rem] object-cover">
       <div class="absolute left-0 bottom-[10%] right-0">
         <div class="text-[#ffffff] text-container text-center text-[15px] leading-[18px]">
           design
         </div>
         <div class="text-[#ffffff] text-container my-[1rem] text-center font-[700] text-[20px] leading-[28px] ">
           Lorem ipsum dolor sit amet, consectetur
         </div>
         <div class="text-center">
           <button
               class="text-[#2513d1] bg-[#FFFFFF] text-container text-[#0c5adb]  rounded-[30px]  font-[500] px-2 text-[14px] py-1">
             Read More
           </button>
         </div>
       </div>
     </div>


     <div class=" image-container relative  overflow-hidden col-span-1 ">
       <img src="../assets/images/portfolio/pt6-510x560.jpg" alt=""
            class="w-full lg:h-[30rem] h-[18rem] object-cover">
       <div class="absolute left-0 bottom-[10%] right-0">
         <div class="text-[#ffffff] text-container text-center text-[15px] leading-[18px]">
           design
         </div>
         <div class="text-[#ffffff] text-container my-[1rem] text-center font-[700] text-[20px] leading-[28px] ">
           Lorem ipsum dolor sit amet, consectetur
         </div>
         <div class="text-center">
           <button
               class="text-[#2513d1] bg-[#FFFFFF] text-container text-[#0c5adb]  rounded-[30px]  font-[500] px-2 text-[14px] py-1">
             Read More
           </button>
         </div>
       </div>
     </div>
   </div>
 </div>
  <br>

</template>



<style scoped>


.image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover::before {
  opacity: 1;
}

.image-container:hover .text-container {
  transform: translateY(-20px);
}

.text-container {
  transition: transform 0.3s ease;
}
</style>