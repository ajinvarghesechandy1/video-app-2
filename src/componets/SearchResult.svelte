<script>
	import VideoCard from "./VideoCard.svelte";

</script>
<div class="box">
    <div class="result-details">
        <h1>results found : 54</h1>
        <h1>query : 53534</h1>
    </div>
<div class="results">
    <div class="result">
        <VideoCard cardType={'search-card'}/>
    </div>
    <div class="result">
        <VideoCard cardType={'search-card'}/>
    </div>
    <div class="result">
        <VideoCard cardType={'search-card'}/>
    </div>
    <div class="result">
        <VideoCard cardType={'search-card'}/>
    </div>
    <div class="result">
        <VideoCard cardType={'search-card'}/>
    </div>
    <div class="result">
        <VideoCard cardType={'search-card'}/>
    </div>
    <div class="result">
        <VideoCard cardType={'search-card'}/>
    </div>
    <div class="result">
        <VideoCard cardType={'search-card'}/>
    </div>
</div>
</div>

<style>

    .box{
        margin: 0%;
        width: 100%;
        height: 80vh;
        border: 3px solid white;
        padding: 10px;
        
display: flex;
justify-content: space-around;
}
.results{
    width: 100%;

    display: grid;
   place-items: center;
   overflow:scroll;
        scroll-behavior: smooth;
}
.result{
    margin-top: 20px;
}
.result-details{
    width: 10%;
}

</style>