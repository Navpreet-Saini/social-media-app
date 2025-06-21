import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";

// Edit
export async function PUT(request, { params }) {
  const { content, image_url } = await request.json();
  await dbConnect();
  const updated = await Post.findByIdAndUpdate(
    params.id,
    { content, image_url },
    { new: true }
  );
  return Response.json(updated, { status: 200 });
}

// Delete
export async function DELETE(request, { params }) {
  await dbConnect();
  await Post.findByIdAndDelete(params.id);
  return Response.json({ message: "Post deleted" }, { status: 200 });
}
