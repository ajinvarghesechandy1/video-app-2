<script >
    export let cardType; 
</script>
<div class={cardType}>
    
    <div class="thumb">
        <img alt="img" src="https://i.ytimg.com/an_webp/XRoSBWYMefY/mqdefault_6s.webp?du=3000&sqp=CKTBtKUG&rs=AOn4CLDOfhlA2K2DTqiMOvK_tkHyJWdZyA" >
    </div>
    <div class="title">
        <h1>tit..... fsdfsdfsf fsdfsdfs fsd f sdf sd f s df </h1>
      
    </div>
</div>

<style>
     /* recommended card style*/
    .recommended-card {
        width: 400px;
        display: flex;
        justify-content: flex-start;
        height: fit-content;

    }
    .recommended-card .thumb{
        width: 60%;

    }
    .recommended-card .thumb > img{
        width: 400px;
        height: 100px;
        border: 3px solid white;
   
    }
    .recommended-card .title{
        width: 70%;
        padding: 0px;
        margin-left: 5px;
    }
    .recommended-card .title > h1{
        font-size: large;
        word-break: keep-all;
        word-wrap: break-word;
        color: white;
        font-size: 20px;
 
    }
    /* history card style*/
    .history-card {
        width: 400px;
        display: flex;
        justify-content: flex-start;
        height: fit-content;

    }
    .history-card .thumb{
        width: 60%;
        border-bottom: 3px solid red;
    }
    .history-card .thumb > img{
        width: 400px;
        height: 100px;
        
   
    }
    .history-card .title{
        width: 70%;
        padding: 0px;
        display: grid;
        align-items: center;
        margin-left: 10px;
    }
    .history-card .title > h1{
        font-size: large;
        word-break: keep-all;
        word-wrap: break-word;
        color: white;
        font-size: 20px;
        
 
    }
     /* search card style*/
     .search-card {
        width: 400px;
        display: flex;
        justify-content: flex-start;
        height: fit-content;

    }
    .search-card .thumb{
        width: 60%;
        border: 3px solid white;
    }
    .search-card .thumb > img{
        width: 400px;
        height: 100px;
   
    }
    .search-card .title{
        width: 60%;
        padding: 0px;
        margin-left: 10px;
    }
    .search-card .title > h1{
        font-size: large;
        word-break: keep-all;
        word-wrap: break-word;
        color: white;
        font-size: 20px;
 
    }
    .home-card{
        width: 300px;
        height: 300px;
        color: white;
        word-wrap: break-word;
        word-break: keep-all;
        font-size: 20px;
        
    }
    .home-card .thumb{
        width: 60%;
        border: 3px solid white;
    }
    .home-card .title{
        width: 70%;
        padding: 0px;
        display: grid;
        align-items: center;
        margin-left: 10px;
    }
</style>