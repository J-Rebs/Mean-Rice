<script>
  import { onMount } from "svelte";
  import js from "jquery";

  onMount(() => {
    window.jq = js;
    window.jq(document).ready(function () {
      window.jq("#token-test").click(function () {        
        var settings = {
          async: true,
          crossDomain: true,
          url: "https://dev-fy8sudhpxibri3cs.us.auth0.com/oauth/token",
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          data: '{"client_id":"vC4k5tpW3742F8UjGGgHouidbTud26OM","client_secret":"Zc3uA9oJ_jtLFlj8jJYwVqUZBogLK5B2kCgKs39Axr-6e-fhlXC7Onk30bn-PPf4","audience":"https://music-tonic.herokuapp.com/","grant_type":"client_credentials"}',
          
        };
        window.jq.ajax(settings).done(function (response) {
          console.log(response);
        });
      });
    });
  });
</script>

<div
  class="bg-lime-300 px-6 py-6 opacity-80 hover:opacity-100 transition-opacity"
>
  <h2 class="text-lg">Client-Console</h2>

  <h3>
    To learn more about how we made this see <a
      class="text-cyan-500 font-bold"
      href="/about">here</a
    >.
  </h3>

  <p>
    This is a demo-client. This is not full functionality. We have provided
    several possible layouts the client could make use of if it wanted to build
    a further level of logins for end users.
  </p>

  <ul class="opacity-100">
    <li class="my-3">
      <a class="text-cyan-500 font-bold" href="/admin">
        <button
          class="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow shadow-lg shadow-cyan-500/50"
        >
          <p class="text-cyan-500">Admin layout</p></button
        >
      </a>
    </li>

    <li>
      <a class="text-cyan-500 font-bold" href="/listener" /><a
        class="text-cyan-500 font-bold"
        href="/listener"
      >
        <button
          class="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow shadow-lg shadow-cyan-500/50"
          ><p class="text-cyan-500">Listener layout</p></button
        ></a
      >
    </li>
    <button
      class="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow shadow-lg shadow-cyan-500/50"
      id="token-test"><p class="text-cyan-500">Token Test</p></button
    >
  </ul>
</div>
<div class="blob blur-lg cursor-grabbing">
  <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx -->
  <svg
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 310 350"
  >
    <path
      d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
    />
  </svg>
</div>

<style>
  /* blob animation SRC: https://css-tricks.com/blobs/ */
  .blob {
    position: absolute;
    top: 0;
    left: 0;
    fill: #6b3e00;
    width: 50vmax;
    z-index: -1;
    animation: move 30s ease-in-out infinite;
    transform-origin: 50% 50%;
  }

  @keyframes move {
    0% {
      transform: scale(1) translate(10px, -30px);
    }
    38% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
    }
    40% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
    }
    78% {
      transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
    }
    80% {
      transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
    }
    100% {
      transform: scale(1) translate(10px, -30px);
    }
  }
</style>
