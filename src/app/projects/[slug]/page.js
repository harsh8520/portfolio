export default async function ProjectDetail({ params }) {
    const slug = await params
    return (
        <main>
            <h1>Project Detail</h1>

            <p>Slug: {slug.slug}</p>
        </main>
    );
}