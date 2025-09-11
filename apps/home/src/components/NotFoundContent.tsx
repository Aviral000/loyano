"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Search } from "lucide-react";

export default function NotFoundContent() {
	return (
		<main className="relative min-h-[100svh] overflow-hidden bg-white text-gray-900">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_40%)]"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:36px_36px]"
			/>

			<section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 py-20">
				<div className="mx-auto w-full max-w-2xl">
					<div className="relative rounded-2xl border border-gray-200 bg-white/70 p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur">
						<div className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-inset ring-white/40" />
						<p className="text-xs uppercase tracking-widest text-gray-500">Error</p>
						<h1 className="mt-2 text-5xl font-black tracking-tight md:text-7xl">404</h1>
						<p className="mt-3 text-base leading-relaxed text-gray-600 md:text-lg">
							The page you are looking for doesn’t exist or was moved.
						</p>

						<div className="mt-8 flex flex-wrap items-center gap-3">
							<Button asChild className="gap-2">
								<Link href="/">
									<Home className="h-4 w-4" />
									Go home
								</Link>
							</Button>
							<Button asChild variant="secondary" className="gap-2">
								<Link href="/">
									<Search className="h-4 w-4" />
									Search site
								</Link>
							</Button>
							<a
								href="https://loyano.example"
								target="_blank"
								rel="noreferrer"
								className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 underline-offset-4 hover:underline"
							>
								Contact support
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
							</a>
						</div>
					</div>

					<div className="pointer-events-none mt-10 select-none text-center text-[10rem] font-black leading-none text-gray-200 md:text-[14rem]">
						404
					</div>
				</div>
			</section>
		</main>
	);
} 