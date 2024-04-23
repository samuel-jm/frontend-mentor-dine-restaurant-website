<script>
	import Form from './Form.svelte';
</script>

<section>
	<img src="/logo.svg" alt="Dine" />
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
		background-image: url('/booking/hero-bg-desktop@2x.jpg');
		background-size: auto 100%;

		img {
			grid-area: logo;

			height: 40px;
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
