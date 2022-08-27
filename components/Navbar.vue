<template>
	<nav class="navbar bg-white" id="navbar">
		<!-- Logo -->
		<div class="flex-1">
			<NuxtLink to="/" append class="btn btn-ghost normal-case text-xl">
				<img
					src="../assets/karpuz.png"
					class="mr-3 h-6 sm:h-9"
					alt="Karpuz Logo"
				/>
				<span
					class="self-center text-xl font-semibold whitespace-nowrap text-gray-600"
					>Karpuz</span
				>
			</NuxtLink>
		</div>
		<div class="flex-none gap-2">
			<!-- Search  belli bi boyuttan büyükse true yap-->
			<div class="form-control" v-if="false">
				<input
					type="text"
					placeholder="Search"
					class="input input-bordered bg-white text-gray-500 border-gray-200 w-40"
				/>
			</div>
			<!-- login -->
			<NuxtLink
				v-if="user"
				append
				type="button"
				class="btn btn-primary capitalize"
				to="/login"
			>
				Login
			</NuxtLink>
			|
			<!-- register -->

			<NuxtLink
				v-if="user"
				append
				type="button"
				class="btn btn-primary btn-outline capitalize"
				to="/register"
			>
				Register
			</NuxtLink>

			<!-- Dropdown -->
			<div class="dropdown dropdown-end" v-if="false">
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
						<NuxtLink
							append
							:to="`/user/${user.username}`"
							class="justify-between"
						>
							Profile
						</NuxtLink>
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
