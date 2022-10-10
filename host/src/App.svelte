<script>
	import Header from './components/Header/Header.svelte';
	import Sidebar from './components/Sidebar/Sidebar.svelte';
	import { loadRemoteModule } from '@softarc/native-federation';
	import { musics } from './mocks/musics';

	let remoteAppTarget;
	(async () => {
		const app = await loadRemoteModule('remote', './remote-mediaplayer');
		new app.default({ target: remoteAppTarget });
	})();
</script>

<div class="flex">
	<Sidebar />
	<Header />
	<div class="w-full flex justify-end">
		<div class="w-[calc(100%-16rem)]">
			<div class="bg-dark w-full min-h-screen px-8 pt-16 pb-40">
				{#each musics as { name, items }}
					<div class="mt-10">
						<div class="flex justify-between">
							<a href="/#">
								<h3 class="text-white text-2xl font-bold hover:underline">
									{name}
								</h3>
							</a>
							<a href="/#">
								<span
									class="uppercase hover:underline text-sm font-semibold text-dark-1"
								>
									see all
								</span>
							</a>
						</div>
						<div
							class="grid gap-5 grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 mt-6"
						>
							{#each items as { image, name, publisher }}
								<div
									class="p-5 bg-[#181818] hover:bg-dark-3 shadow-sm shadow-black rounded-lg w-auto cursor-pointer"
								>
									<img src={image} alt="card-img" />
									<div
										class="text-white font-bold text-base mt-3 overflow-hidden text-ellipsis whitespace-nowrap w-auto"
									>
										{name}
									</div>
									<div
										class="text-dark-1 text-sm mt-2 overflow-hidden text-ellipsis whitespace-nowrap w-auto"
									>
										{publisher}
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
			<div
				class="h-24 w-full bg-dark text-white text-center p-8"
				bind:this={remoteAppTarget}
			>
				MFE Placeholder
			</div>
		</div>
	</div>
</div>
