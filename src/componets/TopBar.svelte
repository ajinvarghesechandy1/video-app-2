<script>
	import { onMount } from "svelte";
	import NavBar from "./NavBar.svelte";
import SearchBar from "./SearchBar.svelte";
export  let isAuth;

</script>

{#if isAuth}
<div class="top-bar">
    <SearchBar/>
    <NavBar/>
</div>
{:else}
<h1>not logined</h1>
{/if}


<style>
    .top-bar{
        display: flex;
        justify-content: flex-start;
        height: 20%;
    }
</style>