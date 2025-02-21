import { useEffect, useState } from "react";
import { useRandomQuote } from "../hooks";
interface Quote {
	text: string;
	author: string;
}

export default function Quote() {
	const [quote, setQuote] = useState<Quote | null>();

	useEffect(() => {
		const fetchQuote = async () => {
			try {
				const randomQuote = await useRandomQuote();
				if (randomQuote) setQuote(randomQuote);
			} catch (error) {
				console.error("Error fetching quote:", error);
			}
		};

		fetchQuote();
	}, []);
	return (
		<div className="flex items-center justify-center h-screen text-3xl font-extrabold bg-slate-200">
			<div className="w-3/4">
				{quote ? (
					<>
						<div>"{quote.text}"</div>
						<div className="mt-4 text-2xl font-semibold">
							{quote.author}
						</div>
					</>
				) : (
					<div>Loading...</div>
				)}
			</div>
		</div>
	);
}