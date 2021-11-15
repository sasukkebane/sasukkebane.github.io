<script>
	import { titles } from "$lib/dattebane/shippuuden";

	let episodes = Object.entries(titles);
	episodes.sort((a, b) => Number(a[0]) - Number(b[0]));
</script>

<div
	class="mt-3 mb-3 mx-auto bg-dark text-light p-2 rounded-3"
	style="max-width: 650px;"
>
	<h4 class="text-center">Naruto Shippuuden</h4>
	<ul class="list-unstyled">
		{#each episodes as episode}
			<li>
				<a
					href={"/watch?episode=" + episode[0]}
					class="text-decoration-none"
				>
					<b>{episode[0]}:</b>
					{episode[1]}
				</a>
			</li>
		{/each}
	</ul>
</div>
