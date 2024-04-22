<script>
	import '../designSystem.css';
	import '../app.css';
	import Footer from './Footer.svelte';

	export let data;
</script>

<slot />

<Footer --horizontal-padding={data.horizontalPadding} />
