import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { name, username, email, password } = await request.json();
  await dbConnect();
  const existing = await User.findOne({ email });
  if (existing) return Response.json({ error: "Email already in use" }, { status: 409 });
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ name, username, email, password: hashed });
  await user.save();
  return Response.json({ message: "User created" }, { status: 201 });
}
