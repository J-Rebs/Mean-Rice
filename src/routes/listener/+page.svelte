<script lang="ts">
  import SvelteButton from "$lib/SvelteButton.svelte";
  import axios from "axios";
  /**
   *
   * Specify client Id
   * Development feature only to allow demo client to pretend to be different clients.
   * Authentication is done via auth0.
   *
   */
  let clientId: string;

  /**
   *
   * play song
   *
   */
  let userId: string, songId: string, playlistId: string;
  let playSongCallCount = 0;
  let analytics = [];
  async function playSong() {
    let error = null;
    try {
      const res = await axios.post(
        `/client1-rest/playsong?userid=${userId}&songid=${songId}&playlistid=${playlistId}&clientid=${clientId}`
      );
      playSongCallCount += 1;
      let analyticsEntry = res.data;
      analytics.push(analyticsEntry);
      console.log("analytics returned from playing song:", analyticsEntry);
      return analyticsEntry;
    } catch (e) {
      error = e;
      playSongCallCount += 1;
      alert("playing a song ran into an error");
      console.log("error in playing song", error);
      return null;
    }
  }

  /**
   *
   * like song
   *
   */
  let userIdLikeSong: string, songIdLikeSong: string;
  let likeSongCallCount = 0;
  let songLikesCount = "🤷";
  async function likeSong() {
    let error = null;
    try {
      const res = await axios.put(
        `/client1-rest/likeSong?userid=${userIdLikeSong}&songid=${songIdLikeSong}&clientid=${clientId}`
      );
      likeSongCallCount += 1;
      songLikesCount = res.data;
      console.log(
        "like song is a success, current count of total song likes is:",
        songLikesCount
      );
      return songLikesCount;
    } catch (e) {
      error = e;
      likeSongCallCount += 1;
      alert("liking a song ran into an error");
      console.log("error in liking song", error);
      return null;
    }
  }
</script>

<h1
  class="text-lg w-screen text-center mx-auto font-bold bg-gradient-to-r from-purple-500 to-pink-500 background-animate py-2 text-white"
>
  Listener
</h1>

<!--Client Id Block---------------------------------------------------------------------------------------------------->
<div class="border border-gray-400 m-4 px-4 py-2 text-left font-bold">
  Current Client ID is: {clientId}. To update please use form below.
  <div class="px-4 py-2">
    <div class="py-2">
      <form class="grid m-0 item-center">
        <input
          class="border border-gray-400 indent-2"
          placeholder="Demo allows impersonation of different clients; authentication via auth0"
          type="text"
          bind:value={clientId}
        />
      </form>
    </div>
  </div>
</div>


<div class="px-4 py-4 auto-cols-auto">
  <!--Play Song Block---------------------------------------------------------------------------------------------------->
  <div class="px-4 py-2">
    <SvelteButton buttonItem="Play Song" action={playSong} />
    <div class="px-4 py-2">
      <div class="grid item-center gap-2">
        <input
          class="border border-gray-400 indent-2"
          placeholder="User ID to play"
          type="text"
          bind:value={userId}
        />
        <input
          class="border border-gray-400 indent-2"
          placeholder="Song ID to play"
          type="text"
          bind:value={songId}
        />
        <input
          class="border border-gray-400 indent-2"
          placeholder="Playlist ID to play"
          type="text"
          bind:value={playlistId}
        />
      </div>
    </div>
    <p class="font-bold px-4 py-2">Song Analytic Entries in Current Session:</p>
    {#key playSongCallCount}
      <div class="grid auto-cols-auto auto-rows-auto gap-4 px-4">
        <!--each block src: https://svelte.dev/tutorial/each-blocks-->
        {#each analytics as { id, timestamp }}
          <div
            class="grid md:grid-cols-5 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-102 duration-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow shadow-lg shadow-indigo-500/50"
          >
            <div>
              id: {id} timestamp:{timestamp}
            </div>
          </div>
        {/each}
      </div>
    {/key}
  </div>
  <!--Like Song Block---------------------------------------------------------------------------------------------------->
  <div class="px-4 py-2">
    <SvelteButton buttonItem="Like Song" action={likeSong} />
    <div class="px-4 py-2">
      <div class="grid item-center gap-2">
        <input
          class="border border-gray-400 indent-2"
          placeholder="User ID of who will like song"
          type="text"
          bind:value={userIdLikeSong}
        />
        <input
          class="border border-gray-400 indent-2"
          placeholder="Song ID to like"
          type="text"
          bind:value={songIdLikeSong}
        />
      </div>
    </div>
    <p class="font-bold px-4 py-2">Song Likes Count:</p>
    {#key likeSongCallCount}
      <div class="grid auto-cols-auto auto-rows-auto gap-4 px-4">
        <!--each block src: https://svelte.dev/tutorial/each-blocks-->
        <div
          class="grid md:grid-cols-5 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-102 duration-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow shadow-lg shadow-indigo-500/50"
        >
          <div>
            🎶of Likes 💖: {songLikesCount}
          </div>
        </div>
      </div>
    {/key}
  </div>
</div>
