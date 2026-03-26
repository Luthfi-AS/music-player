import { NextRequest, NextResponse } from "next/server";
import { songsDB } from "@/lib/db";

// Definisi tipe params sebagai Promise (Wajib di Next.js 15/16)
type RouteContext = {
  params: Promise<{ id: string }>;
};

// GET Detail
export async function GET(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const song = songsDB.find((s) => s.id === id);

  if (!song) {
    return NextResponse.json(
      { status: "error", message: "Lagu tidak ditemukan" },
      { status: 404 },
    );
  }

  return NextResponse.json({
    status: "success",
    message: "Lagu ditemukan",
    data: song,
  });
}

// PUT Update
export async function PUT(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const index = songsDB.findIndex((s) => s.id === id);

  if (index === -1) {
    return NextResponse.json(
      { status: "error", message: "Lagu tidak ditemukan" },
      { status: 404 },
    );
  }

  try {
    const body = await request.json();
    songsDB[index] = { ...songsDB[index], ...body, id };

    return NextResponse.json({
      status: "success",
      message: "Lagu berhasil diperbarui",
      data: songsDB[index],
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Format data tidak valid" },
      { status: 400 },
    );
  }
}

// DELETE
export async function DELETE(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const index = songsDB.findIndex((s) => s.id === id);

  if (index === -1) {
    return NextResponse.json(
      { status: "error", message: "Lagu tidak ditemukan" },
      { status: 404 },
    );
  }

  songsDB.splice(index, 1);
  return NextResponse.json({
    status: "success",
    message: "Lagu berhasil dihapus",
  });
}
