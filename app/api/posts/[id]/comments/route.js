import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";

export async function POST(request, { params }) {
  const { comment, author } = await request.json();
  await dbConnect();
  const updatedPost = await Post.findByIdAndUpdate(
    params.id,
    { $push: { comments: { comment, author, createdAt: new Date() } } },
    { new: true }
  );
  return Response.json(updatedPost, { status: 201 });
}
