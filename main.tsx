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
      <p class="mt-2 text-lg text-center text-gray-600">欢迎来到郭永明程序开发技术交流中心</p>
      <footer class="fixed bottom-8 w-full h-6 flex items-center justify-center gap-2 text-gray-800">
        Powered by
        <a
          class="flex items-center gap-2 text-sm text-black no-underline font-semibold"
          href="https://deno.com/deploy"
        >
          
          <img alt="Deno" src="https://dash.deno.com/assets/logo.svg" class="w-5" /> Deno Deploy
        </a>
      </footer>
    </div>
  ),
});

serve(handler);    
