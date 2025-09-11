import type { NavConfig } from "./types";

export const NAV: NavConfig = [
	{
		label: "Newly Arrived",
		href: "/",
		description: "Fresh drops across categories",
		featured: {
			title: "Just In",
			description: "Discover the latest arrivals for this season.",
			href: "/",
			image: "https://static.nextdirect.com/resource/blob/998114/c087b788cdabef39d18a6bb72c8bf4b1/date-hero-mens-mb-data.jpg"
		},
		sub: [
			{ title: "Trending", href: "/", types: [
				{ label: "Best Sellers", href: "/" },
				{ label: "Editor’s Picks", href: "/" },
				{ label: "Limited Edition", href: "/" }
			] },
			{ title: "Clothing", href: "/", types: [
				{ label: "Outerwear", href: "/" },
				{ label: "Tops", href: "/" },
				{ label: "Bottoms", href: "/" },
				{ label: "Sets", href: "/" }
			] },
			{ title: "Footwear", href: "/", types: [
				{ label: "Sneakers", href: "/" },
				{ label: "Slides", href: "/" },
				{ label: "Boots", href: "/" }
			] },
			{ title: "Accessories", href: "/", types: [
				{ label: "Wearables", href: "/" },
				{ label: "Bags", href: "/" },
				{ label: "Caps & Hats", href: "/" }
			] }
		]
	},
	{
		label: "Women",
		href: "/",
		description: "Active, lifestyle and essentials",
		featured: {
			title: "Women's Spotlight",
			description: "Curated outfits and collections.",
			href: "/",
			image: "/images/women-spotlight.jpg"
		},
		sub: [
			{ title: "Clothing", href: "/", types: [
				{ label: "Tops", href: "/" },
				{ label: "Sports Bras", href: "/" },
				{ label: "Leggings", href: "/" },
				{ label: "Jackets", href: "/" }
			] },
			{ title: "Footwear", href: "/", types: [
				{ label: "Running", href: "/" },
				{ label: "Training", href: "/" },
				{ label: "Lifestyle", href: "/" }
			] },
			{ title: "Accessories", href: "/", types: [
				{ label: "Wearables", href: "/" },
				{ label: "Socks", href: "/" },
				{ label: "Bags", href: "/" }
			] },
			{ title: "Collections", href: "/", types: [
				{ label: "Studio", href: "/" },
				{ label: "Essentials", href: "/" },
				{ label: "Outdoor", href: "/" }
			] }
		]
	},
	{
		label: "Men",
		href: "/",
		description: "Performance and street-ready",
		featured: {
			title: "Men's Essentials",
			description: "Daily staples and performance gear.",
			href: "/",
			image: "/images/Summer-mens.jpg"
		},
		sub: [
			{ title: "Clothing", href: "/", types: [
				{ label: "T-Shirts", href: "/" },
				{ label: "Shirts", href: "/" },
				{ label: "Shorts", href: "/" },
				{ label: "Hoodies", href: "/" }
			] },
			{ title: "Footwear", href: "/", types: [
				{ label: "Sneakers", href: "/" },
				{ label: "Slides", href: "/" },
				{ label: "Boots", href: "/" }
			] },
			{ title: "Accessories", href: "/", types: [
				{ label: "Wearables", href: "/" },
				{ label: "Hats", href: "/" },
				{ label: "Bags", href: "/" }
			] },
			{ title: "Collections", href: "/", types: [
				{ label: "Core", href: "/" },
				{ label: "Athletics", href: "/" },
				{ label: "Urban", href: "/" }
			] }
		]
	},
	{
		label: "Kids",
		href: "/",
		description: "For play and school",
		featured: {
			title: "Kids' Picks",
			description: "Easy outfits and comfy footwear.",
			href: "/",
			image: "/images/kids-picks.jpg"
		},
		sub: [
			{ title: "Clothing", href: "/", types: [
				{ label: "Tops", href: "/" },
				{ label: "Bottoms", href: "/" },
				{ label: "Outerwear", href: "/" }
			] },
			{ title: "Footwear", href: "/", types: [
				{ label: "School", href: "/" },
				{ label: "Play", href: "/" }
			] },
			{ title: "Accessories", href: "/", types: [
				{ label: "Backpacks", href: "/" },
				{ label: "Caps", href: "/" }
			] },
			{ title: "Age", href: "/", types: [
				{ label: "Baby", href: "/" },
				{ label: "Toddler", href: "/" },
				{ label: "Junior", href: "/" }
			] }
		]
	},
	{
		label: "Sale",
		href: "/",
		description: "Discounts across categories",
		featured: {
			title: "Extra 20% Off",
			description: "Select items only.",
			href: "/",
			image: "/images/sale-banner.jpg"
		},
		sub: [
			{ title: "Men", href: "/", types: [
				{ label: "Clothing", href: "/" },
				{ label: "Footwear", href: "/" }
			] },
			{ title: "Women", href: "/", types: [
				{ label: "Clothing", href: "/" },
				{ label: "Footwear", href: "/" }
			] },
			{ title: "Kids", href: "/", types: [
				{ label: "Clothing", href: "/" },
				{ label: "Footwear", href: "/" }
			] },
			{ title: "Accessories", href: "/", types: [
				{ label: "Wearables", href: "/" },
				{ label: "Bags", href: "/" }
			] }
		]
	}
]; 