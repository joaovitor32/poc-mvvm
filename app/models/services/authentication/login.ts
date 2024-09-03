export const login = async (): Promise<{ message: string; status: number }> => {
  try {
    return { message: "Login completed!", status: 200 };
  } catch (error) {
    console.error("Fetch error:", error);
    return { message: "Fetch error occurred", status: 500 };
  }
};
