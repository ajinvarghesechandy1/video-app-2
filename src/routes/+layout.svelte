<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.postcss';
	import TopBar from '../componets/TopBar.svelte';
	import { auth, onAuthStateChanged} from '../lib/firbase'
    let isAuth =  false
	onMount(()=>{
		onAuthStateChanged(auth , (user)=>{
   if(user){
isAuth = true
   }
	})
	})
</script>


<TopBar  isAuth={isAuth}/>
<slot />
