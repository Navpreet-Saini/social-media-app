import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";

export async function POST(request, { params }) {
  await dbConnect();
  const post = await Post.findByIdAndUpdate(
    params.id,
    { $inc: { like_count: 1 } },
    { new: true }
  );
  return Response.json(post, { status: 200 });
}
