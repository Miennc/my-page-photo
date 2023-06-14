<template>
  <div class="container py-[5rem]  mx-auto">
 <h2 class=" line my-[1rem] text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]">    Thoughts  we share</h2>
    <div class="lg:grid-cols-3 grid md:grid-cols-2 grid-cols-1 gap-5">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
           v-for="(item,index) in 6" :key="index">
        <img class="lg:h-48 md:h-36 w-full object-cover object-center ani-img" src="https://i.pinimg.com/564x/d3/1e/c1/d31ec162f890d97b76bdb08cd9dcbf5b.jpg"
             alt="blog" >
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
        <router-link to="/details-new">
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3 cursor-pointer">The Catalyzer</h1>
        </router-link>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
            tousled waistcoat.</p>
          <div class="flex items-center flex-wrap ">
            <a class=" text-[#0076be] inline-flex items-center">Discover Now
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                   class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span
                class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                     stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                     stroke-linejoin="round" viewBox="0 0 24 24">
                  <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center my-[3rem]">
     <Button>load more...</Button>
    </div>


        <h1 class=" line my-[2rem] text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]">Testimonials</h1>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full bg-gray-100 p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
              <a class="inline-flex items-center">
                <img alt="testimonial" src="https://i.pinimg.com/236x/1f/f2/4d/1ff24d7ebbae1a4eef4a76861f979994.jpg" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-[#333e48]">Holden Caulfield</span>
              <span class="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full bg-gray-100 p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
              <a class="inline-flex items-center">
                <img alt="testimonial" src="https://i.pinimg.com/236x/1f/f2/4d/1ff24d7ebbae1a4eef4a76861f979994.jpg" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-[#333e48]">Alper Kamu</span>
              <span class="text-gray-500 text-sm">DESIGNER</span>
            </span>
              </a>
            </div>
          </div>
        </div>
      </div>


</template>

<script setup>
import Button from "../components/Button.vue";
import {onMounted} from "vue";
onMounted(() => {
  window.scroll(0, 0)
})
</script>

<style scoped>
.ani-img:hover {
  animation: pulse 1s infinite;
  transform: scale(1.2);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}


</style>