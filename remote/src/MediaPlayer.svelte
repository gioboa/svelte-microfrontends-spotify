<script>
	import { NEXT_SONG_EVENT } from '../../shared/shared';
</script>

<div
	class="flex h-24 w-full bg-dark border-t border-t-dark-3 fixed bottom-0 left-0"
>
	<div class="flex-1" />
	<div class="flex-1 flex justify-center items-center flex-col">
		<div class="flex justify-center items-center">
			<svg
				id=""
				class="text-dark-2 mr-6 svelte-fa svelte-1w3t65e"
				style="height:1em;font-size:18;vertical-align:-.125em;transform-origin:center;overflow:visible"
				viewBox="0 0 512 512"
				aria-hidden="true"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				><g transform="translate(256 256)"
					><g transform="translate(0,0) scale(1,1)"
						><path
							d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"
							fill="currentColor"
							transform="translate(-256 -256)"
						/></g
					></g
				></svg
			>
			<svg
				id=""
				class="text-dark-2 svelte-fa svelte-1w3t65e"
				style="height:1em;font-size:20;vertical-align:-.125em;transform-origin:center;overflow:visible"
				viewBox="0 0 320 512"
				aria-hidden="true"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				><g transform="translate(160 256)"
					><g transform="translate(0,0) scale(1,1)"
						><path
							d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"
							fill="currentColor"
							transform="translate(-160 -256)"
						/></g
					></g
				></svg
			>
			<svg
				id=""
				class="text-dark-2 mx-6 svelte-fa svelte-1w3t65e"
				style="height:1em;font-size:32;vertical-align:-.125em;transform-origin:center;overflow:visible"
				viewBox="0 0 512 512"
				aria-hidden="true"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				><g transform="translate(256 256)"
					><g transform="translate(0,0) scale(1,1)"
						><path
							d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"
							fill="currentColor"
							transform="translate(-256 -256)"
						/></g
					></g
				></svg
			>
			<svg
				id=""
				class="text-dark-2 svelte-fa svelte-1w3t65e"
				style="height:1em;font-size:20;vertical-align:-.125em;transform-origin:center;overflow:visible"
				viewBox="0 0 320 512"
				aria-hidden="true"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				on:click={() => {
					const customEvent = new CustomEvent(NEXT_SONG_EVENT);
					window.dispatchEvent(customEvent);
				}}
				><g transform="translate(160 256)"
					><g transform="translate(0,0) scale(1,1)"
						><path
							d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"
							fill="currentColor"
							transform="translate(-160 -256)"
						/></g
					></g
				></svg
			>
			<svg
				id=""
				class="text-dark-2 ml-6 svelte-fa svelte-1w3t65e"
				style="height:1em;font-size:18;vertical-align:-.125em;transform-origin:center;overflow:visible"
				viewBox="0 0 512 512"
				aria-hidden="true"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				><g transform="translate(256 256)"
					><g transform="translate(0,0) scale(1,1)"
						><path
							d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"
							fill="currentColor"
							transform="translate(-256 -256)"
						/></g
					></g
				></svg
			>
		</div>
		<div class="w-full flex mt-4">
			<span class="text-dark-1 text-xs mr-2">0:00</span>
			<div class="h-1 w-full rounded-md self-center bg-dark-2" />
			<span class="text-dark-1 text-xs ml-2">0:00</span>
		</div>
	</div>
	<div class="flex-1 flex justify-end items-center pr-6">
		<svg
			id=""
			class="text-dark-1 mr-6 svelte-fa svelte-1w3t65e"
			style="height:1em;font-size:16;vertical-align:-.125em;transform-origin:center;overflow:visible"
			viewBox="0 0 512 512"
			aria-hidden="true"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			><g transform="translate(256 256)"
				><g transform="translate(0,0) scale(1,1)"
					><path
						d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
						fill="currentColor"
						transform="translate(-256 -256)"
					/></g
				></g
			></svg
		>
		<svg
			id=""
			class="text-dark-1 mr-6 svelte-fa svelte-1w3t65e"
			style="height:1em;font-size:16;vertical-align:-.125em;transform-origin:center;overflow:visible"
			viewBox="0 0 384 512"
			aria-hidden="true"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			><g transform="translate(192 256)"
				><g transform="translate(0,0) scale(1,1)"
					><path
						d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"
						fill="currentColor"
						transform="translate(-192 -256)"
					/></g
				></g
			></svg
		>
		<svg
			id=""
			class="text-dark-1 mr-2 svelte-fa svelte-1w3t65e"
			style="height:1em;font-size:16;vertical-align:-.125em;transform-origin:center;overflow:visible"
			viewBox="0 0 640 512"
			aria-hidden="true"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			><g transform="translate(320 256)"
				><g transform="translate(0,0) scale(1,1)"
					><path
						d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"
						fill="currentColor"
						transform="translate(-320 -256)"
					/></g
				></g
			></svg
		>
		<div class="h-1 w-24 rounded-md self-center bg-white" />
	</div>
</div>
