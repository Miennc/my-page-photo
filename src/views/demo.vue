<template>
  <div id="app">
    <div class="statistics text-center mt-[50rem]">
      {{ count }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const count = ref(0);

const scrollToCount = () => {
  // Kiểm tra nếu số liệu đã được hiển thị hoàn toàn
  const statisticsElement = document.querySelector('.statistics');
  const rect = statisticsElement.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  if (rect.top <= viewHeight && !counting.value) {
    startCounting();
  }
};

const startCounting = () => {
  counting.value = true;
  // Sử dụng setInterval để tăng giá trị count lên 1 sau mỗi 1 giây
  const intervalId = setInterval(() => {
    count.value = count.value + 100;
    // Kiểm tra nếu đếm đến giá trị cần thiết, dừng lại
    if (count.value >= 10000) {
      clearInterval(intervalId);
    }
  }, 1);
};

const counting = ref(false);

onMounted(() => {
  window.addEventListener('scroll', scrollToCount);
});
</script>