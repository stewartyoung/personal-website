import Layout from "../components/layout";
import PostLink from "../components/postLink";

const Blog = () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink title="Hello Next.js"/>
            <PostLink title="Backend programming with Next.js"/>
            <PostLink title="Deploy apps with Zeit"/>
        </ul>
    </Layout>
);

export default Blog;