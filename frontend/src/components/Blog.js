import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const res = await axios.get(
					`${process.env.REACT_APP_API_URL}/blog/user/1`
				);
				setBlogs(res.data);
			} catch (error) {}
		};

		fetchBlogs();
	}, []);

	const getBlogs = () => {
		let list = [];
		let result = [];

		blogs.map((blogPost) => {
			return list.push(
				<div
					className="row g-0 rounded overflow-hidden flex-md-row mb-0  h-md position-relative"
					style={{ boxShadow: " 10px 10px 10px gray" }}
				>
					<div
						className="col p-3 d-flex flex-column position-static "
						style={{ backgroundColor: "whitesmoke" }}
					>
						<h3 className="mb-0" style={{ fontFamily: "Lobster, cursive" }}>
							{blogPost.title}
						</h3>
						<p
							className="card-text mb-auto text-muted"
							style={{
								fontSize: 17,
								marginLeft: 2,
								marginTop: 5,
								fontFamily: "Galdeano, sans-serif",
							}}
						>
							{blogPost.small_desc}
							<Link
								to={`/blog/${blogPost.id}`}
								style={{
									textDecoration: "none",
									color: "#60a3bc",
									fontFamily: "Galdeano, sans-serif",
								}}
							>
								Read More
							</Link>
						</p>
						<p
							className="card-text mb-auto"
							style={{ marginLeft: 2, fontFamily: "Galdeano, sans-serif" }}
						>
							By - <b> {blogPost.author}</b>
						</p>
						<p
							className="card-text mb-auto"
							style={{ marginLeft: 2, fontFamily: "Galdeano, sans-serif" }}
						>
							{blogPost.date} {blogPost.month}
						</p>
					</div>
					<div className="col-auto d-none d-lg-block">
						<img
							width="170"
							height="170"
							src={blogPost.image}
							alt="thumbnail"
						/>
					</div>
				</div>
			);
		});

		for (let i = 0; i < list.length; i += 2) {
			result.push(
				<div key={i} className="row mb-0">
					<div className="col-md-6 p-4">{list[i]}</div>
					<div className="col-md-6 p-4">{list[i + 1] ? list[i + 1] : null}</div>
				</div>
			);
		}

		return result;
	};

	return <div className="container mt-3">{getBlogs()}</div>;
};

export default Blog;
