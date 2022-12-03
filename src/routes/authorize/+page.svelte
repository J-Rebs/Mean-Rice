<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import * as jquery from "jquery";
  

  let result;


  
  onMount(async () => {
    var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://dev-j67sh1xxw6ozyqup.us.auth0.com/oauth/token",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "data": "{\"client_id\":\"I8ilmR0YJ6OD1Vo2hTzRNHOpSJinmGUt\",\"client_secret\":\"gol_AM1EaULwKFS_93pn53FrHdWLc5Oj10fCxv1VP_NIqPA6S0foHF2xr-AO3dlK\",\"audience\":\"https://mean-rice.vercel.app/authorize\",\"grant_type\":\"client_credentials\"}"
}

jquery.ajax(settings).done(function (response) {
  console.log(response);
});





  });
</script>

<svelte:head>
	<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
</svelte:head>

