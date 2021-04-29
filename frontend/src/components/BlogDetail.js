import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
			<h2 className="title" style={{ fontFamily: "cursive" }}>
				{blog.title}
			</h2>
			<p
				className="author"
				style={{
					fontSize: 16,
					textDecoration: "text-muted",
					fontFamily: "cursive",
				}}
			>
				Author - {blog.author}
			</p>
			<center>
				<img
					height="450"
					width="700"
					src={blog.image}
					alt="thumbnail"
					style={{
						borderRadius: 2,
					}}
				/>
			</center>
			<h4>{blog.likes}</h4>
			<div className="mt-3 mb-3">
				<p style={{ fontFamily: "cursive", fontSize: 15 }}>
					{blog.full_content}
				</p>
			</div>
			<h6 className="text-muted mt-2" style={{ fontFamily: "cursive" }}>
				Rank - {blog.rank}
			</h6>

			<p style={{ fontFamily: "cursive" }}>Tags - {blog.tags}</p>

			<p className="lead mb-5">
				<button
					style={{
						height: 40,
						hover: PointerEvent,
						backgroundColor: "dodgerblue",
						border: "none",
					}}
				>
					<Link
						to="/blog/user/1"
						className="font-weight-bold"
						style={{
							textDecoration: "none",
							color: "white",
							fontFamily: "cursive",
							fontSize: 18,
						}}
					>
						Back to Blogs
					</Link>
				</button>
			</p>
		</div>
	);
};
export default BlogDetail;
