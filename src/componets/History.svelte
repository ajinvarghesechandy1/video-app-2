<script>
	import VideoCard from "./VideoCard.svelte";

</script>
<div class="box">
    <h1>history:</h1>
    <div class="history">
     
      <div class="video">
        <VideoCard cardType={'history-card'}/>
      </div>
      <div class="video">
        <VideoCard cardType={'history-card'}/>
      </div>
      <div class="video">
        <VideoCard cardType={'history-card'}/>
      </div>
      <div class="video">
        <VideoCard cardType={'history-card'}/>
      </div>
      <div class="video">
        <VideoCard cardType={'history-card'}/>
      </div>
      <div class="video">
        <VideoCard cardType={'history-card'}/>
      </div>
      <div class="video">
        <VideoCard cardType={'history-card'}/>
      </div>
      <div class="video">
        <VideoCard cardType={'history-card'}/>
      </div>
    </div>
</div>

<style>
    h1{
        font-size: xx-large;
        font-family: monospace;
        color:rgba(218, 214, 214, 0.582);
    position: sticky;
    top: 0;
    }
    .history{
        width: 100%;
        height: 70vh;
        scroll-behavior: auto;
        overflow: scroll;
    }
    .video{
        margin-top: 20px;
    }
       .box{
        margin: 0%;
        width: 100%;
        height: 80vh;
        border: 3px solid white;
        padding: 10px;
        overflow:scroll;
        scroll-behavior: smooth;
        position: relative;
    }

</style>