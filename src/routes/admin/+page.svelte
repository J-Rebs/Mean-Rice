<script>
  import axios from "axios";
  import SvelteButton from "../../lib/SvelteButton.svelte";
  let listUsersCallCount = 0;
  let userList = [];
  async function listUsers() {
    // axios format call src: https://rapidapi.com/guides/call-apis-svelte-axios
    let error = null;
    try {
      const res = await axios.get(
        "https://music-tonic.herokuapp.com/client1-rest/listUsers"
      );
      userList = res.data;
      listUsersCallCount += 1;
      console.log("user list retrieved as:", userList);
      return userList;
    } catch (e) {
      error = e;
      listUsersCallCount += 1;
      return ["Bad request"];
    }
  }
</script>

<h1 class="text-lg w-screen text-center mx-auto font-bold">Admin</h1>
<div class="px-4 py-4 auto-cols-auto">
  <div class="px-4 py-4">
    <SvelteButton buttonItem="list users" action={listUsers} />
    <div class="px-4 py-4">
      {#key listUsersCallCount}
        <div class="grid auto-cols-auto auto-rows-auto gap-4">
          <!--each block src: https://svelte.dev/tutorial/each-blocks-->
          {#each userList as { userId, realName, userType, mainGenre, age }}
            <div
              class="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-102 duration-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow shadow-lg shadow-cyan-500/50"
            >
              <div>userId: {userId}</div>
              <div>Name: {realName}</div>
              <div>userType: {userType}</div>
              <div>mainGenre: {mainGenre}</div>
              <div>age:{age}</div>
            </div>
          {/each}
        </div>
      {/key}
    </div>
  </div>
  <div class="px-4 py-4">
    <SvelteButton buttonItem="add user" action={listUsers} />
    <div class="px-4 py-4" />
  </div>
  <div class="px-4 py-4">
    <SvelteButton buttonItem="delete user" action={listUsers} />
    <div class="px-4 py-4" />
  </div>
</div>
