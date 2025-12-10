export async function getRecipeFromChefClaude(ingredientsArr) {
  const response = await fetch("/api/chef", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: ingredientsArr }),
  });

  if (!response.ok) {
    throw new Error("Failed to get recipe from server");
  }

  const data = await response.json();
  return data.recipe;
}
