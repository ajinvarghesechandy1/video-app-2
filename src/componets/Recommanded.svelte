<script>
	import VideoCard from "./VideoCard.svelte";

</script>
<div class="recommanded-video">
    <VideoCard cardType={'recommended-card'}/>
    <VideoCard cardType={'recommended-card'}/>
    <VideoCard cardType={'recommended-card'}/>
 
    
</div>

<style>
    .recommanded-video{
        width: 80%;
        height: auto;
        border: 3px solid white;
        margin-top: 10px;
    overflow: scroll;
    }
</style>