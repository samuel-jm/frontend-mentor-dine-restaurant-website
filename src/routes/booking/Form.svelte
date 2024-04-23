<script>
	let nameInvalid, emailInvalid, dateInvalid, timeInvalid;
	let people = 2;
	let selectedMeridian = 0;
	let dropdownOpen = false;

	const meridians = ['AM', 'PM'];

	let valid = true;

	function validate(event) {
		const form = new FormData(event.target);
		let data = {};
		console.log(form);
		for (const field of form) {
			const [key, value] = field;
			data[key] = value;
		}

		valid = true;

		if (isNameValid(data.name)) {
			nameInvalid = false;
		} else {
			nameInvalid = true;
			valid = false;
		}

		if (isEmailValid(data.email)) {
			emailInvalid = false;
		} else {
			emailInvalid = true;
			valid = false;
		}

		if (isDateValid(data.month, data.day, data.year)) {
			dateInvalid = false;
		} else {
			dateInvalid = true;
			valid = false;
		}

		if (isTimeValid(data.hour, data.minute)) {
			timeInvalid = false;
		} else {
			timeInvalid = true;
			valid = false;
		}

		if (valid) {
			window.history.back();
		}
	}

	function isNameValid(name) {
		return name !== '';
	}

	function isEmailValid(email) {
		return /^\S+@\S+\.\S+$/.test(email);
	}

	function isDateValid(month, day, year) {
		const dayReg = /^[0-9]{2}$/;
		const monthReg = /^[0-9]{2}$/;
		const yearReg = /^[0-9]{4}$/;
		if (!dayReg.test(day) || !monthReg.test(month) || !yearReg.test(year)) return false;
		if (+day < 1 || +day > 31 || +month < 1 || +month > 12 || year < 2024 || year > 2050) {
			return false;
		}

		return true;
	}

	function isTimeValid(hour, minute) {
		const reg = /^[0-9]{2}$/;
		if (reg.test(hour) && reg.test(minute)) {
			return +hour >= 0 && +hour < 12 && +minute >= 0 && +minute < 60;
		}

		return false;
	}
</script>

<form action="" on:submit|preventDefault={validate}>
	<div class="group">
		<input name="name" type="text" placeholder="Name" autocomplete="off" invalid={nameInvalid} />
		<label for="name" class="required" invalid={nameInvalid}>This field is required</label>
	</div>
	<div class="group">
		<input name="email" type="text" placeholder="Email" autocomplete="off" invalid={emailInvalid} />
		<label for="email" class="required" invalid={emailInvalid}>This field is required</label>
	</div>
	<div>
		<div class="group">
			<label for="date" invalid={dateInvalid}> Pick a date </label>
			<label for="date" class="required" invalid={dateInvalid}> This field is incomplete </label>
		</div>
		<div id="date" class="tuple">
			<input type="text" name="month" placeholder="MM" autocomplete="off" invalid={dateInvalid} />
			<input type="text" name="day" placeholder="DD" autocomplete="off" invalid={dateInvalid} />
			<input type="text" name="year" placeholder="YYYY" autocomplete="off" invalid={dateInvalid} />
		</div>
	</div>
	<div>
		<div class="group">
			<label for="time" invalid={timeInvalid}> Pick a time </label>
			<label for="time" class="required" invalid={timeInvalid}> This field is incomplete </label>
		</div>
		<div id="time" class="tuple">
			<input type="text" name="hour" placeholder="09" autocomplete="off" invalid={timeInvalid} />
			<input type="text" name="minute" placeholder="00" autocomplete="off" invalid={timeInvalid} />
			<div class="dropdown">
				<img src="/icons/icon-arrow.svg" alt="" data-open={dropdownOpen} />
				<button
					type="button"
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
									type="button"
									name="meridian"
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
			type="button"
			on:click={() => {
				people = Math.max(1, people - 1);
			}}
		>
			<img src="/icons/icon-minus.svg" alt="" />
		</button>
		<span> {people} people</span>
		<button
			type="button"
			on:click={() => {
				people = Math.min(12, people + 1);
			}}
		>
			<img src="/icons/icon-plus.svg" alt="" />
		</button>
	</div>
	<input type="submit" value="MAKE RESERVATION" />
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;

		z-index: 1;

		max-width: 540px;
		min-height: 545px;
		padding: 48px;
		box-shadow: var(--box-shadow);

		background: white;

		input,
		.dropdown,
		.counter {
			appearance: none;

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

		*[invalid='true'] {
			color: var(--colour-error-red);
			border-color: var(--colour-error-red);
		}

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
			visibility: hidden;
			position: absolute;

			width: max-content;

			color: var(--colour-error-red);

			font-family: 'League Spartan';
			font-size: var(--size-2xs);
			font-weight: var(--weight-regular);
			letter-spacing: var(--letter-spacing-l);
			line-height: 0;

			&[invalid='true'] {
				visibility: visible;
			}
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

				cursor: pointer;
			}

			& > ul {
				display: none;
				flex-direction: column;
				align-items: flex-end;

				z-index: 2;

				list-style: none;
				width: fit-content;
				position: absolute;
				background-color: white;
				box-shadow: 0px 15px 25px rgba(56, 66, 85, 0.2462);

				left: 0;
				bottom: -115px;

				&[data-open='true'] {
					display: flex;
				}
			}

			& li {
				width: 100%;
				text-align: right;

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

		& input[type='submit'] {
			border: none;
			position: relative;

			background-color: var(--colour-cod-gray);
			border-radius: 0px;
			border: 1px solid white;
			padding: 23px 53px;
			text-decoration: none;
			height: fit-content;

			color: white;

			font-family: 'League Spartan';
			font-size: var(--size-m);
			font-weight: var(--weight-semi-bold);
			letter-spacing: var(--letter-spacing-2xl);
			line-height: var(--line-height-3xs);
			text-align: center;

			&:hover {
				background-color: white;
				border: 1px solid black;

				color: var(--colour-cod-gray);

				cursor: pointer;
			}
		}
	}
</style>
