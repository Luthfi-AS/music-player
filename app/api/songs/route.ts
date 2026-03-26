import { NextRequest, NextResponse } from "next/server";
import { songsDB } from "@/lib/db";
import { Song } from "@/types";

// GET All Songs
export async function GET() {
  return NextResponse.json({
    status: "success",
    message: "Berhasil mengambil daftar lagu",
    data: songsDB,
  });
}

// POST New Song
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newSong: Song = {
      id: Date.now().toString(),
      title: body.title,
      artist: body.artist,
      album: body.album || "Unknown",
      duration: body.duration || 0,
    };
    songsDB.push(newSong);

    return NextResponse.json(
      {
        status: "success",
        message: "Lagu berhasil ditambahkan",
        data: newSong,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Data tidak valid" },
      { status: 400 },
    );
  }
}
