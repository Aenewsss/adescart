import { ACCESS_KEY_ID, PRIVATE_KEY, S3_BUCKET } from "./environment";

export const configS3 = {
    bucketName: S3_BUCKET,
    dirName: 'wines',
    region: process.env.NEXT_PUBLIC_S3_REGION,
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: PRIVATE_KEY,
}
