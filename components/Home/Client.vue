<template>
    <div class="pt-20 pb-16 relative">
        <div class="relative flex flex-col px-[5%] md:px-[10%] justify-center items-center pb-5">
            <p class="text-zinc-400 pb-1 text-lg font-bold scroll-animation">Testimonial</p>
            <h1 class="text-3xl md:text-5xl font-bold text-center leading-normal text-white scroll-animation">
                Some Of My Clients
            </h1>
        </div>

        <div class="px-[5%] md:px-[10%]  relative scroll-animation">
            <Swiper :slidesPerView=1 :spaceBetween=30 :loop=true :modules=modules :breakpoints="breakpoints" class="">
                <SwiperSlide v-for="item in contents" :key="item" class="my-[90px] ">
                    <div
                        class="flex flex-col gap-4 justify-center items-center px-10 py-16 rounded-md bg-zinc-900 text-white text-center shadow-md relative group ">
                        <div class="p-2 flex bg-white size-[90px] -mt-[110px] relative z-20">
                            <img :src=item.bg alt="" class="size-full" />
                        </div>
                        <h2 class="text-2xl font-bold group-hover:opacity-0 duration-100">
                            {{ item.heading }}
                        </h2>
                        <p class="text-gray-400 group-hover:opacity-0 duration-100">
                            {{ item.text }}
                        </p>
                        <p class="text-right w-full text-gray-400 text-sm">- {{ item.via }}</p>
                        <div
                            class="flex flex-col gap-4 justify-center items-center px-10 py-16 rounded-md bg-gray-300 text-black text-center shadow-md absolute top-0 scale-0 group-hover:scale-100 duration-500 origin-top">
                            <h2 class="text-2xl font-bold">
                                {{ item.heading }}
                                <span class="text-blue-600 font-normal text-lg">
                                    / {{ item.des }}
                                </span>
                            </h2>
                            <div class="flex gap-1 items-center justify-center pb-2">
                                <span v-for="i in item.star" :key="i">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"
                                        fill="rgba(0,0,0,1)">
                                        <path
                                            d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <p class="">{{ item.text }}</p>
                            <p class="text-right w-full text-blue-600 text-sm">- {{ item.via }}</p>
                            <p
                                class="h-4 w-0 bg-zinc-500 absolute -bottom-4 group-hover:w-[80%] duration-500 delay-200">
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    </div>
</template>

<script setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const modules = [Autoplay, Navigation, Pagination];

const breakpoints = ref({
    640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
    },
    1000: {
        slidesPerView: 2.2,
        spaceBetween: 20,
    },
    1264: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    // 1536: {
    //   slidesPerView: 3,
    //   spaceBetween: 20,
    // },
});

import { clients } from '/store/dummyMenuData.js'
const contents = clients

</script>