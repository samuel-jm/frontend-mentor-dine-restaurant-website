<script>
	import Button from '../Button.svelte';

	let name, email, month, day, year, hour, minute;
	let people = 2;
	let selectedMeridian = 0;
	let dropdownOpen = false;

	const meridians = ['AM', 'PM'];
</script>

<form>
	<div class="group">
		<input id="name" type="text" placeholder="Name" bind:value={name} autocomplete="off" />
		<label for="name" class="required">This field is required</label>
	</div>
	<div class="group">
		<input id="email" type="text" placeholder="Email" bind:value={email} autocomplete="off" />
		<label for="email" class="required">This field is required</label>
	</div>
	<div>
		<div class="group">
			<label for="date"> Pick a date </label>
			<label for="date" class="required"> This field is incomplete </label>
		</div>
		<div id="date" class="tuple">
			<input type="text" placeholder="MM" bind:value={month} autocomplete="off" />
			<input type="text" placeholder="DD" bind:value={day} autocomplete="off" />
			<input type="text" placeholder="YYYY" bind:value={year} autocomplete="off" />
		</div>
	</div>
	<div>
		<div class="group">
			<label for="time"> Pick a time </label>
			<label for="time" class="required"> This field is incomplete </label>
		</div>
		<div id="time" class="tuple">
			<input type="text" placeholder="09" bind:value={hour} autocomplete="off" />
			<input type="text" placeholder="00" bind:value={minute} autocomplete="off" />
			<div class="dropdown">
				<img src="/icons/icon-arrow.svg" alt="" data-open={dropdownOpen} />
				<button
					on:click={() => {
						dropdownOpen = !dropdownOpen;
					}}
				>
					{meridians[selectedMeridian]}
				</button>
				{#if true}
					<ul data-open={dropdownOpen}>
						{#each meridians as meridian, i}
							<li>
								<button
									selected={selectedMeridian === i}
									on:click={() => {
										selectedMeridian = i;
										dropdownOpen = false;
									}}
								>
									{meridian}
								</button>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	</div>
	<div class="counter">
		<button
			on:click={() => {
				people = Math.max(1, people - 1);
			}}
		>
			<img src="/icons/icon-minus.svg" alt="" />
		</button>
		<span> {people} people</span>
		<button
			on:click={() => {
				people = Math.min(12, people + 1);
			}}
		>
			<img src="/icons/icon-plus.svg" alt="" />
		</button>
	</div>
	<!-- <input type="submit" value="MAKE RESERVATION" data-action="make-reservation" /> -->
	<Button
		--bg={'var(--colour-cod-gray)'}
		--border={'none'}
		--border-hover={'1px solid var(--colour-cod-gray)'}
		text={'MAKE RESERVATION'}
		redirect={'/'}
	/>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		max-width: 540px;
		min-height: 545px;
		padding: 48px;
		box-shadow: var(--box-shadow);

		background: white;

		input,
		.dropdown,
		.counter {
			background-color: white;
			height: 43px;

			padding-left: 16px;

			border: none;
			border-bottom: 1px solid #8e8e8e;

			caret-color: var(--colour-beaver);

			&:focus {
				outline: none;
			}
		}

		&,
		& input,
		& button {
			font-family: 'League Spartan';
			font-size: var(--size-l);
			font-weight: var(--weight-regular);
			letter-spacing: var(--letter-spacing-zero);
			line-height: var(--line-height-s);
		}

		// position: absolute;
		// z-index: 1;

		// right: var(--horizontal-padding);
		// top: 258px;

		// & *[invalid] {
		//   color: var(--colour-error-red);
		//   border-color: var(--colour-error-red);
		// }

		& > div {
			display: flex;

			gap: 65px;

			justify-content: space-between;
			align-items: center;

			& > input {
				width: 100%;
			}
		}

		.group {
			position: relative;
		}

		.required {
			// visibility: hidden;
			position: absolute;
			// top: 30px;

			width: max-content;

			color: var(--colour-error-red);

			font-family: 'League Spartan';
			font-size: var(--size-2xs);
			font-weight: var(--weight-regular);
			letter-spacing: var(--letter-spacing-l);
			line-height: 0;

			// &[invalid] {
			//   visibility: visible;
			// }
		}

		input + .required {
			top: 55px;
			left: 16px;
		}

		label + .required {
			top: 30px;
			left: 0px;
		}

		.dropdown {
			position: relative;
			display: flex;
			align-items: center;

			& > img {
				position: absolute;
				width: 16px;
				height: 8px;
				right: 0;
				top: 50%;
				transform: translate(-16px, calc(-50% - 2px));

				pointer-events: none;

				&[data-open='true'] {
					transform: translate(-16px, calc(-50% - 2px)) rotate(180deg);
				}
			}

			& > button {
				appearance: none;
				border: none;
				background-color: white;
				width: 100%;
				text-align: left;
			}

			& > ul {
				display: none;
				flex-direction: column;
				align-items: flex-end;

				// gap: 16px;

				z-index: 2;

				list-style: none;
				width: fit-content;
				position: absolute;
				background-color: white;
				box-shadow: 0px 15px 25px rgba(56, 66, 85, 0.2462);

				// padding: 18px 30px 13px 0;

				left: 0;
				bottom: -115px;

				&[data-open='true'] {
					display: flex;
				}
			}

			& li {
				width: 100%;
				text-align: right;
				&[selected='true'] {
					background-image: url('/icons/icon-check.svg');
					background-repeat: no-repeat;
					background-position: 16px 8px;
					background-size: 10.43px 7.66px;
				}

				button {
					appearance: none;
					border: none;
					background-color: white;

					height: 100%;
					width: 100%;
					padding: 8px 38px 8px 42px;

					&[selected='true'] {
						background-image: url('/icons/icon-check.svg');
						background-repeat: no-repeat;
						background-position: 20px 16px;
						background-size: 10.43px 7.66px;
					}
				}

				&:first-of-type {
					button {
						padding-top: 16px;
						background-position: 20px 23px;
					}
				}

				&:last-of-type {
					button {
						padding-bottom: 16px;
					}
				}
			}
		}

		.tuple {
			display: flex;
			justify-content: space-between;
			align-items: center;

			gap: 16px;

			flex-grow: 1;

			& > * {
				width: 1px;
				flex-grow: 1;

				&:last-child {
					width: 1px;
					flex-grow: 1.2125;
				}
			}
		}

		.counter {
			display: flex;
			justify-content: space-between;
			align-items: center;

			padding: 0 16px;

			font-family: 'League Spartan';
			font-size: var(--size-l);
			font-weight: var(--weight-bold);
			letter-spacing: var(--letter-spacing-m);
			line-height: var(--line-height-2xs);

			& > button {
				display: flex;
				justify-content: center;
				align-items: center;
				appearance: none;

				width: 0;
				height: 0;
				padding: 16px;
				border: none;
				background-color: white;

				&:hover {
					cursor: pointer;
				}
			}
		}
	}
</style>
