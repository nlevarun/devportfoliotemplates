import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Varun Venkatesh - Frontend Developer',
	description:
		'Varun Venkatesh is a data-driven problem solver specializing in law, policy, and finance. As a dual major in Applied Mathematics and Political Science at UC Berkeley, he leverages quantitative analysis and policy insights to create impactful solutions. Big on math, bigger on LeBron.',
	keywords: [
		'Applied Mathematics',
		'Political Science',
		'Data Analysis',
		'Policy Research',
		'AI',
		'Financial Modeling',
		'Economic Evaluation',
		'Impact Evaluation',
		'Basketball Analytics',
	],
	authors: [{ name: 'Varun Venkatesh' }],
	creator: 'Varun Venkatesh',
	openGraph: {
		title: 'Varun Venkatesh - Frontend Developer Portfolio',
		description: 'Varun Venkatesh is a data-driven problem solver specializing in law, policy, and finance. As a dual major in Applied Mathematics and Political Science at UC Berkeley, he leverages quantitative analysis and policy insights to create impactful solutions. Big on math, bigger on LeBron.',
		url: 'https://varunvenkatesh.com',
		siteName: 'Varun Venkatesh - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Varun Venkatesh - Frontend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
