import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiYoutube } from "react-icons/fi";
import { TbBrandSteam } from "react-icons/tb";

const socials = [
	{
		name: "GitHub",
		link: "https://github.com/Wilzzu",
		image: (
			<FiGithub
				size={48}
				strokeWidth={1.2}
				className="opacity-40 group-hover:opacity-80 duration-500"
			/>
		),
	},
	{
		name: "Twitter",
		link: "https://twitter.com/Wilzzu",
		image: (
			<FiTwitter
				size={48}
				strokeWidth={1.2}
				className="opacity-40 group-hover:opacity-80 duration-500"
			/>
		),
	},
	{
		name: "YouTube",
		link: "https://www.youtube.com/@thewilzzu",
		image: (
			<FiYoutube
				size={52}
				strokeWidth={1.2}
				className="opacity-40 group-hover:opacity-80 duration-500"
			/>
		),
	},
	{
		name: "Steam",
		link: "https://steamcommunity.com/id/wilzzu/",
		image: (
			<TbBrandSteam
				size={52}
				strokeWidth={1.2}
				className="opacity-40 group-hover:opacity-80 duration-500 social-stroke"
			/>
		),
	},
];

// Animation variants
const container = {
	visible: {
		transition: {
			staggerChildren: 0.12,
		},
	},
	hidden: {},
};

const item = {
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			y: { type: "tween", duration: 1, ease: "easeOut" },
			opacity: {
				duration: 2,
				ease: "easeInOut",
			},
		},
	},
	hidden: {
		y: -20,
		opacity: 0,
	},
};

const Socials = () => {
	return (
		<motion.ul
			initial="hidden"
			animate="visible"
			variants={container}
			className="h-14 w-full flex justify-between">
			{socials.map((social) => (
				<motion.li
					key={social.name}
					className="group relative w-14 h-14 flex flex-col items-center"
					variants={item}>
					{/* Social logo */}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={social.link}
						className="h-full w-full flex items-center justify-center z-10">
						{social.image}
						{/* Tooltip */}
						<span className="absolute -bottom-3 scale-75 px-3 py-2 bg-primary rounded-lg text-sm shadow-xl opacity-0 group-hover:opacity-100 group-hover:-bottom-9 group-hover:scale-100 duration-300 z-0">
							{social.name}
						</span>
					</a>
				</motion.li>
			))}
		</motion.ul>
	);
};

export default Socials;
