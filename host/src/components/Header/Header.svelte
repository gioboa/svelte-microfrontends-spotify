<script>
	import { onMount } from 'svelte';
	import Account from '../Icons/Account.svelte';
	import ArrowLeft from '../Icons/ArrowLeft.svelte';
	import ArrowRight from '../Icons/ArrowRight.svelte';
	import Dropdown from '../Icons/Dropdown.svelte';
</script>

<header class="relative h-8">
	<div
		class="flex justify-between transition-colors px-8 py-3 fixed z-10 right-0 top-0 bg-black w-[calc(100%-16rem)]"
	>
		<div class="flex">
			<div class="flex">
				<ArrowLeft />
				<ArrowRight />
			</div>
		</div>
		<div>
			<div class="relative">
				<div
					class="bg-black hover:bg-dark-3 select-none rounded-2xl flex py-1 pl-1 pr-2 items-center cursor-pointer"
				>
					<Account />
					<div class="text-white font-semibold text-sm flex items-center mx-3">
						Jhon Doe
					</div>
					<Dropdown />
				</div>
			</div>
		</div>
	</div>
</header>
