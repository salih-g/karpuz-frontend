<template>
	<form
		class="h-screen overflow-hidden flex justify-center xl:mt-32 md:mt-32"
		@submit.prevent="handleRegister"
	>
		<div class="relative py-16">
			<div
				class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40"
			>
				<div class="m-auto">
					<div class="rounded-xl bg-white shadow-xl">
						<div class="p-6 sm:p-16">
							<!-- Header -->
							<div class="space-y-4">
								<img
									src="../assets/karpuz.png"
									loading="lazy"
									class="w-10"
									alt="karpuz logo"
								/>
								<h2 class="mb-8 text-2xl text-gray-600 font-bold">Register</h2>
							</div>
							<!-- Inputs -->
							<div class="mt-10 grid space-y-4">
								<div class="group h-12">
									<input
										type="text"
										class="w-full py-2 pl-4 pr-4 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-300 focus:bg-white focus:outline-none focus:border-red-400 focus:text-gray-900 focus:shadow-outline-blue"
										style="border-radius: 25px"
										placeholder="Username"
										v-model="user.username"
										required
									/>
								</div>
								<div class="group h-12">
									<input
										type="password"
										class="w-full py-2 px-4 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-300 focus:bg-white focus:outline-none focus:border-red-400 focus:text-gray-900 focus:shadow-outline-blue"
										style="border-radius: 25px"
										placeholder="Password"
										v-model="user.password"
										required
									/>
								</div>
								<div class="group h-12">
									<input
										type="password"
										class="w-full py-2 px-4 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-300 focus:bg-white focus:outline-none focus:border-red-400 focus:text-gray-900 focus:shadow-outline-blue"
										style="border-radius: 25px"
										placeholder="Repeat Password"
										v-model="user.repeatPassword"
										required
									/>
								</div>
								<div class="group h-12">
									<button
										type="submit"
										class="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center"
										to="/register"
									>
										Register
									</button>
								</div>
							</div>
							<div>
								<small class="text-xs text-red-500">{{
									authStore.error?.message
								}}</small>
							</div>
							<!-- Footer -->
							<div class="mt-5 space-y-4 text-gray-600 text-left">
								<small class="text-xs">Already have a acount ?</small>
								<router-link
									to="/login"
									class="text-xs font-bold ml-1 text-red-400"
									>Login.</router-link
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>

<script setup>
	import { ref } from 'vue';

	import { useAuthStore } from '@/stores/auth.store';
	const authStore = useAuthStore();

	const user = ref({
		username: '',
		password: '',
		repeatPassword: '',
	});

	async function handleRegister() {
		if (user.value.password !== user.value.repeatPassword) {
			user.value.password = '';
			user.value.repeatPassword = '';

			return (authStore.error = { message: "Password doesn't match " });
		}

		await authStore.register({
			username: user.value.username,
			password: user.value.password,
		});
	}
</script>

<style></style>
