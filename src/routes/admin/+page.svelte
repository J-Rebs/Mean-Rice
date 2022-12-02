<script lang="ts">
  import axios from "axios";
  import SvelteButton from "../../lib/SvelteButton.svelte";

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
        `http://localhost:8080/client1-rest/listUsers?clientid=${clientId}`
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
    realName: "",
    userType: "",
    mainGenre: "",
    age: "",
  };
  async function addUser() {
    // axios format call src: https://rapidapi.com/guides/call-apis-svelte-axios, https://axios-http.com/docs/api_intro, https://masteringjs.io/tutorials/axios/delete
    userData.realName = String(userData.realName);
    userData.userType = String(userData.userType);
    userData.mainGenre = String(userData.mainGenre);
    userData.age = String(userData.age);
    console.log(
      "arguments recieved into add user are:",
      userData.realName,
      userData.userType,
      userData.mainGenre,
      userData.age
    );
    let error = null;
    try {
      const res = await axios.post(
        `http://localhost:8080/client1-rest/createUser?realname=${userData.realName}&usertype=${userData.userType}&maingenre=${userData.mainGenre}&age=${userData.age}&clientid=${clientId}`
      );
      addUserCallCount += 1;
      let addedUser = res.data;
      console.log("added user is:", addedUser);
      return addedUser;
    } catch (e) {
      error = e;
      addUserCallCount += 1;
      alert("Adding a user ran into an error");
      console.log("error in adding user", error);
      return null;
    }
  }

  let deleteUserCallCount = 0;
  let deleteId: string;
  async function deleteUser() {
    let error = null;
    try {
      const res = await axios.delete(
        `http://localhost:8080/client1-rest/deleteUser?id=${deleteId}&clientId=${clientId}`
      );
      deleteUserCallCount += 1;
      let deletedUser = res.data;
      console.log("deleted user is:", deletedUser);
      return deletedUser;
    } catch (e) {
      error = e;
      deleteUserCallCount += 1;
      alert("Deleting a user ran into an error");
      console.log("error in deleting user", error);
      return null;
    }
  }
</script>

<h1
  class="text-lg w-screen text-center mx-auto font-bold bg-gradient-to-r from-sky-500 to-indigo-500 background-animate py-2 text-white"
>
  Admin
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
  <!--User List Block---------------------------------------------------------------------------------------------------->
  <div class="px-4 py-4">
    <SvelteButton buttonItem="List all users" action={listUsers} />
    <div class="px-4 py-4">
      {#key listUsersCallCount}
        <div class="grid auto-cols-auto auto-rows-auto gap-4">
          <!--each block src: https://svelte.dev/tutorial/each-blocks-->
          {#each userList as { userId, realName, userType, mainGenre, age }}
            <div
              class="grid md:grid-cols-5 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-102 duration-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow shadow-lg shadow-indigo-500/50"
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
        <input
          class="border border-gray-400 indent-2"
          placeholder="Real Name"
          type="text"
          bind:value={userData.realName}
        />
        <input
          class="border border-gray-400 indent-2"
          placeholder="User Type"
          type="text"
          bind:value={userData.userType}
        />
        <input
          class="border border-gray-400 indent-2"
          placeholder="Main Genre"
          type="text"
          bind:value={userData.mainGenre}
        />
        <input
          class="border border-gray-400 indent-2"
          placeholder="Age"
          type="text"
          bind:value={userData.age}
        />
      </div>
    </div>
  </div>
  <!--Delete User Block---------------------------------------------------------------------------------------------------->
  <div class="px-4 py-2">
    <SvelteButton buttonItem="Delete User" action={deleteUser} />
    <div class="px-4 py-2">
      <form class="grid item-center">
        <input
          class="border border-gray-400 indent-2"
          placeholder="User ID to Delete"
          type="text"
          bind:value={deleteId}
        />
      </form>
    </div>
  </div>
</div>
