<script setup>
import {onMounted, ref} from "vue";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

const myCarousel = ref(null)
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
      itemsToShow: 3,
      snapAlign: 'center',
    },
    // 1024 and up
    1024: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
    1092: {
      itemsToShow: 5,
      snapAlign: 'start',
    },
  },
})

const next = () => {
  myCarousel.value.next()
}
const prev = () => {
  myCarousel.value.prev()
}

onMounted(() => {
  window.scroll(0, 0)
})


</script>
<template>
  <div class="container mx-auto my-[4rem]">
    <div class="lg:grid-cols-3 grid grid-cols-1 gap-5">
      <div class="col-span-2">
        <div>
          <h2 class=" line my-[1rem] text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]"> Software Maintenance and
            Support Services</h2>
          <br>
          <div class=" text-[#6a7c92]  md:text-[1.1rem] text-[1rem] leading-[1.75rem]"> Impressico believes that the only way to improve
            <div>
              efficiency and reduce issues is through regular support.
              Once
              the development process is over, we begin the software maintenance process so that your application
              continues
              to run at high levels. We have a team of dedicated engineers and software maintenance experts who take
              care
              of
              your product at every stage and keep it running smoothly.
            </div>
            <br>
            <div>
              Leveraging over 20 years of experience in offering software maintenance services to different industry
              verticals, our software maintenance services are cost and time effective. We are experts at maintaining,
              troubleshooting and upgrading your software as per your requirements.
            </div>
            <br>
            <div>
              Our dedicated and professional software services allow you to focus on your core business functions. We
              provide you with effective long-term continual maintenance and real-time support services for all your
              software requirements. You can achieve a range of benefits by outsourcing software maintenance and support
              to Impressico.
            </div>
            <br> <br>

          </div>
        </div>
      </div>
      <div class="col-span-1 ">
        <div class="w-full h-full overflow-hidden">
          <img src="https://www.impressico.com/wp-content/uploads/2022/09/Software-Maintenance.png" alt=""
               class="w-full h-full object-contain">
        </div>
      </div>
    </div>
  </div>

  <div class="bg-[#eef2f6]">
    <div class="container mx-auto">
      <div class="lg:grid-cols-2 gap-5 grid grid-cols-1 py-[4rem]">
        <div class="col-span-1">
          <div class="w-full h-full overflow-hidden">
            <img src="https://www.impressico.com/wp-content/uploads/2022/09/img7.jpg" alt=""
                 class="w-full h-full object-contain rounded-xl">
          </div>
        </div>

        <div class="col-span-1">
          <div>
            <h2 class=" line  text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]"> Improving Your Business
              Productivity </h2>
            <br>
            <div class="text-[#6a7c92]  md:text-[1.1rem] text-[1rem] leading-[1.75rem]">
              Everything begins with a reliable onboarding process which comprises identifying challenging areas, scope
              of improvement and planning the course of action to integrate necessary changes. To make your software
              highly competent, smooth project onboarding process is a must-have feature. We follow a streamlined
              process to overcome the issues you have been facing with your software.
              Everything begins with a reliable onboarding process which comprises identifying challenging areas, scope
              of improvement and planning the course of action to integrate necessary changes. To make your software
              highly competent, smooth project onboarding process is a must-have feature. We follow a streamlined
              process to overcome the issues you have been facing with your software.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto my-[4rem]">
    <div class="lg:grid-cols-2 grid-cols-1 grid gap-5">
      <div>
        <div class="flex md:justify-start justify-center items-center">
          <div class="w-12 h-12 overflow-hidden">
            <img src="https://www.impressico.com/wp-content/uploads/2020/10/web-app.svg" alt=""
                 class="w-full h-full object-contain">
          </div>
        </div>
        <div class="md:text-[24px] text-center md:text-start text-[20px] my-2 font-[600]  text-[#333e48]">
          Web Application Maintenance
          Services
        </div>

        <div class="text-[#6a7c92]  md:text-[1.1rem] text-[1rem] leading-[1.75rem]">
          Impressico is a reputed name in the web application maintenance and support service industry. We offer web
          application maintenance and support services for web applications both developed by our team and by other
          companies as well. Sometimes you may face issues with the support provided with your vendor. Here, Impressico
          comes into play. We provide professional maintenance services for your existing web applications. When you
          hire us for web application maintenance services, you are assigned with a team of experienced professionals to
          maintain your applications. The exclusive web application maintenance services offered by our web application
          maintenance professionals include everything from significant improvements to complete web application
          management.
        </div>
      </div>

      <div>
        <div class="flex md:justify-start justify-center items-center">
          <div class="w-12 h-12 overflow-hidden">
            <img src="https://www.impressico.com/wp-content/uploads/2020/10/mobile-app.svg" alt=""
                 class="w-full h-full object-contain">
          </div>
        </div>
        <div class="md:text-[24px] text-center md:text-start text-[20px] my-2 font-[600]  text-[#333e48]">
          Mobile Application Maintenance
          Services
        </div>

        <div class="text-[#6a7c92]  md:text-[1.1rem] text-[1rem] leading-[1.75rem]">
          Impressico offers complete mobile application maintenance services to different industry verticals. With the
          growing market of digital devices, mobile applications and the equivalent growth in the number of errors and
          technology updates, mobile application maintenance have become vital. We’re known for the exceptional and
          comprehensive approach for mobile application maintenance and support services too. We provide quality mobile
          application maintenance and support services for all sorts of devices, be it Android or iOS or Windows.
        </div>
      </div>
    </div>
  </div>


  <div class="container mx-auto  mb-[4rem]">
    <div class="relative ">
      <Carousel :settings="settings" :breakpoints="breakpoints" ref="myCarousel">
        <Slide v-for="slide in 20" :key="slide">
          <div class="carousel__item ">
            <div>
              <img src="https://www.impressico.com/wp-content/uploads/2020/10/synovos.png" alt="">
            </div>
          </div>
        </Slide>
      </Carousel>
      <div class="absolute left-0 top-[38%] ">
        <button><i class="fa-solid fa-circle-chevron-left text-3xl text-[#333e48] opacity-70 hover:opacity-100 "
                   @click="prev"></i></button>
      </div>
      <div class="absolute right-0 top-[38%] ">
        <button><i class="fa-solid fa-circle-chevron-right text-3xl text-[#333e48] opacity-70 hover:opacity-100"
                   @click="next"></i></button>
      </div>
    </div>
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

.button {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  outline: 2px solid;
  padding: 10px 30px;
  position: relative;
  overflow: hidden;
  transition: color 1s;
}

.button:hover {
  color: #fff;
}

.button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50px;
  width: 150%;
  height: 100%;
  background-color: #0076be;
  transform: scaleX(0) skewX(35deg);
  transform-origin: left;
  z-index: -1;
  transition: transform 1s;
}

.button:hover::before {
  transform: scaleX(1) skewX(35deg);
}


</style>