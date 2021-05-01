import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class NewBlogForm extends Component {
	state = {
		author: "",
		title: "",
		small_desc: "",
		full_content: "",
		rank: "",
		tag1: "",
		tag2: "",
		tag3: "",
		image: null,
		date: "",
		month: "",
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleImageChange = (e) => {
		this.setState({
			image: e.target.files[0],
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		let form_data = new FormData();
		form_data.append("image", this.state.image, this.state.image.name);
		form_data.append("title", this.state.title);
		form_data.append("author", this.state.author);
		form_data.append("small_desc", this.state.small_desc);
		form_data.append("full_content", this.state.full_content);
		form_data.append("rank", this.state.rank);
		form_data.append("date", this.state.date);
		form_data.append("month", this.state.month);
		form_data.append("tag1", this.state.tag1);
		form_data.append("tag2", this.state.tag2);
		form_data.append("tag3", this.state.tag3);

		let url = "http://127.0.0.1:8000/blog/";
		axios
			.post(url, form_data, {
				headers: {
					"content-type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
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
						marginLeft: 1100,
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
				<center>
					<div
						className="Blog"
						style={{
							backgroundColor: "whitesmoke",
							width: 550,
							height: 730,
							borderRadius: 10,
							marginBottom: 30,
						}}
					>
						<p style={{ fontSize: 35, fontFamily: "Galdeano, sans-serif" }}>
							Post Your Blog
						</p>
						<form onSubmit={this.handleSubmit}>
							<p>
								<input
									type="text"
									placeholder="Author"
									id="author"
									value={this.state.author}
									onChange={this.handleChange}
									required
									style={{
										marginTop: 20,
										width: 500,
										height: 38,
										borderRadius: 10,
										border: 0,
										backgroundColor: "#a5b1c2",
										opacity: 0.7,
									}}
								/>
							</p>
							<p>
								<input
									type="text"
									placeholder="Title"
									id="title"
									value={this.state.title}
									onChange={this.handleChange}
									required
									style={{
										width: 500,
										height: 38,
										borderRadius: 10,
										border: 0,
										backgroundColor: "#a5b1c2",
										opacity: 0.7,
									}}
								/>
							</p>
							<p>
								<input
									type="text"
									placeholder="Small Description"
									id="small_desc"
									value={this.state.small_desc}
									onChange={this.handleChange}
									required
									style={{
										width: 500,
										height: 38,
										borderRadius: 10,
										border: 0,
										backgroundColor: "#a5b1c2",
										opacity: 0.7,
									}}
								/>
							</p>
							<p>
								<input
									type="text"
									placeholder="Full Content"
									id="full_content"
									value={this.state.full_content}
									onChange={this.handleChange}
									required
									style={{
										width: 500,
										height: 38,
										borderRadius: 10,
										border: 0,
										backgroundColor: "#a5b1c2",
										opacity: 0.7,
									}}
								/>
							</p>
							<p>
								<input
									type="text"
									placeholder="Rank"
									id="rank"
									value={this.state.rank}
									onChange={this.handleChange}
									required
									style={{
										width: 500,
										height: 38,
										borderRadius: 10,
										border: 0,
										backgroundColor: "#a5b1c2",
										opacity: 0.7,
									}}
								/>
							</p>
							<p>
								<input
									type="text"
									placeholder="Date"
									id="date"
									value={this.state.date}
									onChange={this.handleChange}
									required
									style={{
										width: 500,
										height: 38,
										borderRadius: 10,
										border: 0,
										backgroundColor: "#a5b1c2",
										opacity: 0.7,
									}}
								/>
							</p>
							<p>
								<input
									type="text"
									placeholder="Month"
									id="month"
									value={this.state.month}
									onChange={this.handleChange}
									required
									style={{
										width: 500,
										height: 38,
										borderRadius: 10,
										border: 0,
										backgroundColor: "#a5b1c2",
										opacity: 0.7,
									}}
								/>
							</p>
							<p>
								<input
									type="text"
									placeholder="Tag1"
									id="tag1"
									value={this.state.tag1}
									onChange={this.handleChange}
									required
									style={{
										width: 500,
										height: 38,
										borderRadius: 10,
										border: 0,
										backgroundColor: "#a5b1c2",
										opacity: 0.7,
									}}
								/>
							</p>
							<p>
								<input
									type="text"
									placeholder="Tag2"
									id="tag2"
									value={this.state.tag2}
									onChange={this.handleChange}
									required
									style={{
										width: 500,
										height: 38,
										borderRadius: 10,
										border: 0,
										backgroundColor: "#a5b1c2",
										opacity: 0.7,
									}}
								/>
							</p>
							<p>
								<input
									type="text"
									placeholder="Tag3"
									id="tag3"
									value={this.state.tag3}
									onChange={this.handleChange}
									required
									style={{
										width: 500,
										height: 38,
										borderRadius: 10,
										border: 0,
										backgroundColor: "#a5b1c2",
										opacity: 0.7,
									}}
								/>
							</p>
							{/* <p>
						<input
							type="text"
							placeholder="tags"
							id="tags"
							value={this.state.tags}
							onChange={this.handleChange}
							required
						/>
					</p> */}

							<p
								style={{
									textAlign: "center",
									fontFamily: "Galdeano, sans-serif",
									fontSize: 20,
								}}
							>
								Image:
								<input
									type="file"
									id="image"
									accept="image/*"
									onChange={this.handleImageChange}
									required
								/>
							</p>
							<button
								type="submit"
								style={{
									borderRadius: 10,
									height: 40,
									width: 100,
									border: 0,
									backgroundColor: "black",
									color: "whitesmoke",
									fontFamily: "Galdeano, sans-serif",
									fontSize: 20,
								}}
							>
								Add Blog
							</button>
						</form>
					</div>
				</center>
			</div>
		);
	}
}

export default NewBlogForm;
