import LinkNextJS from "next/link";
// import Link from "antd/es/typography/Link";

interface Props {
	children: JSX.Element;
	href: string;
}

export default function BaseLink({ children, href }: Props) {
	return (
		<LinkNextJS scroll={false} href={href}>
			<>{children}</>
		</LinkNextJS>
	);

	// const token =
	// 	typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

	// if (token !== null)
	// 	return (
	// 		<LinkNextJS scroll={false} href={href}>
	// 			{children}
	// 		</LinkNextJS>
	// 	);

	// return <Link href={href}>{children}</Link>;
}
