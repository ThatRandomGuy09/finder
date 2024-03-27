"use server";

import { Room, room } from "@/db/schema";
import { db } from "@/db";

export async function createRoomAction(roomData: Omit<Room, "userId">) {
  await db.insert(room).values({ ...roomData, userId: "TODO" });
}
