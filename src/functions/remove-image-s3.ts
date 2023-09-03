import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { S3_BUCKET } from "@components/constants/environment";
import { bucketS3 } from "@components/constants/s3-bucket";

export const removeImageS3 = async (imageUrl: string) => {
    const params = {
        Bucket: S3_BUCKET,
        Key: `produtos/` + imageUrl.split("/produtos/")[1],
    };

    try {
        await bucketS3.send(new DeleteObjectCommand(params));
        console.log("SUCCESS");
        return 'Removido do s3';
    } catch (error: any) {
        throw Error(error.message)
    }
}
