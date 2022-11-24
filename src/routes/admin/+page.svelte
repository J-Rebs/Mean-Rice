<script>
  import axios from "axios";
  import SvelteButton from "../../lib/SvelteButton.svelte";
  let listUsersCallCount = 0;
  let userList = [];
  async function listUsers() {
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
        <ul>
          {#each userList as { userId, realName, userType, mainGenre, age }}
            <li>
              userId: {userId} Name: {realName} userType: {userType} mainGenre: {mainGenre}
              age:{age}
            </li>
          {/each}
        </ul>
      {/key}
    </div>
  </div>
  <div class="px-4 py-4">
    <SvelteButton buttonItem="add user" action={listUsers} />
    <div class="px-4 py-4">
    </div>
  </div>
  <div class="px-4 py-4">
    <SvelteButton buttonItem="delete user" action={listUsers} />
    <div class="px-4 py-4">
    </div>
  </div>
</div>
