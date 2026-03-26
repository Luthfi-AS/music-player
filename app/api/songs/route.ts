import { NextResponse } from "next/server";
import { songsDB } from "@/lib/db";
import { Song, ApiResponse } from "@/types";

// GET: Mengambil semua lagu
export async function GET() {
  const response: ApiResponse<Song[]> = {
    status: "success",
    message: "Berhasil mengambil daftar lagu",
    data: songsDB,
  };
  return NextResponse.json(response, { status: 200 });
}

// POST: Menambah lagu baru
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validasi sederhana
    if (!body.title || !body.artist) {
      return NextResponse.json(
        { status: "error", message: "Title dan Artist wajib diisi" },
        { status: 400 },
      );
    }

    const newSong: Song = {
      id: Date.now().toString(), // Generate ID sederhana
      title: body.title,
      artist: body.artist,
      album: body.album || "Unknown Album",
      duration: body.duration || 0,
    };

    songsDB.push(newSong);

    const response: ApiResponse<Song> = {
      status: "success",
      message: "Lagu berhasil ditambahkan",
      data: newSong,
    };
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Format data tidak valid" },
      { status: 400 },
    );
  }
}
