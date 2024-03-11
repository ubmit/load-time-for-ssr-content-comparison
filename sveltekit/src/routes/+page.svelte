<script lang="ts">
	export let data;
</script>

<template>
	<h1>Todos</h1>
	<ul>
		{#each data.todos as todo}
			<li>{todo.title}</li>
		{/each}
	</ul>
</template>
