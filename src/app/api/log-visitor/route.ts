import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const { day } = await req.json();

  const { data, error } = await supabase
    .from("visitors")
    .select("views")
    .eq("day", day)
    .single();

  if (error && error.code !== "PGRST116") {
    // Bukan error "no rows", jadi gagal
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (data) {
    // Sudah ada, update
    const { error: updateError } = await supabase
      .from("visitors")
      .update({ views: data.views + 1 })
      .eq("day", day);

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }
  } else {
    // Belum ada, insert
    const { error: insertError } = await supabase
      .from("visitors")
      .insert([{ day, views: 1 }]);

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
}
