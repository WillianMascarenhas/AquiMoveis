import { AppDataSource } from "../../data-source";
import { Furniture } from "../../entities/furniture.entity";
import { IFurnituresResponse, TFurniturePagination } from "../../interfaces/furniture.interface";
import { furnituresResponseSchema } from "../../schemas/furniture.schema";

export const retrieveFurnitureService = async (
  queryReq: any
): Promise<TFurniturePagination> => {
  const furnitureRepository = AppDataSource.getRepository(Furniture);
  const page = Number(queryReq.page);
  const perPage = Number(queryReq.perPage);

  let listFurniture: Furniture[] | undefined;

  if (queryReq.type) {
    const query = queryReq.type.toUpperCase();
    if (page || perPage) {
      listFurniture = await furnitureRepository.find({
        skip: (page - 1) * perPage,
        take: perPage,
        where: {
          type: query,
        },
        relations: ["furnitureImages"],
      });
      const verify = furnituresResponseSchema.parse(listFurniture);
      return {
        page: page || null,
        perPage: perPage || null,
        data: verify
      } 
    } else {
      listFurniture = await furnitureRepository.find({
        where: {
          type: query,
        },
        relations: ["furnitureImages"],
      });
      const verify = furnituresResponseSchema.parse(listFurniture);
      return {
        page: page || null,
        perPage: perPage || null,
        data: verify
      } 
    }
  }
  if (page || perPage) {
    listFurniture = await furnitureRepository.find({
      skip: (page - 1) * perPage,
      take: perPage,
      relations: ["furnitureImages"],
    });

    const verify = furnituresResponseSchema.parse(listFurniture);
    return {
      page: page || null,
      perPage: perPage || null,
      data: verify
    } 
  } else {
    listFurniture = await furnitureRepository.find({
      relations: ["furnitureImages"],
    });

    const verify = furnituresResponseSchema.parse(listFurniture);
    return {
      page: page || null,
      perPage: perPage || null,
      data: verify
    } 
  }
};
