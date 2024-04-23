<script>
	import Form from './Form.svelte';
</script>

<section>
	<img
		id="hero-img"
		src="/booking/hero-bg-desktop@2x.jpg"
		alt="A plate of avocado and tomato on toast"
	/>
	<img id="logo" src="/logo.svg" alt="Dine" />
	<div id="text-group">
		<h1>Reservations</h1>
		<p>
			We can't wait to host you. If you have any special requirements please feel free to call on
			the phone number below. We'll be happy to accommodate you.
		</p>
	</div>
	<div id="form-wrapper">
		<Form />
	</div>
</section>

<style lang="scss">
	section {
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: min-content 1fr;
		grid-template-areas:
			'logo none'
			'text form';
		row-gap: 153px;
		column-gap: 125px;

		height: 600px;
		padding-top: 65px;

		#logo {
			grid-area: logo;

			height: 40px;
		}

		#hero-img {
			position: absolute;

			z-index: -1;

			height: 100%;
		}

		#text-group {
			grid-area: text;

			color: white;

			h1 {
				margin-bottom: 18px;

				font-family: 'League Spartan';
				font-size: var(--size-3xl);
				font-weight: var(--weight-light);
				letter-spacing: var(--letter-spacing-3xs);
				line-height: var(--line-height-3xl);
			}

			p {
				max-width: 37ch;

				font-family: 'League Spartan';
				font-size: var(--size-l);
				font-weight: var(--weight-regular);
				letter-spacing: var(--letter-spacing-zero);
				line-height: var(--line-height-m);
			}
		}

		#form-wrapper {
			grid-area: form;
		}
	}
</style>
