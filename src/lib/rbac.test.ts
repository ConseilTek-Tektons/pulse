import { describe, expect, it } from "vitest";
import { hasPermission, resolveRolesFromClaims } from "./rbac";

describe("Pulse RBAC", () => {
  it("grants wildcard permissions to administrators", () => expect(hasPermission(["admin"], "settings.manage")).toBe(true));
  it("keeps access policy away from operators", () => expect(hasPermission(["researcher"], "access.manage")).toBe(false));
  it("maps identity groups", () => expect(resolveRolesFromClaims({ groups: ["pulse-managers"] })).toEqual(["research_admin"]));
});
