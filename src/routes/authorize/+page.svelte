<script>
  import axios from "axios";
  import { onMount } from "svelte";
  let res;
  
  onMount(async () => {
   /**
    * 
    * 
    * 
    */
    var options = { method: 'POST',
      url: 'https://dev-j67sh1xxw6ozyqup.us.auth0.com/oauth/token',
      headers: { 'content-type': 'application/json' },
      body: '{"client_id":"I8ilmR0YJ6OD1Vo2hTzRNHOpSJinmGUt","client_secret":"gol_AM1EaULwKFS_93pn53FrHdWLc5Oj10fCxv1VP_NIqPA6S0foHF2xr-AO3dlK","audience":"https://mean-rice.vercel.app/authorize","grant_type":"client_credentials"}' };


    console.log('authentication commenced...');
    let res = await axios.request(options);
    console.log('authentication terminated...');



  });
</script>
