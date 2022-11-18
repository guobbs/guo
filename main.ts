import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router.get("/", (ctx) => {
    ctx.response.body = `<!DOCTYPE html>
    <html>
        <head>
            <title>郭永明的个人网站</title>
        </head>
        <body>
            <div
                class="flex flex-col items-center justify-center w-full h-screen"
                style="background-image:url('https://dash.deno.com/assets/background-pattern.svg')"
            >
                <h1 class="text-4xl font-bold">哈罗，大家好！</h1>
                <p class="mt-2 text-lg text-center text-gray-600">欢迎来到程序开发技术交流中心</p>
                <p class="mt-2 text-lg text-center text-gray-600">技术话题可以无所不谈</p>
            </div>
        </body>
    </html>
  `;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 443 });