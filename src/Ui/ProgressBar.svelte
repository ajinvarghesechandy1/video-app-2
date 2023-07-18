<script lang="ts">
     import { fade, fly } from 'svelte/transition';
  import { bounceIn } from 'svelte/easing';
	export let progress: number;
</script>

<div class="progress-bar">
	{#if progress <= 100}
		<div style="margin-top: 0px;" class="progress">{progress}%</div>
        
	{:else}
		<svg 
        transition:fade={{ delay: 0, duration: 200,   easing:bounceIn  }}
        xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"
			><path fill="#0bfe1c" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z" /></svg
		>
	{/if}
</div>

<style>
	.progress-bar {
		width: 80px;
        height: 80px;
		display: grid;
		place-items: center;
        background-color: white;
        overflow: hidden;
        margin: auto;
        border-radius: 50%;
	}

	.progress {
		width: 80px;
		text-align: center;
		background-color: rgb(16, 174, 40);
		height: 80px;
		margin-top: 10px;
		color: black;
		display: grid;
		place-content: center;
	}
</style>
