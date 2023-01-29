import { prismaClient } from "../../../database/client-prisma";

class CreateService{
    async handle(title: string, url: string, describe: string) {
        
        const videoCreated = await prismaClient.video.create({
            data: {
              title: title,
              url: url,
              describe: describe,
            },
          });

         return videoCreated
   }
}

export default new CreateService