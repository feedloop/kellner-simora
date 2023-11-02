function toKebabCase(input: string): string {
  return input
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert camelCase to kebab-case
    .replace(/_/g, '-') // Replace underscores with -
    .toLowerCase(); // Convert the whole string to lowercase
}

export default toKebabCase;
