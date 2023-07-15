<script>
	import NavBar from "./NavBar.svelte";
import SearchBar from "./SearchBar.svelte";

</script>
<div class="top-bar">
    <SearchBar/>
    <NavBar/>
</div>

<style>
    .top-bar{
        display: flex;
        justify-content: flex-start;
        height: 20%;
    }
</style>