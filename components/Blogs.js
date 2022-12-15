export default function Blogs({ currentPosts }) {
  return (
    <div className="main-block" id="blogs">
      <h2>My Blog.</h2>
      <div className="posts-container">
        {currentPosts.map((post, index) => (
          <h3>{post.frontmatter.title}</h3>
        ))}
      </div>
    </div>
  )
}