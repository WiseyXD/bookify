import { useState, useEffect } from "react";
export default function BookList() {
	const [isbn, setIsbn] = useState(null);
	const [price, setPrice] = useState(null);
	const [book, setBook] = useState("");
	const [author, setAuthor] = useState("");
	const [category, setCategory] = useState("");
	const [desc, setDesc] = useState("");
	return (
		<div>
			<section className="bg-white dark:bg-gray-900 min-h-screen">
				<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
					<h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
						Add a new product
					</h2>
					<form action="#">
						<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
							<div className="sm:col-span-2">
								<label
									htmlFor="name"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Book Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="Type product name"
									required
									onChange={(e) => setBook(e.target.value)}
								/>
							</div>
							<div className="w-full">
								<label
									htmlFor="brand"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Author
								</label>
								<input
									type="text"
									name="brand"
									id="brand"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="Product brand"
									onChange={(e) => setAuthor(e.target.value)}
									required
								/>
							</div>
							<div className="w-full">
								<label
									htmlFor="price"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Price
								</label>
								<input
									type="number"
									name="price"
									id="price"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="$2999"
									onChange={(e) => setPrice(e.target.value)}
									required
								/>
							</div>
							<div>
								<label
									htmlFor="category"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Category
								</label>
								<select
									id="category"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									onChange={(e) =>
										setCategory(e.target.value)
									}
								>
									<option selected="">Select category</option>
									<option value="TV">Horror</option>
									<option value="PC">Scienece Fiction</option>
									<option value="GA">Non Fiction</option>
									<option value="PH">Biography</option>
								</select>
							</div>
							<div>
								<label
									htmlFor="item-weight"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									ISBN Number
								</label>
								<input
									type="number"
									name="item-weight"
									id="item-weight"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="12"
									onChange={(e) => setIsbn(e.target.value)}
									required
								/>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="description"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Description
								</label>
								<textarea
									id="description"
									rows="8"
									className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="Your description here"
									onChange={(e) => setDesc(e.target.value)}
								></textarea>
							</div>
						</div>
						<button
							type="submit"
							className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
						>
							Add product
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
