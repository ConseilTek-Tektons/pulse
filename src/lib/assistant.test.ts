import { describe, expect, it } from "vitest";
import { knowledgeArticles } from "../data/knowledge";
import { buildLocalAnswer, retrieveLocalKnowledge } from "./assistant";

describe("Pulse local knowledge retrieval", () => {
  it("prioritises the relevant operating article", () => {
    const [match] = retrieveLocalKnowledge("Explain anonymous operating policy", knowledgeArticles);
    expect(match?.id).toBe("anonymity");
  });
  it("does not invent an unsupported answer", () => {
    const result = buildLocalAnswer("How do I configure an unrelated orbital engine?", knowledgeArticles);
    expect(result.citations).toHaveLength(0);
    expect(result.answer).toContain("could not find");
  });
});
