import { prismaClient } from "../../../database/client-prisma";


class GetService{
    async one(id: string) {
        
        const video = await prismaClient.video.findFirst({
            where:{
              id: id
            },
            include: {
              comments: {
                select: {
                  id: true,
                  text: true,
                  createdAt: true,
                  updatedAt: true,
        
                  },
                },
              }
            });
        

         return video
   }
}

export default new GetService