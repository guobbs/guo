/** @jsx h */
import { serve } from "https://deno.land/std@0.142.0/http/server.ts";
import { h, html } from "https://deno.land/x/htm@0.0.2/mod.tsx";

const handler = (req: Request) => html({
  title: "郭永明的个人网站",
  body: (
    <div
      class="flex flex-col items-center justify-center w-full h-screen"
      style="background-image:url('https://dash.deno.com/assets/background-pattern.svg')"
    >
      <h1 class="text-4xl font-bold">哈罗，大家好！</h1>
      <p class="mt-2 text-lg text-center text-gray-600">欢迎来到程序开发技术交流中心</p>
      <p class="mt-2 text-lg text-center text-gray-600">技术话题可以无所不谈</p>
    </div>
  ),
});

serve(handler);   