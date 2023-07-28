<script lang="ts">
	import '../app.postcss';
	import TopBar from '../componets/TopBar.svelte';
	import { auth, onAuthStateChanged} from '../lib/firbase'
    let isAuth:boolean;
	onAuthStateChanged(auth , (user)=>{
   if(user){
isAuth = true
   }else{
	isAuth =false
   }
	})
</script>


<TopBar  isAuth={isAuth}/>
<slot />
