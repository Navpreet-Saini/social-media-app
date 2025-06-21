import cloudinary from "@/lib/cloudinary";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file) {
      return Response.json({ error: "No file uploaded" }, { status: 400 });
    }
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const upload = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "post_images" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });

    return Response.json({ url: upload.secure_url }, { status: 200 });
  } catch (error) {
    console.error("Post image upload error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
