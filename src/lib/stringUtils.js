export function toStringLowerCase(input) {
  // Remove spaces and convert to lowercase

  if (typeof input !== "string") {
    return "error";
  }
  return input.replace(/\s+/g, "").toLowerCase();
}
