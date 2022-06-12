// index.js
import Link from "next/link";
export default function Index() {
}
export async function getServerSideProps({ res, params }) {
    res.statusCode = 301
    res.setHeader('Location', `https://pr0xy.cc`) // Replace <link> with your url link
    return {props: {}}
}
