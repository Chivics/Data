import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply')",
      }}
    >
    <nav className="flex items-center justify-between p-6 lg:px-8 ">
          <header class="absolute inset-x-0 top-0 z-50"></header>
          <div>
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" class = "h-10 w-20"></img>
          </div>
          <div class="hidden lg:flex lg:gap-x-12 mx-120 text-1x1 font-semibold text-white ">
            <a href="#">Product</a>
            <a href="#" >Features</a>
            <a href="#">Marketplace</a>
            <a href="#">Company</a>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" class="text-1x1 font-semibold text-white">Log in <span aria-hidden="true">&rarr;</span></a>
          </div>
      </nav>

      <section className="flex flex-col items-center mt-45 w-180 mx-110">
        <p className=" rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
          Announcing our next round of funding. <a href="#" target="_parent" className="text-indigo-400"> Read More <span aria-hidden="true">&rarr;</span> </a>
        </p>
        <div class = "text-center">
          <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl mt-8">
            Data to enrich your online business
          </h1>
          <p class = "text-gray-400 mt-8 font-sans text-[20px] font-medium ">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
        <div>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/home" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400">Get started</a>
            <a href="/signin"  class="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
        </div>
        </div>
        </div>
      </section>
    </div>
  );
}