import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

export function useRepro() {
  const mutation = useMutation({
    mutationFn: async () => alert("this did something"),
  });

  const { mutate: renamedMutate } = useMutation({
    mutationFn: async () => alert("this did something else"),
  });

  useEffect(() => {
    mutation.mutate();
    renamedMutate();
  }, []);
}
