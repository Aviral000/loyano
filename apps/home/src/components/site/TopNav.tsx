"use client";

import * as React from "react";
import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { NAV } from "./nav/data";

export default function TopNav() {
	const [hidden, setHidden] = React.useState(false);
	const scrollY = React.useRef(0);

	React.useEffect(() => {
		const onScroll = () => {
			const current = window.scrollY;
			setHidden(current > scrollY.current);
			scrollY.current = current;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className={`sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
			<div className="container mx-auto flex h-14 items-center justify-between">
				<Link href="/" className="font-semibold tracking-tight">
					LOYANO
				</Link>
				<NavigationMenu viewport={false}>
					<NavigationMenuList>
						{NAV.map((main) => (
							<NavigationMenuItem key={main.label}>
								<NavigationMenuTrigger>{main.label}</NavigationMenuTrigger>
								<NavigationMenuContent className="left-auto right-0">
									<ul className="max-w-[min(90vw,800px)] p-3 grid gap-2 md:w-[520px] lg:w-[720px] lg:grid-cols-[.75fr_1fr]">
										<li className="row-span-3">
											<NavigationMenuLink asChild>
												<Link
													className="flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-hidden select-none focus:shadow-md relative overflow-hidden"
													href={main.href as any}
												>
													{main.featured?.image ? (
														<>
															<img 
																src={main.featured.image} 
																alt={main.featured.title}
																className="absolute inset-0 w-full h-full object-cover"
															/>
															<div className="absolute inset-0 bg-black/40"></div>
															<div className="relative z-10 text-white">
																<div className="mb-2 text-lg font-medium">{main.featured.title}</div>
																<p className="text-sm leading-tight text-white/90">
																	{main.featured.description}
																</p>
															</div>
														</>
													) : (
														<>
															<div className="absolute inset-0 from-gray-50 to-gray-100 bg-gradient-to-b"></div>
															<div className="relative z-10">
																<div className="mt-4 mb-2 text-lg font-medium">{main.featured?.title ?? main.label}</div>
																<p className="text-sm leading-tight text-gray-600">
																	{main.featured?.description ?? main.description}
																</p>
															</div>
														</>
													)}
												</Link>
											</NavigationMenuLink>
										</li>
										{main.sub.map((cat) => (
											<li key={cat.title}>
												<NavigationMenuLink asChild>
													<Link href={cat.href as any}>
														<div className="font-medium">{cat.title}</div>
														{cat.description && (
															<div className="text-sm text-gray-600">{cat.description}</div>
														)}
													</Link>
												</NavigationMenuLink>
												{cat.types && cat.types.length > 0 && (
													<ul className="mt-2 grid grid-cols-2 gap-2">
														{cat.types.map((t) => (
															<li key={t.label} className="rounded-md p-2 hover:bg-gray-50">
																<Link href={t.href as any} className="block text-sm text-gray-700">
																	{t.label}
																</Link>
															</li>
														))}
													</ul>
												)}
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						))}
						<NavigationMenuItem>
							<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
								<Link href="/">All</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	);
} 