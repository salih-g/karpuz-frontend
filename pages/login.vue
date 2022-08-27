<template>
	<div>
		<div class="hero min-h-screen text-gray-500">
			<!-- hero text -->
			<div class="hero-content flex-col lg:flex-row-reverse">
				<div class="text-center lg:text-left">
					<h1 class="text-5xl font-bold">Login now!</h1>
					<p class="py-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa
						magni dolorum sit quos rem nisi dolore tenetur vitae labore cumque
						officiis at, recusandae inventore quis perspiciatis maxime soluta!
						Esse!
					</p>
				</div>
				<!-- card -->
				<form
					class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white"
					@submit.prevent="handleLogin"
				>
					<div class="card-body">
						<!-- username -->
						<div class="form-control">
							<label class="label">
								<span class="label-text text-gray-500 font-bold">Username</span>
							</label>
							<input
								type="text"
								placeholder="karpuz"
								class="input input-bordered bg-gray-100 placeholder-gray-300 focus:bg-white focus:outline-none focus:border-red-400 focus:text-gray-900 font-bold"
								required
								v-model="user.username"
							/>
						</div>
						<!-- password -->
						<div class="form-control">
							<label class="label">
								<span class="label-text text-gray-500 font-bold">Password</span>
							</label>
							<input
								v-model="user.password"
								type="password"
								placeholder="Password"
								class="input input-bordered bg-gray-100 placeholder-gray-300 focus:bg-white focus:outline-none focus:border-red-400 focus:text-gray-900 font-bold"
								required
							/>
						</div>
						<div class="form-control mt-6">
							<button type="submit" class="btn btn-primary">Login</button>
						</div>
						<!-- Error -->
						<div>
							<small class="text-xs text-red-500">{{
								authStore.loginError?.message
							}}</small>
						</div>
						<!-- Footer -->
						<div class="text-gray-600 text-left">
							<small class="text-xs">New to Karpuz ?</small>
							<NuxtLink
								append
								to="/register"
								class="text-xs font-bold ml-1 text-primary"
								>Register.</NuxtLink
							>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useAuthStore } from '@/stores/auth.store';
	const authStore = useAuthStore();

	const user = reactive({
		username: '',
		password: '',
	});

	async function handleLogin() {
		await authStore.login({
			username: user.username,
			password: user.password,
		});

		if (authStore.loginError !== null) {
			setTimeout(() => {
				authStore.loginError = null;
			}, 2000);
		}
	}
</script>
