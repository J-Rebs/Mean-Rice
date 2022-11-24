<script lang="ts">
    export let buttonItem, action;
</script>

<button on:click={action}
class="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow shadow-lg shadow-cyan-500/50"
>{buttonItem}</button>