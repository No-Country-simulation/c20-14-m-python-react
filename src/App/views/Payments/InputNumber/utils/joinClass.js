export const joinClass = classNames => {
	const validClasses = classNames.filter(Boolean);
	const finalClass = validClasses.join(" ");
	return finalClass;
};
