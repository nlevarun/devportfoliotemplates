'use client';

import { motion } from 'framer-motion';

const skills = [
  { skill: 'Microsoft Office', level: 95 },
  { skill: 'Google Suite', level: 95 },
  { skill: 'Java', level: 90 },
  { skill: 'Python', level: 90 },
  { skill: 'R', level: 85 },
  { skill: 'Excel', level: 95 },
  { skill: 'Exploratory Data Analysis', level: 90 },
  { skill: 'Trend Analysis', level: 85 },
  { skill: 'Regulatory Compliance', level: 80 },
];

export default function SkillsSection() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-4xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Technical Skills
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{skills.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="space-y-2"
						>
							<div className="flex justify-between text-sm">
								<span>{item.skill}</span>
								<span>{item.level}%</span>
							</div>
							<div className="h-2 bg-gray-800 rounded-full overflow-hidden">
								<motion.div
									initial={{ width: 0 }}
									whileInView={{ width: `${item.level}%` }}
									viewport={{ once: true }}
									transition={{ duration: 1, ease: 'easeOut' }}
									className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
								/>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
