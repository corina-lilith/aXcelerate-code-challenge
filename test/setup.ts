import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";

// attach React Testing Library test matchers to Vitest
expect.extend(matchers);

// tidy up between tests
afterEach(() => {
  cleanup();
});
