<script>
	import Home from '../icons/Home.svelte';
	import Library from '../icons/Library.svelte';
	import Search from '../Icons/Search.svelte';

	const menus = [
		{
			id: 1,
			name: 'Home',
			pathname: '/',
		},
		{
			id: 2,
			name: 'Search',
			pathname: '/search',
		},
		{
			id: 3,
			name: 'Your Library',
			pathname: '/#',
		},
	];
</script>

<nav class="bg-black w-64 h-screen fixed">
	<div class="pl-8 pt-6">
		<img src="/spotify-logo.png" class="h-10" alt="spotify-logo" />
		<ul class="mt-8">
			{#each menus as menu}
				<li class="mt-6">
					<div
						class="{'/' === menu.pathname
							? 'text-white'
							: 'text-gray-400'}  hover:text-white hover:transition-all flex items-center font-semibold"
					>
						{#if menu.name === 'Home'}
							<Home />
						{:else if menu.name === 'Search'}
							<Search />
						{:else if menu.name === 'Your Library'}
							<Library />
						{/if}

						<span>{menu.name}</span>
					</div>
				</li>
			{/each}
		</ul>
		<ul class="mt-12">
			<li class="mt-6">
				<div
					class="text-gray-400 hover:text-white hover:transition-all flex items-center font-semibold"
				>
					<svg
						id=""
						class="mr-3 svelte-fa svelte-1w3t65e"
						style="height:1em;font-size:24;vertical-align:-.125em;transform-origin:center;overflow:visible"
						viewBox="0 0 448 512"
						aria-hidden="true"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						><g transform="translate(224 256)"
							><g transform="translate(0,0) scale(1,1)"
								><path
									d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
									fill="currentColor"
									transform="translate(-224 -256)"
								/></g
							></g
						></svg
					>
					<span>Create Playlist</span>
				</div>
			</li>
			<li class="mt-6">
				<div
					class="text-gray-400 hover:text-white hover:transition-all flex items-center font-semibold"
				>
					<span
						class="flex items-center justify-center w-6 h-6 mr-3 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100"
					>
						<svg
							id=""
							class="svelte-fa svelte-1w3t65e"
							style="height:1em;font-size:14;vertical-align:-.125em;transform-origin:center;overflow:visible"
							viewBox="0 0 512 512"
							aria-hidden="true"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							><g transform="translate(256 256)"
								><g transform="translate(0,0) scale(1,1)"
									><path
										d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
										fill="currentColor"
										transform="translate(-256 -256)"
									/></g
								></g
							></svg
						>
					</span>
					<span>Liked Songs</span>
				</div>
			</li>
		</ul>
	</div>
	<div class="px-8">
		<hr class="my-6 border-gray-500" />
	</div>
</nav>
