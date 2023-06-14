<script setup>
import {onBeforeMount, onMounted, ref} from 'vue'
import router from "../router/index.js";
import Button from "./Button.vue"

const visible = ref(false)
const showMenu = () => {
  visible.value = !visible.value
}
const isOpen = ref(false)
const activeIndex = ref(null)
const selectedLanguage = ref('Tiếng Việt')

const open = () => {
  isOpen.value = !isOpen.value
}
const selectLanguage = (lang) => {
  selectedLanguage.value = lang
}
const items = [
  {
    title: 'About Us',
    content: [{
      link: '/',
      content: 'About Us'
    }]
  },
  {
    title: 'Digital Nomad Services',
    content: [{
      link: '/mobile-app-development',
      content: 'Mobile App Development'
    },
      {
        link: '/web-development',
        content: 'Web Development'
      },
      {
        link: '/support-maintenance',
        content: 'Support & Maintenance'
      }]
  },
  {
    title: 'Portfolio',
    content: [{
      link: '/portfolio',
      content: 'Portfolio'
    }]
  },
  {
    title: 'Insights',
    content: [
      {
        link: '/news',
        content: 'News'
      },
      {
        link: '/news-sharing',
        content: 'IT news sharing'
      }
    ]
  },
  {
    title: 'Contact Us',
    content: [{
      link: '/contact-us',
      content: 'Contact Us'
    }]
  }
]

const navigate = () => {
  visible.value = false
}

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const menuItems = document.querySelectorAll('.menu__item');

menuItems.forEach(item => {
  const dropdownMenu = item.querySelector('.dropdown-menu');

  item.addEventListener('mouseenter', () => {
    dropdownMenu.classList.add('dropdown-menu--active');
  });

  item.addEventListener('mouseleave', () => {
    dropdownMenu.classList.remove('dropdown-menu--active');
  });
});


</script>

<template>
  <div>

    <div class="leading-normal tracking-normal  text-white gradient">
      <!--Nav-->
      <nav id="header" class="fixed w-full   bg-[#FFFFFF] z-30 top-0 text-white">
        <div class="w-full  lg:container mx-auto ">

          <div class="px-5 lg:px-0 flex flex-wrap items-center justify-between mt-0 py-4">
            <div class=" flex items-center">
              <a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                 href="#">
                <!--Icon from: http://www.potlabicons.com/ -->
                <img src="https://www.cyglobal.net/wp-content/uploads/2020/05/logo2.png" alt="">
              </a>
            </div>
            <div class="block lg:hidden ">
              <input @click="showMenu" class="menu-btn cursor-pointer" type="checkbox" id="menu-btn"/>
              <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            </div>
            <div
                class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
                id="nav-content">
              <ul class="list-reset   lg:flex justify-end flex-1 items-center">
                <li class="mr-3">
                  <router-link to="/">
                    <div active-class="active-link" exact-active-class="exact-active-link"
                         class="inline-block  uppercase  font-bold no-underline font-[500]  hover:text-underline py-2 px-4">
                      About Us
                    </div>
                  </router-link>
                </li>
                <li class="mr-3 dropdown  relative">
                  <a active-class="active-link" exact-active-class="exact-active-link"
                     class="inline-block  text-[#333e48] uppercase  font-bold no-underline font-[500]  hover:text-underline py-2 px-4"
                     href="#">Digital Nomad Services</a>
                  <ul class="dropdown-menu bg-[#FFFFFF]">
                    <li class="dropdown-menu__item px-2 py-3 uppercase text-[#333e48] hover:bg-[#333e48] hover:text-[#fff]  font-bold  hover:text-[#fff]">
                      <router-link to="/mobile-app-development">
                        Mobile
                        App
                        Development
                      </router-link>
                    </li>


                    <li class="dropdown-menu__item px-2 py-3 uppercase  text-[#333e48] hover:bg-[#333e48] hover:text-[#fff]  font-bold hover:text-[#fff]">
                      <router-link to="/web-development">
                        Web App
                        Development
                      </router-link>


                    </li>
                    <li class="dropdown-menu__item px-2 py-3 uppercase  text-[#333e48] hover:bg-[#333e48] hover:text-[#fff]  font-bold hover:text-[#fff]">
                      <router-link to="/support-maintenance">
                        Support&
                        maintenance
                      </router-link>


                    </li>


                  </ul>
                </li>
                <li class="mr-3  ">
                  <router-link active-class="active-link" exact-active-class="exact-active-link" to="/portfolio">
                    <div
                        class="inline-block   uppercase  font-bold no-underline font-[500]  hover:text-underline py-2 px-4">
                      Portfolio
                    </div>
                  </router-link>
                </li>
                <li class="mr-3 dropdown    relative">
                  <a class="inline-block  text-[#333e48]  uppercase font-bold no-underline font-[500]  py-2 px-4"
                     href="#">Insights</a>
                  <ul class="dropdown-menu2 bg-[#FFFFFF]">
                    <li class="dropdown-menu__item px-2 py-3  uppercase text-[#333e48] hover:bg-[#333e48] hover:text-[#fff]  font-bold hover:text-[#fff]">
                      <a href="#"></a>
                      <router-link to="/news">
                        News
                      </router-link>

                    </li>
                    <li class="dropdown-menu__item px-2 py-3 truncate hover:bg-[#333e48] uppercase  text-[#333e48] hover:text-[#fff] font-bold hover:text-[#fff]">
                      <router-link to="news-sharing">
                        IT News Sharing
                      </router-link>
                    </li>

                  </ul>
                </li>
                <li class="mr-3">
                  <router-link active-class="active-link" exact-active-class="exact-active-link" to="/contact-us">
                    <div
                        class="inline-block    uppercase font-bold no-underline font-[500]  py-2 px-4"
                        href="#">Contact Us
                    </div>
                  </router-link>
                </li>
              </ul>

              <div class="relative">
                <button @click="open" type="button"
                        class="inline-flex items-center px-4 py-2 uppercase border font-[700] border-gray-300 shadow-sm text-sm  rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none  "
                        aria-haspopup="true" aria-expanded="false">
                  {{ selectedLanguage }}
                  <i class="fa-solid fa-circle-chevron-down text-sm ml-2 text-gray-600" v-if="!isOpen"></i>
                  <i class="fa-solid fa-circle-chevron-up text-sm ml-2 text-gray-600" v-else></i>

                </button>

                <div
                    class="absolute z-10 left-0 right-0  top-100% mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    v-show="isOpen">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 font-[700] uppercase hover:bg-gray-100"
                     @click="selectLanguage('English')">English</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 uppercase font-[700] hover:bg-gray-100"
                     @click="selectLanguage('Tiếng Việt')">Tiếng Việt</a>
                </div>
              </div>
            </div>
          </div>


        </div>


        <hr class="border-b border-gray-100 opacity-25 my-0 py-0"/>


        <div class=" bg-[#FFFFFF]    lg:hidden" v-if="visible">
          <div class="accordion">
            <div
                v-for="(item, index) in items"
                :key="index"
                class="accordion-item"
                :class="{ 'active': activeIndex === index }"
            >
              <br>
              <div class="accordion-header     text-black cursor-pointer" @click="toggle(index)">
                <div class="px-5">
                  <div class="flex  justify-between items-center">
                    <div class=" text-[#333e48] font-bold">
                      {{ item.title }}
                    </div>
                    <div>
                      <i class="fa-solid fa-plus text-black font-[500] text-md" v-if="activeIndex !== index"></i>
                      <i class="fa-solid fa-minus v-else text-black text-md" v-else></i>
                    </div>
                  </div>
                </div>
                <br>
                <hr>

                <div class="accordion-content  text-black " v-if="activeIndex === index">
                  <ul v-for="(itemContent, index) in item.content" :key="index">
                    <li :to="itemContent.link" class=" p-5 cursor-pointer text-[#333e48] font-bold"
                        @click='navigate'>
                      <router-link :to="itemContent.link" active-class="active-link"
                                   exact-active-class="exact-active-link">
                        {{ itemContent.content }}
                      </router-link>
                    </li>
                    <hr>
                  </ul>
                </div>


              </div>

            </div>
          </div>
        </div>
      </nav>


      <div class="pt-24 ">
        <div class="container py-[2rem] mx-auto">
          <div class="">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div class="flex flex-col w-full  justify-center items-start text-center md:text-left">
                <p class="uppercase tracking-loose w-full">SECURE & IT SERVICES</p>
                <h1 class="my-4 md:text-[3rem] text-[2rem] font-bold leading-tight">
                  Excellent IT Services for your success
                  <br>
                </h1>
                <p class="leading-normal md:text-2xl text-xl mb-8 ">
                  Sub-hero message, not too long and not too short. Make it just right!
                </p>
                <div class="justify-center md:justify-start flex items-center w-full">
                  <Button>Our Services</Button>
                </div>
              </div>

              <div class="col-span-1 hidden lg:block">
                <img class="w-full   md:w-4/5 " src="https://tailwindtoolbox.github.io/Landing-Page/hero.png"/>
              </div>
            </div>


          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped>
.gradient {
  background: rgb(3, 2, 3);
  background: linear-gradient(0deg, rgba(3, 2, 3, 1) 0%, rgba(1, 93, 150, 1) 0%, rgba(0, 118, 190, 1) 36%, rgba(0, 118, 190, 1) 100%);
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
  background-color: #333e48;
  transform: scaleX(0) skewX(35deg);
  transform-origin: left;
  z-index: -1;
  transition: transform 1s;
}

.button:hover::before {
  transform: scaleX(1) skewX(35deg);
}

.ani-img {
  position: relative;
  animation: ani-img 2s ease-out infinite;
  animation-duration: 1s;
  animation-delay: 1s;
}

@keyframes ani-img {
  0% {
    top: 0px;
    bottom: 0px;
  }
  25% {
    top: 0px;
    bottom: 3px;
  }
  50% {
    top: 2px;
    bottom: 1px;
  }
  75% {
    top: 3px;
    bottom: 1px;
  }
  100% {
    top: 1px;
    bottom: 3px;
  }
}


.menu-btn:hover {
  background-color: #f4f4f4;
}


/* menu */


/* menu icon */
.menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  position: relative;
  user-select: none;
}

.menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.menu-icon .navicon:before,
.menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.menu-icon .navicon:before {
  top: 5px;
}

.menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.menu-btn {
  display: none;
}

.menu-btn:checked ~ .menu {
  max-height: 240px;
}

.menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .header .menu-icon {
    display: none;
  }
}

.dropdown-menu {
  position: absolute;
  bottom: -11rem;
  width: 270px;
  display: none;
}

.dropdown-menu2 {
  position: absolute;
  bottom: -8rem;
  width: 175px;
  display: none;
}

.dropdown-menu2:after {
  content: '';
  position: absolute;
  height: 2.5rem;
  top: -40%;
  right: 0;
  left: 0;
}

.dropdown-menu:after {
  content: '';

  position: absolute;
  height: 2.7rem;
  bottom: 0;
  top: -30%;
  right: 0;
  left: 0;
}

.dropdown:hover .dropdown-menu2 {
  /* bottom: -6rem; */ /* Xóa thuộc tính này */
  right: 0;
  left: 0;
  display: block;
  animation: fadeIn 0.3s ease-in-out forwards;
}

.dropdown:hover .dropdown-menu {
  /* bottom: -6rem; */ /* Xóa thuộc tính này */
  right: 0;
  left: 0;
  display: block;
  animation: fadeIn 0.3s ease-in-out forwards;
}

/* Định nghĩa hiệu ứng fadeIn */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.active {
  color: red;
}

.exact-active-link {
  color: #0076be;
  font-weight: bold;
}

</style>

