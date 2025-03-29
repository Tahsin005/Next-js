import BlogOverView from "@/components/blog-overview";

async function fetchListOfBlogs() {
    try {
        const apiResponse = await fetch('http://localhost:3000/api/get-blogs', {
            method: 'GET',
            cache: 'no-cache',
        })

        const result = await apiResponse.json();
        return result?.data;
    } catch (error) {

    }
}

const Blogs =  async () => {
    const blogList = await fetchListOfBlogs();
    console.log(blogList);
    return (
        <BlogOverView blogList={blogList} />
    )
}

export default Blogs