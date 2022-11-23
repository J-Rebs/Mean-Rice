<script>
  // Style src: https://kopi.dev/tailwind/gradient-background-animation/
</script>

<div
  class="
    min-h-screen
    min-w-screen
    bg-gradient-to-r
    from-pink-500
    via-red-500
    to-yellow-500
    background-animate
  "
>
  <div class="opacity-80 bg-white px-6 py-6 hover:opacity-100 transition-opacity">
    <h2 class="text-lg">About</h2>

    <p class="text-base">
      This is a demo client of type 1, built in <a
        class="text-cyan-500 font-bold"
        href="https://kit.svelte.dev/">SvelteKit</a
      >
      and
      <a class="text-cyan-500 font-bold" href="https://tailwindcss.com/"
        >Tailwind CSS</a
      >. It is deployed using
      <a class="text-cyan-500 font-bold" href="https://vercel.com/docs"
        >Vercel</a
      >.
    </p>
  </div>
</div>

<style>
  .background-animate {
    background-size: 400%;

    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
  }

  @keyframes AnimationName {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
</style>
