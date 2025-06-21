import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { name, username, bio, profile_picture } = await request.json();
    await dbConnect();
    const user = await User.findOneAndUpdate(
      { email: session.user.email },
      { name, username, bio, profile_picture },
      { new: true }
    );
    return Response.json({ message: "Profile updated", user }, { status: 200 });
  } catch (error) {
    console.error("Profile update error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
