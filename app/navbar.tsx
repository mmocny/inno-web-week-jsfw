import Link from "next/link";

export default function() {
	return (
		<nav>
          <ul>
            <li><Link href="./browser">Browser Component</Link></li>
            <li><Link href="./client">Client Component</Link></li>
            { [1,2,3].map((i) => 
            <li><Link href={`/other/${i}`}>RSC Child {i}</Link></li>
            )}
          </ul>
        </nav>
	);
}