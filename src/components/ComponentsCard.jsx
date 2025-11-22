const ComponentsCard = ({ heading, content }) => {
	return (
		<div className="flex flex-col items-center rounded-lg min-h-[240px] p-4 shadow-md bg-gradient-to-br from-green-100 to-white border border-green-400">
			<h3 className="text-xl font-semibold text-green-700 mb-2 text-center">
				{heading}
			</h3>
			<p className="text-gray-700 text-md">
				{content}
			</p>
		</div>
	);
};
export default ComponentsCard;
