<script setup>
import Button from "../components/Button.vue";
import {onMounted} from "vue";

onMounted(() => {
  window.scroll(0, 0)
})
</script>

<template>
  <div class="container mx-auto">
    <div class="my-[5rem] relative">
      <img src="../assets/images/contact/img-breadcrumb-contact-us.png" alt="">
      <div class="absolute left-0  top-[50%] right-0 ">
        <div
            class="text-center line my-[1rem] text-[#333e48] md:text-[3rem] text-[1.8rem] font-[700]  leading-[2.813rem]">
          Contact Us
        </div>
      </div>
    </div>

    <div class="my-[5rem]">
      <div class="lg:grid-cols-2 grid-cols-1  grid gap-10">
        <div class="col-span-1">
          <div class="grid grid-cols-2 gap-5">
            <div class="relative image-container rounded-[15px] overflow-hidden ">
            <div class="w-full h-full overflow-hidden">
              <img src="../assets/images/contact/Building-1-1.jpg" alt="" class="rounded-[15px] w-full h-full object-cover object-center">
            </div>
              <div class="absolute left-0 right-0 md:top-[85%] top-[70%]">
                <div class="text-center text-[#ffffff] font-[700] leading-[20px] text-[18px] text-container">
                  Head Office
                </div>
                <div class="text-center text-[#ffffff] font-[700] leading-[20px] text-[18px] text-container">
                  Korea
                </div>
              </div>
            </div>

            <div class="relative image-container overflow-hidden rounded-[15px]">
           <div class="w-full h-full overflow-hidden">
             <img src="../assets/images/contact/office-tokyo.jpg" alt="" class="rounded-[15px] w-full h-full object-cover object-center">
           </div>

              <div class="absolute left-0 right-0 md:top-[85%] top-[70%]">
                <div class="text-center text-[#ffffff] font-[700] leading-[20px] text-[18px]  text-container">
                  BRANCH OFFICE
                </div>
                <div class="text-center text-[#ffffff] font-[700] leading-[20px] text-[18px] text-container">
                  VIETNAM
                </div>
              </div>
            </div>
          </div>
        </div>


        <div>
          <div class=" line  text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]">
            Our Offices
          </div>
          <div class="text-[#212529] leading-[24px] my-[2rem]">
            Newwave Solutions operates in multiple offices and development centers across the globe. Reach out to us for
            software development services in your region.
          </div>

          <div class="grid md:grid-cols-4 grid-cols-1 gap-4 items-center">
            <div class="flex items-center gap-2 col-span-1 ">
              <i class="fa-solid fa-location-dot text-4xl text-[#0076be]"></i>
              <div>
                <div class="text-[#636c7b] leading-[24px]">
                  Head Office
                </div>
                <div class="text-[#0076be] font-[700] leading-[24px]">
                  Korea
                </div>
              </div>
            </div>


            <div class="col-span-2 text-[#636c7b]">
              1F, 4F, 10F, Mitec Building, Duong Dinh Nghe Street, Yen Hoa Ward, Cau Giay District, Hanoi, Vietnam
            </div>


            <div class="col-span-1 flex justify-end cursor-pointer">
              <i class="fa-solid fa-circle-arrow-right text-[#0076be] text-4xl"></i>
            </div>
          </div>
          <br>
          <hr style="border-style: dashed; border-color: #DADEE2; border-width: 1px;">

          <br>
          <br>
          <div class="grid md:grid-cols-4 grid-cols-1 gap-4 items-center ">
            <div class="flex items-center gap-2 col-span-1 ">
              <i class="fa-solid fa-location-dot text-4xl text-[#0076be]"></i>
              <div>
                <div class="text-[#636c7b] leading-[24px]">
                  Head Office
                </div>
                <div class="text-[#0076be] font-[700] leading-[24px]">
                  Korea
                </div>
              </div>
            </div>
            <div class="col-span-2 text-[#636c7b]">
              1F, 4F, 10F, Mitec Building, Duong Dinh Nghe Street, Yen Hoa Ward, Cau Giay District, Hanoi, Vietnam
            </div>
            <div class="col-span-1 flex justify-end cursor-pointer">
              <i class="fa-solid fa-circle-arrow-right text-[#0076be] text-4xl"></i>
            </div>
          </div>
          <br>
          <hr style="border-style: dashed; border-color: #DADEE2; border-width: 1px;">
        </div>
      </div>
    </div>

    <div class="text-center mb-[4rem]">
      <div class="text-[#333e48] font-[500]">
        GET IN TOUCH
      </div>
      <div
          class="text-center line my-[1rem] text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]">
        <div>
          Looking For
          The Best
        </div>
        <div>
          IT Business Solutions?
        </div>
      </div>
    </div>
  </div>

  <!-- ====== Contact Section Start -->
  <section class="relative z-10 overflow-hidden bg-white mb-[5rem] ">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap lg:justify-between">
        <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div class="mb-12 max-w-[570px] lg:mb-0">
          <span class="text-[#333e48] font-[500]">
            Contact Us
          </span>
            <h2
                class=" line my-[1rem] text-[#333e48] md:text-[2.375rem] text-[1.5rem] font-[700]  leading-[2.813rem]"
            >
              GET IN TOUCH WITH US
            </h2>
            <p class="text-body-color mb-9 text-[#636c7b] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
              tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
              minim veniam quis nostrud exercitation ullamco
            </p>
            <div class="mb-8 flex w-full max-w-[370px]">
              <div
                  class="bg-[#0076be] text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded  sm:h-[70px] sm:max-w-[70px]"
              >
                <div>
                  <i class="fa-solid fa-location-dot text-[#ffffff] text-2xl"></i>
                </div>
              </div>
              <div class="w-full">
                <h4 class="text-dark mb-1 text-xl font-bold">Our Location</h4>
                <p class="text-body-color text-[#636c7b]">
                  99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                </p>
              </div>
            </div>
            <div class="mb-8 flex w-full max-w-[370px]">
              <div
                  class="bg-[#0076be] text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded  sm:h-[70px] sm:max-w-[70px]"
              >
                <div>
                  <i class="fa-solid fa-phone text-2xl text-[#ffffff]"></i>
                </div>
              </div>
              <div class="w-full">
                <h4 class="text-dark mb-1 text-xl font-bold">Phone Number</h4>
                <p class="text-body-color text-[#636c7b]">(+62)81 414 257 9980</p>
              </div>
            </div>
            <div class="mb-8 flex w-full max-w-[370px]">
              <div
                  class="bg-[#0076be] text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded  sm:h-[70px] sm:max-w-[70px]"
              >
                <div>
                  <i class="fa-solid fa-envelope text-[#ffffff] text-2xl"></i>
                </div>
              </div>
              <div class="w-full">
                <h4 class="text-dark mb-1 text-xl font-bold">Email Address</h4>
                <p class="text-body-color text-[#636c7b]">info@yourdomain.com</p>
              </div>
            </div>

            <div class="mb-8 flex w-full max-w-[370px]">
              <div
                  class="bg-[#0076be] text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded  sm:h-[70px] sm:max-w-[70px]"
              >


                <div>
                  <i class="fa-solid fa-wifi text-2xl text-[#ffffff]"></i>
                </div>


              </div>
              <div class="w-full">
                <h4 class="text-dark mb-1 text-xl font-bold">Follow us </h4>
                <p class="text-body-color text-[#636c7b]">
                <div class="flex justify-start space-x-3">
                  <a rel="noopener noreferrer" href="#" title="Facebook" class="flex items-center p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" color="#636c7b" fill="currentColor" viewBox="0 0 32 32"
                         class="w-5 h-5 fill-current">
                      <path
                          d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                    </svg>
                  </a>
                  <a rel="noopener noreferrer" href="#" title="Twitter" class="flex items-center p-1">
                    <svg viewBox="0 0 24 24" color="#636c7b" xmlns="http://www.w3.org/2000/svg"
                         class="w-5 h-5 fill-current">
                      <path
                          d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                    </svg>
                  </a>
                  <a rel="noopener noreferrer" href="#" title="Instagram" class="flex items-center p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" color="#636c7b" viewBox="0 0 32 32" fill="currentColor"
                         class="w-5 h-5 fill-current">
                      <path
                          d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                    </svg>
                  </a>
                </div>
                </p>
              </div>
            </div>

          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div class="relative rounded-lg bg-white p-8 border border-[#E0E0E0] sm:p-12">
            <form>
              <section class="text-gray-600 body-font ">
                <div class="md:flex gap-5 items-center">
                  <div class="relative flex-grow w-full">
                    <input placeholder="name" type="text" id="full-name" name="full-name"
                           class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#333e48] focus:bg-transparent focus:ring-1 focus:ring-[#333e48] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                  <div class="relative flex-grow w-full mt-5 md:mt-0">
                    <input placeholder="Email" type="text" id="full-name" name="full-name"
                           class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#333e48] focus:bg-transparent focus:ring-1 focus:ring-[#333e48] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                </div>
                <div class="md:flex gap-5 items-center mt-5">
                  <div class="relative flex-grow w-full">
                    <input placeholder="Phone" type="text" id="full-name" name="full-name"
                           class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#333e48] focus:bg-transparent focus:ring-1 focus:ring-[#333e48] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                  <div class="relative flex-grow w-full mt-5 md:mt-0">
                    <input placeholder="Subject" type="text" id="full-name" name="full-name"
                           class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#333e48] focus:bg-transparent focus:ring-1 focus:ring-[#333e48] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>

                </div>

                <div class="relative flex-grow w-full mt-5">
              <textarea
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#333e48] focus:bg-transparent focus:ring-1 focus:ring-[#333e48] text-base outline-none text-gray-700  leading-8 transition-colors duration-200 ease-in-out"
                  name="" id="" cols="5" rows="5">
              </textarea>
                </div>

                <div class="w-full mt-4">
                  <Button>send message</Button>
                </div>
              </section>
            </form>
            <div>
            <span class="absolute -top-10 -right-9 z-[-1]">
              <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                    fill="#3056D3"
                />
              </svg>
            </span>
              <span class="absolute -right-10 top-[90px] z-[-1]">
                <img src="../assets/images/contact/deco1-1.svg" alt="">
            </span>
              <span class="absolute -left-7 -bottom-7 z-[-1]">
              <img src="../assets/images/contact/deco1-2.svg" alt="">
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Contact Section End -->


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