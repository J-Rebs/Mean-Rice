<script lang="ts">
  import axios from "axios";
  import { stringify } from "postcss";
  import Layout from "../+layout.svelte";
  import SvelteButton from "../../lib/SvelteButton.svelte";

  /**
   *
   * Get List of Users
   *
   */
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

  /**
   *
   * Add User
   *
   */

  let addUserCallCount = 0;
  let userData = {
        realName: '' ,
        userType: '' ,
        mainGenre: '',
        age: ''
      };
  async function addUser() {
    // axios format call src: https://rapidapi.com/guides/call-apis-svelte-axios, https://axios-http.com/docs/api_intro, https://masteringjs.io/tutorials/axios/delete 
    console.log("arguments recieved into add user are:", userData.realName, userData.userType, userData.mainGenre, userData.age);
    let error = null;
    try {

      const res = await axios.post(
        "https://music-tonic.herokuapp.com/client1-rest/createUser", {userData}
      );
      addUserCallCount += 1;
      let addedUser = res.data
      console.log("added user is:", addedUser);
      return addedUser;
    } catch (e) {
      error = e;
      addUserCallCount += 1;
      alert("Adding a user ran into an error :( do better -- the Mean Rice team");
      console.log("error in adding user",error);
      return null;
    }
  }
</script>

<h1 class="text-lg w-screen text-center mx-auto font-bold bg-gradient-to-r from-sky-500 to-indigo-500 background-animate py-2 text-white">Admin</h1>
<div class="px-4 py-4 auto-cols-auto">
  <!--User List Block---------------------------------------------------------------------------------------------------->
  <div class="px-4 py-4">
    <SvelteButton buttonItem="List all users" action={listUsers} />
    <div class="px-4 py-4">
      {#key listUsersCallCount}
        <div class="grid auto-cols-auto auto-rows-auto gap-4">
          <!--each block src: https://svelte.dev/tutorial/each-blocks-->
          {#each userList as { userId, realName, userType, mainGenre, age }}
            <div
              class="grid md:grid-cols-5 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-102 duration-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow shadow-lg shadow-cyan-500/50"
            >
              <div>
                userId: {userId} Name: {realName} userType: {userType} mainGenre:
                {mainGenre} age:{age}
              </div>
            </div>
          {/each}
        </div>
      {/key}
    </div>
  </div>
  <!--Add User Block---------------------------------------------------------------------------------------------------->
  <div class="px-4 py-2">
    <SvelteButton buttonItem="Add User" action={addUser} />
    <div class="px-4 py-2">
      <div class="grid item-center gap-2">
        <!--Input approach: https://svelte.dev/repl/text-inputs?version=3.53.1-->
        <input class="border border-gray-400 indent-2" placeholder="Real Name" type="text" bind:value={userData.realName} />
        <input class="border border-gray-400 indent-2" placeholder="User Type" type="text" bind:value={userData.userType} />
        <input class="border border-gray-400 indent-2" placeholder="Main Genre" type="text" bind:value={userData.mainGenre} />
        <input class="border border-gray-400 indent-2" placeholder="Age" type="text" bind:value={userData.age}/>
      </div>
    </div>
    <div>
        {userData.realName}
        {userData.userType}
        {userData.mainGenre}
        {userData.age}
        {addUserCallCount}
    </div>
  </div>
  <!--Delete User Block---------------------------------------------------------------------------------------------------->
  <div class="px-4 py-2">
    <SvelteButton buttonItem="Delete User" action={listUsers} />
    <div class="px-4 py-2">
      <form class="grid item-center">
        <label>User ID</label>
        <input class="border border-gray-400" type="text" />
      </form>
    </div>
  </div>
</div>
