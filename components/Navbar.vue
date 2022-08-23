<template>
	<nav class="navbar bg-white" id="navbar">
		<!-- Logo -->
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">
				<img
					src="../assets/karpuz.png"
					class="mr-3 h-6 sm:h-9"
					alt="Karpuz Logo"
				/>
				<span
					class="self-center text-xl font-semibold whitespace-nowrap text-gray-600"
					>Karpuz</span
				>
			</a>
		</div>
		<div class="flex-none gap-2">
			<!-- Search -->
			<div class="form-control" v-if="true">
				<input
					type="text"
					placeholder="Search"
					class="input input-bordered bg-white text-gray-500 border-gray-200 w-40"
				/>
			</div>
			<router-link
				v-if="!user"
				type="button"
				class="btn btn-error text-white capitalize"
				to="/login"
			>
				Login
			</router-link>

			<!-- Dropdown -->
			<div class="dropdown dropdown-end" v-if="user">
				<label tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img
							:src="`https://avatars.dicebear.com/api/big-smile/${user.username}.svg?b=%23c8ccd5&r=50&scale=82`"
							alt="user photo"
						/>
					</div>
				</label>
				<ul
					tabindex="0"
					class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52 text-gray-500"
				>
					<li>
						<!-- <router-link :to="`/user/${user.username}`" class="justify-between">
							Profile
						</router-link> -->
					</li>
					<li><a @click="handleLogout">Logout</a></li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script setup>
	const user = ref({ username: 'sudanmerinosu' });
</script>

<style scoped></style>
