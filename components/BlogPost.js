import Link from "next/link";

export default function BlogPost({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="blog-card">
        <img className="blog-image" src={post.frontmatter.cover_image} alt="" />
        <div className="blog-info">
          <p className="blog-date">{post.frontmatter.date}</p>
          <h2 className="blog-title">{post.frontmatter.title}</h2>
          <h4 className="blog-excerpt">{post.frontmatter.excerpt}</h4>
        </div>
      </div>
    </Link>
  )
}