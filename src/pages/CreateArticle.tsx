import { useEffect, useState } from "react";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import useAuth from "../stores/useAuth";
import { useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { axiosApi } from "../lib/axios";
import slugify from "slugify";

const MAX_FILE_SIZE: number = 10000000;
const ACCEPTED_IMAGE_TYPES: string[] = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/webp",
];

const formSchema = z.object({
  title: z.string("Invalid title").min(1, "Title cannot be empty"),
  author: z.string("Invalid author name").min(1, "Author name cannot be empty"),
  img: z
    .instanceof(FileList)
    .refine((files) => files[0]?.size != 0, {
      message: "Thumbnail cannot be empty",
    })
    .refine((files) => files[0]?.size <= MAX_FILE_SIZE, {
      message: "Max file size is 10MB.",
    })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files[0]?.type), {
      message: "Only .png, .jpg, .jpeg, and .webp files are supported.",
    }),
  description: z
    .string("Invalid description")
    .min(1, "Description cannot be empty"),
  content: z
    .string("Invalid content")
    .min(1, "Article content cannot be empty"),
});

type FormDataCreateBlog = z.infer<typeof formSchema>;

export default function CreateArticle() {
  const [isPending, setIsPending] = useState<boolean>(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataCreateBlog>({
    resolver: zodResolver(formSchema),
  });

  const handleCreate = async (values: FormDataCreateBlog) => {
    setIsPending(true);

    // upload thumbnail ke database
    const thumbFormData: FormData = new FormData();
    thumbFormData.append("file", values.img[0]);
    const thumbName = values.img[0].name;
    let thumbUrl: string = "";
    try {
      const response = await axiosApi.post(
        `/files/images/${thumbName}?overwrite=true`,
        thumbFormData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      // ambil URL thumbnail baru dari response body
      thumbUrl = response.data.fileURL;
    } catch (error) {
      console.log(error);
    }

    // post blog baru sesuai isian form
    try {
      await axiosApi.post("/data/Blogs", {
        title: values.title,
        slug: slugify(values.title, { lower: true }),
        author: values.author,
        thumbnail: thumbUrl,
        description: values.description,
        publishDate: Date.now(),
        content: values.content,
      });
      navigate("/articles");
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/unauthorized");
    }
  }, [user]);

  return (
    <div className="font-pjs">
      <Navbar />
      <div className="flex flex-col items-center my-8 gap-8">
        <h1 className="text-5xl font-extrabold tracking-wide">
          Create Article
        </h1>
      </div>
      <div className="flex justify-center-safe">
        <form
          onSubmit={handleSubmit(handleCreate)}
          className="flex flex-col gap-1.5"
        >
          <div>
            <input
              type="text"
              {...register("title")}
              placeholder="Title"
              className="border border-gray-400 rounded-md px-1 py-2 w-120 focus:outline-none"
            />
            {errors.title && (
              <p className="text-red-600">{errors.title.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              {...register("author")}
              placeholder="Author"
              className="border border-gray-400 rounded-md px-1 py-2 w-120 focus:outline-none"
            />
            {errors.author && (
              <p className="text-red-600">{errors.author.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              {...register("description")}
              placeholder="Description"
              className="border border-gray-400 rounded-md px-1 py-2 w-120 focus:outline-none"
            />
            {errors.description && (
              <p className="text-red-600">{errors.description.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex">
              <input
                type="file"
                {...register("img")}
                className="file:bg-[#5540dd] hover:file:bg-[#6377fc] file:px-3 file:py-2 file:rounded-md file:font-semibold file:text-white file:mr-2 cursor-pointer"
                accept="image/png, image/jpg, image/jpeg, image/webp"
              />
            </div>
            <p className="text-gray-400 text-xs">
              {"(.png, .jpg, .jpeg, and .webp supported. Max file size: 10MB)"}
            </p>
            {errors.img && (
              <p className="text-red-600">{errors.img.message?.toString()}</p>
            )}
          </div>
          <div>
            <textarea
              {...register("content")}
              placeholder="Content"
              className="border border-gray-400 rounded-md px-1 py-2 w-120 h-60 focus:outline-none"
            />
            {errors.content && (
              <p className="text-red-600">{errors.content.message}</p>
            )}
          </div>
          <div className="flex justify-center-safe mb-8">
            <button
              type="submit"
              disabled={isPending}
              className={`bg-[#5540dd] hover:bg-[#6377fc] px-3 py-2 rounded-md font-semibold text-white ${isPending ? "bg-gray-400 hover:bg-gray-400 cursor-not-allowed" : "cursor-pointer"}`}
            >
              {isPending ? "Processing" : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
