import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { getCurrentUser, signInWithGoogle, signOut } from "../api/auth";

export function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: true,
  });

  return {
    user,
    isLoading,
    error,
    isAuthenticated: !!user,
  };
}

export function useSignIn() {
  return useMutation({
    mutationFn: signInWithGoogle,
    onSuccess: () => {
      toast.success("Welcome to Supa Weather");
    },
    onError: () => {
      toast.error("Failed to sign in");
    },
  });
}

export function useSignOut() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
      toast.success("Logged out successfully");
    },
    onError: () => {
      toast.error("Failed to sign out");
    },
  });
}
