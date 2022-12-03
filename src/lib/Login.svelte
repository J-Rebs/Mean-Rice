<script>
import axios from "axios";
import { onMount } from 'svelte';

let token;

onMount(async () => {

let options = {
  method: 'POST',
  url: 'https://dev-j67sh1xxw6ozyqup.us.auth0.com/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: 'yVgHRKrNqFXv44dUCnUiUVGyowqbSiwL',
    client_secret: 'beb62xgkt8mZd0vIe9S0zmyG8lqElpSUzh2dZFxgDeXnaA5Z-wRXAzdML0I-CG2c',
    audience: 'https://music-tonic.herokuapp.com/'
  })
};

const res = await axios.request(options)
token = res.data;
console.log('login token', token);


    
	});

</script>