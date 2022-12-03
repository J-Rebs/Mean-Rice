<script>
    import axios from "axios";
    import { onMount } from "svelte";
  
    let token;
  
    onMount(async () => {
      let options = {
        method: "POST",
        url: "https://dev-j67sh1xxw6ozyqup.us.auth0.com/oauth/token",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: "DLX91mkDkmWN1dEBNo3hws0jZssIwNEO",
          client_secret:
            "PZoXRbaRiZ83nBseqY1NSyzCbNj6X2H8s4ol3XeXAH2XV8BYaDNe2U-aT1TRsbWq",
          audience: "https://music-tonic.herokuapp.com/",
        }),
      };
  
      const res = await axios.request(options);
      token = res.data;
      console.log("login token", token);
    });
  </script>

<div class="px-4 py-4 font-bold text-lg">
    Utilities page for demo client...verify token received {1}
</div>

  