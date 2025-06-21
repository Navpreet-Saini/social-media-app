import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";

// POST: Create a new post
export async function POST(request) {
  const { content, image_url } = await request.json();
  await dbConnect();
  const post = await Post.create({
    content,
    image_url,
    like_count: 0,
    createdAt: new Date(),
  });
  return Response.json(post, { status: 201 });
}

// GET: Get all posts
export async function GET() {
  await dbConnect();
  const posts = await Post.find({}).sort({ createdAt: -1 });
  return Response.json(posts, { status: 200 });
}
