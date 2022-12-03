<script>
import axios from "axios";
import { onMount } from 'svelte';

let token;

  onMount(async () => {
    let options = {
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: "6eZqG8pgM7D87N3GjyIPt8SrB8AeDoBb",
        client_secret:
          "SlF6GWa5phb-jx3bNS_GcRTosVeYoSVvz3U5aAQlV-e7JZ6DkEzisdQlnEEmykwq",
        audience: "https://music-tonic.herokuapp.com/",
      })
    };

    const res = await axios.post("https://dev-j67sh1xxw6ozyqup.us.auth0.com/oauth/token",options);
    token = res.data;
    console.log("login token", token);
  });
</script>