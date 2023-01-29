import { prismaClient } from "../../../database/client-prisma";

class DeleteService{
     async handle( id : string) {
        const commentDeleted = await prismaClient.comment.delete({
            where:{
              id: id
            }
          });

        return commentDeleted
    }
}

export default new DeleteService