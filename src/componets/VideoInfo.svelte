<script>
    export let videoInfo;
    const {title , description} = videoInfo;
</script>
<div class="video-info">
    <h1 class="title">
       {title}
    </h1>
    <p>
        {description}
    </p>
</div>

<style>
    .video-info{
    @apply w-auto;
     @apply h-56;
     border: 2px solid white;
     margin-left: 10px;
    
    }
    .video-info .title{
        font-family: Arial, Helvetica, sans-serif;
        font-size: xx-large;
        margin-left: 20px;
    }
    p{
    margin-left: 20px;
    word-break: keep-all;
    }
    
</style>