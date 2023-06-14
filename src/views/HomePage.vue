<script setup>
import Button from "../components/Button.vue";
import {onMounted, ref} from "vue";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

const countSocialMediaFollowers = ref(0)
const countClients = ref(0)
const countPublishedBooks = ref(0)
const countTedTalks = ref(0)
const countYearsOfExperience = ref(0)
const countWorkshops = ref(0)

const scrollToCount = () => {
  const statisticsElement = document.querySelector('.statistics');
  const rect = statisticsElement.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  if (rect.top <= viewHeight && !counting.value) {
    startCounting();
  }
};

const startCounting = () => {
  counting.value = true;
  const intervalId = setInterval(() => {
    countSocialMediaFollowers.value = countSocialMediaFollowers.value + 10;
    countClients.value = countClients.value + 2;
    countPublishedBooks.value = countPublishedBooks.value + 3;
    countTedTalks.value = countTedTalks.value + 4;
    countYearsOfExperience.value = countYearsOfExperience.value + 2;
    countWorkshops.value = countWorkshops.value + 5;
    if (countSocialMediaFollowers.value >= 10000) {
      clearInterval(intervalId);
    }
  }, 1);
};
const counting = ref(false);
onMounted(() => {
  window.addEventListener('scroll', scrollToCount);
});

const settings = ref({
  itemsToShow: 4,
  snapAlign: 'center',
  breakpoints: {
    // 700px and up
    361: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    768: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    // 1024 and up
    1024: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
    1092: {
      itemsToShow: 4,
      snapAlign: 'start',
    },
  },
})
</script>

<template>
  <div class="mt-[3rem] container mx-auto">
    <div class="grid lg:grid-cols-2 grid-cols-1  gap-5">
      <div class="col-span-1">
        <img src="../assets/images/home/about-1.png" alt="">
      </div>
      <div class="col-span-1">
        <div>
          <h2 class="text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]">Exclusive
            Technology For
            Provide IT Solution </h2>
          <div class="bg-[#333e48] mt-[0.5rem] w-[8rem] h-[4px]">
          </div>
          <p class="text-[#6a7c92] mt-[2rem] md:text-[1.1rem] text-[1rem] leading-[1.75rem]">
            IT-Solve is the partner of choice for many of the world’s leading and solving enterprises, SMEs and
            technology
            challengers. We help businesses elevate their value through custom software development.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae, consectetur culpa earum error fugiat
            iure magnam non praesentium quae?
          </p>
        </div>
        <div class="mt-[2rem]">
          <div class="flex justify-start items-center gap-2">
            <i class="fa-regular fa-circle-check text-[#0076be] text-2xl"></i> <span
              class="text-[#6a7c92]  text-[0.938rem] leading-[1.75rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, blanditiis?</span>
          </div>
          <div class="my-[1rem] flex justify-start items-center gap-2">
            <i class="fa-regular fa-circle-check text-[#0076be] text-2xl"></i> <span
              class="text-[#6a7c92]  text-[0.938rem] leading-[1.75rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, blanditiis?</span>
          </div>
          <div class="flex justify-start items-center gap-2">
            <i class="fa-regular fa-circle-check text-[#0076be] text-2xl"></i> <span
              class="text-[#6a7c92]  text-[0.938rem] leading-[1.75rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, blanditiis?</span>
          </div>
        </div>

        <Button class="mt-[2rem]">read more</Button>
      </div>
    </div>
  </div>

  <div class="bg-[#f4f7fc] my-[3rem]">
    <div class="container  mx-auto ">
      <div class=" py-[3rem]">
        <div class="text-center text-[#333e48] font-[600] md:leading-[20px] leading-[10px]">
          OUR SERVICES
        </div>
        <div
            class="text-center line my-[1rem] text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]">
          We Provide Best IT Solution
        </div>

        <div class="flex justify-center">
          <div class="bg-[#333e48] mb-[1rem] w-[8rem] h-[4px]">
          </div>
        </div>
        <div class="text-center text-[#6a7c92]    text-[0.938rem] leading-[1.75rem]">
          <div class="lg:px-[20rem] text-[#6a7c92]  md:text-[1.1rem] text-[1rem] leading-[1.75rem]">
            Business solution company sit our any how site used the our company any site us it-solve theme is very
            professional theme business & corporate, finance, advisor, solution, company and all project used, there are
            all
            kinds of websites here.
          </div>
        </div>
      </div>


      <div class="grid pb-[3rem] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div class="bg-[#FFFFFF] col-span-1 ani-hover  relative overflow-hidden">
          <div class="mx-[20px] my-[2rem]">
            <div class="flex justify-center ">
              <div class="w-[120px] h-[120px] relative">
                <img src="../assets/images/home/service4.png"
                     alt="">
                <div class="absolute top-[20%] right-[40%]">
                  <i class="fa-solid fa-globe text-[#FFFFFF] text-5xl"></i>
                </div>
              </div>

            </div>
            <div class="text-[#333e48]  text-[24px] text-hover font-[700] z-[999999] text-center leading-[31px] ">
              Interface Design
            </div>
            <div class="text-[#6a7c92] my-[1rem] text-center font-[15px] leading-[28px] ">
              IT Solve professional business theme for your company, support quality all time, any help please late me
              know.
            </div>
            <div class="text-center cursor-pointer">
              <a class=" text-[#0076be] inline-flex items-center">Discover Now
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>


        <div class="bg-[#FFFFFF] col-span-1   ani-hover  relative overflow-hidden">
          <div class="mx-[20px] my-[2rem]">
            <div class="flex justify-center ">
              <div class="w-[120px] h-[120px] relative">
                <img src="../assets/images/home/service2.png"
                     alt="">
                <div class="absolute top-[20%] right-[35%]">
                  <i class="fas fa-sitemap text-[#FFFFFF] text-5xl"></i>
                </div>
              </div>

            </div>
            <div class="text-[#333e48]   text-[24px] font-[700] text-center leading-[31px] ">
              Interface Design
            </div>
            <div class="text-[#6a7c92] my-[1rem] text-center font-[15px] leading-[28px] ">
              IT Solve professional business theme for your company, support quality all time, any help please late me
              know.
            </div>
            <div class="text-center cursor-pointer">
              <a class=" text-[#0076be] inline-flex items-center">Discover Now
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>


        <div class="bg-[#FFFFFF] col-span-1  ani-hover  relative overflow-hidden">
          <div class="mx-[20px] my-[2rem]">
            <div class="flex justify-center ">
              <div class="w-[120px] h-[120px] relative">
                <img
                    src="../assets/images/home/service3.png"
                    alt="">
                <div class="absolute top-[20%] right-[40%]">
                  <i class="fas fa-shield-alt text-[#FFFFFF] text-5xl"></i>
                </div>
              </div>

            </div>
            <div class="text-[#333e48]   text-[24px] font-[700] text-center leading-[31px] ">
              Interface Design
            </div>
            <div class="text-[#6a7c92] my-[1rem] text-center font-[15px] leading-[28px] ">
              IT Solve professional business theme for your company, support quality all time, any help please late me
              know.
            </div>
            <div class="text-center cursor-pointer">
              <a class=" text-[#0076be]  inline-flex items-center">Discover Now
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>


        <div class="bg-[#FFFFFF] col-span-1  ani-hover  relative overflow-hidden">
          <div class="mx-[20px] my-[2rem]">
            <div class="flex justify-center ">
              <div class="w-[120px] h-[120px] relative">
                <img src="../assets/images/home/service6.png">
                <div class="absolute top-[20%] right-[40%]">
                  <i class="fas fa-chart-pie text-[#FFFFFF] text-5xl"></i>
                </div>
              </div>

            </div>
            <div class="text-[#333e48]   text-[24px] font-[700] text-center leading-[31px] ">
              Interface Design
            </div>
            <div class="text-[#6a7c92] my-[1rem] text-center font-[15px] leading-[28px] ">
              IT Solve professional business theme for your company, support quality all time, any help please late me
              know.
            </div>
            <div class="text-center cursor-pointer">
              <a class=" text-[#0076be]  inline-flex items-center">Discover Now
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>


        <div class="bg-[#FFFFFF] col-span-1  ani-hover  relative overflow-hidden">
          <div class="mx-[20px] my-[2rem]">
            <div class="flex justify-center ">
              <div class="w-[120px] h-[120px] relative">
                <img src="../assets/images/home/service5.png"
                     alt="">
                <div class="absolute top-[20%] right-[40%]">
                  <i class="fas fa-comment text-[#FFFFFF] text-5xl"></i>
                </div>
              </div>

            </div>
            <div class="text-[#333e48]   text-[24px] font-[700] text-center leading-[31px] ">
              Interface Design
            </div>
            <div class="text-[#6a7c92] my-[1rem] text-center font-[15px] leading-[28px] ">
              IT Solve professional business theme for your company, support quality all time, any help please late me
              know.
            </div>
            <div class="text-center cursor-pointer">
              <a class=" text-[#0076be]  inline-flex items-center">Discover Now
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>


        <div class="bg-[#FFFFFF] col-span-1  ani-hover  relative overflow-hidden">
          <div class="mx-[20px] my-[2rem]">
            <div class="flex justify-center ">
              <div class="w-[120px] h-[120px] relative">
                <img src="../assets/images/home/service6.png" alt="">

                <div class="absolute top-[20%] right-[40%]">
                  <i class="fas fa-calendar text-[#FFFFFF] text-5xl"></i>
                </div>
              </div>

            </div>
            <div class="text-[#333e48]   text-[24px] font-[700] text-center leading-[31px] ">
              Interface Design
            </div>
            <div class="text-[#6a7c92] my-[1rem] text-center font-[15px] leading-[28px] ">
              IT Solve professional business theme for your company, support quality all time, any help please late me
              know.
            </div>
            <div class="text-center cursor-pointer">
              <a class="text-[#0076be]  inline-flex items-center">Discover Now
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

  <div class="container">
    <section class="text-gray-600 body-font">
      <div class="container px-5  mx-auto">
        <div class="text-center mb-[3rem]">
          <div
              class="text-center line my-[1rem] text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]">
            How IT Work
          </div>
          <div class="flex justify-center items-center">
            <div class="bg-[#333e48] mb-[1rem] w-[8rem] h-[4px]">
            </div>
          </div>
          <div class="text-center text-[#6a7c92]    text-[0.938rem] leading-[1.75rem]">
            <div class="lg:px-[20rem] text-[#6a7c92]  md:text-[1.1rem] text-[1rem] leading-[1.75rem]">
              Business solution company sit our any how site used the our company any site us it-solve theme is very
              professional theme business & corporate, finance, advisor, solution, company and all project used, there
              are
              all
              kinds of websites here.
            </div>
          </div>


        </div>
        <div class="flex flex-wrap     md:space-y-0 space-y-6 ">
          <div class="p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div
                class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg fill="none" color="#0076be" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                   stroke-width="2"
                   class="w-10 h-10" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
              <a class="mt-3 text-[#0076be] inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div
                class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg fill="none" color="#0076be" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                   stroke-width="2"
                   class="w-10 h-10" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
              <a class="mt-3 text-[#0076be] inline-flex items-center">Learn More
                <svg fill="none" color="#0076be" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                     stroke-width="2"
                     class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div
                class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg fill="none" color="#0076be" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                   stroke-width="2"
                   class="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
              <a class="mt-3 text-[#0076be] inline-flex items-center">Learn More
                <svg fill="none" color="#0076be" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                     stroke-width="2"
                     class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>


  <section class="p-6 ">
    <div class="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
      <div class="flex flex-col justify-start m-2 lg:m-6">
        <p class="text-4xl font-bold leading-none lg:text-6xl text-[#4b5563]">
          {{ countClients }}+
        </p>
        <p class="text-sm sm:text-base text-[#4b5563]">Clients</p>
      </div>
      <div class="flex flex-col justify-start m-2 lg:m-6 statistics">
        <p class="text-4xl font-bold leading-none lg:text-6xl text-[#4b5563]">
          {{ countSocialMediaFollowers }}K
        </p>
        <p class="text-sm sm:text-base text-[#4b5563]">Followers on social media</p>
      </div>
      <div class="flex flex-col justify-start m-2 lg:m-6">
        <p class="text-4xl font-bold leading-none lg:text-6xl text-[#4b5563]">
          {{ countPublishedBooks }}K
        </p>
        <p class="text-sm sm:text-base text-[#4b5563]">Published books</p>
      </div>
      <div class="flex flex-col justify-start m-2 lg:m-6">
        <p class="text-4xl font-bold leading-none lg:text-6xl text-[#4b5563]">
          {{ countTedTalks }}K
        </p>
        <p class="text-sm sm:text-base text-[#4b5563]">TED talks</p>
      </div>
      <div class="flex flex-col justify-start m-2 lg:m-6">
        <p class="text-4xl font-bold leading-none lg:text-6xl text-[#4b5563]">
          {{ countYearsOfExperience }}K
        </p>

        <p class="text-sm sm:text-base text-[#4b5563]">Years of experience</p>
      </div>
      <div class="flex flex-col justify-start m-2 lg:m-6">
        <p class="text-4xl font-bold leading-none lg:text-6xl text-[#4b5563]">
          {{ countWorkshops }}K
        </p>
        <p class="text-sm sm:text-base text-[#4b5563]">Workshops</p>
      </div>
    </div>
  </section>


  <br>
  <br>

  <div class="container mx-auto my-[3rem]">
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div>
        <img src="../assets/images/home/hero-img1.png" alt="">
      </div>

      <div>
        <div class="text-[#dddddd] md:text-[80px] text-[60px] font-[700] leading-[104px]">
          01
        </div>
        <div class="text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem] ">
          We Consultant To Get
          Our Business Plan
        </div>

        <div class="flex justify-start items-center mt-[1rem]">
          <div class="bg-[#333e48] mb-[1rem] w-[8rem] h-[4px]">
          </div>
        </div>

        <div class="text-[#6a7c92] my-[1rem] font-[700]  md:text-[1.1rem] text-[1rem] leading-[1.75rem]">
          Business solution company sit our any how site used the our company any site us it-solve theme is very
          professional theme business & corporate, finance, advisor, solution, company and all project used.
        </div>

        <div class="text-[#6a7c92]  text-[0.938rem] leading-[1.75rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque aut, blanditiis ea est libero nihil
          perspiciatis praesentium provident vel!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio enim harum iure molestias
          officia repellendus totam vitae voluptates voluptatibus.
        </div>

        <Button class="mt-5">read more</Button>
      </div>
    </div>

    <div class="w-[50%] ">
      <img src="../assets/images/home/arow1.svg" alt="" class="w-full h-full object-cove ">
    </div>


    <div class="grid lg:grid-cols-2 grid-cols-1 mt-[2rem] gap-5">
      <div>
        <div class="text-[#dddddd] md:text-[80px] text-[60px] font-[700] leading-[6.5rem]">
          02
        </div>
        <div class="text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem] ">
          Partner Company Business
          And Me Success Fully
        </div>

        <div class="flex justify-start items-center mt-[1rem]">
          <div class="bg-[#333e48] mb-[1rem] w-[8rem] h-[4px]">
          </div>
        </div>

        <div class="text-[#6a7c92] my-[1rem] font-[700] text-[15px] md:text-[1.1rem] text-[1rem] leading-[1.75rem]">
          Business solution company sit our any how site used the our company any site us it-solve theme is very
          professional theme business & corporate, finance, advisor, solution, company and all project used.
        </div>

        <div class="mt-[1rem]">
          <div class="flex justify-start items-center gap-2">
            <i class="fa-regular fa-circle-check text-[#0076be] text-2xl"></i> <span
              class="text-[#6a7c92]  text-[0.938rem] leading-[1.75rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, blanditiis?</span>
          </div>
          <div class="my-[1rem] flex justify-start items-center gap-2">
            <i class="fa-regular fa-circle-check text-[#0076be] text-2xl"></i> <span
              class="text-[#6a7c92]  text-[0.938rem] leading-[1.75rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, blanditiis?</span>
          </div>
          <div class="flex justify-start items-center gap-2">
            <i class="fa-regular fa-circle-check text-[#0076be] text-2xl"></i> <span
              class="text-[#6a7c92]  text-[0.938rem] leading-[1.75rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, blanditiis?</span>
          </div>
        </div>
      </div>
      <div>
        <img src="../assets/images/home/hero-img1.png" alt="">
      </div>
    </div>


    <div class="flex justify-end ">
      <div class="w-[50%] ">
        <img src="../assets/images/home/arow2.svg" alt="" class="w-full h-full object-cover">
      </div>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div>
        <img src="../assets/images/home/hero-img1.png" alt="">
      </div>

      <div>
        <div class="text-[#dddddd] md:text-[80px] text-[60px] font-[700] leading-[6.5rem]">
          03
        </div>
        <div class="text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]">
          IT Solution For Your
          Business Is Best Theme
        </div>
        <div class="flex justify-start items-center mt-[1rem]">
          <div class="bg-[#333e48] mb-[1rem] w-[8rem] h-[4px]">
          </div>
        </div>
        <div class="text-[#6a7c92] my-[1rem] font-[700]  md:text-[1.1rem] text-[1rem] leading-[1.75rem]">
          Business solution company sit our any how site used the our company any site us it-solve theme is very
          professional theme business & corporate, finance, advisor, solution, company and all project used.
        </div>

        <div>
          <div>
            <div class="flex justify-start items-center gap-2">
              <i class="fa-regular fa-circle-check text-[#0076be] text-2xl"></i> <span
                class="text-[#333e48] text-[1.125rem] leading-[1.75rem] font-[700]">Business & Analysis</span>
            </div>
            <div class="text-[#333e48] text-[0.938rem] leading-[1.75rem] font-[400]">
              My project is best under-full is very professional site and used very easy customization this site.
            </div>
          </div>

          <div class="mt-[1rem]">
            <div class="flex justify-start items-center gap-2">
              <i class="fa-regular fa-circle-check text-[#0076be] text-2xl"></i> <span
                class="text-[#333e48] text-[1.125rem] leading-[1.75rem] font-[700]">IT Solutions & Analysis</span>
            </div>
            <div class="text-[#333e48] text-[0.938rem] leading-[1.75rem] font-[400]">
              This project is best under-full is very professional site and used very easy customization
            </div>
          </div>


        </div>

      </div>
    </div>


  </div>


  <div class="bg-[#f4f7fc] my-[3rem]">
    <div class="container  mx-auto ">
      <div class=" py-[2.5rem]">
        <div class="text-center text-[#333e48] font-[600] leading-[20px]">
          TESTIMONIAL
        </div>
        <div
            class="text-center line my-[1rem] text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]">
          What Says
          Our Happy Clients
          <!--         <div class="w-[52px] h-[4px] border-4 border-[transparent]">-->
          <!--         </div>-->
        </div>

        <div class="flex justify-center">
          <div class="bg-[#333e48] mb-[1rem] w-[8rem] h-[4px]">
          </div>
        </div>
        <div class="text-center text-[#6a7c92]    text-[0.938rem] leading-[1.75rem]">
          <div class="lg:px-[20rem] text-[#6a7c92]   text-[15px] md:text-[1.1rem] text-[1rem] leading-[1.75rem]">
            Business solution company sit our any how site used the our company any site us it-solve theme is very
            professional theme business & corporate, finance, advisor, solution, company and all project easy for used,
          </div>
        </div>
      </div>
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in 8" :key="slide">
          <div class="carousel__item">
            <div class="bg-white shadow-xl shadow-md rounded-lg  p-6 max-w-sm">
              <img class="w-20 z-[9999] h-20 object-cover rounded-full mx-auto -mt-10"
                   src="https://i.pinimg.com/236x/9c/e5/9f/9ce59fe16be122466feacf547099eb25.jpg" alt="Avatar"/>
              <h3 class="mt-2 text-gray-900 text-lg font-medium text-center">John Doe</h3>
              <p class="mt-2 text-gray-600 text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam euismod lacus sed enim porta dignissim. Nullam congue et lacus id bibendum."</p>
            </div>
          </div>
        </Slide>
      </Carousel>
      <br>
    </div>
  </div>

  <div class="container mx-auto">
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div>
        <div class=" line my-[1rem] text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]">
          How May We Help You!
        </div>
        <div class="bg-[#333e48] mb-[1rem] w-[8rem] h-[4px]">
        </div>
        <div class=" text-[#6a7c92]    text-[0.938rem] leading-[1.75rem]">
          <div class="text-[#6a7c92]   text-[15px] md:text-[1.1rem] text-[1rem] leading-[1.75rem]">
            Business solution company sit our any how site used the our company any site us it-solve theme is very
            professional theme business & corporate, finance, advisor, solution, company and all project easy for used,
          </div>
        </div>


        <section class="text-gray-600 body-font mt-5">
          <div class="md:flex gap-5 items-center">
            <div class="relative flex-grow w-full">
              <input placeholder="name" type="text" id="full-name" name="full-name"
                     class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 border-[#333e48] bg-transparent ring-1 ring-[#333e48] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative flex-grow w-full mt-5 md:mt-0">
              <input placeholder="Email" type="text" id="full-name" name="full-name"
                     class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 border-[#333e48] bg-transparent ring-1 ring-[#333e48] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="md:flex gap-5 items-center mt-5">
            <div class="relative flex-grow w-full">
              <input placeholder="Phone" type="text" id="full-name" name="full-name"
                     class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#333e48] bg-transparent ring-1 ring-[#333e48] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative flex-grow w-full mt-5 md:mt-0">
              <input placeholder="Subject" type="text" id="full-name" name="full-name"
                     class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#333e48] bg-transparent ring-1 ring-[#333e48] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>

          </div>

          <div class="relative flex-grow w-full mt-5">
              <textarea
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 border-[#333e48] bg-transparent ring-1 ring-[#333e48] text-base outline-none text-gray-700  leading-8 transition-colors duration-200 ease-in-out"
                  name="" id="" cols="5" rows="5">
              </textarea>
          </div>

          <div class="w-full mt-4">
            <Button>send message</Button>
          </div>
        </section>
      </div>
      <div>
        <img src="../assets/images/home/consultform.png" alt="">
      </div>
    </div>
  </div>


  <div class="my-[5rem] bg-[#333e48]">
    <div class="container py-[2rem]">
      <div class="">
        <div class="text-center text-[#ffffff] font-[600] leading-[20px]">
          TESTIMONIAL
        </div>
        <div
            class="text-center line my-[1rem] text-[#ffffff] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]">
          See Your Latest
          Blog Post
        </div>

        <div class="flex justify-center">
          <div class="bg-[#333e48] mb-[1rem] w-[5%] h-[4px]">
          </div>
        </div>
        <div class="text-center text-[#6a7c92]    text-[0.938rem] leading-[1.75rem]">
          <div class="lg:px-[20rem] text-[#ffffff]   text-[15px] md:text-[1.1rem] text-[1rem] leading-[1.75rem]">
            Business solution company sit our any how site used the our company any site us it-solve theme is very
            professional theme business & corporate, finance, advisor, solution, company and all project easy for used,
          </div>
        </div>
      </div>

    </div>
  </div>


  <div>
    <section class="py-6 sm:py-12  text-gray-100">
      <div class="container  mx-auto ">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">


          <div class="flex rounded-lg flex-col overflow-hidden bg-white shadow-xl">
            <a rel="noopener noreferrer" href="#" class="relative"
               aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" class="object-cover w-full h-52 bg-gray-500"
                   src="https://i.pinimg.com/236x/42/dc/be/42dcbe16e949e7fe3b66c298e05a9535.jpg">
              <button
                  class="bg-[#0076be] top-[8px] left-[8px] absolute py-1 px-2 rounded-[5px] text-[#FFFFFF] text-[12px] font-[500] leading-[19px]">
                Marketing
              </button>
            </a>
            <div class="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <h3 class="flex-1 py-1 text-lg font-semibold leading-snug text-[#0076be] cursor-pointer">Te nulla oportere
                reprimique
                his dolorum</h3>
              <p class="text-[#6a7c92] text-[15px] leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ipsa.
              </p>

              <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-[#6a7c92]">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </div>

          <article class="flex rounded-lg flex-col overflow-hidden bg-white shadow-xl">
            <a rel="noopener noreferrer" href="#" class="relative"
               aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" class="object-cover w-full h-52 bg-gray-500"
                   src="https://i.pinimg.com/236x/42/dc/be/42dcbe16e949e7fe3b66c298e05a9535.jpg">
              <button
                  class="bg-[#0076be] top-[8px] left-[8px] absolute py-1 px-2 rounded-[5px] text-[#FFFFFF] text-[12px] font-[500] leading-[19px]">
                Marketing
              </button>
            </a>
            <div class="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <h3 class="flex-1 py-1 text-lg font-semibold leading-snug text-[#0076be] cursor-pointer">Te nulla oportere
                reprimique
                his dolorum</h3>
              <p class="text-[#6a7c92] text-[15px] leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ipsa.
              </p>

              <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-[#6a7c92]">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>

          <article class="flex rounded-lg flex-col overflow-hidden bg-white shadow-xl">
            <a rel="noopener noreferrer" href="#" class="relative"
               aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" class="object-cover w-full h-52 bg-gray-500"
                   src="https://i.pinimg.com/236x/42/dc/be/42dcbe16e949e7fe3b66c298e05a9535.jpg">
              <button
                  class="bg-[#0076be] top-[8px] left-[8px] absolute py-1 px-2 rounded-[5px] text-[#FFFFFF] text-[12px] font-[500] leading-[19px]">
                Marketing
              </button>
            </a>
            <div class="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <h3 class="flex-1 py-1 text-lg font-semibold leading-snug text-[#0076be] cursor-pointer">Te nulla oportere
                reprimique
                his dolorum</h3>
              <p class="text-[#6a7c92] text-[15px] leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ipsa.
              </p>

              <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-[#6a7c92]">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>

          <article class="flex rounded-lg flex-col overflow-hidden bg-white shadow-xl">
            <a rel="noopener noreferrer" href="#" class="relative"
               aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" class="object-cover w-full h-52 bg-gray-500"
                   src="https://i.pinimg.com/236x/42/dc/be/42dcbe16e949e7fe3b66c298e05a9535.jpg">
              <button
                  class="bg-[#0076be] top-[8px] left-[8px] absolute py-1 px-2 rounded-[5px] text-[#FFFFFF] text-[12px] font-[500] leading-[19px]">
                Marketing
              </button>
            </a>
            <div class="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <h3 class="flex-1 py-1 text-lg font-semibold leading-snug text-[#0076be] cursor-pointer">Te nulla oportere
                reprimique
                his dolorum</h3>
              <p class="text-[#6a7c92] text-[15px] leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ipsa.
              </p>

              <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-[#6a7c92]">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>


        </div>
      </div>
    </section>
  </div>


</template>


<style scoped>
.carousel__slide {
  padding: 19px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}


.ani-hover:not(:hover) {
  background-image: linear-gradient(to bottom, #0076be 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: bottom;
  transition: background-position 0.4s ease-in-out;
}

.ani-hover:hover div {
  color: white;
}

.ani-hover:hover a {
  color: white;
}

.ani-hover:hover {
  background-image: linear-gradient(to bottom, #0076be 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: top;
  transition: background-position 0.4s ease-in-out;
}


</style>