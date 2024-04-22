<script>
	import Hero from './Hero.svelte';
	import Overview from './Overview.svelte';

	const minPadding = 35;
	const maxPadding = 165;
	const minWidth = 1000;
	const maxWidth = 1440;
	const slope = (maxPadding - minPadding) / (maxWidth - minWidth);
	const intercept = minPadding - minWidth * slope;
	const horizontalPadding = `max(${minPadding}px, min(${maxPadding}px, calc(${100 * slope}vw + ${intercept}px)))`;
</script>

<Hero --horizontal-padding={horizontalPadding} />
<Overview --horizontal-padding={horizontalPadding} />
