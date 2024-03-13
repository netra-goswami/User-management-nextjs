export async function apiRequest<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data?: any
): Promise<T> {
  try {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json", // Assuming JSON data
        // Add any additional headers if needed
      },
      body: data ? JSON.stringify(data) : undefined,
    };

    const response = await fetch(url, options);
    const responseData: T = await response.json();

    if (!response.ok) {
      let errorMessage: any = "Something went wrong";
      if (
        responseData &&
        typeof responseData === "object" &&
        "message" in responseData
      ) {
        errorMessage = responseData.message;
      }
      throw new Error(errorMessage);
    }

    return responseData;
  } catch (error: any) {
    console.error("API request failed:", error.message);
    throw error;
  }
}
