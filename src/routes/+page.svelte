<script>
	import VideoCard from "../componets/VideoCard.svelte";

</script>
<div class="box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<VideoCard cardType={'home-card'}/>
<VideoCard cardType={'history-card'} />
<VideoCard cardType={'recommended-card'} />
<VideoCard cardType={'search-card'}/>
</div>

<style>

    .box{
        margin: 0%;
        width: 100%;
        height: 80vh;
        border: 3px solid white;
        padding: 10px;
        overflow:scroll;
        scroll-behavior: smooth;
    }

</style>