<script lang="ts">

   export let video:object;
</script>
<div class="video-player">
    <video
  src={video.src}
 poster={video.thumbnail}
 controls
 autoplay
/>
</div>

<style>
    .video-player{
        width: 100%;
        height: 400px;
        border: 3px solid white;
        padding: 10px;
 margin: 10px;
    }
    video{
    width:  100%;
    height: 380px;
    aspect-ratio: 16/9;
    }
</style>