import { NextResponse } from "next/server";
import { songsDB } from "@/lib/db";
import { Song, ApiResponse } from "@/types";

// Helper untuk mencari index lagu
const findSongIndex = (id: string) =>
  songsDB.findIndex((song) => song.id === id);

// GET: Mengambil satu lagu berdasarkan ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const song = songsDB.find((s) => s.id === params.id);

  if (!song) {
    return NextResponse.json(
      { status: "error", message: "Lagu tidak ditemukan" },
      { status: 404 },
    );
  }

  return NextResponse.json(
    {
      status: "success",
      message: "Lagu ditemukan",
      data: song,
    },
    { status: 200 },
  );
}

// PUT: Memperbarui data lagu
export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const index = findSongIndex(params.id);

  if (index === -1) {
    return NextResponse.json(
      { status: "error", message: "Lagu tidak ditemukan" },
      { status: 404 },
    );
  }

  try {
    const body = await request.json();

    // Update data (hanya update field yang dikirim)
    songsDB[index] = { ...songsDB[index], ...body, id: params.id };

    return NextResponse.json(
      {
        status: "success",
        message: "Lagu berhasil diperbarui",
        data: songsDB[index],
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Format data tidak valid" },
      { status: 400 },
    );
  }
}

// DELETE: Menghapus lagu
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const index = findSongIndex(params.id);

  if (index === -1) {
    return NextResponse.json(
      { status: "error", message: "Lagu tidak ditemukan" },
      { status: 404 },
    );
  }

  songsDB.splice(index, 1);

  return NextResponse.json(
    {
      status: "success",
      message: "Lagu berhasil dihapus",
    },
    { status: 200 },
  );
}
