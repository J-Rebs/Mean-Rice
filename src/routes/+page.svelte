<script>
  import { onMount } from "svelte";
  import axios from "axios";
  let quotes = [];
  let error = null;

  onMount(async () => {
    try {
      const res = await axios.get('https://music-tonic.herokuapp.com/client1-rest/listUsers');
      quotes = res.data;
    } catch (e) {
      error = e;
    }
  });
</script>

<h2 class="text-lg">Client-Console</h2>

<h3>To learn more about how we made this see <a class="text-cyan-500 font-bold" href="/about">here</a></h3>

<p>
  This is a demo-client. This is not full functionality. We have provided
  several possible layouts the client could make use of if it wanted to build a
  further level of logins for end users.
</p>

<ul>
  <li><a class="text-cyan-500 font-bold" href="/admin">Admin layout</a></li>
  <li><a class="text-cyan-500 font-bold" href="/listener">Listener layout</a></li>
</ul>

<style>
    .a {
		font-weight: bold;
		color: rgb(0, 145, 255);
	}
</style>