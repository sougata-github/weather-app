import supabase from "../supabase/supabaseClient";

export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) throw error;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) throw error || new Error("No user found");

  return {
    id: data.user.id,
    email: data.user.email,
    name: data.user.user_metadata.full_name,
    avatar: data.user.user_metadata.avatar_url,
  };
}
