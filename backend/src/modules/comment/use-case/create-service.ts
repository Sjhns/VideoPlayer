import { prismaClient } from "../../../database/client-prisma";


class CreateService{
     async handle(text: string, videoID: string) {
        const commentCreated = await prismaClient.comment.create({
            data: {
              text: text,
              videoId: videoID,
            },
          });

          return commentCreated
    }
}

export default new CreateService