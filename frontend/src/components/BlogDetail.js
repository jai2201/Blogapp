import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollButton from "./ScrollButton";

const BlogDetail = (props) => {
	const [blog, setBlog] = useState({});

	useEffect(() => {
		const slug = props.match.params.pk;

		const fetchData = async () => {
			try {
				const res = await axios.get(
					`${process.env.REACT_APP_API_URL}/blog/${slug}`
				);
				setBlog(res.data);
			} catch (error) {}
		};
		fetchData();
	}, [props.match.params.pk]);

	console.log(props.match.params);

	return (
		<div className="container mt-3">
			<h1
				className="title"
				style={{
					fontFamily: "Girassol, cursive cursive",
					color: "whitesmoke",
					fontSize: 40,
					fontStretch: "condensed",
				}}
			>
				{blog.title}
			</h1>
			<pre
				className="author"
				style={{
					fontSize: 20,
					textDecoration: "text-muted",
					fontFamily: "Galdeano, sans-serif",
					color: "whitesmoke",
					marginLeft: 4,
				}}
			>
				Author - <b>{blog.author}</b>
				<pre>
					{blog.date} {blog.month}
				</pre>
			</pre>
			<div className="image">
				<center>
					<img
						src={blog.image}
						alt="thumbnail"
						style={{
							borderRadius: 2,
							marginLeft: 4,
							height: 500,
							width: 1110,
						}}
					/>
				</center>
			</div>
			<div
				className="mt-3 mb-3"
				style={{
					backgroundColor: "white",
					opacity: 0.5,
					marginLeft: 4,
					borderRadius: 4,
				}}
			>
				<p
					style={{
						fontFamily: "Galdeano, sans-serif",
						fontSize: 20,
						color: "black",
						marginLeft: 4,
						padding: 15,
					}}
				>
					{blog.full_content}
				</p>
			</div>
			<h6
				className=" mt-2"
				style={{
					fontFamily: " Galdeano, sans-serif",
					color: "whitesmoke",
					fontSize: 22,
					marginLeft: 4,
				}}
			>
				Rank - {blog.rank}
			</h6>
			<p
				style={{
					fontSize: 22,
					color: "whitesmoke",
					fontFamily: "Galdeano, sans-serif",
					marginLeft: 4,
				}}
			>
				Tags -
				<span
					style={{
						fontFamily: "Galdeano, sans-serif",
						color: "whitesmoke",
						backgroundColor: "gray",
						fontSize: 18,
						marginLeft: 4,
						padding: 4,
					}}
				>
					{blog.tag1}
				</span>
				<span
					style={{
						fontFamily: "Galdeano, sans-serif",
						color: "whitesmoke",
						backgroundColor: "gray",
						fontSize: 18,
						marginLeft: 4,
						padding: 4,
					}}
				>
					{blog.tag2}
				</span>
				<span
					style={{
						fontFamily: "Galdeano, sans-serif",
						color: "whitesmoke",
						backgroundColor: "gray",
						fontSize: 18,
						marginLeft: 4,
						padding: 4,
					}}
				>
					{blog.tag3}
				</span>
			</p>

			<p className="lead mb-5">
				<button
					class="button button1"
					style={{
						backgroundColor: "whitesmoke",
						border: 0,
						color: "white",
						padding: 8,
						textAlign: "center",
						textDecoration: "none",
						margin: 4,
						cursor: "pointer",
						marginLeft: 4,
					}}
				>
					<Link
						to="/blog/"
						className="font-weight-bold"
						style={{
							textDecoration: "none",
							color: "black",
							fontFamily: "Galdeano, sans-serif",
							fontSize: 18,
						}}
					>
						Back to Blogs
					</Link>
				</button>
			</p>
			<ScrollButton />
		</div>
	);
};
export default BlogDetail;
