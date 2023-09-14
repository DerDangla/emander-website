import React from "react";
import Link from 'next/link';
import 'font-awesome/css/font-awesome.min.css';
//import { Envelope, Linkedin, Medium, Twitter } from "../icons";

type FooterProps = {
	contactMeLinks: string[];
};

export const Footer = () => {
	return (
		<footer className="py-1">
			<div className="container mx-auto ">
				<div className="grid grid-cols-3 items-center ">

					<div className="flex justify-start space-x-4">
						<Link href="https://www.facebook.com">
							<i className="fa fa-linkedin" aria-hidden="true"></i>
						</Link>
						<Link href="https://www.twitter.com">
							<i className="fa fa-github" aria-hidden="true"></i>
						</Link>
						<Link href="https://www.instagram.com">
							<i className="fa fa-instagram" aria-hidden="true"></i>
						</Link>
					</div>

					<div className="flex justify-center">
						<img src="/next.svg" alt="React Logo" className="w-16 h-16"/>
					</div>

					<div className="flex justify-end text-right grid grid-rows-2">
						<p>© Emander Dangla 2023</p>
						<p>Inspired by Classical Art Memes :)</p>
					</div>

				</div>
			</div>
		</footer>
	);
};