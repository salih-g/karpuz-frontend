<template>
	<div>
		<div class="hero min-h-screen text-gray-500">
			<!-- hero text -->
			<div class="hero-content flex-col lg:flex-row-reverse">
				<div class="text-center lg:text-left">
					<h1 class="text-5xl font-bold">Register now!</h1>
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
					@submit.prevent="handleRegister"
				>
					<div class="card-body">
						<!-- email -->
						<div class="form-control">
							<label class="label">
								<span class="label-text text-gray-500 font-bold">Email</span>
							</label>
							<input
								type="email"
								placeholder="me@karpuz.com"
								v-model="user.email"
								class="input input-bordered bg-gray-100 placeholder-gray-300 focus:bg-white focus:outline-none focus:border-red-400 focus:text-gray-900 font-bold"
								required
							/>
						</div>
						<!-- username -->
						<div class="form-control">
							<label class="label">
								<span class="label-text text-gray-500 font-bold">Username</span>
							</label>

							<input
								type="text"
								placeholder="karpuz"
								v-model="user.username"
								class="input input-bordered bg-gray-100 placeholder-gray-300 focus:bg-white focus:outline-none focus:border-red-400 focus:text-gray-900 font-bold"
								required
							/>
						</div>
						<!-- password -->
						<div class="form-control">
							<label class="label">
								<span class="label-text text-gray-500 font-bold">Password</span>
							</label>
							<input
								type="password"
								placeholder="Password"
								v-model="user.password"
								class="input input-bordered bg-gray-100 placeholder-gray-300 focus:bg-white focus:outline-none focus:border-red-400 focus:text-gray-900 font-bold"
								required
							/>
						</div>
						<!-- repeat password -->
						<div class="form-control">
							<input
								type="password"
								placeholder="Repeat Password"
								v-model="user.repeatpassword"
								class="input input-bordered bg-gray-100 placeholder-gray-300 focus:bg-white focus:outline-none focus:border-red-400 focus:text-gray-900 font-bold"
								required
							/>
						</div>
						<!-- submit button -->
						<div class="form-control mt-6">
							<button type="submit" class="btn btn-primary">Register</button>
						</div>
						<!-- Error -->
						<div>
							<small class="text-xs text-red-500">{{
								authStore.registerError?.message
							}}</small>
						</div>
						<!-- Footer -->
						<div class="text-gray-600 text-left">
							<small class="text-xs">Already have an account ?</small>
							<NuxtLink
								append
								to="/login"
								class="text-xs font-bold ml-1 text-primary"
								>Login.</NuxtLink
							>
						</div>
					</div>
					<pre>{{ authStore.user }} </pre>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useAuthStore } from '@/stores/auth.store';
	const authStore = useAuthStore();

	const user = reactive({
		email: '',
		username: '',
		password: '',
		repeatpassword: '',
	});

	async function handleRegister() {
		if (user.password !== user.repeatpassword) {
			user.password = '';
			user.repeatpassword = '';

			authStore.registerError = { message: "Password doesn't match" };
			return setTimeout(() => {
				authStore.registerError = null;
			}, 2000);
		}

		await authStore.register({
			email: user.email,
			username: user.username,
			password: user.password,
		});

		authStore.registerError = null;
	}
</script>
