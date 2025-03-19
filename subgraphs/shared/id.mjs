/**
 * Encodes a type and local ID into a global ID
 * @param {string} type - The type of the entity (e.g., "Person", "Story")
 * @param {string} localID - The local ID of the entity
 * @returns {string} Base64 encoded global ID
 */
export function encodeGlobalID(type, localID) {
  return Buffer.from(`${type}:${localID}`).toString("base64");
}

/**
 * Decodes a global ID into its type and local ID components
 * @param {string} globalID - The base64 encoded global ID
 * @returns {{ type: string, localID: string }} Object containing type and local ID
 */
export function decodeGlobalID(globalID) {
  const decoded = Buffer.from(globalID, "base64").toString("utf-8");
  const [type, localID] = decoded.split(":");
  return { type, localID };
}