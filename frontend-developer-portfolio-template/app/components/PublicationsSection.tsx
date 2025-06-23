'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const publications = [
  {
    title: 'The Global Playbook: How Athletes Are Used to Sway Political Voters',
    description: 'Berkeley Political Review · May 16, 2025',
    image: '/images/global-playbook.png',
    url: 'https://bpr.studentorg.berkeley.edu/2025/05/16/the-global-playbook-how-athletes-are-used-to-sway-political-voters/',
  },
  {
    title: 'The Shadow Fleet’s Hidden Hand: Russia’s Sabotage of Underwater Infrastructure',
    description: 'Berkeley Political Review · May 1, 2025',
    image: '/images/shadow-fleet.png',
    url: 'https://bpr.studentorg.berkeley.edu/2025/05/01/the-shadow-fleets-hidden-hand-russias-sabotage-of-underwater-infrastructure/',
  },
  // ...add other 13 publications similarly
];

export default function PublicationsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{publications.map((pub, index) => (
						<motion.a
							key={index}
							href={pub.url}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 block"
						>
							<div className="aspect-video relative overflow-hidden">
								<Image src={pub.image} alt={pub.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">{pub.title}</h3>
								<p className="text-gray-400 mb-4">{pub.description}</p>
							</div>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
}
