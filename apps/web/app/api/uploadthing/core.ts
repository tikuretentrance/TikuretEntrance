import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { getAuth } from "@clerk/nextjs/server";


const f = createUploadthing();

export const ourFileRouter = {
    paymentProof: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 1
        },
    })
        .onUploadComplete(async ({ metadata, file }) => {
            const userId = (metadata as any).userId;
            console.log("Upload complete for userId:", userId);
            console.log("file url", file.ufsUrl);
        }),

    // .middleware(async ({ req }) => {
    //   const auth = getAuth(req);
    //   if (!auth.userId) throw new Error("Unauthorized");

    //   return { userId: auth.userId };
    // })
    // .onUploadComplete(async ({ metadata, file }) => {
    //     return { uploadedBy: metadata.userId, url: file.ufsUrl };
    //   }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;


