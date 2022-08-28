<template>
	<nav class="navbar bg-white h-10" id="navbar">
		<!-- Logo -->
		<div class="flex-1">
			<NuxtLink to="/" append class="btn btn-ghost normal-case text-xl">
				<img src="../assets/karpuz.png" class="mr-3 h-6" alt="Karpuz Logo" />
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
			<div v-if="!user">
				<NuxtLink
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
					append
					type="button"
					class="btn btn-primary btn-outline capitalize"
					to="/register"
				>
					Register
				</NuxtLink>
			</div>

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
	import { storeToRefs } from 'pinia';
	import { useAuthStore } from '@/stores/auth.store';

	const authStore = useAuthStore();
	const { user } = storeToRefs(authStore);

	async function handleLogout() {
		authStore.logout();
	}
</script>

<style scoped></style>
